interface Props {
  title?: string;
}

export function BrowserRequirements({ title }: Props) {
  return (
    <div>
      <p>
        {' '}
        {title} is a browser based game and should run smoothly on practically
        any PC with a updated web-browser. If you have old hardware or software,
        you may still be able to play Transformice, but your game experience may
        suffer. For the best gameplay experience, we recommend the latest
        versions of Firefox, Chrome, or Internet Explorer.
      </p>
    </div>
  );
}
