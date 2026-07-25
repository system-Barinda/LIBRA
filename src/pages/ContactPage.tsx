import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle2,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "How quickly does the team respond?",
    answer:
      "Our support and inquiry team typically responds within 24 business hours during standard operating times.",
  },
  {
    question: "Where can I request dynamic API access?",
    answer:
      "You can submit a technical access request directly through the message form by choosing 'API & Technical Support'.",
  },
  {
    question: "Can I visit the primary office in person?",
    answer:
      "In-person visits are welcome during active working hours. Please schedule an appointment in advance via phone or email.",
  },
];

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General Inquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const infoCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        infoCardsRef.current?.children || [],
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      );

      gsap.fromTo(
        formCardRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.2 },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        category: "General Inquiry",
        message: "",
      });
    }, 4000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full space-y-12">
        {/* HERO HEADER */}
        <header className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold tracking-wide">
            <Sparkles size={14} /> Get In Touch
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            We’d love to hear from you
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Have questions about our catalog system or need support? Reach out
            to us directly or fill out the form below.
          </p>
        </header>

        {/* MAIN CONTACT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE: DIRECT INFO & FAQS */}
          <div ref={infoCardsRef} className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="text-orange-500" size={20} /> Contact
                Details
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-slate-200 transition">
                  <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Email Us
                    </p>
                    <p className="font-medium text-slate-800 mt-0.5">
                      support@mediacatalog.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-slate-200 transition">
                  <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Call Us
                    </p>
                    <p className="font-medium text-slate-800 mt-0.5">
                      +250 (0) 788 000 000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-slate-200 transition">
                  <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="font-medium text-slate-800 mt-0.5">
                      Kigali, Rwanda
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-slate-200 transition">
                  <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Business Hours
                    </p>
                    <p className="font-medium text-slate-800 mt-0.5">
                      Mon - Fri: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQ Section */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base">
                Frequently Asked Questions
              </h3>
              <div className="space-y-2">
                {FAQ_DATA.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-100 rounded-xl overflow-hidden bg-slate-50/50"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-3.5 text-left font-semibold text-xs sm:text-sm text-slate-800 hover:bg-slate-100 transition"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={16}
                        className={`text-slate-400 transition-transform duration-200 ${
                          openFaqIndex === idx
                            ? "rotate-180 text-orange-500"
                            : ""
                        }`}
                      />
                    </button>
                    {openFaqIndex === idx && (
                      <div className="p-3.5 pt-0 text-xs text-slate-500 leading-relaxed border-t border-slate-100 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: INTERACTIVE FORM CARD */}
          <div ref={formCardRef} className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm relative overflow-hidden">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500 text-sm max-w-md">
                    Thank you for reaching out. A team member will review your
                    request and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h2 className="text-xl font-bold text-slate-900">
                      Send us a Message
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out the fields below to dispatch an direct message.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition"
                      />
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition"
                    >
                      <option>General Inquiry</option>
                      <option>Media Borrowing Support</option>
                      <option>API & Technical Support</option>
                      <option>Feedback & Suggestions</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Write your message details here..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-xl transition shadow-md shadow-orange-500/20 flex items-center justify-center gap-2"
                  >
                    <Send size={16} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
