import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import img1 from '../../public/419-1116x500.jpg';
import img2 from '../../public/883-1116x500.jpg';
import img3 from '../../public/894-1116x500.jpg';

export default function Home() {
  const slides = [img1, img2, img3];
  const [curr, setCurr] = useState(0);
  const autoSlideInterval = 3000; // Define autoSlideInterval here

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlideInterval, slides.length]);

  return (
    <div className="overflow-hidden relative" style={{ width: '100%', height: '500px' }}>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)`, width: '100%', height: '100%' }}
      >
        <img src={slides[curr]} alt={`Slide ${curr}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
