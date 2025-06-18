// types/chat.ts
export type ChatMessage = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

export type ChatState = {
  messages: ChatMessage[];
  isTyping: boolean;
  isDarkMode: boolean;
  addMessage: (content: string, role: 'user' | 'assistant') => void;
  setIsTyping: (typing: boolean) => void;
  clearMessages: () => void;
  toggleDarkMode: () => void;
};
