// components/ThemeToggle.tsx
import { useChatStore } from '../store/chatStore';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useChatStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      title="Toggle Theme"
    >
      {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-600" />}
    </button>
  );
}

export default ThemeToggle;
