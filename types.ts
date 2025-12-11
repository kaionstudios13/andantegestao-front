import React from 'react';

export interface ActionItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface HighlightItem {
  id: string;
  title: string;
  description: string;
  date?: string;
}

export interface UniverseItem {
  id: string;
  name: string;
  description: string;
  url?: string;
}