"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./ProductGallery.module.css";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const canSlide = images.length > 1;

  const slides = useMemo(
    () => images.map((src, index) => ({ src, alt: `${name} ${index + 1}` })),
    [images, name]
  );

  const goPrev = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const goNext = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <div className={styles.gallery} aria-label={`Galeri gambar ${name}`}>
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.src} className={styles.slide}>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={800}
                height={800}
                className={styles.image}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </div>
          ))}
        </div>

        {canSlide && (
          <>
            <button type="button" className={`${styles.navButton} ${styles.prevButton}`} onClick={goPrev} aria-label="Gambar sebelumnya">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button type="button" className={`${styles.navButton} ${styles.nextButton}`} onClick={goNext} aria-label="Gambar berikutnya">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {canSlide && (
        <div className={styles.dots} aria-label="Navigasi gambar">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Tampilkan gambar ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}