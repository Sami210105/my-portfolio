import RetroWindow from '../RetroWindow';

export default function PhotoBox() {
  return (
    <RetroWindow title="my-photo.bmp">
      <div className="h-60 bg-[#bfa38f] border-2 border-black flex items-center justify-center">
        <img src="/src/assets/me.jpg" alt="me" className="h-full w-full object-cover" />
      </div>
    </RetroWindow>
  );
}
