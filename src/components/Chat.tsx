import { useState, useRef, useEffect } from "react";
import { Message } from "../types";
import { Send } from "lucide-react";
import Markdown from "react-markdown";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "أهلاً بك. أنا المساعد الذكي المخصص لنظام الطيبات للدكتور ضياء العوضي. كيف يمكنني مساعدتك اليوم؟ (مثال: هل يمكنني أكل الطماطم؟ ما هو سبب الصداع النصفي؟ أو اطلب خطة وجبات ليوم واحد)."
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      });

      if (!response.ok) {
        throw new Error("فشل الاتصال بالخادم");
      }

      const data = await response.json();
      
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.content
        }
      ]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "عذراً، حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 relative">
      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-24">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-5 py-4 ${
                msg.role === "user"
                  ? "bg-blue-600 text-white rounded-tl-sm"
                  : "bg-slate-800 text-slate-200 border border-slate-700 rounded-tr-sm"
              }`}
            >
              {msg.role === "assistant" ? (
                <div className="markdown-body">
                  <Markdown>{msg.content}</Markdown>
                </div>
              ) : (
                <p className="whitespace-pre-wrap">{msg.content}</p>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 border border-slate-700 text-slate-400 rounded-2xl rounded-tr-sm px-5 py-4 flex gap-2 items-center">
              <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
              <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 via-slate-900 to-transparent">
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-3xl mx-auto items-end bg-slate-800 border border-slate-700 rounded-xl p-1 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            placeholder="اسأل خبير نظام الطيبات..."
            className="flex-1 p-3 bg-transparent text-slate-100 outline-none disabled:opacity-50 placeholder:text-slate-500"
            dir="rtl"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-3 m-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-700 disabled:text-slate-500 transition-colors"
          >
            <Send size={20} className="rtl:-scale-x-100" />
          </button>
        </form>
      </div>
    </div>
  );
}
