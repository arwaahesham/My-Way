import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="من نحن"
      className="py-16 flex justify-center "
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl w-full mx-auto px-8 py-20">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            عن ماي واي
          </h2>

          <div className="flex justify-center gap-4 mt-4">
            <div className="w-20 h-1 rounded-full bg-[#C4006B]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center leading-8 text-lg">

          <p>
            تأسست ماي واي عام 2001 وهي الشركة رقم 1 في البيع المباشر في مصر
          </p>

          <p className="mt-4">
            لديها أكثر من 200 ألف عضو في جميع أنحاء مصر و46 فرعًا في مختلف المحافظات
          </p>

          <p className="mt-4">
            تمتلك ماي واي ثلاثة مصانع كبرى ومختبرات للبحوث والتطوير في المنطقة الصناعية بالعبور
          </p>

          <p className="mt-4">
            حاصلة على أعلى الشهادات العالمية في الجودة والتصنيع
          </p>

          <p className="mt-4">
            توفر الشركة منتجات طبيعية للبشرة والجسم والشعر والعطور،
            ومواد تنظيف المطبخ والفرن والحمام والأرضيات والملابس والأفرشة
            والزجاج والأغذية، كما تتميز بالجودة العالية والأسعار المناسبة
          </p>

        </div>

      </div>
    </motion.section>
  );
}

export default About;
