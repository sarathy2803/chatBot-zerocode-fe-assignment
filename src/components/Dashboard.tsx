import { useEffect, useRef } from 'react';
import { Header } from '../components/Header';
import { ChatMessage } from '../components/ChatMessage';
import { ChatInput } from '../components/ChatInput';
import { TypingIndicator } from '../components/TypingIndicator';
import { useChatStore } from '../store/chatStore';
import { initializeAI, generateResponse } from '../services/ai';
import PromptTemplates from '../components/PromptTemplates';
import PromptHistorySidebar from '../components/PromptHistorySidebar';
import ProfileMenu from '../components/ProfileMenu';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
initializeAI(GEMINI_API_KEY);

function Dashboard() {
  const { messages, isTyping, addMessage, setIsTyping, isDarkMode } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    addMessage(message, 'user');
    setIsTyping(true);

    try {
      const response = await generateResponse(message);
      addMessage(response, 'assistant');
    } catch (error) {
      addMessage('Sorry, I encountered an error. Please try again.', 'assistant');
    } finally {
      setIsTyping(false);
    }
  };

  return (
    
    // Conditionally applying the 'dark' class based on the dark mode state.
    <div className={isDarkMode ? 'dark' : ''}>
      {/* Main container for the app layout */}
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        {/* Sidebar for recent prompts */}
        <PromptHistorySidebar />

        {/* Main content area */}
        <div className="flex flex-col flex-1 relative">
          {/* Profile button in top-right */}
          <ProfileMenu />

          {/* App header */}
          <Header />

          {/* Main content area for chat */}
          <main className="flex-1 overflow-y-auto px-4">
            {/* Default prompt cards */}
            <PromptTemplates onSelect={handleSendMessage} />

            {/* Chat messages */}
            <div className="max-w-4xl mx-auto divide-y dark:divide-gray-700 mt-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          </main>

          {/* Input field to send new messages */}
          <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;