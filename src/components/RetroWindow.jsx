export default function RetroWindow({ title, children }) {
  return (
    <div className="bg-[#caa18d] border-2 border-black shadow-[2px_2px_0_#000]">
      
      {/* title bar */}
      <div className="bg-[#9b6b53] px-3 py-1 flex justify-between items-center text-lg">
        <span>{title}</span>
        <div className="flex gap-1">
          <span className="border border-black px-1">–</span>
          <span className="border border-black px-1">□</span>
          <span className="border border-black px-1">✕</span>
        </div>
      </div>

      {/* content */}
      <div className="p-4 bg-[#e7d2c5] text-black text-sm font-mono">
        {children}
      </div>
    </div>
  );
}
