import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);

  const handleChange = () => {
    const name = form.current.user_name.value.trim() !== "";
    const phone = phoneValid;
    const city = form.current.user_city.value.trim() !== "";
    const message = form.current.message.value.trim() !== "";
    setFormValid(name && phone && city && message);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); 
    e.target.value = value;
    setPhoneValid(value.length === 11);
    handleChange();
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
          setPhoneValid(false);
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
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="الاسم ثلاثي"
              className="p-3 border rounded"
              required
              onChange={handleChange}
            />

            <input
              type="text"
              name="user_phone"
              placeholder="رقم التليفون"
              className="p-3 border rounded"
              required
              onChange={handlePhoneChange}
            />

            <select
              name="user_city"
              className="p-3 border rounded"
              required
              defaultValue=""
              onChange={handleChange}
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
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              disabled={!formValid || loading}
              className={`bg-[#C4006B] text-white p-3 rounded hover:bg-[#A8005A] flex items-center justify-center gap-2 ${
                !formValid || loading ? "opacity-70 cursor-not-allowed" : ""
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
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-auto">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="bg-[#C4006B] text-white px-10 py-8 rounded-2xl shadow-2xl text-center text-2xl font-bold relative z-10 flex flex-col items-center gap-6 max-w-md">
            <div>تم الإرسال بنجاح وهيتم التواصل معاكي ف اقرب وقت</div>

            <button
              onClick={() => setSuccess(false)}
              className="bg-gray-100 text-black font-bold px-6 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              حسناً
            </button>
          </div>
        </div>
      )}
    </motion.section>
  );
}

export default Contact;