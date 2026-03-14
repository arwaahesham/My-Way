import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const handleChange = () => {
    const isValid =
      form.current.user_name.value.trim() !== "" &&
      form.current.user_phone.value.trim() !== "" &&
      form.current.user_city.value.trim() !== "" &&
      form.current.message.value.trim() !== "";
    setFormValid(isValid);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formValid) return; 

    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
       "service_yix7yj9",
        "template_xnfu81e",
        form.current,
        "IVjACImzdWKMPpbyw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccess(true);
          form.current.reset();
          setFormValid(false);
          setTimeout(() => setSuccess(false), 3000);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert("حدث خطأ حاول مرة اخرى.");
        }
      );
  };

  return (
    <motion.section
      id="تواصل معنا"
      className="py-16 relative"
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
          <form
            ref={form}
            onSubmit={sendEmail}
            onChange={handleChange}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="الاسم"
              className="p-3 border rounded"
              required
            />
            <input
              type="number"
              name="user_phone"
              placeholder="رقم التليفون"
              className="p-3 border rounded"
              required
            />
            <select
              name="user_city"
              className="p-3 border rounded"
              required
              defaultValue=""
            >
              <option value="" disabled hidden>
                اختر المحافظة
              </option>
              <option>القاهرة</option>
              <option>الجيزة</option>
              <option>الإسكندرية</option>
              <option>أسيوط</option>
              <option>اسماعيليه</option>
              <option>مرسى مطروح</option>
              <option>سوهاج</option>
              <option>الأقصر</option>
              <option>أسوان</option>
              <option>الغردقة</option>
              <option>كفر الشيخ</option>
              <option>بني سويف</option>
              <option>الفيوم</option>
              <option>المنيا</option>
              <option>الشرقية</option>
              <option>السويس</option>
              <option>الغربية</option>
              <option>دمياط</option>
              <option>دمنهور</option>
              <option>البحيرة</option>
              <option>طنطا</option>
              <option>بورسعيد</option>
              <option>المنصورة</option>
              <option>المنوفية</option>
              <option>المحلة</option>
            </select>
            <textarea
              name="message"
              placeholder="اكتب رسالتك"
              className="p-3 border rounded"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading || !formValid}
              className={`bg-[#C4006B] text-white p-3 rounded hover:bg-[#A8005A] flex items-center justify-center gap-2 ${
                loading || !formValid ? "opacity-70 cursor-not-allowed" : ""
              }`}
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
          </form>
        </div>
      </div>

{success && (
  <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
    <div className="bg-[#C4006B] text-white px-10 py-6 rounded-2xl shadow-2xl text-center text-2xl font-bold animate-fadeIn">
      تم الإرسال بنجاح وهيتم التواصل معاكي ف اقرب وقت
    </div>
  </div>
)}

    </motion.section>
  );
}

export default Contact;
