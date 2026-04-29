import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, User, Lock, ArrowRight } from 'lucide-react';
import LanguageSwitcher from '@/components/language/LanguageSwitcher';
import logoImage from '@/assets/logo.png';

export default function LoginPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('user'); // 'user' or 'validator'
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }
    // Mock authentication
    if (activeTab === 'user') {
      navigate('/selection');
    } else {
      navigate('/teacher-validation'); // Fallback to existing or new view
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute right-4 top-4 z-20">
        <LanguageSwitcher />
      </div>

      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-surface-card rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary-400/20 rounded-full blur-[100px]" />

      <div className="w-full max-w-md z-10 animate-slide-up">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white border border-surface-border p-1 mb-4 shadow-glow-primary overflow-hidden">
            <img src={logoImage} alt="Pragna Vistara Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-3xl font-display font-bold text-surface-text mb-2">Pragna Vistara</h1>
          <p className="text-surface-muted">Sign in to your learning platform</p>
        </div>

        <div className="glass p-8 relative">
          {/* Tabs */}
          <div className="flex bg-surface-card rounded-lg p-1 mb-6 border border-surface-border">
            <button
              onClick={() => setActiveTab('user')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'user'
                  ? 'bg-primary-500 text-white shadow'
                  : 'text-surface-muted hover:text-surface-text'
              }`}
            >
              <User size={16} /> Student
            </button>
            <button
              onClick={() => setActiveTab('validator')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'validator'
                  ? 'bg-secondary-400 text-surface-text shadow'
                  : 'text-surface-muted hover:text-surface-text'
              }`}
            >
              <Shield size={16} /> Validator
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-surface-muted mb-1 ml-1">
                Username or Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-surface-muted">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  name="username"
                  className="input pl-10"
                  placeholder={activeTab === 'user' ? "student@example.com" : "validator@example.com"}
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1 ml-1">
                <label className="block text-sm font-medium text-surface-muted">
                  Password
                </label>
                <a href="#" className="text-xs text-primary-500 hover:text-primary-500 transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-surface-muted">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  name="password"
                  className="input pl-10"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {error && (
              <div className="text-accent-rose text-sm text-center bg-accent-rose/10 py-2 rounded-lg border border-accent-rose/20 animate-fade-in">
                {error}
              </div>
            )}

            <button type="submit" className="btn-primary w-full mt-6 group">
              Login as {activeTab === 'user' ? 'Student' : 'Validator'}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          
          {activeTab === 'user' && (
             <div className="mt-6 text-center text-sm text-surface-muted">
              Don't have an account? <a href="#" className="text-primary-500 hover:text-primary-500 font-medium">Sign up</a>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
