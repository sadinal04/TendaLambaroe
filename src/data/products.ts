export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  description: string;
  features: string[];
  image: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "tenda-kerucut",
    name: "Tenda Kerucut",
    category: "Tenda",
    badge: "Populer",
    shortDesc: "Tenda kerucut elegan untuk event yang ingin tampil menonjol dan menarik perhatian.",
    description: "Tenda Kerucut biasanya mulai dicari ketika beberapa event membutuhkan booth yang terlihat menonjol bahkan sebelum pengunjung membaca isi display-nya. Pada tahap ini, banyak orang awalnya hanya membayangkan produk yang bisa segera dipakai. Padahal, keputusan yang baik justru lahir dari pembahasan yang lebih detail: bagaimana produk akan digunakan, di mana lokasinya, seberapa sering dipakai, dan seperti apa kesan yang ingin ditampilkan. Karena itu, pembicaraan tentang Tenda Kerucut hampir selalu lebih efektif ketika diarahkan pada fungsi nyata di lapangan, bukan sekadar nama produknya.\n\nTenda lambaroe melayani kebutuhan Jual Tenda Kerucut, Supplier Tenda Kerucut, Distributor Tenda Kerucut, dan Produsen Tenda Kerucut dengan pendekatan yang tidak terburu-buru. Kami terbiasa membantu pelanggan yang sudah datang dengan spesifikasi lengkap maupun pelanggan yang baru memiliki gambaran kebutuhan secara umum. Cara kerja seperti ini membuat keputusan pembelian terasa lebih aman karena fokusnya bukan hanya pada jadi atau tidak jadi order, tetapi pada seberapa tepat produk yang akhirnya dipilih.",
    features: [
      "Bahan terpal berkualitas tinggi, tahan air & UV",
      "Rangka besi galvanis anti karat",
      "Tersedia dalam berbagai ukuran",
      "Mudah dipasang dan dibongkar",
      "Cocok untuk pesta, pameran, dan acara outdoor"
    ],
    image: "/images/products/Tenda Kerucut.jpeg",
  },
  {
    id: 2,
    slug: "tenda-promosi",
    name: "Tenda Promosi (Lipat Printing)",
    category: "Tenda",
    badge: "Best Seller",
    shortDesc: "Tenda promosi printing custom untuk kebutuhan branding yang lebih tertib dan matang.",
    description: "Ada banyak alasan orang mencari Tenda Promosi, tetapi alasan yang paling sering muncul biasanya sederhana: mereka membutuhkan produk yang bekerja dengan baik sejak hari pertama dipakai. Di titik ini, kenyamanan, kerapian hasil, dan kejelasan spesifikasi menjadi sama pentingnya. Produk yang kelihatannya mirip di permukaan bisa menghasilkan pengalaman penggunaan yang sangat berbeda ketika material, ukuran, dan detail finishing-nya tidak disesuaikan dengan kondisi sebenarnya.\n\nKarena itu Tenda lambaroe menempatkan layanan Jual Tenda Promosi, Supplier Tenda Promosi, Distributor Tenda Promosi, dan Produsen Tenda Promosi dalam satu alur konsultasi yang saling terhubung.\n\nTujuannya agar pelanggan tidak berhenti di tahap memilih nama produk, tetapi bisa melanjutkan ke pembahasan tentang fungsi, kebutuhan custom, jumlah unit, sampai alur pengiriman. Hasilnya, proses pengadaan terasa lebih tertib dan keputusan pembelian lebih matang.",
    features: [
      "Printing full color resolusi tinggi",
      "Rangka aluminium/besi yang ringan & kuat",
      "Desain custom sesuai identitas brand",
      "Mudah dipasang (sistem lipat praktis)",
      "Cocok untuk promosi, bazar, dan event"
    ],
    image: "/images/products/Tenda Lipat Printing Logo.jpeg",
  },
  {
    id: 3,
    slug: "tenda-pleton-militer",
    name: "Tenda Pleton Standar Militer",
    category: "Tenda",
    shortDesc: "Tenda pleton standar militer kokoh untuk berbagai kebutuhan operasional dan posko.",
    description: "Dalam banyak proyek dan kebutuhan usaha, Tenda Pleton Standar Militer dipilih bukan hanya karena bentuknya, melainkan karena perannya cukup penting terhadap kenyamanan, alur kerja, dan tampilan area. Saat produk yang dipakai tidak sesuai, masalahnya sering terasa berlapis: pemasangan tidak praktis, area jadi kurang rapi, atau umur pakainya tidak seperti yang diharapkan. Itulah sebabnya pembelian Tenda Pleton Standar Militer sebaiknya dilihat sebagai keputusan yang menyangkut fungsi, bukan sekadar belanja barang biasa.\n\nJika Anda sedang mencari layanan Jual Tenda Pleton Standar Militer, Supplier Tenda Pleton Standar Militer, Distributor Tenda Pleton Standar Militer, dan Produsen Tenda Pleton Standar Militer, Tenda lambaroe hadir untuk membantu proses itu dengan diskusi yang lebih terarah. Kami percaya bahwa produk yang baik berawal dari pertanyaan yang tepat: siapa penggunanya, bagaimana ritme pemakaiannya, berapa jumlah yang dibutuhkan, dan detail apa yang tidak boleh terlewat. Dengan begitu, hasil akhir lebih mudah dipertanggungjawabkan dan lebih nyaman digunakan.",
    features: [
      "Bahan canvas drill tebal anti air",
      "Kapasitas besar 20–40 orang",
      "Tiang besi galvanis kokoh",
      "Sistem ventilasi udara yang optimal",
      "Standar kualitas militer dan SNI"
    ],
    image: "/images/products/Tenda Pleton Standa Militer.jpeg",
  },
  {
    id: 4,
    slug: "tenda-pramuka",
    name: "Tenda Pramuka",
    category: "Tenda",
    shortDesc: "Tenda pramuka andalan untuk kenyamanan dan keamanan aktivitas kemah.",
    description: "Dalam banyak proyek dan kebutuhan usaha, Tenda Pramuka dipilih bukan hanya karena bentuknya, melainkan karena perannya cukup penting terhadap kenyamanan, alur kerja, dan tampilan area. Saat produk yang dipakai tidak sesuai, masalahnya sering terasa berlapis: pemasangan tidak praktis, area jadi kurang rapi, atau umur pakainya tidak seperti yang diharapkan. Itulah sebabnya pembelian Tenda Pramuka sebaiknya dilihat sebagai keputusan yang menyangkut fungsi, bukan sekadar belanja barang biasa.\n\nJika Anda sedang mencari layanan Jual Tenda Pramuka, Supplier Tenda Pramuka, Distributor Tenda Pramuka, dan Produsen Tenda Pramuka, Tenda lambaroe hadir untuk membantu proses itu dengan diskusi yang lebih terarah. Kami percaya bahwa produk yang baik berawal dari pertanyaan yang tepat: siapa penggunanya, bagaimana ritme pemakaiannya, berapa jumlah yang dibutuhkan, dan detail apa yang tidak boleh terlewat. Dengan begitu, hasil akhir lebih mudah dipertanggungjawabkan dan lebih nyaman digunakan.",
    features: [
      "Material ringan namun tahan sobek",
      "Perlindungan dari cuaca (waterproof)",
      "Kapasitas bervariasi sesuai regu",
      "Pemasangan praktis dan mudah",
      "Cocok untuk kegiatan perkemahan sekolah"
    ],
    image: "/images/products/Tenda Pramuka.jpeg",
  },
  {
    id: 5,
    slug: "tenda-sarnafil",
    name: "Tenda Sarnafil",
    category: "Tenda",
    badge: "Premium",
    shortDesc: "Tenda sarnafil elegan dan presisi untuk event, pameran, maupun ruang fungsional.",
    description: "Dalam banyak proyek dan kebutuhan usaha, Tenda Sarnafil dipilih bukan hanya karena bentuknya, melainkan karena perannya cukup penting terhadap kenyamanan, alur kerja, dan tampilan area. Saat produk yang dipakai tidak sesuai, masalahnya sering terasa berlapis: pemasangan tidak praktis, area jadi kurang rapi, atau umur pakainya tidak seperti yang diharapkan. Itulah sebabnya pembelian Tenda Sarnafil sebaiknya dilihat sebagai keputusan yang menyangkut fungsi, bukan sekadar belanja barang biasa.\n\nJika Anda sedang mencari layanan Jual Tenda Sarnafil, Supplier Tenda Sarnafil, Distributor Tenda Sarnafil, dan Produsen Tenda Sarnafil, Tenda lambaroe hadir untuk membantu proses itu dengan diskusi yang lebih terarah. Kami percaya bahwa produk yang baik berawal dari pertanyaan yang tepat: siapa penggunanya, bagaimana ritme pemakaiannya, berapa jumlah yang dibutuhkan, dan detail apa yang tidak boleh terlewat. Dengan begitu, hasil akhir lebih mudah dipertanggungjawabkan dan lebih nyaman digunakan.",
    features: [
      "Material sarnafil premium yang mewah",
      "Konstruksi rangka kokoh dan presisi",
      "Tahan cuaca ekstrem (hujan dan panas)",
      "Tersedia berbagai ukuran modul",
      "Ideal untuk acara VIP dan pameran elit"
    ],
    image: "/images/products/Tenda Sarnafil.jpeg",
  },
  {
    id: 6,
    slug: "tenda-rangka-lipat",
    name: "Tenda Rangka Lipat",
    category: "Aksesoris Tenda",
    shortDesc: "Rangka tenda lipat praktis yang menyesuaikan konteks dan kebutuhan lokasi Anda.",
    description: "Tidak semua kebutuhan bisa diselesaikan oleh produk yang sifatnya serba umum.\n\nTenda Rangka Lipat termasuk produk yang sering perlu dipilih dengan konteks yang jelas karena perbedaan lokasi, target pemakaian, dan pola operasional akan sangat memengaruhi keputusan spesifikasinya. Ketika konteks itu dibahas sejak awal, hasil yang didapat biasanya terasa jauh lebih pas dan tidak membuat pengguna perlu banyak penyesuaian setelah produk sampai di lokasi.\n\nDi Tenda lambaroe, kebutuhan Jual Tenda Rangka Lipat, Supplier Tenda Rangka Lipat, Distributor Tenda Rangka Lipat, dan Produsen Tenda Rangka Lipat kami tangani dengan ritme kerja yang rapi. Kami tidak mendorong pelanggan untuk membeli lebih banyak dari yang dibutuhkan, tetapi membantu menyusun pilihan yang paling masuk akal berdasarkan fungsi. Pendekatan ini penting terutama untuk produk yang akan dipakai berulang, di area publik, atau dalam situasi yang membutuhkan koordinasi lebih tertib.",
    features: [
      "Material aluminium/besi kokoh dan stabil",
      "Sistem lipat yang cepat dan efisien",
      "Mudah dibawa dan dipindahkan (portable)",
      "Tinggi kaki yang bisa disesuaikan",
      "Tersedia dalam berbagai standar ukuran"
    ],
    image: "/images/products/Rangka Tenda Lipat.jpeg",
  },
  {
    id: 7,
    slug: "payung-parasol-custom",
    name: "Payung Parasol Custom",
    category: "Payung",
    shortDesc: "Solusi branding outdoor berkualitas yang tajam, presisi, dan tidak mudah luntur.",
    description: "Tingkatkan visibilitas bisnis Anda dengan Payung Parasol Custom dari Tenda Lambaroe. Kami melayani jasa sablon logo branding untuk berbagai keperluan promosi luar ruangan, kafe, hingga pedagang kaki lima.",
    features: [
      "Kualitas Sablon: Tajam, tidak mudah luntur, dan presisi.",
      "Material: Rangka kokoh dengan bahan kain payung yang tahan cuaca.",
      "Custom Design: Sesuaikan warna dan logo dengan identitas brand Anda (seperti contoh branding Maxim pada gambar)."
    ],
    image: "/images/products/Payung Parasol Sablon Logo Branding.jpeg",
  },
  {
    id: 8,
    slug: "jaring-pengaman-proyek",
    name: "Jaring Pengaman Proyek",
    category: "Jaring Pengaman",
    badge: "Safety",
    shortDesc: "Jaring pengaman proyek konstruksi yang dipilih sesuai konteks operasional kerja.",
    description: "Tidak semua kebutuhan bisa diselesaikan oleh produk yang sifatnya serba umum.\n\nJaring Pengaman Proyek termasuk produk yang sering perlu dipilih dengan konteks yang jelas karena perbedaan lokasi, target pemakaian, dan pola operasional akan sangat memengaruhi keputusan spesifikasinya. Ketika konteks itu dibahas sejak awal, hasil yang didapat biasanya terasa jauh lebih pas dan tidak membuat pengguna perlu banyak penyesuaian setelah produk sampai di lokasi.\n\nDi Tenda lambaroe, kebutuhan Jual Jaring Pengaman Proyek, Supplier Jaring Pengaman Proyek, Distributor Jaring Pengaman Proyek, dan Produsen Jaring Pengaman Proyek kami tangani dengan ritme kerja yang rapi. Kami tidak mendorong pelanggan untuk membeli lebih banyak dari yang dibutuhkan, tetapi membantu menyusun pilihan yang paling masuk akal berdasarkan fungsi. Pendekatan ini penting terutama untuk produk yang akan dipakai berulang, di area publik, atau dalam situasi yang membutuhkan koordinasi lebih tertib.",
    features: [
      "Bahan Polyethylene/Polypropylene densitas tinggi",
      "Menahan jatuhnya puing dan material proyek",
      "Melindungi keselamatan pekerja konstruksi",
      "Tahan cuaca dan paparan UV",
      "Pemasangan fleksibel sesuai area kerja"
    ],
    image: "/images/products/Jaring Pengaman Proyek.jpeg",
  },
  {
    id: 9,
    slug: "terpal-plastik-china",
    name: "Terpal Plastik China",
    category: "Terpal",
    shortDesc: "Opsi terpal plastik ekonomis dengan spesifikasi yang disesuaikan kebutuhan lapangan.",
    description: "Terpal Plastik China biasanya mulai dicari ketika tidak semua kebutuhan penutup memerlukan spek berat; ada banyak pekerjaan yang lebih tepat memakai opsi yang ekonomis. Pada tahap ini, banyak orang awalnya hanya membayangkan produk yang bisa segera dipakai. Padahal, keputusan yang baik justru lahir dari pembahasan yang lebih detail: bagaimana produk akan digunakan, di mana lokasinya, seberapa sering dipakai, dan seperti apa kesan yang ingin ditampilkan. Karena itu, pembicaraan tentang Terpal Plastik China hampir selalu lebih efektif ketika diarahkan pada fungsi nyata di lapangan, bukan sekadar nama produknya.\n\nTenda lambaroe melayani kebutuhan Jual Terpal Plastik China, Supplier Terpal Plastik China, Distributor Terpal Plastik China, dan Produsen Terpal Plastik China dengan pendekatan yang tidak terburu-buru. Kami terbiasa membantu pelanggan yang sudah datang dengan spesifikasi lengkap maupun pelanggan yang baru memiliki gambaran kebutuhan secara umum. Cara kerja seperti ini membuat keputusan pembelian terasa lebih aman karena fokusnya bukan hanya pada jadi atau tidak jadi order, tetapi pada seberapa tepat produk yang akhirnya dipilih.",
    features: [
      "Harga sangat ekonomis dan terjangkau",
      "Bahan ringan dan mudah dilipat/dipindahkan",
      "Cocok untuk perlindungan sementara",
      "Tahan air (waterproof)",
      "Tersedia berbagai pilihan ukuran standar"
    ],
    image: "/images/products/Terpal Plastik China.jpeg",
  },
  {
    id: 10,
    slug: "terpal-plastik-korea",
    name: "Terpal Plastik Korea",
    category: "Terpal",
    badge: "Premium",
    shortDesc: "Terpal plastik Korea premium yang bekerja optimal sejak hari pertama pemakaian.",
    description: "Ada banyak alasan orang mencari Terpal Plastik Korea, tetapi alasan yang paling sering muncul biasanya sederhana: mereka membutuhkan produk yang bekerja dengan baik sejak hari pertama dipakai. Di titik ini, kenyamanan, kerapian hasil, dan kejelasan spesifikasi menjadi sama pentingnya. Produk yang kelihatannya mirip di permukaan bisa menghasilkan pengalaman penggunaan yang sangat berbeda ketika material, ukuran, dan detail finishing-nya tidak disesuaikan dengan kondisi sebenarnya.\n\nKarena itu Tenda lambaroe menempatkan layanan Jual Terpal Plastik Korea, Supplier Terpal Plastik Korea, Distributor Terpal Plastik Korea, dan Produsen Terpal Plastik Korea dalam satu alur konsultasi yang saling terhubung. Tujuannya agar pelanggan tidak berhenti di tahap memilih nama produk, tetapi bisa melanjutkan ke pembahasan tentang fungsi, kebutuhan custom, jumlah unit, sampai alur pengiriman. Hasilnya, proses pengadaan terasa lebih tertib dan keputusan pembelian lebih matang.",
    features: [
      "Ketahanan tinggi untuk penggunaan jangka panjang",
      "Material tebal berkualitas premium",
      "Tahan cuaca ekstrem, panas, dan hujan",
      "Lapisan anti-UV untuk mencegah getas",
      "Kerapian finishing dan sambungan terjamin"
    ],
    image: "/images/products/Terpal Tipe A20 Korea.jpeg",
  },
  {
    id: 11,
    slug: "terpal-ulin-pvc",
    name: "Terpal Ulin PVC Semi Karet",
    category: "Terpal",
    badge: "Heavy Duty",
    shortDesc: "Perlindungan maksimal dengan material ekstra tebal untuk penggunaan kelas berat.",
    description: "Perlindungan Maksimal dengan Terpal Ulin PVC Semi Karet!\n\nButuh material terpal yang super kuat dan tahan lama? Terpal Ulin PVC (Semi Karet) adalah solusinya. Dirancang khusus untuk penggunaan berat (heavy duty), terpal ini memberikan perlindungan ekstra terhadap cuaca ekstrem.",
    features: [
      "100% Waterproof: Tahan air dengan teknologi semi karet.",
      "Anti-Sobek: Material lebih tebal dan elastis dibandingkan terpal biasa.",
      "Tahan Cuaca: Tidak mudah getas meski terpapar panas matahari dan hujan terus-menerus.",
      "Pilihan Warna Lengkap: Tersedia berbagai warna menarik (Merah, Kuning, Hijau, Biru, Hitam)"
    ],
    image: "/images/products/Terpal Ulin PVC Semi Karet.jpeg",
  },
  {
    id: 12,
    slug: "terpal-plastik-a12-korea-import",
    name: "Terpal Plastik Tipe A12 Korea Import",
    category: "Terpal",
    shortDesc: "Terpal A12 impor Korea untuk perlindungan menengah yang solid dan awet.",
    description: "Ada banyak alasan orang mencari Terpal Plastik Korea, tetapi alasan yang paling sering muncul biasanya sederhana: mereka membutuhkan produk yang bekerja dengan baik sejak hari pertama dipakai. Di titik ini, kenyamanan, kerapian hasil, dan kejelasan spesifikasi menjadi sama pentingnya. Produk yang kelihatannya mirip di permukaan bisa menghasilkan pengalaman penggunaan yang sangat berbeda ketika material, ukuran, dan detail finishing-nya tidak disesuaikan dengan kondisi sebenarnya.\n\nKarena itu Tenda lambaroe menempatkan layanan Jual Terpal Plastik Korea, Supplier Terpal Plastik Korea, Distributor Terpal Plastik Korea, dan Produsen Terpal Plastik Korea dalam satu alur konsultasi yang saling terhubung. Tujuannya agar pelanggan tidak berhenti di tahap memilih nama produk, tetapi bisa melanjutkan ke pembahasan tentang fungsi, kebutuhan custom, jumlah unit, sampai alur pengiriman. Hasilnya, proses pengadaan terasa lebih tertib dan keputusan pembelian lebih matang.",
    features: [
      "Material PE Tipe A12 Korea Import",
      "Kualitas awet untuk pemakaian menengah",
      "Tahan cuaca, panas, dan hujan",
      "Lapisan pelindung anti-air",
      "Cocok untuk proyek dan logistik"
    ],
    image: "/images/products/Terpal Plastik Tipe A12 Korea Import.jpeg",
  },
  {
    id: 13,
    slug: "terpal-plastik-a20-royal-crown",
    name: "Terpal Plastik Tipe A20 Royal Crown",
    category: "Terpal",
    badge: "Premium",
    shortDesc: "Terpal Royal Crown Tipe A20 ekstra tebal untuk kebutuhan premium industri.",
    description: "Terpal tipe A20 Royal Crown memberikan ketebalan maksimal untuk daya tahan terbaik. Ada banyak alasan orang mencari Terpal Plastik Korea, tetapi alasan yang paling sering muncul biasanya sederhana: mereka membutuhkan produk yang bekerja dengan baik sejak hari pertama dipakai. Di titik ini, kenyamanan, kerapian hasil, dan kejelasan spesifikasi menjadi sama pentingnya. Produk yang kelihatannya mirip di permukaan bisa menghasilkan pengalaman penggunaan yang sangat berbeda ketika material, ukuran, dan detail finishing-nya tidak disesuaikan dengan kondisi sebenarnya.\n\nKarena itu Tenda lambaroe menempatkan layanan dalam satu alur konsultasi yang saling terhubung. Tujuannya agar pelanggan tidak berhenti di tahap memilih nama produk, tetapi bisa melanjutkan ke pembahasan tentang fungsi, kebutuhan custom, jumlah unit, sampai alur pengiriman. Hasilnya, proses pengadaan terasa lebih tertib dan keputusan pembelian lebih matang.",
    features: [
      "Merek premium Royal Crown",
      "Tingkat ketebalan A20 tertinggi",
      "Tahan banting untuk industri",
      "Perlindungan optimal dari cuaca ekstrem",
      "Jahitan dan press super kuat"
    ],
    image: "/images/products/Terpal Plastik Tipe A20 Royal Crown.jpeg",
  },
  {
    id: 14,
    slug: "terpal-tipe-a12-korea",
    name: "Terpal Tipe A12 Korea",
    category: "Terpal",
    shortDesc: "Terpal Tipe A12 Korea asli yang tangguh dan serbaguna.",
    description: "Ada banyak alasan orang mencari Terpal Plastik Korea, tetapi alasan yang paling sering muncul biasanya sederhana: mereka membutuhkan produk yang bekerja dengan baik sejak hari pertama dipakai. Di titik ini, kenyamanan, kerapian hasil, dan kejelasan spesifikasi menjadi sama pentingnya. Produk yang kelihatannya mirip di permukaan bisa menghasilkan pengalaman penggunaan yang sangat berbeda ketika material, ukuran, dan detail finishing-nya tidak disesuaikan dengan kondisi sebenarnya.\n\nKarena itu Tenda lambaroe menempatkan layanan Jual Terpal Plastik Korea, Supplier Terpal Plastik Korea, Distributor Terpal Plastik Korea, dan Produsen Terpal Plastik Korea dalam satu alur konsultasi yang saling terhubung. Tujuannya agar pelanggan tidak berhenti di tahap memilih nama produk, tetapi bisa melanjutkan ke pembahasan tentang fungsi, kebutuhan custom, jumlah unit, sampai alur pengiriman. Hasilnya, proses pengadaan terasa lebih tertib dan keputusan pembelian lebih matang.",
    features: [
      "Grade A12 yang tebal dan solid",
      "Asli material Korea",
      "Serbaguna untuk alas dan atap",
      "Kerapian finishing pinggir",
      "Daya tahan luar ruangan yang baik"
    ],
    image: "/images/products/Terpal Tipe A12 Korea.jpeg",
  },
  {
    id: 15,
    slug: "terpal-uno-410-550",
    name: "Terpal Uno 410-550",
    category: "Terpal",
    badge: "Super Thick",
    shortDesc: "Terpal PVC Uno 410-550 GSM, andalan untuk atap tenda dan pelindung truk.",
    description: "Terpal Uno dengan gramasi 410 hingga 550 GSM dirancang khusus bagi Anda yang tidak bisa berkompromi dengan kekuatan. Material terpal berbahan dasar PVC (semi karet) ini terbukti tangguh menahan abrasi, benturan, dan tekanan cuaca ekstrem dalam jangka panjang. Penggunaannya sangat luas, mulai dari atap tenda membrane, tenda sarnafil, hingga penutup bak truk industri.\n\nKami di Tenda Lambaroe percaya bahwa memilih Terpal Uno bukan sekadar transaksi barang, tetapi investasi keamanan. Karena itu, kami melayani pemesanan dengan panduan yang jujur dan tertib agar ketebalan serta ukuran produk persis seperti apa yang proyek Anda butuhkan.",
    features: [
      "Material PVC berkualitas tinggi (410 - 550 GSM)",
      "Lapisan anti air (waterproof) total",
      "Daya tahan sobek sangat kuat",
      "Ideal untuk atap tenda dan truk industri",
      "Tidak mudah getas oleh panas matahari"
    ],
    image: "/images/products/Terpal Uno 410-550.jpeg",
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}
