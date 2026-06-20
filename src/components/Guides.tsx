import { Calendar, HeartPulse } from "lucide-react";

export default function Guides() {
  return (
    <div className="p-6 md:p-8 space-y-12 animate-in fade-in duration-500 text-slate-200">
      
      {/* Philosophy Section */}
      <section>
        <div className="flex items-center gap-3 mb-6 block w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl">
          <HeartPulse className="text-blue-400" />
          <h2 className="text-2xl font-bold text-slate-100">الأعراض وتفسيرها الطبي</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-slate-300">
             <h3 className="text-lg font-bold text-blue-300 mb-2">ألم القولون، والانتفاخ</h3>
             <p className="mb-2"><strong className="text-blue-200">السبب الحقيقي:</strong> ارتشاح الأمعاء الناتج عن الجلوتين من الدقيق الأبيض، والألبان، والطماطم، واللحوم البقرية.</p>
             <p><strong className="text-blue-200">العلاج:</strong> وقف الممنوعات، وتناول (أرز أبيض + كوسة مقشرة ومطبوخة + سمن بلدي)، وشرب شوربة المواسير لترميم الجدار.</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-slate-300">
             <h3 className="text-lg font-bold text-blue-300 mb-2">الصداع النصفي / المزمن</h3>
             <p className="mb-2"><strong className="text-blue-200">السبب الحقيقي:</strong> التهابات جهازية تؤثر على الأوعية الدموية بسبب الألبان، والدقيق، والزيوت المهدرجة.</p>
             <p><strong className="text-blue-200">العلاج:</strong> الالتزام الصارم بالمرحلة الحتمية، شرب سوائل صافية وتناول الفواكه المسموحة للطاقة، ووقف الزيوت الضارة.</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-slate-300">
             <h3 className="text-lg font-bold text-blue-300 mb-2">آلام المفاصل والروماتيزم</h3>
             <p className="mb-2"><strong className="text-blue-200">السبب الحقيقي:</strong> رد فعل مناعي يهاجم المفاصل نتيجة تسرب السموم من الأمعاء.</p>
             <p><strong className="text-blue-200">العلاج:</strong> الإكثار من دهن الضأن (اللية) والسمن البلدي لتليين المفاصل، وشرب شوربة العظام يومياً.</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-slate-300">
             <h3 className="text-lg font-bold text-blue-300 mb-2">الحساسية الجلدية والإكزيما</h3>
             <p className="mb-2"><strong className="text-blue-200">السبب الحقيقي:</strong> الجسم يطرد السموم عبر الجلد بسبب تلف فلتر الأمعاء.</p>
             <p><strong className="text-blue-200">العلاج:</strong> المنع البات للألبان والطماطم، الاعتماد على السمك الأبيض والأرز، فالعلاج يأتي من الداخل بترميم الأمعاء.</p>
          </div>
        </div>
      </section>

      {/* 30-Day Guide Philosophy */}
      <section>
        <div className="flex items-center gap-3 mb-6 block w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl">
          <Calendar className="text-blue-400" />
          <h2 className="text-2xl font-bold text-slate-100">مرحلة الـ 30 يوماً (المرحلة الحتمية)</h2>
        </div>
        <div className="border border-blue-900/50 bg-blue-900/20 rounded-xl p-6">
          <p className="text-slate-300 mb-6 font-medium">
            الشهر الأول ويعرف بالمرحلة الحتمية، يهدف إلى إطفاء الحرائق والالتهابات داخل الجسم وصيانة الجهاز الهضمي بشكل سريع.
          </p>
          <div className="space-y-4">
            <div className="bg-slate-800 p-5 font-medium rounded-lg border border-slate-700 shadow-sm">
              <h4 className="font-bold text-blue-300 mb-3 text-lg">تعليمات الشهر الأول:</h4>
              <ul className="list-disc list-inside space-y-3 text-slate-300 leading-relaxed">
                <li>منع تام لجميع الممنوعات بلا أي استثناء.</li>
                <li>تكوين الوجبات الأساسية من: الأرز الأبيض أو توست الحبة الكاملة + الدهون (الزبدة/السمن) + الخضار المسموح + بروتين مسموح (كالسمك).</li>
                <li>الاعتماد على "شوربة العظام" يومياً لدعم عملية الترميم.</li>
                <li>تناول وجبتين أو ثلاث وجبات فقط عند الشعور الخالص بالجوع.</li>
                <li>منع "اللقط" أو تناول الوجبات الخفيفة المستمر بين الوجبات (Snacking).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <p className="text-center text-sm text-slate-500 mt-8 font-medium">
        هذه التعليمات مستمدة مباشرة من أرشيف د. ضياء العوضي الموثق بالمقاطع المرئية.
      </p>
    </div>
  );
}
