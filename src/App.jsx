import { useState } from 'react';
import Square from './components/Square';
import Taskbar from './components/Taskbar';

import NameBox from './components/Home/NameBox';
import PhotoBox from './components/Home/PhotoBox';
import QuoteBox from './components/Home/QuoteBox';
import AboutBox from './components/Home/AboutBox';
import CalendarBox from './components/Home/CalendarBox';
import MusicBox from './components/Home/MusicBox';
import SocialBox from './components/Home/SocialBox';
import Projects from './components/Projects/Project';

function App() {
  const [activePage, setActivePage] = useState('Home');

  return (
    <div className="relative w-screen h-screen bg-[#e7d7c1] overflow-hidden">

      {/* background */}
      <Square squareSize={32} speed={0.15} direction="diagonal" />

      {/* main content */}
      <div className="relative z-10 h-full w-full p-8 pb-16">
        
        {activePage === 'Home' && (
          <div className="grid grid-cols-3 gap-6 h-full">
            <div className="flex flex-col gap-6">
              <NameBox />
              <PhotoBox />
              <QuoteBox />
            </div>

            <div className="flex flex-col gap-6">
              <AboutBox />
              <CalendarBox />
            </div>

            <div className="flex flex-col gap-6">
              <MusicBox />
              <SocialBox />
            </div>
          </div>
        )}

        {activePage === 'Projects' && (
          <Projects/>
        )}

        {activePage === 'Achievements' && (
          <div className="text-white font-mono">
            Achievements page coming soon…
          </div>
        )}

        {activePage === 'Connect' && (
          <div className="text-white font-mono">
            Connect with me page…
          </div>
        )}

        {activePage === 'Resume' && (
          <div className="text-white font-mono">
            Resume & Certificates…
          </div>
        )}
      </div>

      {/* bottom taskbar */}
      <Taskbar active={activePage} setActive={setActivePage} />
    </div>
  );
}

export default App;
