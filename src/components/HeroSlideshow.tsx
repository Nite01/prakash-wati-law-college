import { useEffect, useState } from "react";
import l3 from "@/assets/hero/law3.jpg";
import l4 from "@/assets/hero/law4.jpg";
import l5 from "@/assets/hero/law5.jpg";
import l6 from "@/assets/hero/law6.jpg";
import l8 from "@/assets/hero/law8.jpg";
import l9 from "@/assets/hero/law9.jpg";
import l10 from "@/assets/hero/law10.jpg";

const slides = [l5, l3, l6, l10, l9, l4, l8];

export function HeroSlideshow() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="absolute inset-0">
      {slides.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt=""
          width={1600}
          height={912}
          loading={idx === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-primary/70" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Show slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-accent" : "w-2 bg-primary-foreground/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
