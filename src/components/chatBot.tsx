import { useState, useEffect, useRef } from "react";
import { MessageSquare, X } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<
    { type: "user" | "bot"; text: string }[]
  >([
    {
      type: "bot",
      text: "Hello! I'm Raksha's virtual assistant. How can I help you today?",
    },
  ]);

  // Create a ref for the element at the bottom of the chat list
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const faq = [
    { question: "Notice Period?", answer: "My notice period is 30 Days." },
    {
      question: "Relocation?",
      answer: "Yes, I am open to relocating for the right opportunity.",
    },
    {
      question: "Current Location?",
      answer: "I am currently based in Bengaluru, Karnataka.",
    },
    {
      question: "Years of Experience?",
      answer: "I have 6+ years of experience in Senior Frontend Development.",
    },
    {
      question: "What are your tech skills?",
      answer:
        "React.js, Javascript, Typescript, HTML, CSS, Redux, Next.js, Node.js, Material UI.",
    },
  ];

  // Function to scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Trigger scroll whenever chatHistory changes
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [chatHistory, isOpen]);

  const handleQuestionClick = (q: string, a: string) => {
    setChatHistory((prev) => [
      ...prev,
      { type: "user", text: q },
      { type: "bot", text: a },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-100 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[320px] md:w-95 bg-white rounded-3xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-blue-600 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageSquare className="text-white w-4 h-4" />
              </div>
              <span className="text-white font-bold text-sm">
                Recruiter Bot
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-75 overflow-y-auto p-4 space-y-4 bg-slate-50 scroll-smooth">
            {chatHistory.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm font-medium shadow-sm ${
                    msg.type === "user"
                      ? "bg-blue-600 text-white rounded-tr-none"
                      : "bg-white text-slate-700 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {/* This empty div acts as the anchor for scrolling */}
            <div ref={messagesEndRef} />
          </div>

          {/* FAQ Suggestions */}
          <div className="p-4 bg-white border-t border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
              Quick Questions
            </p>
            <div className="flex flex-wrap gap-2">
              {faq.map((item, i) => (
                <button
                  key={i}
                  onClick={() =>
                    handleQuestionClick(item.question, item.answer)
                  }
                  className="text-xs font-bold px-3 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors border border-transparent hover:border-blue-100"
                >
                  {item.question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-700 hover:scale-110 transition-all duration-300 group"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default ChatBot;
