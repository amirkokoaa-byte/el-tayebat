import { CheckCircle2, XCircle } from "lucide-react";

export default function Rules() {
  return (
    <div className="p-6 md:p-8 space-y-8 animate-in fade-in duration-500 text-slate-200">
      <div>
        <h2 className="text-2xl font-bold text-slate-100 mb-2">المسموحات والممنوعات القطعية</h2>
        <p className="text-slate-400">
          القواعد الأساسية لنظام الطيبات كما حددها د. ضياء العوضي. الالتزام الصارم بهذه القائمة هو أساس التعافي.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Allowed Foods */}
        <div className="bg-blue-900/10 rounded-2xl p-6 border border-blue-900/50 space-y-6">
          <div className="flex items-center gap-2 text-blue-300 border-b border-blue-900/50 pb-4">
            <CheckCircle2 size={24} className="text-blue-400" />
            <h3 className="text-xl font-bold">المسموحات القطعية</h3>
          </div>
          
          <ul className="space-y-4 text-slate-300">
            <li>
              <strong className="text-blue-200 block mb-1">النشويات الأساسية:</strong>
              الأرز الأبيض، توست الحبة الكاملة، توست الردة، خبز السن الصافي (يحمص جيداً)، البطاطس والبطاطا (مسلوقة أو مشوية بدون قشر).
            </li>
            <li>
              <strong className="text-blue-200 block mb-1">الخضروات المسموحة:</strong>
              الكوسة، البسلة، البامية، الجزر، الفاصوليا الخضراء، القلقاس. <span className="text-sm text-slate-400">(يجب أن تطهى جيداً وتقشر تماماً).</span>
            </li>
            <li>
              <strong className="text-blue-200 block mb-1">البروتينات:</strong>
              السمك الأبيض، المأكولات البحرية، لحم الضأن والدهن الحيواني، الدجاج البلدي، الديوك، الطيور (البط، الحمام)، الأرانب.
            </li>
            <li>
              <strong className="text-blue-200 block mb-1">الدهون الصحية:</strong>
              الزبدة الفلاحي، السمن البلدي، زيت الزيتون البكر الممتاز.
            </li>
            <li>
              <strong className="text-blue-200 block mb-1">السكريات والمشروبات:</strong>
              العسل الأبيض، العسل الأسود، السكر الأبيض (في الحدود الطبيعية)، الشوكولاتة الدارك (بدون حليب). القهوة السادة والشاي (بدون حليب).
            </li>
            <li>
              <strong className="text-blue-200 block mb-1">الفواكه المسموحة:</strong>
              الموز، البلح (التمر)، العنب، الرمان، التين، الكنتالوب، البطيخ.
            </li>
          </ul>
        </div>

        {/* Forbidden Foods */}
        <div className="bg-red-900/10 rounded-2xl p-6 border border-red-900/30 space-y-6">
          <div className="flex items-center gap-2 text-red-300 border-b border-red-900/30 pb-4">
            <XCircle size={24} className="text-red-400" />
            <h3 className="text-xl font-bold">الممنوعات القطعية</h3>
          </div>
          
          <ul className="space-y-4 text-slate-300">
            <li>
              <strong className="text-red-300 block mb-1">مخبوزات الدقيق الأبيض وأخرى:</strong>
              الدقيق الأبيض بجميع أشكاله، العيش الشامي، الفينو، الكيزر، العيش السوري، الشوفان، ودقيق الذرة.
            </li>
            <li>
              <strong className="text-red-300 block mb-1">منتجات الألبان:</strong>
              اللبن (الحليب)، الجبن بجميع أنواعها، القشطة، الزبادي. <span className="text-sm text-slate-400">(الاستثناء الوحيد هو الزبدة والسمن البلدي).</span>
            </li>
            <li>
              <strong className="text-red-300 block mb-1">الخضروات وقشورها:</strong>
              الطماطم (ممنوعة تماماً كصلصة أو ثمرة)، الباذنجان، السبانخ، الملوخية، الكرنب، القرنبيط، البقوليات (الفول، العدس، الحمص). جميع قشور وبذور الخضروات والفواكه ممنوعة.
            </li>
            <li>
              <strong className="text-red-300 block mb-1">البروتينات الممنوعة:</strong>
              اللحم البقري أو الجاموسي بجميع أشكاله، الفراخ البيضاء التسمين، وبياض البيض.
            </li>
            <li>
              <strong className="text-red-300 block mb-1">الزيوت الضارة:</strong>
              زيوت البذور (زيت الذرة، عباد الشمس)، والزيوت النباتية المهدرجة.
            </li>
            <li>
              <strong className="text-red-300 block mb-1">فواكه ممنوعة:</strong>
              الموالح كالبرتقال والليمون (في بدايات النظام)، المانجو، الفراولة.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
