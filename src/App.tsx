import React, { useState, useEffect } from 'react';
import { Mail, Calendar, MapPin, Phone, Globe, Sun, Moon, Twitter, Instagram, Youtube, Facebook, Menu, X } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'
    }`}>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-colors duration-300 ${
        isDark ? 'bg-neutral-900/80 backdrop-blur-lg' : 'bg-white/80 backdrop-blur-lg shadow-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
              Ben Palmer.
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('bio')}
                className={`font-medium hover:text-amber-500 transition-colors ${
                  isDark ? 'text-neutral-300' : 'text-neutral-600'
                }`}
              >
                Bio
              </button>
              <button
                onClick={() => scrollToSection('tour')}
                className={`font-medium hover:text-amber-500 transition-colors ${
                  isDark ? 'text-neutral-300' : 'text-neutral-600'
                }`}
              >
                Tour
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`font-medium hover:text-amber-500 transition-colors ${
                  isDark ? 'text-neutral-300' : 'text-neutral-600'
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition-colors ${
                  isDark 
                    ? 'bg-neutral-800 hover:bg-neutral-700' 
                    : 'bg-neutral-100 hover:bg-neutral-200'
                }`}
              >
                {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-neutral-600" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 mr-2 rounded-full transition-colors ${
                  isDark 
                    ? 'bg-neutral-800 hover:bg-neutral-700' 
                    : 'bg-neutral-100 hover:bg-neutral-200'
                }`}
              >
                {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-neutral-600" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full transition-colors ${
                  isDark 
                    ? 'bg-neutral-800 hover:bg-neutral-700' 
                    : 'bg-neutral-100 hover:bg-neutral-200'
                }`}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-amber-500" />
                ) : (
                  <Menu className="w-5 h-5 text-amber-500" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-neutral-800">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('bio')}
                  className={`font-medium hover:text-amber-500 transition-colors ${
                    isDark ? 'text-neutral-300' : 'text-neutral-600'
                  }`}
                >
                  Bio
                </button>
                <button
                  onClick={() => scrollToSection('tour')}
                  className={`font-medium hover:text-amber-500 transition-colors ${
                    isDark ? 'text-neutral-300' : 'text-neutral-600'
                  }`}
                >
                  Tour
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`font-medium hover:text-amber-500 transition-colors ${
                    isDark ? 'text-neutral-300' : 'text-neutral-600'
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Bio Section */}
      <section id="bio" className="pt-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="aspect-square overflow-hidden rounded-2xl mb-6 shadow-xl">
              <img 
                src="https://static.wixstatic.com/media/e0ba6c_91dcc3b8c4644f18a8c7a0be9ebfeef0~mv2.jpg/v1/crop/x_0,y_195,w_1440,h_1771/fill/w_304,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/headshotsmiling.jpg"
                alt="Mike Johnson headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className={`flex items-center gap-2 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                <MapPin className="w-5 h-5 text-amber-500" />
                Chicago, Illinois
              </div>
              <div className={`flex items-center gap-2 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                <Globe className="w-5 h-5 text-amber-500" />
                Available Worldwide
              </div>
              <div className={`flex items-center gap-2 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                <Phone className="w-5 h-5 text-amber-500" />
                +1 (312) 555-0123
              </div>
              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a href="#" className="p-2 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="p-2 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="p-2 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors">
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="p-2 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
              Ben Palmer
            </h1>
            <div className="space-y-6 text-lg">
              <p className={`leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Ben Palmer, also known as <span className="text-amber-500 font-semibold">PalmerTrolls</span>, is a comedian and internet personality renowned for his distinctive blend of satire, trolling, and social commentary. He initially gained fame by posing as corporate accounts, government entities, and other official organizations on social media, responding humorously to customer complaints and social issues.
              </p>
              <p className={`leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Ben’s content often involves elaborate pranks, such as impersonating customer service agents, creating fake court cases to appear on TV, or pretending to be a journalist to trick CEOs and multilevel marketing figures.
              </p>
              <p className={`leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              His work has gone viral across platforms like TikTok, YouTube, and Instagram, accumulating over a billion views. His live performances mix digital storytelling with traditional stand up comedy, creating a unique blend that resonates with audiences.  
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Section */}
      <section id="tour" className={`py-24 px-4 ${
        isDark ? 'bg-neutral-800' : 'bg-neutral-100'
      } transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
            Tour Dates
          </h2>
          <div className="space-y-6">
            {[
              {
                date: 'March 15-17, 2024',
                city: 'Chicago, IL',
                venue: 'Laugh Factory',
                time: '8:00 PM',
                price: '$30',
                status: 'SOLD OUT'
              },
              {
                date: 'March 22-24, 2024',
                city: 'New York, NY',
                venue: 'Comedy Cellar',
                time: '7:30 PM & 10:00 PM',
                price: '$35',
                status: 'LIMITED'
              },
              {
                date: 'April 5-7, 2024',
                city: 'Los Angeles, CA',
                venue: 'The Comedy Store',
                time: '8:00 PM',
                price: '$35',
                status: 'AVAILABLE'
              },
              {
                date: 'April 12-14, 2024',
                city: 'Boston, MA',
                venue: 'Wilbur Theatre',
                time: '7:00 PM',
                price: '$40',
                status: 'AVAILABLE'
              }
            ].map((show, i) => (
              <div 
                key={i} 
                className={`rounded-xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors duration-300 ${
                  isDark ? 'bg-neutral-900' : 'bg-white shadow-lg'
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-amber-500" />
                    <span className="text-xl font-bold">{show.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{show.city}</h3>
                  <p className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>{show.venue}</p>
                  <div className={`mt-2 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    <span className="mr-4">{show.time}</span>
                    <span>{show.price}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    show.status === 'SOLD OUT' 
                      ? 'bg-red-500/20 text-red-400'
                      : show.status === 'LIMITED'
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-green-500/20 text-green-400'
                  }`}>
                    {show.status}
                  </span>
                  <a 
                    href="#" 
                    className={`px-6 py-3 rounded-full font-bold transition-colors ${
                      show.status === 'SOLD OUT'
                        ? 'bg-neutral-700 text-neutral-500 cursor-not-allowed'
                        : 'bg-amber-500 text-neutral-900 hover:bg-amber-400'
                    }`}
                  >
                    {show.status === 'SOLD OUT' ? 'Sold Out' : 'Get Tickets'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <div className={`rounded-2xl p-8 transition-colors duration-300 ${
            isDark ? 'bg-neutral-800' : 'bg-neutral-100'
          }`}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none transition-colors ${
                      isDark 
                        ? 'bg-neutral-900 text-white' 
                        : 'bg-white text-neutral-900 border border-neutral-200'
                    }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none transition-colors ${
                      isDark 
                        ? 'bg-neutral-900 text-white' 
                        : 'bg-white text-neutral-900 border border-neutral-200'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-neutral-300' : 'text-neutral-600'
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none transition-colors ${
                    isDark 
                      ? 'bg-neutral-900 text-white' 
                      : 'bg-white text-neutral-900 border border-neutral-200'
                  }`}
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-neutral-300' : 'text-neutral-600'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none transition-colors ${
                    isDark 
                      ? 'bg-neutral-900 text-white' 
                      : 'bg-white text-neutral-900 border border-neutral-200'
                  }`}
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 text-neutral-900 py-4 rounded-lg font-bold hover:bg-amber-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className={`mt-12 text-center ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
            © 2024 Ben Palmer. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;