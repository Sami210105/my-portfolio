import RetroWindow from '../RetroWindow';

export default function QuoteBox() {
  return (
    <RetroWindow title="quote.txt">
      <p className="italic text-xl">
        “You are the author of your own story.”
      </p>
    </RetroWindow>
  );
}