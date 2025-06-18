import { useChatStore } from '../store/chatStore';

const PromptHistorySidebar = () => {
  const { messages } = useChatStore();
  const userMessages = messages.filter((msg) => msg.role === 'user').slice(-10).reverse();

  return (
    <div className="w-64 bg-gray-200 dark:bg-gray-800 p-4 h-screen overflow-y-auto">
      <h2 className="text-md font-semibold mb-2 text-gray-700 dark:text-white">Recent Prompts</h2>
      <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
        {userMessages.map((msg, idx) => (
          <li key={idx} className="truncate border-b border-gray-300 dark:border-gray-600 pb-1">
            {msg.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromptHistorySidebar;
