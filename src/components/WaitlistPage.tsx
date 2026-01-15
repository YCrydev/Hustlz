import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, Users, Briefcase, ArrowRight, Star, Loader2 } from 'lucide-react';
import { Button } from './ui/Button';
import { addToWaitlist, getWaitlistCount } from '../lib/supabase';

const categories = [
  { icon: '🧵', label: 'Tailors & Fashion' },
  { icon: '💻', label: 'Tech & Design' },
  { icon: '🔧', label: 'Artisans & Trades' },
  { icon: '🍚', label: 'Food & Catering' },
  { icon: '📸', label: 'Creatives' },
  { icon: '🚗', label: 'Auto & Transport' },
];


export function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<'talent' | 'client' | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [waitlistCount, setWaitlistCount] = useState(2500);

  // Fetch current waitlist count on load
  useEffect(() => {
    async function fetchCount() {
      const count = await getWaitlistCount();
      if (count > 0) {
        setWaitlistCount(count + 2500); // Add base number for social proof
      }
    }
    fetchCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !userType) return;

    setLoading(true);
    setError(null);

    const result = await addToWaitlist(email, userType);

    setLoading(false);

    if (result.success) {
      setSubmitted(true);
      setWaitlistCount(prev => prev + 1);
    } else {
      setError(result.error || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 font-sans text-gray-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-coral-500 p-1.5 rounded-lg text-white transform -rotate-6 shadow-lg shadow-coral-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-gray-900">Hustl</span>
                <span className="text-coral-500 font-handwriting text-2xl">z</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-sm text-gray-500">Coming Soon</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sage-100 text-sage-700">
                🇳🇬 Nigeria
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-coral-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-sage-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-coral-100 text-coral-600 text-sm font-semibold mb-6 border border-coral-200">
              ✨ Launching Soon in Nigeria
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Find work that'll <br />
              <span className="text-coral-500 font-handwriting relative inline-block transform -rotate-2 text-5xl sm:text-6xl md:text-7xl">
                make you chop life
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-sage-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              The marketplace connecting Nigerian talent with opportunities.
              From tailors to tech—everyone deserves work that pays.
            </p>

            {/* Waitlist Form */}
            {!submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-cream-200 max-w-lg mx-auto"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Join the Waitlist</h3>
                <p className="text-gray-500 text-sm mb-6">Be the first to know when we launch</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* User Type Selection */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setUserType('talent')}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        userType === 'talent'
                          ? 'border-coral-500 bg-coral-50'
                          : 'border-cream-300 hover:border-coral-300'
                      }`}
                    >
                      <Users className={`w-6 h-6 mx-auto mb-2 ${userType === 'talent' ? 'text-coral-500' : 'text-gray-400'}`} />
                      <p className={`font-semibold text-sm ${userType === 'talent' ? 'text-coral-600' : 'text-gray-700'}`}>
                        I have skills
                      </p>
                      <p className="text-xs text-gray-500">Find work & clients</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType('client')}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        userType === 'client'
                          ? 'border-sage-500 bg-sage-50'
                          : 'border-cream-300 hover:border-sage-300'
                      }`}
                    >
                      <Briefcase className={`w-6 h-6 mx-auto mb-2 ${userType === 'client' ? 'text-sage-600' : 'text-gray-400'}`} />
                      <p className={`font-semibold text-sm ${userType === 'client' ? 'text-sage-700' : 'text-gray-700'}`}>
                        I need talent
                      </p>
                      <p className="text-xs text-gray-500">Hire skilled people</p>
                    </button>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      disabled={loading}
                      className="w-full h-14 pl-5 pr-32 rounded-xl border-2 border-cream-300 focus:border-coral-400 focus:ring-4 focus:ring-coral-100 outline-none transition-all text-base disabled:bg-gray-50"
                    />
                    <button
                      type="submit"
                      disabled={!userType || loading}
                      className="absolute right-2 top-2 h-10 px-5 bg-coral-500 rounded-lg text-white font-semibold hover:bg-coral-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        <>
                          Join
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <p className="text-sm text-red-500 text-center bg-red-50 p-2 rounded-lg">
                      {error}
                    </p>
                  )}
                </form>

                <p className="text-xs text-gray-400 mt-4">
                  🔒 No spam, ever. We'll only email you when we launch.
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-cream-200 max-w-lg mx-auto text-center"
              >
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list! 🎉</h3>
                <p className="text-gray-600 mb-4">
                  We'll notify you at <span className="font-semibold text-coral-500">{email}</span> when Hustlz launches.
                </p>
                <p className="text-sm text-gray-500">
                  Share with friends and move up the waitlist!
                </p>
              </motion.div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl font-bold text-coral-500 font-handwriting">
                  {waitlistCount.toLocaleString()}+
                </p>
                <p className="text-xs text-gray-500">Already on waitlist</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl font-bold text-coral-500 font-handwriting">50+</p>
                <p className="text-xs text-gray-500">Categories</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl font-bold text-coral-500 font-handwriting">36</p>
                <p className="text-xs text-gray-500">States covered</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Every kind of hustle welcome
            </h2>
            <p className="text-gray-500">From traditional crafts to modern tech</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-cream-50 rounded-2xl p-4 text-center border border-cream-200 hover:border-coral-300 hover:shadow-md transition-all cursor-pointer group"
              >
                <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">{cat.icon}</span>
                <p className="text-xs font-medium text-gray-700">{cat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl sm:text-2xl font-medium text-gray-800 mb-6 max-w-2xl mx-auto">
              "Finally, a platform that understands Nigerian hustle. 
              Can't wait to connect with real opportunities!"
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80"
                alt="Early supporter"
                className="w-12 h-12 rounded-full object-cover border-2 border-white"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-900">Olumide Adesanya</p>
                <p className="text-sm text-gray-500">Software Developer, Lagos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-coral-500 p-1 rounded-lg text-white transform -rotate-6">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold">
                <span className="text-gray-900">Hustl</span>
                <span className="text-coral-500 font-handwriting text-xl">z</span>
              </span>
            </div>
            <p className="text-sm text-gray-500">© 2024 Hustlz Nigeria. Made with ❤️ in Lagos.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

