export default function Taskbar({ active, setActive }) {
  const tabs = [
    'Home',
    'Projects',
    'Achievements',
    'Connect',
    'Resume',
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full h-12 bg-[#caa18d] border-t-2 border-black flex items-center px-2 z-50">

      {/* Start button */}
      <button
        onClick={() => setActive('Home')}
        className="flex items-center gap-1 px-3 py-1 mr-3 bg-[#9b6b53] border-2 border-black shadow-[1px_1px_0_#000] active:translate-x-[1px] active:translate-y-[1px]"
      >
        <span className="text-xl font-mono text-black">Start</span>
      </button>

      {/* Divider */}
      <div className="w-[2px] h-8 bg-black mx-2" />

      {/* Tabs */}
      <div className="flex gap-4">
        {tabs.map(tab => {
          const isActive = active === tab;

          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`text-xl px-3 py-1 font-mono border-2 border-black
                ${isActive
                  ? 'bg-[#9b6b53] translate-x-[1px] translate-y-[1px]'
                  : 'bg-[#e7d2c5] shadow-[1px_1px_0_#000]'}
              `}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}
