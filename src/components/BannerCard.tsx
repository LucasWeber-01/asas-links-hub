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
    <Card className="bg-banner-bg hover:bg-banner-hover transition-all duration-200 hover:scale-[1.02] hover:shadow-banner rounded-lg overflow-hidden cursor-pointer group animate-fade-in-up">
      <div 
        onClick={handleClick}
        className="relative h-32 sm:h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-200" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h3 className="text-white text-lg sm:text-xl font-bold drop-shadow-lg mb-2">
              {title}
            </h3>
            <Button 
              variant="secondary"
              size="sm"
              className="bg-white/90 hover:bg-white text-foreground shadow-lg transform group-hover:scale-105 transition-transform duration-200"
            >
              Saiba mais
              <ExternalLink size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};