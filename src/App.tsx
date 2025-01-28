import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-zinc-950 text-zinc-100' : 'bg-stone-50 text-zinc-800'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${isDark ? 'bg-zinc-950/90' : 'bg-stone-50/90'} backdrop-blur-md`}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <span className="text-xl font-light tracking-widest">B.P</span>
            
            <div className="hidden md:flex items-center space-x-12">
              {['bio', 'tour', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm tracking-widest hover:text-zinc-400 transition-colors duration-300"
                >
                  {item.toUpperCase()}
                </button>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 hover:text-zinc-400 transition-colors duration-300"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button onClick={() => setIsDark(!isDark)}>
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-8 border-t border-zinc-800">
              <div className="flex flex-col space-y-6">
                {['bio', 'tour', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-sm tracking-widest"
                  >
                    {item.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Bio Section */}
      <section id="bio" className="pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div>
                <h1 className="text-6xl font-extralight tracking-tight mb-4">Ben Palmer</h1>
                <p className="text-sm tracking-wider opacity-60 uppercase">Comedian & Storyteller</p>
              </div>
              <div className="space-y-6">
                <p className="text-base leading-relaxed opacity-80">
                  With over two decades in comedy, I've crafted a unique voice in observational humor, 
                  finding extraordinary moments in our shared everyday experiences.
                </p>
                <p className="text-base leading-relaxed opacity-80">
                  My Netflix special "Life in Progress" (2023) brings authentic storytelling to a global stage, 
                  combining wit with genuine human connection.
                </p>
              </div>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3 text-sm tracking-wide opacity-60">
                  <MapPin className="w-4 h-4" /> Chicago, Illinois
                </div>
                <div className="flex items-center gap-3 text-sm tracking-wide opacity-60">
                  <Phone className="w-4 h-4" /> +1 (312) 555-0123
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] group">
              <img 
                src="https://static.wixstatic.com/media/e0ba6c_91dcc3b8c4644f18a8c7a0be9ebfeef0~mv2.jpg/v1/crop/x_0,y_195,w_1440,h_1771/fill/w_304,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/headshotsmiling.jpg"
                alt="Ben"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className={`absolute inset-0 ${isDark ? 'bg-zinc-950' : 'bg-stone-50'} opacity-10 group-hover:opacity-0 transition-opacity duration-700`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Section */}
      <section id="tour" className={`py-32 px-6 ${isDark ? 'bg-zinc-900' : 'bg-stone-100'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extralight tracking-tight mb-16">Upcoming Shows</h2>
          <div className="space-y-6">
            {[
              { date: 'MAR 15', city: 'Chicago', venue: 'Laugh Factory', status: 'SOLD OUT' },
              { date: 'MAR 22', city: 'New York', venue: 'Comedy Cellar', status: 'LIMITED' },
              { date: 'APR 05', city: 'Los Angeles', venue: 'The Comedy Store', status: 'AVAILABLE' },
              { date: 'APR 12', city: 'Boston', venue: 'Wilbur Theatre', status: 'AVAILABLE' }
            ].map((show, i) => (
              <div 
                key={i}
                className={`p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                  isDark ? 'bg-zinc-950' : 'bg-white'
                } hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="flex items-center gap-12">
                  <span className="text-sm font-mono tracking-wider opacity-60">{show.date}</span>
                  <div>
                    <h3 className="text-lg font-light tracking-wide mb-1">{show.city}</h3>
                    <p className="text-sm tracking-wide opacity-60">{show.venue}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs tracking-widest opacity-60">{show.status}</span>
                  <a 
                    href="#" 
                    className={`text-sm tracking-wider border px-6 py-3 hover:scale-105 transition-all duration-300 ${
                      isDark ? 'border-zinc-800' : 'border-zinc-200'
                    } ${show.status === 'SOLD OUT' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {show.status === 'SOLD OUT' ? 'Sold Out' : 'Tickets'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extralight tracking-tight mb-16">Get in Touch</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs tracking-wider opacity-60">Name</label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 text-sm tracking-wide ${
                    isDark 
                      ? 'bg-zinc-900 border-zinc-800 focus:border-zinc-700'
                      : 'bg-white border-zinc-200 focus:border-zinc-300'
                  } border focus:outline-none transition-colors duration-300`}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-wider opacity-60">Email</label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 text-sm tracking-wide ${
                    isDark 
                      ? 'bg-zinc-900 border-zinc-800 focus:border-zinc-700'
                      : 'bg-white border-zinc-200 focus:border-zinc-300'
                  } border focus:outline-none transition-colors duration-300`}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs tracking-wider opacity-60">Message</label>
              <textarea
                rows={6}
                className={`w-full px-4 py-3 text-sm tracking-wide ${
                  isDark 
                    ? 'bg-zinc-900 border-zinc-800 focus:border-zinc-700'
                    : 'bg-white border-zinc-200 focus:border-zinc-300'
                } border focus:outline-none transition-colors duration-300`}
              />
            </div>
            <button
              type="submit"
              className={`w-full py-4 text-sm tracking-widest border ${
                isDark ? 'border-zinc-800 hover:border-zinc-700' : 'border-zinc-200 hover:border-zinc-300'
              } hover:scale-[1.01] transition-all duration-300`}
            >
              SEND MESSAGE
            </button>
          </form>
          <div className="mt-32 text-center">
            <p className="text-xs tracking-wider opacity-40">© 2024 Ben Palmer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;