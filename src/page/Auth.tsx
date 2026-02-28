import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react';
import axios from 'axios';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        const response = await axios.post('https://task-api-eight-flax.vercel.app/api/login', {
          email: formData.email,
          password: formData.password
        });
        
        login(response.data); 
        navigate('/dashboard');
      } else {
        
        console.log("Registering:", formData);
        setIsLogin(true);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Authentication failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F3F4F6] p-4">
      <div className="w-full max-auto max-w-[450px]">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-[#064E3B] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#064E3B]/20">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">
            {isLogin ? 'Welcome back to Donezo' : 'Create your account'}
          </h3>
          <p className="text-gray-500 mt-2">
            {isLogin ? 'Enter your details to access your dashboard' : 'Start managing your projects with ease'}
          </p>
        </div>
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl border border-red-100">
                {error}
              </div>
            )}

            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 transition-all"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  required
                  placeholder="user1@example.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 transition-all"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                {isLogin && <button type="button" className="text-xs font-bold text-[#064E3B] hover:underline">Forgot?</button>}
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 transition-all"
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#064E3B] hover:bg-[#043d2e] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#064E3B]/20 transition-all flex items-center justify-center gap-2 group"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  {isLogin ? 'Sign In' : 'Create Account'}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#064E3B] font-bold hover:underline"
              >
                {isLogin ? 'Create Account' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;