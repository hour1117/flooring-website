'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  images: string[];
  alt: string;
}

export default function ProductGallery({ images, alt }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goTo = (index: number) => setActiveIndex((index + images.length) % images.length);

  return (
    <>
      <div className="space-y-4">
        {/* Main image */}
        <div
          className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-gray-100"
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={images[activeIndex] || '/images/placeholder.jpg'}
            alt={alt}
            className="h-full w-full object-cover"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goTo(activeIndex - 1); }}
                className="absolute start-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-sm hover:bg-white transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goTo(activeIndex + 1); }}
                className="absolute end-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-sm hover:bg-white transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                  i === activeIndex ? 'border-neutral-600' : 'border-transparent'
                }`}
              >
                <img src={img} alt={`${alt} ${i + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={images[activeIndex]}
            alt={alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute end-4 top-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/30"
          >
            <ChevronRight className="h-6 w-6 rotate-45" />
          </button>
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goTo(activeIndex - 1); }}
                className="absolute start-4 top-1/2 rounded-full bg-white/20 p-3 text-white hover:bg-white/30"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goTo(activeIndex + 1); }}
                className="absolute end-4 top-1/2 rounded-full bg-white/20 p-3 text-white hover:bg-white/30"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
