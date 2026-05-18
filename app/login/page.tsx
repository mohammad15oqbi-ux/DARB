"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      const [error, setError] = useState("");
        const [loading, setLoading] = useState(false);

          const handleSubmit = (e: React.FormEvent) => {
              e.preventDefault();
                  setError("");
                      if (!email || !password) { setError("يرجى إدخال البريد الإلكتروني وكلمة المرور"); return; }
                          setLoading(true);
                              setTimeout(() => { setLoading(false); setError("البريد الإلكتروني أو كلمة المرور غير صحيحة"); }, 1000);
                                };

                                  return (
                                      <div className="fixed inset-0 bg-[#0A3A6B]/30 backdrop-blur-[15px] z-[10000] font-[Cairo] overflow-y-auto p-4 flex items-start justify-center pt-[40px]">
                                            <div className="bg-white w-full max-w-[440px] p-8 md:p-[45px] rounded-[35px] shadow-2xl relative">
                                                    <Link href="/" className="absolute top-5 left-5 w-[35px] h-[35px] bg-gray-50 text-[#0A3A6B] rounded-full flex items-center justify-center text-sm"><i className="fas fa-times" /></Link>
                                                            <div className="text-center mb-8">
                                                                      <h1 className="text-[42px] md:text-[52px] font-black bg-gradient-to-b from-[#0A3A6B] to-[#07A4A2] bg-clip-text text-transparent">درب</h1>
                                                                                <div className="w-[45px] h-1 bg-[#07A4A2] mx-auto my-1.5 rounded-[10px]" />
                                                                                          <p className="text-[#64748b] text-[15px] font-bold">بوابتك نحو التميز الرقمي</p>
                                                                                                  </div>
                                                                                                          {error && <div className="bg-red-50 text-red-600 p-3 rounded-xl text-[13px] font-extrabold mb-5 border border-red-200 text-center">{error}</div>}
                                                                                                                  <form onSubmit={handleSubmit}>
                                                                                                                            <div className="relative mb-[18px]">
                                                                                                                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[38px] h-[38px] bg-gray-100 rounded-[10px] flex items-center justify-center text-[#07A4A2]"><i className="fas fa-at" /></div>
                                                                                                                                                    <input type="email" placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full py-4 pr-[60px] pl-4 rounded-[15px] border-2 border-gray-100 font-[Cairo] font-semibold outline-none focus:border-[#07A4A2] bg-white" />
                                                                                                                                                              </div>
                                                                                                                                                                        <div className="relative mb-[18px]">
                                                                                                                                                                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[38px] h-[38px] bg-gray-100 rounded-[10px] flex items-center justify-center text-[#07A4A2]"><i className="fas fa-shield-halved" /></div>
                                                                                                                                                                                                <input type="password" placeholder="كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full py-4 pr-[60px] pl-4 rounded-[15px] border-2 border-gray-100 font-[Cairo] font-semibold outline-none focus:border-[#07A4A2] bg-white" />
                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                    <button type="submit" disabled={loading} className="w-full py-4 border-none rounded-[15px] bg-gradient-to-l from-[#0A3A6B] to-[#165691] text-white text-lg font-extrabold cursor-pointer flex items-center justify-center gap-2.5 shadow-lg disabled:opacity-60">{loading ? "جارٍ التسجيل..." : "تسجيل الدخول"}<i className="fas fa-arrow-left-long" /></button>
                                                                                                                                                                                                                            </form>
                                                                                                                                                                                                                                    <div className="text-center mt-6 text-sm font-bold text-[#64748b]">
                                                                                                                                                                                                                                              <span>ما زلت جديداً؟ </span>
                                                                                                                                                                                                                                                        <Link href="/register" className="text-[#07A4A2]">أنشئ حسابك الآن</Link>
                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                            }