// src/components/TypingEffect.jsx
import { useEffect, useState } from "react";

export default function TypingEffect({
  words = [],
  typeSpeed = 90,
  deleteSpeed = 45,
  pause = 1500, // hold time after typing a word
  cursor = "|",
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [pos, setPos] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timer;

    const current = words[wordIndex] || "";
    const speed = deleting ? deleteSpeed : typeSpeed;

    timer = setTimeout(() => {
      if (!deleting) {
        // typing
        setDisplay(current.slice(0, pos + 1));
        setPos((p) => p + 1);
        if (pos + 1 === current.length) {
          // finished typing -> pause then delete
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        // deleting
        setDisplay(current.slice(0, pos - 1));
        setPos((p) => p - 1);
        if (pos - 1 === 0) {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pos, deleting, wordIndex]);

    return (
    <span>
        {display}
        <span aria-hidden="true" className="cursor-blink font-">{cursor}</span>
    </span>
    );
}
