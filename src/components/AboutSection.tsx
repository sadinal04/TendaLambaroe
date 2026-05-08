import styles from "./AboutSection.module.css";

const steps = [
  {
    num: "01",
    title: "Mendengarkan Kebutuhan",
    desc: "Setiap produk direkomendasikan berdasarkan fungsi pakai, lokasi penggunaan, dan prioritas anggaran yang Anda miliki.",
  },
  {
    num: "02",
    title: "Menjaga Kerapian Produksi",
    desc: "Kami memperhatikan detail bahan, jahitan, rangka, dan finishing agar produk tidak hanya terlihat baik, tetapi juga enak dipakai.",
  },
  {
    num: "03",
    title: "Mudah Dihubungi",
    desc: "Tim kami siap menindaklanjuti konsultasi, revisi spesifikasi, sampai koordinasi pengiriman dengan komunikasi yang jelas.",
  },
];

const products = [
  { label: "Tenda Lipat", desc: "Praktis untuk bazar, event & promosi" },
  { label: "Tenda Printing", desc: "Custom logo/brand sesuai permintaan" },
  { label: "Tenda Pleton", desc: "Ukuran besar untuk posko & massal" },
  { label: "Tenda Pramuka", desc: "Dome & regu untuk kepramukaan" },
  { label: "Payung Parasol", desc: "Jumbo untuk taman & cafe outdoor" },
  { label: "Terpal Korea", desc: "Premium, tebal, awet, tahan cuaca" },
  { label: "Terpal China", desc: "Ekonomis, berbagai pilihan ukuran" },
  { label: "Terpal PVC Semi Karet", desc: "Anti air, cocok untuk kolam & truk" },
  { label: "Jaring Kasa Proyek", desc: "Pengaman paranet untuk konstruksi" },
];

const keunggulan = [
  { title: "Lengkap", desc: "One stop solution tenda & terpal" },
  { title: "Kualitas Terjamin", desc: "Dari kelas ekonomis hingga premium" },
  { title: "Harga Bersaing", desc: "Langsung dari distributor" },
  { title: "Siap Custom", desc: "Printing & ukuran khusus tersedia" },
  { title: "Kirim Seluruh Indonesia", desc: "Pengiriman cepat dan aman" },
];

export default function AboutSection() {
  return (
    <section id="tentang" className={`section-padding ${styles.section}`}>
      <div className="container">

        {/* ─── Header ─── */}
        <div className={styles.header}>
          <p className="section-tag">Tentang Kami</p>
          <h2 className="section-title">Solusi Tenda &amp; Terpal Berkualitas</h2>
          <p className="section-subtitle">
            Tenda Lambaroe adalah usaha yang bergerak di bidang penjualan tenda dan terpal,
            berdiri sejak tahun 2024. Kami hadir sebagai solusi lengkap untuk kebutuhan tenda
            dan penutup Anda, baik untuk acara, proyek, maupun kegiatan luar ruang.
          </p>
        </div>

        {/* ─── Produk Grid ─── */}
        <div className={styles.profileBlock}>
          <h3 className={styles.blockTitle}>Produk yang Kami Jual</h3>
          <div className={styles.productGrid}>
            {products.map((p, i) => (
              <div key={i} className={styles.productItem}>
                <span className={styles.productDot} />
                <div>
                  <strong className={styles.productName}>{p.label}</strong>
                  <span className={styles.productDesc}> — {p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Keunggulan + Tujuan ─── */}
        <div className={styles.twoCol}>
          <div className={styles.profileBlock}>
            <h3 className={styles.blockTitle}>Keunggulan Kami</h3>
            <div className={styles.keunggulanList}>
              {keunggulan.map((k, i) => (
                <div key={i} className={styles.keunggulanItem}>
                  <div className={styles.keunggulanIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.keunggulanTitle}>{k.title}</span>
                    <span className={styles.keunggulanDesc}> — {k.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.profileBlock}>
            <h3 className={styles.blockTitle}>Target Pasar &amp; Tujuan</h3>
            <div className={styles.targetList}>
              {["Event Organizer & UMKM", "Kontraktor & Konstruksi", "Instansi Pemerintah & Sekolah", "Komunitas Pramuka & Pecinta Alam", "Kebutuhan Rumah Tangga"].map((t, i) => (
                <span key={i} className={styles.targetChip}>{t}</span>
              ))}
            </div>
            <p className={styles.goalText}>
              Menjadi mitra terpercaya dalam menyediakan tenda dan terpal berkualitas
              dengan harga terbaik untuk mendukung kelancaran acara dan proyek
              pelanggan di seluruh Indonesia.
            </p>
          </div>
        </div>

        {/* ─── Cara Kami Bekerja ─── */}
        <div className={styles.subHeader}>
          <h2 className="section-title">Cara Kami Bekerja</h2>
          <p className="section-subtitle">
            Kami berusaha membuat proses pengadaan tenda dan terpal terasa lebih jelas,
            lebih efisien, dan lebih nyaman untuk dijalankan.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((item, i) => (
            <div key={i} className={styles.stepCard}>
              <span className={styles.stepNum}>{item.num}</span>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
