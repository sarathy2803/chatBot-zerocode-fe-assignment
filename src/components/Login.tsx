import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser.email === email && storedUser.password === password) {
      login();
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/10/29/01/40/abstract-1779625_1280.png')" }}
    >
      <div className="p-6 max-w-md w-full bg-white bg-opacity-90 shadow-lg rounded" style={{ borderRadius : 10 }}>
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            className="block w-full mb-3 p-2 border rounded"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="block w-full mb-4 p-2 border rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
            type="submit"
          >
            Login
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full mt-3"
            type="button"
            onClick={handleRegisterRedirect}
          >
            Don't have an account?
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
