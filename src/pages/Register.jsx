import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // بعداً به API واقعی وصل می‌شه
    if (name && email && password) {
      // ثبت‌نام موقت
      localStorage.setItem('token', 'fake-token-12345');
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          ثبت‌نام
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">نام و نام خانوادگی</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">ایمیل</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">رمز عبور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-primary-dark font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            ثبت‌نام
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          قبلاً ثبت‌نام کرده‌اید؟
          <Link to="/login" className="text-accent mr-1 hover:underline">
            ورود
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;