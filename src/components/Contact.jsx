'use client'
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [formValid, setFormValid] = useState(false);

  const handleChange = () => {
    const name = form.current.user_name.value.trim() !== "";
    const phone = form.current.user_phone.value.replace(/\D/g, "").length === 11;
    const city = form.current.user_city.value.trim() !== "";
    const message = form.current.message.value.trim() !== "";
    setFormValid(name && phone && city && message);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    e.target.value = value;
    handleChange();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setError(null);
    if (!formValid) return;

    setLoading(true);
    setSuccess(false);

    // It's best practice to store these IDs in environment variables
    // Create a .env.local file in your root directory and add:
    // NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
    // NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
    // NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_yix7yj9",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_xnfu81e",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "IVjACImzdWKMPpbyw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccess(true);
          form.current.reset();
          setFormValid(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setError("حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="py-16 relative w-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10">
        <div className="flex-1 order-0 md:order-1">
          <h2 className="text-3xl font-bold mb-4">تواصل معنا</h2>
          <p className="mb-4">
            لو حابه تعملي معانا عضويه وتعرفي اكتر عن ماي واي خلينا نتواصل معاكي
          </p>
        </div>

        <div className="flex-1 order-1 md:order-2">
          {success ? (
            <div className="bg-green-100 border-r-4 border-green-500 text-green-800 p-6 rounded-lg flex flex-col items-center justify-center h-full text-center shadow-md dark:bg-green-900/30 dark:text-green-300">
              <h3 className="font-bold text-2xl">تم الإرسال بنجاح!</h3>
              <p className="mt-3 text-lg">شكراً لتواصلك معنا. سيتم التواصل معك في أقرب وقت ممكن.</p>
            </div>
          ) : (
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <label htmlFor="user_name" className="sr-only">الاسم ثلاثي</label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="الاسم ثلاثي"
                className="p-3 border rounded bg-transparent border-zinc-300 dark:border-zinc-600 focus:ring-2 focus:ring-[#C4006B] focus:outline-none transition-shadow"
                required
                onChange={handleChange}
              />

              <label htmlFor="user_phone" className="sr-only">رقم التليفون</label>
              <input
                id="user_phone"
                type="text"
                name="user_phone"
                placeholder="رقم التليفون"
                className="p-3 border rounded bg-transparent border-zinc-300 dark:border-zinc-600 focus:ring-2 focus:ring-[#C4006B] focus:outline-none transition-shadow"
                required
                onChange={handlePhoneChange}
              />

              <label htmlFor="user_city" className="sr-only">المحافظة</label>
              <select
                id="user_city"
                name="user_city"
                className="p-3 border rounded bg-transparent border-zinc-300 dark:border-zinc-600 focus:ring-2 focus:ring-[#C4006B] focus:outline-none transition-shadow"
                required
                defaultValue=""
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  اختر المحافظة
                </option>
                <option value="القاهرة">القاهرة</option>
                <option value="الجيزة">الجيزة</option>
                <option value="الإسكندرية">الإسكندرية</option>
                <option value="أسيوط">أسيوط</option>
                <option value="اسماعيليه">اسماعيليه</option>
                <option value="مرسى مطروح">مرسى مطروح</option>
                <option value="سوهاج">سوهاج</option>
                <option value="الأقصر">الأقصر</option>
                <option value="أسوان">أسوان</option>
                <option value="الغردقة">الغردقة</option>
                <option value="كفر الشيخ">كفر الشيخ</option>
                <option value="بني سويف">بني سويف</option>
                <option value="الفيوم">الفيوم</option>
                <option value="المنيا">المنيا</option>
                <option value="الشرقية">الشرقية</option>
                <option value="السويس">السويس</option>
                <option value="الغربية">الغربية</option>
                <option value="دمياط">دمياط</option>
                <option value="دمنهور">دمنهور</option>
                <option value="البحيرة">البحيرة</option>
                <option value="طنطا">طنطا</option>
                <option value="بورسعيد">بورسعيد</option>
                <option value="المنصورة">المنصورة</option>
                <option value="المنوفية">المنوفية</option>
                <option value="المحلة">المحلة</option>
              </select>

              <label htmlFor="message" className="sr-only">رسالتك</label>
              <textarea
                id="message"
                name="message"
                placeholder="اكتب رسالتك"
                className="p-3 border rounded bg-transparent border-zinc-300 dark:border-zinc-600 focus:ring-2 focus:ring-[#C4006B] focus:outline-none transition-shadow"
                required
                onChange={handleChange}
              ></textarea>

              <button
                type="submit"
                disabled={!formValid || loading}
                className="bg-[#C4006B] text-white p-3 rounded hover:bg-[#A8005A] transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      ></path>
                    </svg>
                    جاري الارسال...
                  </>
                ) : (
                  "ارسال"
                )}
              </button>
              {error && (
                <p className="text-red-500 text-center mt-2">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;