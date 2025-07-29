import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { ProfileSection } from '@/components/ProfileSection';
import { BannerGrid } from '@/components/BannerGrid';
import { Footer } from '@/components/Footer';

interface ProfileData {
  name: string;
  bio: string;
  tagline: string;
  profileImage: string;
}

const Index = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Ecossistema ASAS',
    bio: 'Bem-vindo ao seu espaço de desenvolvimento pessoal e transformação. Aqui você encontra todas as ferramentas e recursos para evoluir em sua jornada.',
    tagline: 'Transformando vidas através do autoconhecimento',
    profileImage: ''
  });

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('asas-profile');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setProfileData(parsed);
      } catch (error) {
        console.error('Error loading profile data:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever profileData changes
  useEffect(() => {
    localStorage.setItem('asas-profile', JSON.stringify(profileData));
  }, [profileData]);

  const handleProfileUpdate = (newData: ProfileData) => {
    setProfileData(newData);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <Header />
        
        <ProfileSection 
          profileData={profileData}
          onProfileUpdate={handleProfileUpdate}
        />
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
            Nossos Programas
          </h2>
          <p className="text-muted-foreground text-center mb-6">
            Explore nossos programas de desenvolvimento e transformação pessoal
          </p>
        </div>
        
        <BannerGrid />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
