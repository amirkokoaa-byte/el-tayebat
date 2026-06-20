import { useState } from "react";
import { Coffee, Utensils, UtensilsCrossed, RefreshCw } from "lucide-react";

export default function DietPlan() {
  const [planIndex, setPlanIndex] = useState(0);

  const plans = [
    {
      breakfast: "توست الحبة الكاملة مع زبدة فلاحي وعسل أبيض، وثمرة موز.",
      lunch: "أرز أبيض مع بطاطس مطبوخة (بدون قشر) بشوربة الضأن، ودجاج بلدي (أو ديوك).",
      dinner: "بطاطا مشوية بالزبدة (بدون قشر)، وقليل من العسل الأسود."
    },
    {
      breakfast: "أرز أبيض بسمن بلدي مع عسل أبيض.",
      lunch: "كوسة مطبوخة (مقشرة) باللحم، أرز أبيض، وبط أو حمام محمر بالسمن.",
      dinner: "توست الردة أو خبز السن (محمص) مدهون بالزبدة مع شوكولاتة دارك صافية."
    },
    {
      breakfast: "بطاطس مسلوقة ومهروسة بالزبدة أو السمن البلدي.",
      lunch: "أرز أبيض، بسلة أو فاصوليا خضراء مطبوخة بشكل جيد بدون طماطم، ومأكولات بحرية (سبيط أو جمبري).",
      dinner: "ثمرة كنتالوب أو عنب، وشريحة توست الحبة الكاملة بالسمن."
    }
  ];

  const currentPlan = plans[planIndex];

  return (
    <div className="p-6 md:p-8 space-y-8 animate-in fade-in duration-500 text-slate-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-100 mb-2">نظام الـ 30 يوم</h2>
          <p className="text-slate-400">
            مقترحات يومية للمرحلة الحتمية. اضغط زر التبديل للحصول على اختيارات بديلة مجربة.
          </p>
        </div>
        <button
          onClick={() => setPlanIndex((prev) => (prev + 1) % 3)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shrink-0"
        >
          <RefreshCw size={18} />
          اقتراح وجبات بديلة
        </button>
      </div>

      <div className="space-y-4">
        {/* Breakfast */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-blue-900/40 p-4 rounded-xl text-blue-400 shrink-0">
            <Coffee size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100 mb-3">الإفطار</h3>
            <p className="text-slate-300 leading-relaxed">{currentPlan.breakfast}</p>
          </div>
        </div>

        {/* Lunch */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-blue-900/40 p-4 rounded-xl text-blue-400 shrink-0">
            <Utensils size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100 mb-3">الغداء</h3>
            <p className="text-slate-300 leading-relaxed">{currentPlan.lunch}</p>
          </div>
        </div>

        {/* Dinner */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-blue-900/40 p-4 rounded-xl text-blue-400 shrink-0">
            <UtensilsCrossed size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100 mb-3">العشاء</h3>
            <p className="text-slate-300 leading-relaxed">{currentPlan.dinner}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-900/20 border border-blue-900/40 rounded-xl p-4 mt-8">
        <p className="text-blue-200 text-sm italic">
          ملاحظة: يمكنك تناول وجبتين بدلاً من ثلاث إذا قل شعورك بالجوع مع الوقت. الأهم هو وقف اللقط بين الوجبات (Snacking).
        </p>
      </div>
    </div>
  );
}
