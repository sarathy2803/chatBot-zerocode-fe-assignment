import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { User } from 'lucide-react';

const ProfileMenu = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <button
      className="flex items-center space-x-2 me-40 mt-2 text-sm text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded absolute top-4 right-4" style={{ backgroundImage: "url('')" }}
      onClick={handleLogout}
    >
      <User size={16} />
      
    </button>
  );
};

export default ProfileMenu;
