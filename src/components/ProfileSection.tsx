import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Edit3, Camera, Save, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProfileData {
  name: string;
  bio: string;
  tagline: string;
  profileImage: string;
}

interface ProfileSectionProps {
  profileData: ProfileData;
  onProfileUpdate: (data: ProfileData) => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  profileData,
  onProfileUpdate
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(profileData);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setEditData(prev => ({ ...prev, profileImage: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (editData.name.length > 50) {
      toast({
        title: "Erro",
        description: "O nome deve ter no máximo 50 caracteres.",
        variant: "destructive"
      });
      return;
    }
    if (editData.bio.length > 200) {
      toast({
        title: "Erro", 
        description: "A bio deve ter no máximo 200 caracteres.",
        variant: "destructive"
      });
      return;
    }
    if (editData.tagline.length > 100) {
      toast({
        title: "Erro",
        description: "O tagline deve ter no máximo 100 caracteres.",
        variant: "destructive"
      });
      return;
    }

    onProfileUpdate(editData);
    setIsEditing(false);
    toast({
      title: "Sucesso",
      description: "Perfil atualizado com sucesso!"
    });
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  return (
    <Card className="bg-profile-bg shadow-soft rounded-lg p-6 mb-6 animate-fade-in-up">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <Avatar className="w-24 h-24 ring-4 ring-primary/20">
            <AvatarImage src={editData.profileImage} alt={editData.name} />
            <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
              {editData.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          {isEditing && (
            <label className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer hover:scale-110 transition-transform">
              <Camera size={16} />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          )}
        </div>

        {isEditing ? (
          <div className="w-full max-w-md space-y-4">
            <div>
              <Input
                value={editData.name}
                onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Seu nome"
                maxLength={50}
                className="text-center"
              />
              <p className="text-xs text-muted-foreground mt-1 text-center">
                {editData.name.length}/50 caracteres
              </p>
            </div>
            
            <div>
              <Input
                value={editData.tagline}
                onChange={(e) => setEditData(prev => ({ ...prev, tagline: e.target.value }))}
                placeholder="Seu tagline"
                maxLength={100}
                className="text-center"
              />
              <p className="text-xs text-muted-foreground mt-1 text-center">
                {editData.tagline.length}/100 caracteres
              </p>
            </div>

            <div>
              <Textarea
                value={editData.bio}
                onChange={(e) => setEditData(prev => ({ ...prev, bio: e.target.value }))}
                placeholder="Sua bio"
                maxLength={200}
                className="text-center resize-none"
                rows={3}
              />
              <p className="text-xs text-muted-foreground mt-1 text-center">
                {editData.bio.length}/200 caracteres
              </p>
            </div>

            <div className="flex space-x-2">
              <Button onClick={handleSave} className="flex-1" variant="default">
                <Save size={16} className="mr-2" />
                Salvar
              </Button>
              <Button onClick={handleCancel} variant="outline" className="flex-1">
                <X size={16} className="mr-2" />
                Cancelar
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-3">
            <h1 className="text-2xl font-bold text-foreground">{profileData.name}</h1>
            {profileData.tagline && (
              <p className="text-lg text-accent font-medium">{profileData.tagline}</p>
            )}
            {profileData.bio && (
              <p className="text-muted-foreground max-w-md">{profileData.bio}</p>
            )}
            <Button
              onClick={() => setIsEditing(true)}
              variant="outline"
              size="sm"
              className="mt-4"
            >
              <Edit3 size={16} className="mr-2" />
              Editar Perfil
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};