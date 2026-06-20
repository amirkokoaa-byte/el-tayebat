import { useState } from "react";
import Chat from "./components/Chat";
import Rules from "./components/Rules";
import Guides from "./components/Guides";
import DietPlan from "./components/DietPlan";
import WeightManagement from "./components/WeightManagement";
import { MessageCircle, List, FileText, Calendar, Scale } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"chat" | "rules" | "guides" | "diet" | "weight">("chat");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex flex-col" dir="rtl">
      {/* Header */}
      <header className="bg-slate-900 border-b border-blue-900/50 sticky top-0 z-10 w-full">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
              ط
            </div>
            <h1 className="text-xl font-bold text-slate-100 tracking-tight">خبير نظام الطيبات</h1>
          </div>
          <p className="text-sm text-slate-400 hidden sm:block">المساعد الطبي المتخصص</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-4 md:py-8 flex-1 w-full flex flex-col">
        <div className="bg-slate-900 rounded-xl shadow-sm border border-slate-800 overflow-hidden flex-1 flex flex-col md:flex-row min-h-[75vh] max-h-[85vh] md:max-h-[80vh]">
          
          {/* Sidebar Navigation */}
          <nav className="border-b md:border-b-0 md:border-l border-slate-800 p-3 md:p-4 md:w-64 shrink-0 flex flex-row md:flex-col gap-2 overflow-x-auto bg-slate-950/50 scrollbar-hide">
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-start transition-colors whitespace-nowrap ${
                activeTab === "chat" 
                  ? "bg-blue-900/50 text-blue-400 font-medium" 
                  : "text-slate-400 hover:bg-slate-800"
              }`}
            >
              <MessageCircle size={20} className="shrink-0" />
              المساعد الذكي
            </button>
            
            <button
              onClick={() => setActiveTab("rules")}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-start transition-colors whitespace-nowrap ${
                activeTab === "rules" 
                  ? "bg-blue-900/50 text-blue-400 font-medium" 
                  : "text-slate-400 hover:bg-slate-800"
              }`}
            >
              <List size={20} className="shrink-0" />
              المسموحات والممنوعات
            </button>

            <button
              onClick={() => setActiveTab("diet")}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-start transition-colors whitespace-nowrap ${
                activeTab === "diet" 
                  ? "bg-blue-900/50 text-blue-400 font-medium" 
                  : "text-slate-400 hover:bg-slate-800"
              }`}
            >
              <Calendar size={20} className="shrink-0" />
              نظام الـ 30 يوم
            </button>

            <button
              onClick={() => setActiveTab("weight")}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-start transition-colors whitespace-nowrap ${
                activeTab === "weight" 
                  ? "bg-blue-900/50 text-blue-400 font-medium" 
                  : "text-slate-400 hover:bg-slate-800"
              }`}
            >
              <Scale size={20} className="shrink-0" />
              إدارة الوزن
            </button>

            <button
              onClick={() => setActiveTab("guides")}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-start transition-colors whitespace-nowrap ${
                activeTab === "guides" 
                  ? "bg-blue-900/50 text-blue-400 font-medium" 
                  : "text-slate-400 hover:bg-slate-800"
              }`}
            >
              <FileText size={20} className="shrink-0" />
              الأدلة والفلسفة
            </button>
          </nav>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto w-full relative content-area relative">
            {activeTab === "chat" && <Chat />}
            {activeTab === "rules" && <Rules />}
            {activeTab === "diet" && <DietPlan />}
            {activeTab === "weight" && <WeightManagement />}
            {activeTab === "guides" && <Guides />}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center pb-6 md:pb-4 text-sm text-slate-500 font-medium tracking-wide mt-auto">
         مع تحيات المطور Amir Lamay
      </footer>
    </div>
  );
}
