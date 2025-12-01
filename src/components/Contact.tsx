"use client";
import { useState, useEffect } from "react";
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle, Briefcase, Sparkles } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(139, 92, 246, 0.5);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes checkmark {
          0% {
            transform: scale(0) rotate(-45deg);
          }
          50% {
            transform: scale(1.2) rotate(-45deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-expandWidth {
          animation: expandWidth 0.6s ease-out forwards;
        }

        .animate-checkmark {
          animation: checkmark 0.6s ease-out forwards;
        }

        .gradient-text {
          background: linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .shimmer-btn {
          position: relative;
          overflow: hidden;
        }

        .shimmer-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .shimmer-btn:hover::before {
          left: 100%;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: #8b5cf6;
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
        }
      `}</style>

      <section id="contact" className="mt-12">
        {/* Header */}
        <div className={`transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
          <div className="relative inline-block mb-2">
            <h3 className="text-4xl font-bold text-slate-800">Let's Connect</h3>
            <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full animate-expandWidth"></div>
          </div>
          <p className="mt-4 text-lg text-slate-600">
            I'm always excited to discuss new opportunities and collaborations
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mt-10 bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-2xl border-2 border-purple-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Contact Info */}
            <div className={`p-8 md:p-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white transform transition-all duration-700 delay-100 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            }`}>
              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                {/* Open to Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center animate-float">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold">Open to Opportunities</h4>
                  </div>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Data Science internships, ML engineering roles, and exciting collaborations. 
                    Let's build something amazing together!
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/30 my-8"></div>

                {/* Contact Details */}
                <div className="space-y-6">
                  {/* Email */}
                  <div className="group">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="w-5 h-5 text-white/70" />
                      <span className="text-sm font-semibold text-white/70 uppercase tracking-wide">Email</span>
                    </div>
                    <a 
                      href="mailto:sanchitapriyadarshinee@gmail.com"
                      className="text-lg font-medium text-white hover:text-white/80 transition-colors duration-300 block"
                    >
                      sanchitapriyadarshinee@gmail.com
                    </a>
                  </div>

                  {/* Location */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-white/70" />
                      <span className="text-sm font-semibold text-white/70 uppercase tracking-wide">Location</span>
                    </div>
                    <p className="text-lg font-medium">Rourkela, Odisha, India</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <a 
                    href="mailto:sanchitapriyadarshinee@gmail.com"
                    onMouseEnter={() => setHoveredButton('email')}
                    onMouseLeave={() => setHoveredButton(null)}
                    className="shimmer-btn flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-purple-600 font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Me</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/sanchita-priyadarshinee-9912b6282/"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => setHoveredButton('linkedin')}
                    onMouseLeave={() => setHoveredButton(null)}
                    className="shimmer-btn flex items-center gap-2 px-6 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white font-bold border-2 border-white/50 transition-all duration-300 hover:bg-white hover:text-purple-600 hover:scale-105 hover:shadow-2xl"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>

                {/* Decorative elements */}
                <div className="mt-12 flex items-center gap-4">
                  <Sparkles className="w-6 h-6 text-white/50 animate-float" />
                  <div className="flex-1 h-px bg-gradient-to-r from-white/50 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className={`p-8 md:p-10 transform transition-all duration-700 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
            }`}>
              <h4 className="text-2xl font-bold text-slate-800 mb-2">Send a Message</h4>
              <p className="text-slate-600 mb-8">Fill out the form below and I'll get back to you soon</p>

              <div onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full border-2 border-slate-200 rounded-xl px-5 py-3 text-slate-800 transition-all duration-300 hover:border-purple-300"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full border-2 border-slate-200 rounded-xl px-5 py-3 text-slate-800 transition-all duration-300 hover:border-purple-300"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div className="group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="w-full border-2 border-slate-200 rounded-xl px-5 py-3 text-slate-800 transition-all duration-300 hover:border-purple-300 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="shimmer-btn w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white font-bold shadow-lg shadow-purple-200 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 animate-scaleIn">
                    <CheckCircle className="w-6 h-6 text-green-600 animate-checkmark" />
                    <div>
                      <p className="text-green-700 font-semibold">Message Sent Successfully!</p>
                      <p className="text-sm text-green-600">Thanks for reaching out. I'll reply soon.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className={`mt-10 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl p-8 text-center shadow-2xl shadow-purple-300 transform transition-all duration-700 delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
          <h4 className="text-3xl font-bold text-white mb-3">
            Ready to Start a Conversation?
          </h4>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Whether you have a question, project idea, or just want to connect, I'm here and excited to hear from you!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:sanchitapriyadarshinee@gmail.com"
              className="shimmer-btn px-8 py-4 bg-white text-purple-600 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}