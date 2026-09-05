import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaCheck,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      
      className="bg-[#F2EFE7] py-20"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="rounded-3xl bg-[#432f2e] p-8 lg:p-14">
          <div className="flex flex-col lg:flex-row lg:items-start 
          lg:justify-between gap-8 border-b border-[#feefb8]/15 pb-10 mb-10">
            <div className="flex items-center gap-6">
              <h2
                className="text-5xl sm:text-6xl font-black uppercase
                 tracking-tight text-[#feefb8] leading-none"
                style={{ fontFamily: "'Arial Black', sans-serif" }}
              >
                Contact
                <br />
                Me
              </h2>
              <div className="hidden sm:block w-[2px] self-stretch bg-[#feefb8]/30" />
              <p className="hidden sm:block max-w-[160px] text-sm 
              text-[#feefb8]/70 leading-relaxed">
                Reach Out To me For Any Queries.
              </p>
            </div>

            <div className="space-y-4">
              <InfoRow
                icon={<FaMapMarkerAlt size={16} />}
                
                value="Dhaka, Bangladesh"
              />
              <InfoRow
                icon={<FaPhone size={16} />}
               
                value="+880 1984 284 806"
              />
              <InfoRow
                icon={<FaEnvelope size={16} />}
            
                value="jarifatasnim13@gmail.com"
                href="mailto:jarifatasnim13@gmail.com"
              />
            </div>
          </div>

          {/* ================= FORM ================= */}
          {sent ? (
            <div className="flex flex-col items-center justify-center text-center py-16">
              <div className="w-14 h-14 rounded-full bg-[#feefb8] flex items-center justify-center mb-5">
                <FaCheck size={20} className="text-[#432f2e]" />
              </div>
              <h3 className="text-xl font-semibold text-[#feefb8]">
                Your message has been sent!
              </h3>
              <button
                onClick={() => setSent(false)}
                className="mt-5 text-sm text-[#feefb8]/70 hover:text-[#feefb8] hover:underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Left: stacked inputs */}
                <div className="space-y-5">
                  <BlockField
                    id="name"
                    placeholder="Your Name*"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <BlockField
                    id="email"
                    placeholder="Your E-mail Address*"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Right: big message box */}
                <textarea
                  id="message"
                  required
                  placeholder="Type your message..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full h-full min-h-[168px] rounded-lg 
                  border-2 border-[#feefb8]/30 bg-[#feefb8] px-5 py-4 
                  text-sm text-[#432f2e] placeholder-[#432f2e]/50 outline-none transition focus:border-[#feefb8] resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-block rounded-lg
                 bg-[#ffffff] px-8 py-3 text-sm font-bold 
                 uppercase tracking-wider text-[#432f2e] 
                 shadow-sm transition-all duration-300 
                 hover:bg-[#feefb8] hover:-translate-y-0.5 cursor-pointer"
              >
                Send!
              </button>
            </form>
          )}

          {/* ================= SOCIAL ROW ================= */}
          <div className="mt-14 pt-8 border-t border-[#feefb8]/15 flex items-center justify-center gap-4">
            <SocialIcon
              icon={<FaGithub size={16} />}
              href="https://github.com/zeets13"
              label="GitHub"
            />
            <SocialIcon
              icon={<FaLinkedin size={16} />}
              href="https://www.linkedin.com/in/jarifa-tasnim"
              label="LinkedIn"
            />
            <SocialIcon
              icon={<FaEnvelope size={16} />}
              href="mailto:jarifatasnim13@gmail.com"
              label="Email"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value, href }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="text-[#feefb8]">{icon}</span>
      {href ? (
        <a
          href={href}
          className="text-[#feefb8] hover:underline underline-offset-2"
        >
          {value}
        </a>
      ) : (
        <span className="text-[#feefb8]">{value}</span>
      )}
    </div>
  );
}

function BlockField({ id, type, placeholder, value, onChange }) {
  return (
    <input
      id={id}
      type={type}
      required
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border-2 border-[#feefb8]/30 
      bg-[#feefb8] px-5 py-4 text-sm text-[#432f2e] 
      placeholder-[#432f2e]/50 outline-none transition focus:border-[#feefb8]"
    />
  );
}

function SocialIcon({ icon, href, label }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#feefb8]/40 text-[#feefb8] transition-colors duration-300 hover:bg-[#feefb8] hover:text-[#432f2e]"
    >
      {icon}
    </a>
  );
}

export default Contact;
