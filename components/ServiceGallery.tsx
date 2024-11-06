"use client";

import { useInView } from 'react-intersection-observer';

interface Image {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ServiceGalleryProps {
  images: Image[];
}

export default function ServiceGallery({ images }: ServiceGalleryProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
    >
      {images.map((image, index) => (
        <div
          key={image.alt}
          className={`transform transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <div className="relative group aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-2">{image.title || image.alt}</h4>
              {image.description && (
                <p className="text-sm text-white/90">{image.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}