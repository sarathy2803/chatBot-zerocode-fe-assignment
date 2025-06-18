// Importing the 'create' function from the Zustand library to create a global state store.
import { create } from 'zustand';

// Importing the 'ChatState' type, which defines the shape of the chat state.
import { ChatState } from '../types/chat';

// Creating a Zustand store using the `create` function. The store's state conforms to the 'ChatState' type.
export const useChatStore = create<ChatState>((set) => ({
  // Initial state: Empty array to store chat messages.
  messages: [],

  // Boolean state: Tracks if the assistant is currently typing a response.
  isTyping: false,

  // Boolean state: Tracks whether dark mode is enabled.
  isDarkMode: false,

  // Adds a new chat message with given content and role ('user' or 'assistant').
  addMessage: (content: string, role: 'user' | 'assistant') =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: crypto.randomUUID(), // Unique ID for message
          content,
          role,
          timestamp: new Date(), // Timestamp for sorting or display
        },
      ],
    })),

  // Sets the typing indicator state.
  setIsTyping: (typing: boolean) => set({ isTyping: typing }),

  // Clears all chat messages from the state.
  clearMessages: () => set({ messages: [] }),

  // Toggles between dark and light mode.
  toggleDarkMode: () =>
    set((state) => ({
      isDarkMode: !state.isDarkMode,
    })),
}));
