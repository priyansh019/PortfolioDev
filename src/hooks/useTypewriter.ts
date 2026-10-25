import { useState, useEffect } from 'react';

interface TypewriterOptions {
  speed?: number;
  startDelay?: number;
}

export function useTypewriter(
  text: string,
  options: TypewriterOptions = {}
): { displayed: string; done: boolean } {
  const { speed = 38, startDelay = 600 } = options;
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayed('');
    setDone(false);

    let intervalId: ReturnType<typeof setInterval> | null = null;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          if (intervalId) clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}
