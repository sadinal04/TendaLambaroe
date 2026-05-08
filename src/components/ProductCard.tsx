"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProductCard.module.css";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const badgeColors: Record<string, string> = {
    Populer: styles.badgeGreen,
    "Best Seller": styles.badgeAccent,
    Premium: styles.badgeGold,
    Safety: styles.badgeBlue,
    "Heavy Duty": styles.badgeGray,
  };

  return (
    <Link href={`/produk/${product.slug}`} className={styles.card} id={`product-card-${product.id}`}>
      <div className={styles.imageWrap}>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className={styles.image}
        />
        {product.badge && (
          <span className={`${styles.badge} ${badgeColors[product.badge] ?? styles.badgeGreen}`}>
            {product.badge}
          </span>
        )}
        <div className={styles.overlay}>
          <span className={styles.overlayText}>Lihat Detail</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
      <div className={styles.body}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.desc}>{product.shortDesc}</p>
        <div className={styles.footer}>
          <span className={styles.link}>Lihat Selengkapnya</span>
          <span className={styles.arrow}>→</span>
        </div>
      </div>
    </Link>
  );
}
