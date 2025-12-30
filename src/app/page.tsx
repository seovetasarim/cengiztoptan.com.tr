"use client";

import Image from "next/image";

// Papatya komponenti
const Daisy = ({ className = "", size = 40 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
  >
    {/* Yapraklar */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <ellipse
        key={angle}
        cx="50"
        cy="25"
        rx="12"
        ry="22"
        fill="white"
        fillOpacity="0.9"
        transform={`rotate(${angle} 50 50)`}
      />
    ))}
    {/* Orta sarı kısım */}
    <circle cx="50" cy="50" r="15" fill="#fbbf24" />
    <circle cx="50" cy="50" r="10" fill="#f59e0b" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Dönen Papatyalar */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Sol üst */}
        <div className="absolute -top-10 -left-10 animate-spin-slow opacity-20">
          <Daisy size={120} />
        </div>
        {/* Sağ üst */}
        <div className="absolute -top-5 -right-5 animate-spin-slow-reverse opacity-15">
          <Daisy size={80} />
        </div>
        {/* Sol alt */}
        <div className="absolute -bottom-10 -left-5 animate-spin-slow-reverse opacity-15">
          <Daisy size={100} />
        </div>
        {/* Sağ alt */}
        <div className="absolute -bottom-5 -right-10 animate-spin-slow opacity-20">
          <Daisy size={90} />
        </div>
        {/* Orta sol */}
        <div className="absolute top-1/3 -left-8 animate-spin-slow opacity-10">
          <Daisy size={60} />
        </div>
        {/* Orta sağ */}
        <div className="absolute top-1/2 -right-8 animate-spin-slow-reverse opacity-10">
          <Daisy size={70} />
        </div>
      </div>

      {/* SEO için gizli içerik */}
      <div className="sr-only">
        <h2>Cengiz Toptan - Toptan Çocuk Giyim Toptancısı</h2>
        <p>Toptan çocuk mont satışı yapan güvenilir tedarikçi. Toptan çocuk bot ve çocuk ayakkabı toptancısı.</p>
        <p>Çocuk giyim toptan fiyatları ile kaliteli ürünler. Toptan bebek giyim, toptan çocuk kıyafet.</p>
        <p>İstanbul toptan çocuk giyim merkezi. Kışlık çocuk mont toptan, çocuk bot toptan satış.</p>
        <p>cengiztoptan.com - cengiztoptan.com.tr - Toptan çocuk mont - Toptan çocuk bot</p>
        <ul>
          <li>Toptan çocuk mont</li>
          <li>Toptan çocuk bot</li>
          <li>Çocuk giyim toptan</li>
          <li>Toptan çocuk ayakkabı</li>
          <li>Toptan bebek giyim</li>
          <li>Çocuk mont toptancısı</li>
          <li>Çocuk bot toptancısı</li>
          <li>İstanbul toptan çocuk giyim</li>
          <li>Toptan kışlık çocuk giyim</li>
        </ul>
      </div>

      {/* İçerik */}
      <div className="min-h-screen flex flex-col relative z-10">
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 pt-0 pb-12">
          <article className="w-full max-w-3xl mx-auto" itemScope itemType="https://schema.org/Article">
            {/* Header - Logo */}
            <header className="-mb-8 flex justify-center">
              <div itemProp="publisher">
                <Image
                  src="/68a5dc19-7897-458b-a60f-9c92308a91a9-Photoroom.png"
                  alt="Cengiz Toptan Logo"
                  width={500}
                  height={180}
                  className="w-72 sm:w-96 md:w-[450px] h-auto"
                  priority
                  quality={100}
                />
              </div>
              <h2 className="sr-only">Cengiz Toptan - Toptan Çocuk Mont ve Toptan Çocuk Bot Satışı - Çocuk Giyim Toptancısı</h2>
            </header>

            {/* Ana Başlık */}
            <header className="mb-10 pb-8 border-b border-neutral-800">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-center sm:text-left" itemProp="headline">
                Geçmiş Dönem Bilgilendirme ve Kamuoyu Duyurusu
              </h1>
              <p className="sr-only">Cengiz Toptan - Toptan çocuk mont, toptan çocuk bot, çocuk giyim toptan satış firması hakkında bilgilendirme.</p>
            </header>

            {/* İçerik */}
            <div className="space-y-6 text-neutral-300 leading-relaxed text-base sm:text-lg" itemProp="articleBody">
              <p>
                Bu sayfa, 2020–2021 yıllarında <strong>Cengiz Toptan</strong> (cengiztoptan.com / cengiztoptan.com.tr) ile ticari ilişkide bulunmuş kişi ve kurumlara yönelik bilgilendirme amacıyla hazırlanmıştır.
              </p>

              <p>
                Pandemi döneminde yaşanan olağanüstü ekonomik koşullar sebebiyle firmamız faaliyetlerini durdurmak zorunda kalmıştır. Bu süreçte, ailemizin desteğiyle ticari yükümlülüklerin büyük bölümü yerine getirilmiştir.
              </p>

              <p>
                Buna rağmen; iletişim kurulamamış, gözden kaçmış veya tam mutabakat sağlanamamış alacaklar bulunabileceği ihtimali göz önünde bulundurularak bu duyuru yapılmaktadır.
              </p>

              <p>
                2020–2021 dönemine ait alacağı olduğunu düşünen kişi ve kurumların, dekont, fatura veya yazılı belge ile birlikte tarafımıza başvurması rica olunur. Belgeli başvurular titizlikle incelenecek, haklı talepler için karşılıklı mutabakat esas alınacaktır.
              </p>

              <p>
                Ancak açıkça ifade edilmelidir ki; bu zorlu süreçte iyi niyetle ticaret yapmaya çalışan birçok kişi ve işletme, krizi fırsata çevirmeye çalışan, etik ve ahlaki sorumluluklardan uzak, başkalarının emeği üzerinden algı oluşturmaya çalışan kişiler nedeniyle mağdur edilmiştir.
              </p>

              <p>
                Firmamız; iftira, karalama ve belgeye dayanmayan iddialarla ticaret anlayışını benimseyenleri hiçbir zaman muhatap almamış, her koşulda şeffaflık ve hesap verebilirlik ilkesini esas almıştır.
              </p>

              <p>
                Bu duyurunun amacı; geçmiş döneme ait ticari ilişkileri adil, belgeli ve hukuka uygun şekilde sonuçlandırmaktır. Belgeye dayanmayan, algı oluşturmaya yönelik başvurular dikkate alınmayacaktır.
              </p>
            </div>

            {/* İletişim */}
            <section className="mt-12 pt-8 border-t border-neutral-800" itemScope itemType="https://schema.org/ContactPoint">
              <h2 className="text-lg sm:text-xl font-semibold mb-6 text-center sm:text-left">İletişim</h2>
              <div className="space-y-3 text-neutral-300 text-center sm:text-left">
                <p className="text-base sm:text-lg">
                  Telefon / WhatsApp: <a href="https://wa.me/905321667697" className="text-white hover:underline font-medium" itemProp="telephone">0532 166 76 97</a>
                </p>
                <p className="text-base sm:text-lg">Yetkili: <span itemProp="name">Cihat Cengiz</span></p>
              </div>
              <p className="mt-6 text-sm text-neutral-500 text-center sm:text-left">
                İletişim yalnızca yukarıda belirtilen kanal üzerinden sağlanacaktır.
              </p>
              <p className="sr-only">Toptan çocuk mont ve toptan çocuk bot siparişleri için iletişime geçin. Çocuk giyim toptan satış.</p>
            </section>

            {/* Kapanış */}
            <div className="mt-12 pt-8 border-t border-neutral-800 text-neutral-400 text-center sm:text-left">
              <p className="italic text-base sm:text-lg">Kamuoyuna saygıyla duyurulur.</p>
            </div>
          </article>
        </div>

        {/* Footer */}
        <footer className="px-4 sm:px-6 md:px-8 lg:px-16 py-8 border-t border-neutral-800 relative z-10">
          <div className="max-w-3xl mx-auto space-y-3 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-neutral-600">
              Bu site herhangi bir ticari faaliyet, satış veya pazarlama amacı taşımamaktadır.
            </p>
            <p className="text-xs sm:text-sm text-neutral-600">
              © cengiztoptan.com
            </p>
            <p className="sr-only">
              Cengiz Toptan - cengiztoptan.com - cengiztoptan.com.tr 
              Toptan çocuk mont, toptan çocuk bot, çocuk giyim toptan, 
              toptan bebek giyim, çocuk mont toptancısı, çocuk bot toptancısı,
              İstanbul toptan çocuk giyim, toptan kışlık çocuk giyim.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
