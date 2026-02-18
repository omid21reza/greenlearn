import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // موقتاً هر چیزی وارد کنی، لاگین می‌کنه
    if (email && password) {
      localStorage.setItem('token', 'fake-token-12345');
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          ورود
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            ورود
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          حساب کاربری ندارید؟
          <Link to="/register" className="text-accent mr-1 hover:underline">
            ثبت‌نام
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;