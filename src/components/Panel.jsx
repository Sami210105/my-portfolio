export default function Panel({ title, children }) {
  return (
    <div className="border border-[#9b6b53] rounded-xl p-4">
      {title && (
        <h3 className="text-[#9b6b53] text-sm mb-2 tracking-wide">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
