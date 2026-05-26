'use client';

import { useState, useEffect, useRef } from 'react';

const images = [
  '/images/uploads/factory/1.png',
  '/images/uploads/factory/2.png',
  '/images/uploads/factory/3.png',
  '/images/uploads/factory/4.png',
  '/images/uploads/factory/5.jpg',
  '/images/uploads/factory/6.jpg',
  '/images/uploads/factory/7.jpg',
];

export default function FactoryCarousel() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const total = images.length;
  const visibleCount = 3;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 4000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <div>
      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${active * (100 / visibleCount)}%)` }}
        >
          {[...images, ...images, ...images].map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 overflow-hidden rounded-2xl group"
              style={{ width: `calc(${100 / visibleCount}% - 16px)` }}
            >
              <img
                src={img}
                alt={`Factory ${(i % total) + 1}`}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${
              i === active ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
