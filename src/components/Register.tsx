import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('Registration successful');
    navigate('/login');
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (

    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg')" }}
    >

    <div className="p-4 max-w-md mx-auto mt-20 bg-white shadow rounded">
      <h2 className="text-xl mb-4 font-semibold text-center">Register</h2>
      <form onSubmit={handleRegister}>
        <input
          className="block w-full mb-2 mt-2 p-2 border"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="block w-full mb-4 p-2 border"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          Submit
        </button>
        <button
          className="bg-green-500 m-2 text-white px-4 py-2 rounded"
          type="button"
          onClick={handleLoginRedirect}
        >
          Already have an account?
        </button>
      </form>
    </div>
    </div>
  );
};

export default Register;
