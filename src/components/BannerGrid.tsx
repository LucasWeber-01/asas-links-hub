import React from 'react';
import { BannerCard } from './BannerCard';

// Import banner images
import imperioBanner from '@/assets/imperio-banner.jpg';
import jornadaBanner from '@/assets/jornada-banner.jpg';
import legadoBanner from '@/assets/legado-banner.jpg';
import eneagramaBanner from '@/assets/eneagrama-banner.jpg';
import churrascoBanner from '@/assets/churrasco-banner.jpg';
import asasBanner from '@/assets/asas-banner.jpg';
import destraBanner from '@/assets/destra-banner.jpg';
import whatsappBanner from '@/assets/whatsapp-banner.jpg';

interface Banner {
  id: string;
  title: string;
  imageUrl: string;
  externalUrl: string;
}

const defaultBanners: Banner[] = [
  {
    id: 'imperio',
    title: 'Império',
    imageUrl: imperioBanner,
    externalUrl: 'https://exemplo.com/imperio'
  },
  {
    id: 'jornada',
    title: 'Jornada',
    imageUrl: jornadaBanner,
    externalUrl: 'https://exemplo.com/jornada'
  },
  {
    id: 'legado',
    title: 'Legado',
    imageUrl: legadoBanner,
    externalUrl: 'https://exemplo.com/legado'
  },
  {
    id: 'eneagrama',
    title: 'Eneagrama',
    imageUrl: eneagramaBanner,
    externalUrl: 'https://exemplo.com/eneagrama'
  },
  {
    id: 'churrasco',
    title: 'Churrasco de Negócios',
    imageUrl: churrascoBanner,
    externalUrl: 'https://exemplo.com/churrasco'
  },
  {
    id: 'asas',
    title: 'Com ASAS',
    imageUrl: asasBanner,
    externalUrl: 'https://exemplo.com/asas'
  },
  {
    id: 'destra',
    title: 'Destra',
    imageUrl: destraBanner,
    externalUrl: 'https://exemplo.com/destra'
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    imageUrl: whatsappBanner,
    externalUrl: 'https://wa.me/5511999999999'
  }
];

interface BannerGridProps {
  banners?: Banner[];
}

export const BannerGrid: React.FC<BannerGridProps> = ({
  banners = defaultBanners
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <BannerCard
            id={banner.id}
            title={banner.title}
            imageUrl={banner.imageUrl}
            externalUrl={banner.externalUrl}
          />
        </div>
      ))}
    </div>
  );
};