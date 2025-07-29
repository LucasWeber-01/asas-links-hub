import React from 'react';
import { Card } from '@/components/ui/card';

export const Header: React.FC = () => {
  return (
    <Card className="bg-gradient-primary shadow-soft rounded-lg p-6 mb-6 text-center animate-fade-in-up">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
          Ecossistema ASAS
        </h1>
        <p className="text-primary-foreground/90 text-lg">
          Transformando vidas através do desenvolvimento pessoal
        </p>
      </div>
    </Card>
  );
};