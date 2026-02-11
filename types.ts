export interface SlideContent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string; // URL for background
  align: 'left' | 'right' | 'center';
  theme: 'dark' | 'light';
  cta?: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model',
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
}

export interface ChatState {
  isOpen: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
}