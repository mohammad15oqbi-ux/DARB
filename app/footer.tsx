import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A3A6B] text-[#94A3B8] pt-12 sm:pt-14 text-sm">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* الأعمدة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8 lg:gap-10 pb-10 text-center sm:text-right">

          {/* العمود 1: الشعار */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-white text-xl sm:text-2xl font-extrabold mb-3">
              <i className="fa-solid fa-graduation-cap text-[#00B4D8]" />
              <span>درب</span>
            </div>
            <p className="leading-relaxed mb-4 max-w-[280px] mx-auto sm:mx-0 text-sm">
              منصة تعليمية سعودية تقدم دورات تقنية ومهنية للمبتدئين والمحترفين.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <a href="#" className="w-9 h-9 rounded-full border border-[#1A3A5C] text-[#94A3B8] flex items-center justify-center no-underline hover:text-[#00B4D8] hover:border-[#00B4D8] hover:-translate-y-0.5 transition-all duration-300" aria-label="X">
                <i className="fa-brands fa-x-twitter text-sm" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#1A3A5C] text-[#94A3B8] flex items-center justify-center no-underline hover:text-[#00B4D8] hover:border-[#00B4D8] hover:-translate-y-0.5 transition-all duration-300" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in text-sm" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#1A3A5C] text-[#94A3B8] flex items-center justify-center no-underline hover:text-[#00B4D8] hover:border-[#00B4D8] hover:-translate-y-0.5 transition-all duration-300" aria-label="YouTube">
                <i className="fa-brands fa-youtube text-sm" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#1A3A5C] text-[#94A3B8] flex items-center justify-center no-underline hover:text-[#00B4D8] hover:border-[#00B4D8] hover:-translate-y-0.5 transition-all duration-300" aria-label="Telegram">
                <i className="fa-brands fa-telegram text-sm" />
              </a>
            </div>
          </div>

          {/* العمود 2: روابط سريعة */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 sm:mb-5">روابط سريعة</h3>
            <ul className="list-none space-y-2.5">
              <li><Link href="/" className="text-[#94A3B8] no-underline hover:text-[#00B4D8] hover:mr-1 transition-all duration-300 inline-block">الرئيسية</Link></li>
              <li><Link href="/" className="text-[#94A3B8] no-underline hover:text-[#00B4D8] hover:mr-1 transition-all duration-300 inline-block">جميع الدورات</Link></li>
              <li><Link href="#" className="text-[#94A3B8] no-underline hover:text-[#00B4D8] hover:mr-1 transition-all duration-300 inline-block">عن منصة درب</Link></li>
              <li><Link href="#" className="text-[#94A3B8] no-underline hover:text-[#00B4D8] hover:mr-1 transition-all duration-300 inline-block">الأسئلة الشائعة</Link></li>
            </ul>
          </div>

          {/* العمود 3: للطلاب */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 sm:mb-5">للطلاب</h3>
            <ul className="list-none space-y-2.5">
              <li><Link href="#" className="text-[#94A3B8] no-underline hover:text-[#00B4D8] hover:mr-1 transition-all duration-300 inline-block">حسابي</Link></li>
              <li><Link href="#" className="text-[#94A3B8] no-underline hover:text-[#00B4D8] hover:mr-1 transition-all duration-300 inline-block">دوراتي</Link></li>
              <li><Link href="#" className="text-[#94A3B8] no-underline hover:text-[#00B4D8] hover:mr-1 transition-all duration-300 inline-block">الشهادات</Link></li>
              <li><Link href="#" className="text-[#94A3B8] no-underline hover:text-[#00B4D8] hover:mr-1 transition-all duration-300 inline-block">الدعم والمساعدة</Link></li>
            </ul>
          </div>

          {/* العمود 4: تواصل معنا */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 sm:mb-5">تواصل معنا</h3>
            <a href="mailto:info@darb.sa" className="flex items-center justify-center sm:justify-start gap-2 mb-4 text-[#94A3B8] no-underline hover:text-[#00B4D8] transition-all duration-300 text-sm">
              <i className="fa-solid fa-envelope text-[#00B4D8]" />
              <span>info@darb.sa</span>
            </a>
            <a href="https://wa.me/966500000000" target="_blank" className="inline-flex items-center justify-center gap-2 bg-[#00B4D8] text-white px-5 py-2.5 rounded-xl font-bold text-sm no-underline hover:bg-[#0096b4] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
              <i className="fa-brands fa-whatsapp" /> الدعم الفوري
            </a>
          </div>

        </div>
      </div>

      {/* الشريط السفلي */}
      <div className="bg-[#051C2E] border-t border-[#1A3A5C] py-5">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 text-center text-xs sm:text-sm">
          <span>جميع الحقوق محفوظة © 2026 منصة درب</span>
          <div className="flex items-center gap-1">
            <Link href="#" className="text-[#94A3B8] no-underline hover:text-[#00B4D8] transition-all duration-300">الشروط والأحكام</Link>
            <span className="text-[#1A3A5C]">|</span>
            <Link href="#" className="text-[#94A3B8] no-underline hover:text-[#00B4D8] transition-all duration-300">سياسة الخصوصية</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}