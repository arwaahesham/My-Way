import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="تواصل معنا" // ← مهم للـ Navbar
      className="py-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10">

        {/* Left */}
        <div className="flex-1 order-0 md:order-1">
          <h2 className="text-3xl font-bold mb-4">تواصل معنا</h2>
          <p className="mb-4">
            لو حابه تعملي معانا عضويه وتعرفي اكتر عن ماي واي خلينا نتواصل معاكي
          </p>
        </div>

        {/* Right */}
        <div className="flex-1 order-1 md:order-2">
          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="الاسم"
              className="p-3 border rounded"
            />

            <input
              type="number"
              placeholder="رقم التليفون"
              className="p-3 border rounded"
            />

            <select className="p-3 border rounded">
              <option value="" disabled selected>اختر المحافظة</option>
              <option>القاهرة</option>
              <option>الجيزة</option>
              <option>الإسكندرية</option>
              <option>أسيوط</option>
              <option>اسماعيليه</option>
              <option>مرسى مطروح</option>
              <option>سوهاج</option>
              <option>الاقصر</option>
              <option>أسوان</option>
              <option>الغردقه</option>
              <option>كفر الشيخ</option>
              <option>بني سويف</option>
              <option>الفيوم</option>
              <option>المنيا</option>
              <option>الشرقيه</option>
              <option>السويس</option>
              <option>الغربيه</option>
              <option>دمياط</option>
              <option>دمنهور</option>
              <option>البحيره</option>
              <option>طنطا</option>
              <option>بورسعيد</option>
              <option>المنصوره</option>
              <option>المنيا</option>
              <option>المنوفيه</option>
              <option>المحله</option>
            </select>

            <textarea
              placeholder="اكتب رسالتك"
              className="p-3 border rounded"
            ></textarea>

            <button className="bg-[#C4006B] text-white p-3 rounded hover:bg-[#A8005A]">
              ارسال
            </button>

          </form>
        </div>

      </div>
    </motion.section>
  );
}

export default Contact;
