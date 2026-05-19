'use client';

import { useState } from 'react';

interface CodeItem {
  id: string;
  code: string;
  status: 'active' | 'used';
}

interface CourseData {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  thumbnail: string;
  stats: {
    students: number;
    codesSold: number;
    rating: number;
  };
  profit: number;
  recentCodes: CodeItem[];
}

const Icons = {
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-current">
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
    </svg>
  ),
  GraduationCap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 fill-current">
      <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 99.8c-2.6 9.4-4 19.2-4 28.7c0 35.3 28.7 64 64 64c32.5 0 59.6-23.9 63.6-55.5c3-23.7-2.4-47.4-13.1-68.4c8.6-14.1 20.1-24.3 33.5-29.5l96.5-33.1c7.6-2.6 15.7-4.1 23.7-4.1s16.1 1.4 23.7 4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 291.9v-9.1l157.4 54c22.1 7.6 47.1 7.6 69.2 0l157.4-54v9.1c0 49.9-61.9 87.1-137.7 94.4c-17.3 1.7-35.1 1.7-52.3 0C189.9 379 128 341.8 128 291.9z"/>
    </svg>
  ),
  Ticket: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5 fill-current">
      <path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/>
    </svg>
  ),
  Star: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5 fill-current">
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L390.2 150.3 316.9 18z"/>
    </svg>
  ),
  Wallet: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
    </svg>
  ),
  MoneyTransfer: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-4 h-4 fill-current">
      <path d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23L384 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l174.1 0L535 41zM105 377l-23 23L256 400c13.3 0 24 10.7 24 24s-10.7 24-24 24L81.9 448l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64H337.9c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52H410.7c-11.1 19.1-31.5 32-54.7 32H160c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM608 320c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32H544c35.3 0 64 28.7 64 64v-8z"/>
    </svg>
  ),
  Lightning: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-5 h-5 fill-current">
      <path d="M297.2 248.9C311.6 228.3 309.9 207.4 291.3 192H252.7L290.2 42.7c3.4-16.1-7.9-31.7-23.1-35.3s-31.7 7.9-35.3 23.1L147.6 248.9c-8.8 16.8-4.4 37.2 11.3 48.4L206.5 336H153.3c-13.7 0-26.1 8.8-30.4 21.9l-43.2 129.7c-5.5 16.5 3.4 34.5 19.9 40s34.5-3.4 40-19.9L231.6 248.9c8.8-16.8 4.4-37.2-11.3-48.4L177.5 176h53.2c13.7 0 26.1-8.8 30.4-21.9l36-108z"/>
    </svg>
  ),
  MagicWand: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
      <path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"/>
    </svg>
  ),
  List: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
      <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/>
    </svg>
  ),
  Sliders: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
      <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.3 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"/>
    </svg>
  ),
  Pencil: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
      <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
    </svg>
  ),
  Pause: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"/>
    </svg>
  ),
  Eye: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 h-4 fill-current">
      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144 64c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"/>
    </svg>
  ),
  Trash: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-current">
      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
    </svg>
  ),
};

export default function ManageCourseClient({ course }: { course: CourseData }) {
  const [codeQuantity, setCodeQuantity] = useState(5);

  const handleGenerate = () => {
    alert(`سيتم إنشاء ${codeQuantity} كوداً جديداً (محاكاة)`);
  };

  const handleEdit = () => alert('تعديل الدورة (محاكاة)');
  const handlePause = () => alert('إيقاف البيع مؤقتاً (محاكاة)');
  const handlePreview = () => alert('عرض الدورة للطلاب (محاكاة)');
  const handleDelete = () => {
    if (confirm('هل أنت متأكد من حذف هذه الدورة؟')) {
      alert('حذف الدورة (محاكاة)');
    }
  };
  const handleWithdraw = () => alert('طلب سحب الأرباح (محاكاة)');

  return (
    <div className="min-h-screen bg-[#f8fafc] px-4 sm:px-6 py-6 sm:py-10">
      <div className="max-w-[1100px] mx-auto">

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 text-center sm:text-right">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1A2A3A]">إدارة الدورة</h1>
          <a href="/upload-course" className="inline-flex items-center justify-center gap-2 text-[#1A2A3A] no-underline font-bold text-sm px-5 py-3 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm hover:bg-[#1A2A3A] hover:text-white hover:border-[#1A2A3A] transition-all duration-300">
            <Icons.ArrowRight /> العودة للوحة المعلم
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 mb-6 items-stretch">
          <div className="bg-white border border-[#e2e8f0] rounded-[20px] p-5 sm:p-6 shadow-md flex flex-col sm:flex-row items-stretch sm:items-center justify-around gap-5">
            <div className="flex items-center gap-4 flex-1 justify-center">
              <div className="w-11 h-11 rounded-full bg-[rgba(0,180,216,0.06)] text-[#00B4D8] flex items-center justify-center shrink-0">
                <Icons.GraduationCap />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm text-[#64748b] font-semibold">الطلاب المسجلين</span>
                <span className="text-lg sm:text-xl font-extrabold text-[#1A2A3A]">{course.stats.students} طالب</span>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-1 justify-center">
              <div className="w-11 h-11 rounded-full bg-[rgba(0,180,216,0.06)] text-[#00B4D8] flex items-center justify-center shrink-0">
                <Icons.Ticket />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm text-[#64748b] font-semibold">الأكواد المباعة</span>
                <span className="text-lg sm:text-xl font-extrabold text-[#1A2A3A]">{course.stats.codesSold} كود</span>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-1 justify-center">
              <div className="w-11 h-11 rounded-full bg-[rgba(245,158,11,0.06)] text-[#f59e0b] flex items-center justify-center shrink-0">
                <Icons.Star />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm text-[#64748b] font-semibold">تقييم الدورة</span>
                <span className="text-lg sm:text-xl font-extrabold text-[#1A2A3A]">{course.stats.rating} / 5</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#e2e8f0] rounded-[20px] p-6 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1 h-full bg-[#10b981]" />
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[rgba(16,185,129,0.1)] text-[#10b981] flex items-center justify-center">
                  <Icons.Wallet />
                </div>
                <span className="text-sm text-[#64748b] font-bold">إجمالي أرباح الدورة</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1A2A3A] mb-4">
                {course.profit.toLocaleString()} <span className="text-base font-bold text-[#64748b]">ر.س</span>
              </div>
            </div>
            <button onClick={handleWithdraw} className="w-full py-3 px-4 text-sm bg-[#10b981] text-white rounded-2xl font-bold inline-flex items-center justify-center gap-2 hover:bg-[#059669] hover:-translate-y-0.5 hover:shadow-[0_6px_12px_-3px_rgba(16,185,129,0.3)] transition-all duration-300">
              <Icons.MoneyTransfer /> طلب سحب الأرباح
            </button>
          </div>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-[20px] p-6 sm:p-7 shadow-md mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-5 md:gap-7 text-center md:text-right">
            <img src={course.thumbnail} alt={course.title} className="w-full md:w-[190px] h-[160px] md:h-[120px] rounded-2xl object-cover shadow-sm" />
            <div className="flex-1">
              <span className="inline-block bg-[rgba(0,180,216,0.08)] text-[#00B4D8] px-4 py-1 rounded-full text-xs font-bold mb-2">{course.category}</span>
              <h2 className="text-lg sm:text-xl font-extrabold text-[#1A2A3A] mb-2 leading-snug">{course.title}</h2>
              <p className="text-sm text-[#64748b] leading-relaxed">{course.description}</p>
            </div>
            <div className="text-center px-6 py-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl min-w-[140px] w-full md:w-auto">
              <span className="block text-xs text-[#64748b] font-semibold mb-1">سعر الكود الواحد</span>
              <span className="text-xl sm:text-2xl font-extrabold text-[#10b981]">{course.price} ر.س</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-[20px] p-6 sm:p-7 shadow-md mb-6">
          <h3 className="text-lg font-bold text-[#1A2A3A] mb-6 flex items-center gap-3">
            <span className="text-[#00B4D8]"><Icons.Lightning /></span> أكواد القناة التسويقية
          </h3>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between bg-[#f8fafc] border border-dashed border-[#cbd5e1] p-6 rounded-2xl gap-5 mb-7 text-center sm:text-right">
            <div>
              <h4 className="text-base font-bold text-[#1A2A3A] mb-1">توليد أكواد جديدة لقناتك</h4>
              <p className="text-sm text-[#64748b]">قم بإنشاء دفعة أكواد فريدة لمشاركتها مباشرة مع متابعيك ومشتركي قناتك.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <input type="number" min={1} max={100} value={codeQuantity} onChange={(e) => setCodeQuantity(Number(e.target.value))} className="w-full sm:w-[160px] px-4 py-3 border border-[#e2e8f0] rounded-2xl text-sm font-bold text-[#1A2A3A] text-center outline-none shadow-sm focus:border-[#00B4D8] focus:shadow-[0_0_0_4px_rgba(0,180,216,0.12)] transition-all" placeholder="الكمية" />
              <button onClick={handleGenerate} className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold rounded-2xl bg-[#10b981] text-white shadow-sm hover:bg-[#059669] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_-4px_rgba(26,42,58,0.1)] transition-all duration-300">
                <Icons.MagicWand /> استخراج الأكواد
              </button>
            </div>
          </div>
          <h4 className="text-base font-bold text-[#1A2A3A] mb-4 flex items-center gap-2">
            <Icons.List /> الأكواد الصادرة مؤخراً
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {course.recentCodes.map((item) => (
              <div key={item.id} className="bg-white border border-[#e2e8f0] px-5 py-3.5 rounded-2xl flex items-center justify-between hover:border-[#cbd5e1] hover:bg-[#f8fafc] transition-all">
                <span className="font-mono text-base font-bold text-[#1A2A3A] bg-[#f1f5f9] px-3 py-1 rounded-lg tracking-wide">{item.code}</span>
                <span className={`inline-flex items-center gap-2 text-xs font-bold ${item.status === 'active' ? 'text-[#10b981]' : 'text-[#64748b]'}`}>
                  <span className={`w-2 h-2 rounded-full ${item.status === 'active' ? 'bg-[#10b981]' : 'bg-[#94a3b8]'}`} />
                  {item.status === 'active' ? 'متاح للتعيين' : 'تم استخدامه'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-[20px] p-6 sm:p-7 shadow-md">
          <h3 className="text-lg font-bold text-[#1A2A3A] mb-6 flex items-center gap-3">
            <span className="text-[#f59e0b]"><Icons.Sliders /></span> التحكم السريع بالدورة
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button onClick={handleEdit} className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold rounded-2xl bg-[#00B4D8] text-white shadow-sm hover:bg-[#0096b4] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_-4px_rgba(26,42,58,0.1)] transition-all duration-300">
              <Icons.Pencil /> تعديل الدورة
            </button>
            <button onClick={handlePause} className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold rounded-2xl bg-[#f59e0b] text-white shadow-sm hover:bg-[#d97706] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_-4px_rgba(26,42,58,0.1)] transition-all duration-300">
              <Icons.Pause /> إيقاف البيع مؤقتاً
            </button>
            <button onClick={handlePreview} className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold rounded-2xl bg-[#1A2A3A] text-white shadow-sm hover:bg-[#111c27] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_-4px_rgba(26,42,58,0.1)] transition-all duration-300">
              <Icons.Eye /> عرض للطلاب
            </button>
            <button onClick={handleDelete} className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold rounded-2xl bg-[#ef4444] text-white shadow-sm hover:bg-[#dc2626] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_-4px_rgba(26,42,58,0.1)] transition-all duration-300">
              <Icons.Trash /> حذف الدورة
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}