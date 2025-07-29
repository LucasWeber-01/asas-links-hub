import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface BannerCardProps {
  id: string;
  title: string;
  imageUrl: string;
  externalUrl?: string;
  onClick?: () => void;
}

export const BannerCard: React.FC<BannerCardProps> = ({
  title,
  imageUrl,
  externalUrl,
  onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (externalUrl) {
      window.open(externalUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card className="bg-gradient-to-br from-background/50 to-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl rounded-2xl overflow-hidden cursor-pointer group animate-fade-in-up shadow-lg hover:shadow-primary/20">
      <div 
        onClick={handleClick}
        className="relative h-36 sm:h-44 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 group-hover:via-black/10 transition-all duration-300" />
        
        {/* Title sempre visível */}
        <div className="absolute top-4 left-4 right-4">
          <h3 className="text-white text-lg sm:text-xl font-bold drop-shadow-2xl leading-tight">
            {title}
          </h3>
        </div>

        {/* Button só no hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Button 
            variant="banner"
            size="sm"
            className="bg-white/95 hover:bg-white text-primary border-2 border-primary/20 hover:border-primary shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 font-semibold backdrop-blur-sm"
          >
            Saiba mais
            <ExternalLink size={16} className="ml-2" />
          </Button>
        </div>

        {/* Gradient overlay para melhor legibilidade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
    </Card>
  );
};