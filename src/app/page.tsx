export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* SEO için gizli içerik - Arama motorları okur, kullanıcılar görmez */}
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
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12">
          <article className="w-full max-w-3xl mx-auto" itemScope itemType="https://schema.org/Article">
            {/* Header */}
            <header className="mb-12 text-center sm:text-left">
              <div className="text-base sm:text-lg font-semibold tracking-wide" itemProp="publisher">
                CENGİZ TOPTAN
              </div>
              <h2 className="sr-only">Toptan Çocuk Mont ve Toptan Çocuk Bot Satışı - Çocuk Giyim Toptancısı</h2>
            </header>

            {/* Ana Başlık */}
            <header className="mb-12 pb-8 border-b border-neutral-800">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-center sm:text-left" itemProp="headline">
                Geçmiş Dönem Bilgilendirme ve Kamuoyu Duyurusu
              </h1>
              <p className="sr-only">Cengiz Toptan - Toptan çocuk mont, toptan çocuk bot, çocuk giyim toptan satış firması hakkında bilgilendirme.</p>
            </header>

            {/* İçerik */}
            <div className="space-y-8 text-neutral-300 leading-relaxed text-base sm:text-lg" itemProp="articleBody">
              <p className="text-justify sm:text-left">
                Bu sayfa, 2019–2020 yıllarında <strong>Cengiz Toptan</strong> (cengiztoptan.com / cengiztoptan.com.tr) ile ticari ilişkide bulunmuş kişi ve kurumlara yönelik bilgilendirme amacıyla hazırlanmıştır.
              </p>

              <p className="text-justify sm:text-left">
                Pandemi döneminde yaşanan olağanüstü ekonomik koşullar sebebiyle firmamız faaliyetlerini durdurmak zorunda kalmıştır. Bu süreçte, ailemizin desteğiyle ticari yükümlülüklerin büyük bölümü yerine getirilmiştir.
              </p>

              <p className="text-justify sm:text-left">
                Buna rağmen; iletişim kurulamamış, gözden kaçmış veya tam mutabakat sağlanamamış alacaklar bulunabileceği ihtimali göz önünde bulundurularak bu duyuru yapılmaktadır.
              </p>

              <p className="text-justify sm:text-left">
                2019–2020 dönemine ait alacağı olduğunu düşünen kişi ve kurumların, dekont, fatura veya yazılı belge ile birlikte tarafımıza başvurması rica olunur. Belgeli başvurular titizlikle incelenecek, haklı talepler için karşılıklı mutabakat esas alınacaktır.
              </p>

              <p className="text-justify sm:text-left">
                Ancak açıkça ifade edilmelidir ki; bu zorlu süreçte iyi niyetle ticaret yapmaya çalışan birçok kişi ve işletme, krizi fırsata çevirmeye çalışan, etik ve ahlaki sorumluluklardan uzak, başkalarının emeği üzerinden algı oluşturmaya çalışan kişiler nedeniyle mağdur edilmiştir.
              </p>

              <p className="text-justify sm:text-left">
                Firmamız; iftira, karalama ve belgeye dayanmayan iddialarla ticaret anlayışını benimseyenleri hiçbir zaman muhatap almamış, her koşulda şeffaflık ve hesap verebilirlik ilkesini esas almıştır.
              </p>

              <p className="text-justify sm:text-left">
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
        <footer className="px-4 sm:px-6 md:px-8 lg:px-16 py-8 border-t border-neutral-800">
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
