import { Scale } from "lucide-react";

export default function WeightManagement() {
  return (
    <div className="p-6 md:p-8 space-y-8 animate-in fade-in duration-500 text-slate-200">
      <div className="flex items-center gap-3 mb-6 w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl">
        <Scale className="text-blue-400" />
        <h2 className="text-2xl font-bold text-slate-100">إدارة الوزن (التخسيس والنحافة)</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Weight Loss */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-blue-300 mb-4 border-b border-slate-700 pb-2">للتخسيس وفقدان الوزن</h3>
          <ul className="list-disc list-inside space-y-3 text-slate-300">
            <li>تناول وجبات مشبعة جداً من قائمة المسموحات فقط.</li>
            <li>الاعتماد على الدهون الحيوانية (السمن/الزبدة) لرفع هرمونات الشبع وكبح الجوع.</li>
            <li>الامتناع التام عن الوجبات الخفيفة، والامتناع التام عن اللقط.</li>
            <li>الأكل فقط عند الشعور بالجوع الحقيقي وتطبيق الصيام المتقطع التلقائي (عدم الأكل إلا عند الجوع).</li>
            <li>بمجرد علاج مقاومة الأنسولين (بالامتناع عن الممنوعات)، سيبدأ الجسم بحرق مخزون الدهون بفعالية أسرع.</li>
          </ul>
        </div>

        {/* Weight Gain */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">لعلاج النحافة وزيادة الوزن</h3>
          <ul className="list-disc list-inside space-y-3 text-slate-300">
            <li>زيادة الحصص واستغلال النشويات المسموحة (الأرز الأبيض، البطاطس، توست الحبة الكاملة) بشكل أكبر في الوجبات.</li>
            <li>زيادة كمية السكريات الطبيعية المسموحة كالعسل الأبيض، العسل الأسود، والشوكولاتة الدارك.</li>
            <li>إضافة الدهون الصحية (الزبدة والسمن) بكثافة فوق الأكل وفي جميع الوجبات.</li>
            <li>تناول الفواكه كثيفة السعرات ضمن المسموحات كالموز والبلح والتين في أوقات الوجبات.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
