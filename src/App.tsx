import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, Coffee, Heart, ArrowRight, ShieldCheck, Users, Briefcase } from 'lucide-react';
import { Button } from './components/ui/Button';
import { CommunityStats } from './components/CommunityStats';
import { JobCard, JobProps } from './components/JobCard';
import { TalentCard, TalentProps } from './components/TalentCard';
import { TestimonialCard } from './components/TestimonialCard';
// Mock Data
const jobs: JobProps[] = [{
  title: 'Fashion Designer',
  company: 'Deola Sagoe Atelier',
  location: 'Lagos, Nigeria',
  rate: '₦80k-150k/piece',
  type: 'Project',
  tags: ['Fashion', 'Ankara', 'Design'],
  culture: 'We celebrate African fashion. Creativity and craftsmanship matter here.',
  rating: 4.9,
  logo: '👗'
}, {
  title: 'Product Designer',
  company: 'Paystack',
  location: 'Lagos / Remote',
  rate: '₦800k-1.2M/month',
  type: 'Full-time',
  tags: ['UX', 'UI', 'Fintech'],
  culture: 'Building for Africa. We move fast, ship often, and celebrate wins together.',
  rating: 5.0,
  logo: '💳'
}, {
  title: 'Generator Technician',
  company: 'Mikano Motors',
  location: 'Abuja, Nigeria',
  rate: '₦15k-25k/job',
  type: 'On-site',
  tags: ['Generator', 'Repairs', 'Electrical'],
  culture: 'We keep Nigeria powered. Skilled technicians are valued here.',
  rating: 4.8,
  logo: '⚡'
}, {
  title: 'Backend Developer',
  company: 'Flutterwave',
  location: 'Lagos / Remote',
  rate: '₦1M-1.8M/month',
  type: 'Full-time',
  tags: ['Node.js', 'Python', 'Fintech'],
  culture: 'Simplifying payments for endless possibilities across Africa.',
  rating: 4.9,
  logo: '🦋'
}, {
  title: 'Owambe Caterer',
  company: 'Iya Basira Foods',
  location: 'Ibadan, Nigeria',
  rate: '₦200k-800k/event',
  type: 'Project',
  tags: ['Catering', 'Events', 'Jollof'],
  culture: 'Our Jollof no dey disappoint. We bring the vibes to every party.',
  rating: 5.0,
  logo: '🍚'
}, {
  title: 'Mobile Developer',
  company: 'Kuda Bank',
  location: 'Lagos / Remote',
  rate: '₦900k-1.5M/month',
  type: 'Full-time',
  tags: ['Flutter', 'Mobile', 'Fintech'],
  culture: 'The bank of the free. We\'re changing how Nigerians think about money.',
  rating: 4.8,
  logo: '💜'
}];
const testimonials = [{
  name: 'Chidinma Afolabi',
  role: 'Fashion Designer, Lagos',
  avatar: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
  content: 'I found my dream client here! This platform understand Nigerian hustle. People actually value the work.',
  rating: 5
}, {
  name: 'Tunde Bakare',
  role: 'Software Developer, Abuja',
  avatar: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
  content: 'No more wahala finding good clients. The platform connects me with companies that pay on time.',
  rating: 5
}, {
  name: 'Amina Yusuf',
  role: 'Caterer, Kano',
  avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
  content: 'From one event to booking every weekend! Hustlz changed my catering business completely.',
  rating: 5
}];

// Talent profiles - people showcasing their skills
const talents: TalentProps[] = [{
  name: 'Adaeze Okonkwo',
  title: 'Master Tailor (Ankara & Aso-Oke)',
  avatar: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
  location: 'Lagos, Nigeria',
  rate: '₦25k/outfit',
  skills: ['Ankara', 'Aso-Oke', 'Agbada'],
  bio: 'I turn fabric into royalty. 15 years crafting bespoke traditional and modern attire.',
  rating: 4.9,
  reviews: 127,
  available: true
}, {
  name: 'Chukwuemeka Nnamdi',
  title: 'Product Designer',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
  location: 'Lagos / Remote',
  rate: '₦350k/month',
  skills: ['Figma', 'User Research', 'Prototyping'],
  bio: 'Designing for Africa. Ex-Andela, now building products that solve local problems.',
  rating: 5.0,
  reviews: 89,
  available: true
}, {
  name: 'Ngozi Eze',
  title: 'AC & Generator Technician',
  avatar: 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
  location: 'Abuja, Nigeria',
  rate: '₦20k/job',
  skills: ['AC Repair', 'Generator', 'Inverter'],
  bio: 'I keep your home cool and powered. NEPA fit take light, but I go bring am back.',
  rating: 4.8,
  reviews: 203,
  available: false
}, {
  name: 'Oluwaseun Adeyemi',
  title: 'Full Stack Developer',
  avatar: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
  location: 'Lagos / Remote',
  rate: '₦500k/month',
  skills: ['React', 'Node.js', 'AWS'],
  bio: 'Building scalable web apps for African startups. Open source lover.',
  rating: 4.9,
  reviews: 156,
  available: true
}, {
  name: 'Hauwa Ibrahim',
  title: 'Event Caterer (Small Chops & Jollof)',
  avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
  location: 'Kano, Nigeria',
  rate: '₦150k/event',
  skills: ['Small Chops', 'Jollof', 'Owambe'],
  bio: 'My Jollof rice na the reason people dey come your party. No cap.',
  rating: 5.0,
  reviews: 78,
  available: true
}, {
  name: 'Emeka Okafor',
  title: 'Auto Mechanic (Japanese Cars)',
  avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
  location: 'Port Harcourt, Nigeria',
  rate: '₦15k/job',
  skills: ['Toyota', 'Honda', 'Engine Work'],
  bio: 'I fix am correct. Your motor go dey like new when I finish. Honest work only.',
  rating: 4.7,
  reviews: 312,
  available: true
}];
export function App() {
  return <div className="min-h-screen bg-cream-50 font-sans text-gray-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-coral-500 p-2 rounded-lg text-white transform -rotate-6 shadow-lg shadow-coral-500/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-gray-900">Hustl</span>
                <span className="text-coral-500 font-handwriting text-3xl">
                  z
                </span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-coral-500 font-medium transition-colors">
                Find Work
              </a>
              <a href="#" className="text-gray-600 hover:text-coral-500 font-medium transition-colors">
                Hire Talent
              </a>
              <a href="#" className="text-gray-600 hover:text-coral-500 font-medium transition-colors">
                Community
              </a>
              <Button variant="primary" size="sm" className="font-handwriting text-xl px-6">
                Join Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-coral-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-sage-100 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <span className="inline-block py-1 px-3 rounded-full bg-cream-200 text-coral-600 text-sm font-semibold mb-6 border border-cream-300">
              ✨ Hustle with people who get your vibe
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Find work that'll <br />
              <span className="text-coral-500 font-handwriting relative inline-block transform -rotate-2">
                make you chop life
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-sage-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Connecting Nigerians for all kinds of gigs—from tailors and 
              mechanics to designers and developers. No wahala, just work that pays.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <div className="relative w-full max-w-md">
                <input type="text" placeholder="What's your skill?" className="w-full h-14 pl-6 pr-14 rounded-full border-2 border-cream-300 focus:border-coral-400 focus:ring-4 focus:ring-coral-100 outline-none transition-all shadow-sm text-lg" />
                <button className="absolute right-2 top-2 h-10 w-10 bg-coral-500 rounded-full flex items-center justify-center text-white hover:bg-coral-600 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
              <span className="text-gray-400 font-handwriting text-2xl">
                or
              </span>
              <Button variant="secondary" className="h-14 px-8 text-lg">
                Post a Gig
              </Button>
            </div>

            <CommunityStats />
          </motion.div>
        </div>
      </section>

      {/* Featured Talent - People showcasing their skills */}
      <section className="py-20 bg-white rounded-t-[3rem] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sage-100 rounded-full text-sage-700 font-medium text-sm mb-3">
                <Users className="w-4 h-4" />
                People
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Featured Talent
              </h2>
              <p className="text-gray-500">
                Skilled people ready to work—hire them directly
              </p>
            </div>
            <a href="#" className="hidden md:flex items-center text-coral-500 font-medium hover:text-coral-600 group">
              Browse all talent
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {talents.map((talent, index) => <TalentCard key={index} talent={talent} />)}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" className="w-full">
              Browse all talent
            </Button>
          </div>
        </div>
      </section>

      {/* Fresh Opportunities - Job postings */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-coral-100 rounded-full text-coral-600 font-medium text-sm mb-3">
                <Briefcase className="w-4 h-4" />
                Opportunities
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Fresh Opportunities
              </h2>
              <p className="text-gray-500">
                Hot gigs posted in the last 24 hours
              </p>
            </div>
            <a href="#" className="hidden md:flex items-center text-coral-500 font-medium hover:text-coral-600 group">
              See all gigs
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => <JobCard key={index} job={job} />)}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" className="w-full">
              See all gigs
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-cream-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sage-700 font-medium text-sm mb-6 shadow-sm">
                <Heart className="w-4 h-4 text-coral-500 fill-coral-500" />
                We've Got Each Other
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                More than a job board, <br />
                <span className="font-handwriting text-5xl text-sage-500">
                  we're a community.
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We verify every client and company to ensure they treat people well and pay on time. 
                Join thousands of Nigerians who've found their groove.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-coral-100 flex items-center justify-center text-coral-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Verified Companies
                    </h4>
                    <p className="text-sm text-gray-500">
                      No scams, no ghosting—just real opportunities that pay.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-700">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Expert Community</h4>
                    <p className="text-sm text-gray-500">
                      Mentors, peer reviews, and coffee chats with your people.
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="primary" size="lg" className="font-handwriting text-2xl px-10">
                Join the Family
              </Button>
            </div>

            <div className="grid gap-6">
              {testimonials.map((testimonial, index) => <TestimonialCard key={index} testimonial={testimonial} index={index} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-coral-500 p-1.5 rounded-lg text-white transform -rotate-6">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">
                  <span className="text-gray-900">Hustl</span>
                  <span className="text-coral-500 font-handwriting text-2xl">
                    z
                  </span>
                </span>
              </div>
              <p className="text-gray-500 mb-6">
                Making hustle less stressful for every Nigerian—from artisans 
                to tech professionals.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholders */}
                <div className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center text-gray-600 hover:bg-coral-100 hover:text-coral-500 transition-colors cursor-pointer">
                  <Coffee className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center text-gray-600 hover:bg-coral-100 hover:text-coral-500 transition-colors cursor-pointer">
                  <Heart className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">For Freelancers</h4>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <a href="#" className="hover:text-coral-500 transition-colors">
                    Find Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral-500 transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral-500 transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral-500 transition-colors">
                    Resources
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">For Companies</h4>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <a href="#" className="hover:text-coral-500 transition-colors">
                    Post Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral-500 transition-colors">
                    Find Talent
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral-500 transition-colors">
                    Our Values
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral-500 transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Stay in the Loop</h4>
              <p className="text-gray-500 mb-4">
                Get fresh opportunities delivered to your inbox every week.
              </p>
              <div className="flex gap-2">
                <input type="email" placeholder="hello@example.com" className="flex-1 px-4 py-2 rounded-lg border border-cream-300 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none" />
                <Button variant="primary" size="sm">
                  Go
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2024 Hustlz Nigeria. Made with ❤️ in Lagos.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-900">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms
              </a>
              <a href="#" className="hover:text-gray-900">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
}