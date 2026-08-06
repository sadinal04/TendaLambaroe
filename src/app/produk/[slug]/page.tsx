import { notFound } from "next/navigation";
import { getProductBySlug, getAllSlugs, products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";
import ProductGallery from "@/components/ProductGallery";
import BackButton from "@/components/BackButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produk Tidak Ditemukan" };
  return {
    title: `${product.name} — Tenda Lambaroe`,
    description: product.shortDesc,
  };
}

const WA_NUMBER = "628131512261";

function buildWaMessage(productName: string) {
  return encodeURIComponent(
    "Halo Tenda Lambaroe!\n\nSaya tertarik dengan produk:\n" + productName + "\n\nBoleh saya bertanya mengenai:\n- Harga terbaik\n- Ketersediaan stok\n- Informasi pengiriman\n\nTerima kasih!"
  );
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const waLink = `https://wa.me/${WA_NUMBER}?text=${buildWaMessage(product.name)}`;
  const detailImages = product.images?.length ? product.images : [product.image];

  // Related products (same category, excluding current)
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className={styles.page}>

      {/* ── Top Nav Bar ── */}
      <div className={styles.backBar}>
        <div className="container">
          <div className={styles.backBarInner}>
            <BackButton className={styles.backBtn} id="back-to-home-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Kembali ke Beranda
            </BackButton>
            <span className={styles.breadcrumb}>
              <span className={styles.breadcrumbMuted}>Produk</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              <span>{product.name}</span>
            </span>
          </div>
        </div>
      </div>

      <main className="container">
        {/* ── Hero Grid ── */}
        <div className={styles.inner}>

          {/* Left: Image — natural size, no crop */}
          <div className={styles.imageSection}>
            {product.badge && (
              <span className={styles.badge}>{product.badge}</span>
            )}
            <ProductGallery images={detailImages} name={product.name} />
            {/* Category tag below image */}
            <div className={styles.imageFooter}>
              <span className={styles.categoryTag}>{product.category}</span>
              <span className={styles.imageCaption}>{product.name}</span>
            </div>
            {detailImages.length > 1 && (
              <p className={styles.galleryHint}>Geser ke samping untuk melihat foto lainnya.</p>
            )}

            {/* CTA Box — sejajar di bawah gambar */}
            <div className={styles.ctaBox}>
              <div className={styles.ctaHeader}>
                <div>
                  <p className={styles.ctaTitle}>Tanya Harga Terbaik</p>
                  <p className={styles.ctaNote}>Konsultasi gratis, respon cepat!</p>
                </div>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-wa ${styles.waBtn}`}
                id="product-detail-wa-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat via WhatsApp
              </a>
              <p className={styles.waHint}>
                Senin – Minggu &nbsp;·&nbsp; 08.00 – 17.00 WIB
              </p>
            </div>
          </div>

          {/* Right: Details */}
          <div className={styles.detailSection}>

            {/* Name & Divider */}
            <h1 className={styles.title}>{product.name}</h1>
            <div className={styles.divider} />

            {/* Short Desc */}
            <p className={styles.shortDesc}>{product.shortDesc}</p>

            {/* Description */}
            <div className={styles.descriptionBlock}>
              <h2 className={styles.sectionLabel}>Deskripsi Produk</h2>
              <p className={styles.description}>{product.description}</p>
            </div>

            {/* Features */}
            <div className={styles.featuresBox}>
              <h2 className={styles.sectionLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Spesifikasi &amp; Fitur
              </h2>
              <ul className={styles.featuresList}>
                {product.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <span className={styles.featureDot} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className={styles.related}>
            <h2 className={styles.relatedTitle}>Produk Serupa</h2>
            <div className={styles.relatedGrid}>
              {related.map((rp) => (
                <Link key={rp.id} href={`/produk/${rp.slug}`} className={styles.relatedCard} id={`related-${rp.id}`}>
                  <div className={styles.relatedImageWrap}>
                    <Image
                      src={rp.image}
                      alt={rp.name}
                      width={300}
                      height={220}
                      className={styles.relatedImage}
                    />
                  </div>
                  <div className={styles.relatedBody}>
                    <span className={styles.relatedCat}>{rp.category}</span>
                    <h4 className={styles.relatedName}>{rp.name}</h4>
                    <p className={styles.relatedDesc}>{rp.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
