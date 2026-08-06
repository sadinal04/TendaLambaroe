export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  description: string;
  features: string[];
  image: string;
  images?: string[];
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
    images: [
      "/images/products/Tenda Lipat Printing Logo.jpeg",
      "/images/products/Tenda Lipat Printing Logo_2.jpeg",
      "/images/products/Tenda Lipat Printing Logo_3.jpeg",
      "/images/products/Tenda Lipat Printing Logo_4.jpeg",
      "/images/products/Tenda Lipat Printing Logo_5.jpeg"
    ],
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
    images: [
      "/images/products/Tenda Sarnafil.jpeg",
      "/images/products/Tenda Sarnafil_2.jpeg",
      "/images/products/Tenda Sarnafil_3.jpeg"
    ],
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
    images: [
      "/images/products/Payung Parasol Sablon Logo Branding.jpeg",
      "/images/products/Payung Parasol Sablon Logo Branding_2.jpeg",
      "/images/products/Payung Parasol Sablon Logo Branding_3.jpeg",
      "/images/products/Payung Parasol Sablon Logo Branding_4.jpeg"
    ],
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
  },
  {
    id: 16,
    slug: "tenda-lipat-printing-logo-premium-3x3",
    name: "Tenda Lipat Printing Logo Premium 3x3",
    category: "Tenda",
    badge: "Premium",
    shortDesc: "Tenda lipat full printing premium untuk branding usaha yang rapi dan mencolok.",
    description: "Tenda Lipat Printing Logo Premium 3x3 hadir sebagai solusi terbaik untuk promosi usaha, event, bazar, pameran, hingga kegiatan outdoor. Dengan desain elegan dan cetak logo full printing berkualitas premium, tenda ini mampu meningkatkan branding bisnis agar terlihat lebih profesional dan mudah menarik perhatian pelanggan.\n\nMenggunakan rangka kokoh dan bahan terpal berkualitas, tenda lipat 3x3 ini tetap nyaman dipakai di berbagai kondisi cuaca. Proses printing yang tajam, warna cerah, dan hasil yang awet membuat tampilan brand Anda semakin maksimal.\n\nTOP Tenda Terpal siap membantu kebutuhan tenda promosi custom dengan harga terjangkau dan kualitas terpercaya.",
    features: [
      "Ukuran 3x3 meter",
      "Bisa custom logo & desain",
      "Material premium & kuat",
      "Cocok untuk event, UMKM, booth, dan promosi usaha",
      "Harga terjangkau & kualitas terpercaya"
    ],
    image: "/images/products/Tenda Lipat Printing Logo Premium 3x3_1.jpeg",
    images: [
      "/images/products/Tenda Lipat Printing Logo Premium 3x3_1.jpeg",
      "/images/products/Tenda Lipat Printing Logo Premium 3x3_2.jpeg"
    ],
  },
  {
    id: 17,
    slug: "terpal-a12-korea-silver-biru",
    name: "Terpal A12 Korea Silver Biru",
    category: "Terpal",
    badge: "Premium",
    shortDesc: "Terpal A12 premium dengan kombinasi silver biru untuk perlindungan yang kuat dan modern.",
    description: "Terpal A12 Korea Silver Biru hadir dengan kualitas premium berbahan kuat dan tahan lama untuk berbagai kebutuhan penutup dan perlindungan. Kombinasi warna silver dan biru memberikan tampilan modern sekaligus membantu memantulkan panas lebih optimal, cocok digunakan untuk kebutuhan industri, proyek, pertanian, hingga outdoor.\n\nDengan kualitas standar Korea, terpal ini menjadi pilihan tepat untuk kebutuhan perlindungan maksimal dengan daya tahan tinggi. Materialnya kuat, finishing rapi, dan siap dipakai untuk kebutuhan harian maupun pekerjaan yang menuntut ketahanan lebih.",
    features: [
      "Material kuat dan awet",
      "Tahan air dan cuaca ekstrem",
      "Permukaan silver membantu mengurangi panas",
      "Dilengkapi ring mata ikan berkualitas",
      "Finishing hot press lebih rapi dan kokoh",
      "List pinggir lebih kuat dan tahan lama",
      "Cocok untuk penutup barang, gudang, truk, dan proyek"
    ],
    image: "/images/products/Terpal A12 Korea Silver Biru.jpeg",
    images: [
      "/images/products/Terpal A12 Korea Silver Biru.jpeg",
      "/images/products/Terpal A12 Korea Silver Biru_2.jpeg",
      "/images/products/Terpal A12 Korea Silver Biru_3.jpeg"
    ],
  },
  {
    id: 18,
    slug: "terpal-uno-410-gsm-merah-hijau",
    name: "Terpal UNO 410 GSM Merah Hijau",
    category: "Terpal",
    shortDesc: "Terpal UNO 410 GSM tebal dan awet untuk kebutuhan penutup serbaguna.",
    description: "Terpal UNO 410 GSM Merah Hijau hadir dengan material premium berkualitas tinggi yang kuat, tebal, dan tahan lama untuk berbagai kebutuhan penutup dan pelindung. Dengan ketebalan 410 GSM, terpal ini cocok digunakan untuk proyek, pergudangan, pertanian, penutup barang, hingga kebutuhan outdoor lainnya.\n\nTerpal ini menjadi pilihan tepat bagi Anda yang membutuhkan perlindungan maksimal dengan tampilan premium dan kualitas terpercaya. Finishing yang rapi dan material yang kokoh membuatnya nyaman dipakai untuk penggunaan harian maupun jangka panjang.",
    features: [
      "Material tebal dan kuat",
      "Tahan air dan cuaca ekstrem",
      "Tidak mudah sobek",
      "Warna merah dan hijau yang elegan",
      "Dilengkapi ring mata ikan",
      "Finishing hot press rapi dan kokoh",
      "List pinggir lebih kuat dan awet"
    ],
    image: "/images/products/Terpal Uno 410 GSM_1.jpeg",
    images: [
      "/images/products/Terpal Uno 410 GSM_1.jpeg",
      "/images/products/Terpal Uno 410 GSM_2.jpeg"
    ],
  },
  {
    id: 19,
    slug: "terpal-a30-korea",
    name: "Terpal A30 Korea",
    category: "Terpal",
    badge: "Heavy Duty",
    shortDesc: "Terpal heavy duty A30 Korea dengan daya tahan tinggi untuk kebutuhan industri.",
    description: "Terpal A30 Korea merupakan terpal heavy duty berkualitas tinggi dengan material kuat dan tahan lama, diproduksi menggunakan teknologi Korea untuk kebutuhan perlindungan maksimal di berbagai kondisi. Cocok digunakan untuk penutup barang, proyek konstruksi, pertanian, pergudangan, hingga kebutuhan outdoor lainnya.\n\nMaterial yang tebal, kuat, dan rapi membuat terpal ini ideal untuk penggunaan yang membutuhkan daya tahan lebih. TOP Tenda Terpal menyediakan solusi terpal berkualitas dengan harga kompetitif untuk kebutuhan usaha maupun pribadi.",
    features: [
      "Material tebal dan kuat (Heavy Duty)",
      "Tahan terhadap panas dan hujan",
      "Tidak mudah sobek dan awet digunakan",
      "Dilengkapi ring mata ikan berkualitas",
      "Finishing hot press lebih rapi dan kuat",
      "List pinggir lebih kokoh dan tahan lama",
      "Cocok untuk penggunaan industri dan harian"
    ],
    image: "/images/products/Terpal A30 Korea.jpeg",
  },
  {
    id: 20,
    slug: "terpal-a12-royal-crown",
    name: "Terpal A12 Royal Crown",
    category: "Terpal",
    badge: "Premium",
    shortDesc: "Terpal premium Royal Crown dengan material kuat dan finishing rapi.",
    description: "Terpal A12 Royal Crown adalah pilihan terpal berkualitas premium dengan material kuat dan tahan lama, cocok untuk berbagai kebutuhan industri, pertanian, proyek, hingga penutup barang. Menggunakan teknologi Korea dengan standar kualitas tinggi, terpal ini hadir dengan daya tahan optimal terhadap panas, hujan, dan penggunaan jangka panjang.\n\nDengan finishing yang rapi dan konstruksi yang kokoh, terpal ini memberikan perlindungan maksimal sekaligus tampilan yang lebih profesional untuk kebutuhan lapangan maupun operasional usaha.",
    features: [
      "Material tebal dan kuat",
      "Tahan air dan cuaca ekstrem",
      "Dilengkapi ring mata ikan",
      "Proses hot press rapi dan kuat",
      "Finishing list pinggir lebih awet",
      "Cocok untuk gudang, proyek, kolam, truk, dan kebutuhan outdoor lainnya"
    ],
    image: "/images/products/Terpal A12 Royal Crown.jpeg",
  },
  {
    id: 21,
    slug: "terpal-uno-550-gsm",
    name: "Terpal UNO 550 GSM",
    category: "Terpal",
    badge: "Super Thick",
    shortDesc: "Terpal UNO 550 GSM tebal untuk perlindungan maksimal di proyek dan kebutuhan industri.",
    description: "Terpal UNO 550 GSM merupakan pilihan terpal berkualitas tinggi yang dirancang untuk kebutuhan penutup, pelindung, dan aplikasi industri maupun komersial. Dengan ketebalan 550 GSM, terpal ini memiliki daya tahan kuat terhadap cuaca, air, dan penggunaan jangka panjang.\n\nMenggunakan material premium dengan proses hot press, permukaan terpal lebih rapat, kuat, dan tahan sobek. Dilengkapi ring mata ikan serta list pinggir yang rapi dan kokoh, sehingga memudahkan pemasangan dan memberikan perlindungan maksimal.\n\nTOP Tenda Terpal menghadirkan solusi terpal berkualitas dengan material terbaik dan harga kompetitif.",
    features: [
      "Ketebalan 550 GSM yang kuat dan awet",
      "Warna biru dan merah yang elegan",
      "Tahan air dan tahan cuaca",
      "Proses hot press untuk hasil lebih kuat",
      "Dilengkapi ring mata ikan",
      "Finishing list pinggir rapi dan tahan lama",
      "Cocok untuk berbagai kebutuhan industri dan outdoor"
    ],
    image: "/images/products/Terpal UNO 550 GSM_Biru.jpeg",
    images: [
      "/images/products/Terpal UNO 550 GSM_Biru.jpeg",
      "/images/products/Terpal UNO 550 GSM_Merah.jpeg"
    ],
  },
  {
    id: 22,
    slug: "terpal-ulin-pvc-orchid",
    name: "Terpal ULIN PVC Orchid",
    category: "Terpal",
    shortDesc: "Terpal PVC orchid premium yang kuat, lentur, dan cocok untuk kebutuhan outdoor.",
    description: "Terpal ULIN PVC Orchid hadir sebagai solusi terpal premium dengan material PVC berkualitas tinggi yang kuat, fleksibel, dan tahan lama. Memiliki tampilan warna orchid yang modern dan elegan, terpal ini cocok digunakan untuk berbagai kebutuhan industri, komersial, maupun outdoor.\n\nDiproses menggunakan teknologi hot press, sehingga menghasilkan sambungan yang lebih rapat dan kokoh. Dilengkapi dengan ring mata ikan dan list pinggir yang rapi untuk memudahkan pemasangan serta meningkatkan daya tahan penggunaan.\n\nTOP Tenda Terpal menyediakan berbagai pilihan terpal berkualitas dengan material terbaik untuk kebutuhan usaha, proyek, maupun penggunaan harian.",
    features: [
      "Material PVC berkualitas premium",
      "Warna orchid yang menarik dan modern",
      "Tahan air dan tahan terhadap cuaca",
      "Kuat, lentur, dan tidak mudah sobek",
      "Finishing hot press lebih rapi dan tahan lama",
      "Dilengkapi ring mata ikan",
      "Sudah termasuk list pinggir"
    ],
    image: "/images/products/Terpal ULIN PVC Orchid_1.jpeg",
    images: [
      "/images/products/Terpal ULIN PVC Orchid_1.jpeg",
      "/images/products/Terpal ULIN PVC Orchid_2.jpeg"
    ],
  },
  {
    id: 23,
    slug: "tas-motor-premium",
    name: "Tas Motor Premium",
    category: "Aksesoris Tenda",
    shortDesc: "Tas motor premium yang kuat, praktis, dan cocok untuk aktivitas harian maupun usaha delivery.",
    description: "TOP Tenda Terpal menghadirkan Tas Motor Premium yang dirancang untuk kebutuhan harian maupun usaha delivery. Dengan bahan tebal dan jahitan kuat, tas ini siap menemani aktivitas Anda dengan aman dan nyaman.\n\nDesainnya praktis, mudah dipasang pada motor, dan cocok digunakan untuk kebutuhan usaha, perjalanan, maupun penggunaan sehari-hari.\n\nDapatkan tas motor berkualitas dengan harga terbaik hanya di TOP Tenda Terpal.",
    features: [
      "Material kuat & awet",
      "Kapasitas besar untuk membawa barang lebih banyak",
      "Desain simpel dan elegan",
      "Mudah dipasang pada motor",
      "Cocok untuk usaha, perjalanan, maupun penggunaan sehari-hari"
    ],
    image: "/images/products/TAS MOTOR PREMIUM.jpeg",
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}
