import RetroWindow from '../RetroWindow';
import linkedin from '../../assets/linkedin-icon.png';
import github from '../../assets/github-icon.png';
import mail from '../../assets/gmail-icon.png';

export default function SocialBox() {
  const icons = [
    {src: linkedin, alt:'linkedin', url:'https://www.linkedin.com/in/samidha-dhawale-4713b9286/'},
    {src: github, alt:'github', url:'https://github.com/Sami210105'},
    {src: mail, alt:'mail', url:'mailto:samidhadd21@gmail.com'},
  ];

  return (
    <RetroWindow title="connect.exe">
      <div className="flex gap-2 text-lg">
        {icons.map((item, index) => (
          <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
            <button
              className="border-2 border-black px-2 py-1 bg-[#caa18d] flex items-center justify-center active:translate-x-[1px] active:translate-y-[1px]"
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-8 h-8" 
              />
            </button>
          </a>
        ))}
      </div>
    </RetroWindow>
  );
}
