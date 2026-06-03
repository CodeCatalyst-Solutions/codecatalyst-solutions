import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const percent =
        (window.scrollY /
          (document.body.scrollHeight - window.innerHeight)) *
        100;
      setScroll(percent);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{ width: `${scroll}%` }}
      className="fixed top-0 left-0 h-1 bg-brand-gold z-50"
    />
  );
}