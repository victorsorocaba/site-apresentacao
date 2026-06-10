import { useEffect, useState } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedHeading({ text, className = '', style = {} }: AnimatedHeadingProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const lines = text.split('\n');
  const charDelay = 30;
  const initialDelay = 200;
  const transitionDuration = 500;

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => {
        const lineLength = line.length;
        return (
          <div key={lineIndex} className="block">
            {line.split('').map((char, charIndex) => {
              const delay = initialDelay + (lineIndex * lineLength * charDelay) + (charIndex * charDelay);

              return (
                <span
                  key={charIndex}
                  className="inline-block"
                  style={{
                    opacity: isMounted ? 1 : 0,
                    transform: isMounted ? 'translateX(0)' : 'translateX(-18px)',
                    transition: `opacity ${transitionDuration}ms ease-out ${delay}ms, transform ${transitionDuration}ms ease-out ${delay}ms`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </div>
        );
      })}
    </h1>
  );
}