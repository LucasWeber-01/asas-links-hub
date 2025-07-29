import React from 'react';
import { Card } from '@/components/ui/card';

export const Footer: React.FC = () => {
  return (
    <Card className="bg-primary text-primary-foreground shadow-soft rounded-lg p-6 mt-8 text-center">
      <div className="space-y-3">
        <p className="text-sm">
          © 2024 Ecossistema ASAS. Todos os direitos reservados.
        </p>
        <p className="text-xs text-primary-foreground/80">
          Desenvolvendo o melhor de cada pessoa através de experiências transformadoras
        </p>
        <div className="flex justify-center items-center space-x-2 text-xs text-primary-foreground/60">
          <span>Feito com</span>
          <span className="text-accent">♥</span>
          <span>para inspirar</span>
        </div>
      </div>
    </Card>
  );
};