import { Sparkles, Landmark, Users, Brain } from 'lucide-react';


const prompts = [
  {
    icon: <Landmark size={20} />,
    text: 'Suggest beautiful places to see on an upcoming road trip',
  },
  {
    icon: <Brain size={20} />,
    text: 'Briefly summarize this concept: urban planning',
  },
  {
    icon: <Users size={20} />,
    text: 'Brainstorm team bonding activities for our work retreat',
  },
  {
    icon: <Sparkles size={20} />,
    text: 'Tell me about React js and React native',
  },
];

const PromptTemplates = ({ onSelect }: { onSelect: (text: string) => void }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
    {prompts.map((prompt, i) => (
      <div
        key={i}
        className="cursor-pointer flex items-start gap-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        onClick={() => onSelect(prompt.text)}
      >
        {prompt.icon}
        <span className="text-sm">{prompt.text}</span>
      </div>
    ))}
  </div>
);

export default PromptTemplates;
