"use client";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import { products } from "@/data/products";

// 6 produk untuk 3 kolom (2 per kolom)
const col1 = [products[0], products[3], products[8]];
const col2 = [products[1], products[4], products[9]];
const col3 = [products[2], products[5], products[10]];

const categories = [
  { 
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M12 3v18"/><path d="m3 21 9-18 9 18"/><path d="M12 14l-4 7"/><path d="M12 14l4 7"/></svg>, 
    label: "Tenda" 
  },
  { 
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></svg>, 
    label: "Terpal" 
  },
  { 
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>, 
    label: "Jaring Pengaman" 
  },
];

function ImageColumn({
  images,
  className,
}: {
  images: typeof col1;
  className: string;
}) {
  return (
    <div className={`${styles.column} ${className}`}>
      <div className={styles.columnInner}>
        {[...images, ...images].map((product, i) => (
          <div key={i} className={styles.imageCard}>
            <Image
              src={product.image}
              alt={product.name}
              width={260}
              height={300}
              className={styles.productImg}
              priority={i < 3}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const handleScrollToProducts = () => {
    document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="beranda" className={styles.hero}>
      <div className={styles.heroInner}>
        {/* ── Left Content ── */}
        <div className={styles.heroContent}>
          {/* Tag */}
          <div className={styles.tag}>
            <span className={styles.tagDot} />
            Pusat Tenda &amp; Terpal Terpercaya
          </div>

          {/* Title */}
          <h1 className={styles.heroTitle}>
            Tenda &amp; <span className={styles.titleAccent}>Terpal</span>
            <br />
            Kualitas Terbaik
          </h1>

          {/* Subtitle */}
          <p className={styles.heroDesc}>
            Menyediakan tenda, terpal, dan jaring pengaman berkualitas
            tinggi untuk semua kebutuhan — acara, konstruksi, pertanian, hingga militer.
          </p>

          {/* CTA */}
          <div className={styles.heroBtns}>
            <button
              className={styles.btnPrimary}
              onClick={handleScrollToProducts}
              id="hero-lihat-produk-btn"
            >
              Lihat Produk
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <a
              href="https://wa.me/628131512261?text=Halo%20Tenda%20Lambaroe%2C%20saya%20ingin%20konsultasi%20mengenai%20produk%20tenda%20dan%20terpal."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWa}
              id="hero-wa-btn"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konsultasi Gratis
            </a>
          </div>

          {/* Bottom category chips */}
          <div className={styles.categoryRow}>
            <span className={styles.categoryLabel}>Tersedia untuk</span>
            <div className={styles.chips}>
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  className={styles.chip}
                  onClick={handleScrollToProducts}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Staggered Image Gallery ── */}
        <div className={styles.heroGallery}>
          {/* fade masks */}
          <div className={styles.maskTop} />
          <div className={styles.maskBottom} />

          <ImageColumn images={col1} className={styles.col1} />
          <ImageColumn images={col2} className={styles.col2} />
          <ImageColumn images={col3} className={styles.col3} />
        </div>
      </div>

      {/* ── Mobile-only Horizontal Strip ── */}
      <div className={styles.mobileStrip}>
        <div className={styles.mobileTrack}>
          {[...col1, ...col2, ...col3, ...col1, ...col2, ...col3].map((product, i) => (
            <div key={i} className={styles.mobileCard}>
              <Image
                src={product.image}
                alt={product.name}
                width={130}
                height={150}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
