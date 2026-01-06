import RetroWindow from '../RetroWindow';

export default function CalendarBox() {
  return (
    <RetroWindow title="january-calendar.exe">
      <div className="grid grid-cols-7 gap-2 text-center text-base">
        {['S','M','T','W','T','F','S'].map(d => (
          <div key={d} className="font-bold">{d}</div>
        ))}

        {[...Array(31)].map((_, i) => {
          const day = i + 1;
          return (
            <div
              key={day}
              className={`border border-black p-1 ${
                day === 21 ? 'bg-[#9b6b53] text-white' : 'bg-[#e7d2c5]'
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </RetroWindow>
  );
}
