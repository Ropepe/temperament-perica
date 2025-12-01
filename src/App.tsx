import { Phone, Mail, Instagram, Youtube } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        {/* <div className="absolute top-6 left-6 z-20">
          <img
            src="/Simbol -Crvena.png"
            alt="Logo"
            className="w-14 h-14 object-contain"
          />
        </div> */}

        <div className="relative h-screen w-full overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center relative">
            {/* Desktop - Landscape */}
            <img 
              src="/Landscape_artwork.png"
              alt="Hero"
              className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 h-auto object-contain z-0 w-[85%]"
            />
            {/* Mobile - Portrait */}
            <img 
              src="/Portrait_artwork2.png"
              alt="Hero"
              className="md:hidden absolute inset-0 w-full h-full object-cover z-0"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10">
          </div>
 
          {/* Desktop - Logo and content at bottom */}
          <div className="hidden md:block absolute bottom-0 left-0 right-0 z-20 pb-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-wrap justify-center gap-4 mb-8 items-center">
                <div className="flex justify-center">
                  <img
                    src="/Temperament Osnovna - Dvobojno.png"
                    alt="Bend Logo"
                    className="w-48 h-48 object-contain"
                  />
                </div>

                <a
                  href="tel:+38765 860452"
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/20"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm font-medium">+387 65 860 452</span>
                </a>

                <a
                  href="mailto:bend@email.com"
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/20"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-medium">temperament.bl@gmail.com</span>
                </a>
              </div>

              <div className="flex justify-center gap-6">
                <a
                  href="https://www.instagram.com/temperamentband/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/20"
                >
                  <Instagram className="w-6 h-6" />
                </a>

                <a
                  href="https://www.youtube.com/@temperament-bl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/20"
                >
                  <Youtube className="w-6 h-6" />
                </a>

                <a
                  href="https://www.tiktok.com/@temperamentbl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/20"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile - Logo and content centered */}
          <div className="md:hidden absolute inset-0 z-20 flex flex-col items-center justify-center pb-8 px-6">
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="flex flex-wrap justify-center gap-4 items-center">
                <div className="flex justify-center">
                  <img
                    src="/Temperament Osnovna - Dvobojno.png"
                    alt="Bend Logo"
                    className="w-32 h-32 object-contain"
                  />
                </div>

                <a
                  href="tel:+381123456789"
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/20"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm font-medium">+387 65 860 452</span>
                </a>

                <a
                  href="mailto:bend@email.com"
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/20"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-medium">temperament.bl@gmail.com</span>
                </a>
              </div>

              <div className="flex justify-center gap-6">
                <a
                  href="https://www.instagram.com/temperamentband/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/20"
                >
                  <Instagram className="w-6 h-6" />
                </a>

                <a
                  href="https://www.youtube.com/@temperament-bl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/20"
                >
                  <Youtube className="w-6 h-6" />
                </a>

                <a
                  href="https://www.tiktok.com/@temperamentbl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/20"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
