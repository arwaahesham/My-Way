'use client'

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [formValid, setFormValid] = useState(false);

  // ✅ FIXED: safe validation using FormData
  const handleChange = () => {
    const data = new FormData(form.current);

    const name = (data.get("user_name") || "").trim() !== "";
    const phone = (data.get("user_phone") || "").replace(/\D/g, "").length === 11;
    const id = (data.get("user_id") || "").replace(/\D/g, "").length === 14;
    const city = (data.get("user_city") || "").trim() !== "";
    const message = (data.get("message") || "").trim() !== "";

    setFormValid(name && phone && id && city && message);
  };

  // ✅ FIXED phone input
  const handlePhoneChange = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
    handleChange();
  };

  // 🔥 FIXED: safer EmailJS call (no sendForm issues in Next.js)
  const sendEmail = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formValid) return;

    try {
      setLoading(true);

      const data = new FormData(form.current);

      const templateParams = {
        user_name: data.get("user_name"),
        user_phone: data.get("user_phone"),
        user_id: data.get("user_id"),
        user_city: data.get("user_city"),
        message: data.get("message"),
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_yix7yj9",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_xnfu81e",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "IVjACImzdWKMPpbyw"
      );

      console.log("SUCCESS:", result.text);

      setSuccess(true);
      form.current.reset();
      setFormValid(false);

    } catch (err) {
      console.log("ERROR:", err);
      setError(err?.text || "حدث خطأ أثناء الإرسال");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-16 relative w-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10">

        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">تواصل معنا</h2>
          <p>لو حابه تعملي معانا عضويه وتعرفي اكتر عن ماي واي خلينا نتواصل معاكي</p>
        </div>

        <div className="flex-1">

          {success ? (
         <div className="border border-zinc-300 dark:border-zinc-700 p-6 rounded-lg flex flex-col items-center justify-center h-full text-center shadow-md bg-transparent">
          <h3 className="font-bold text-2xl text-[#C4006B]">
          تم الإرسال بنجاح!
          </h3>                
          <p className="mt-3 text-lg text-zinc-700 dark:text-zinc-300">
      شكراً لتواصلك معنا. سيتم التواصل معك في أقرب وقت ممكن.
          </p>            
    </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">

              <input
                name="user_name"
                placeholder="الاسم"
                onChange={handleChange}
                className="p-3 border rounded"
                required
              />

              <input
                name="user_phone"
                placeholder="رقم التليفون"
                onChange={handlePhoneChange}
                className="p-3 border rounded"
                required
              />

              <input
                name="user_id"
                placeholder="الرقم القومي"
                onChange={handleChange}
                className="p-3 border rounded"
                required
              />

              <select
                name="user_city"
                onChange={handleChange}
                className="p-3 border rounded"
                defaultValue=""
                required
              >
                <option value="" disabled>اختر المحافظة</option>
                <option value="القاهرة">القاهرة</option>
                <option value="الإسكندرية">الإسكندرية</option>
                <option value="الجيزة">الجيزة</option>
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

              <textarea
                name="message"
                placeholder="الرسالة"
                onChange={handleChange}
                className="p-3 border rounded"
                required
              />

              <button
                type="submit"
                disabled={!formValid || loading}
                className="bg-pink-600 text-white p-3 rounded disabled:opacity-50"
              >
                {loading ? "جاري الإرسال..." : "إرسال"}
              </button>

              {error && <p className="text-red-500">{error}</p>}

            </form>
          )}

        </div>
      </div>
    </motion.section>
  );
}

export default Contact;