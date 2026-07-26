import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaCheck
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  {/*const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:jarifatasnim13@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };*/}
  const handleSubmit = (e) => {
  e.preventDefault();
  

 emailjs.send(
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

      setForm({
        name: "",
        email: "",
        message: "",
      });
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send message.");
    });
};

  return (
    <section id="contact" className="bg-[#f6fafd] py-20">
      <div className="max-w-6xl mx-auto px-8">
      
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-[#1a3d63] mb-4">
            Get In Touch
          </span>
          <h2 className="text-5xl font-bold text-[#4a7fa7] mb-5">
            Let's Build Something Together.
          </h2>
          <p className="text-[#0a1931]/70 leading-8 text-md">
            Have a project in mind? I'd love to hear about it. 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 bg-[#f6fafd] rounded-lg border border-sky-200 shadow-md p-8 lg:p-14">
          {/* Leftside*/}
          <div className="lg:col-span-2 flex flex-col justify-between gap-8">
            <div className="space-y-10" >
              <ContactRow icon={<FaMapMarkerAlt size={20} className="" />} label="Location" value="Dhaka, Bangladesh" />
              <ContactRow
                icon={<FaEnvelope size={20} />}
                label="Email"
                value="jarifatasnim13@gmail.com"
                href="mailto:jarifatasnim13@gmail.com"
              />
              <ContactRow icon={<FaPhone size={20} />} label="Phone" value="+880 1984 284 806" />
            </div>

           
          </div>

          {/* Rightside*/}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-14 h-14 rounded-full bg-blue-200 flex items-center justify-center mb-5">
                  <FaCheck size={20} className="text-black/70" />
                </div>
                <h3 className="text-xl font-semibold text-ink">
                  Your email has been sent!
                </h3>
                
                <button
                  onClick={() => setSent(false)}
                  className="mt-5 text-sm text-gray-700 hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <FormField
                  id="name"
                  label="Name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                />
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-[0.03em] text-[#0a1931] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project or idea…"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-blue-300 bg-[#ffffff] px-5 py-3 text-sm text-ink placeholder-black/40 outline-none transition focus:border-[#4a7fa7] focus:ring-2 focus:ring-dust-light resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#4a7fa7] px-6 py-4 text-md font-semibold text-ivory shadow-sm transition-all cursor-pointer duration-300 hover:bg-[#1a3d63] hover:shadow-md hover:-translate-y-0.5 tracking-wide"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-9 h-9  flex items-center justify-center text-[#3d5a80] shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <p className="text-md font-semibold  tracking-[.02em] text-[#0a1931]  mb-0.5">
          {label}
        </p>
        {href ? (
          <a href={href} className="text-sm text-ink/85 hover:text-[#1a3d63] transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-sm text-ink/85">{value}</p>
        )}
      </div>
    </div>
  );
}


function FormField({ id, label, type, placeholder, value, onChange }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold uppercase tracking-[0.03em] text-[#0a1931] mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-blue-300 bg-white px-5 py-3 text-sm text-ink placeholder-black/40 outline-none transition focus:border-[#4a7fa7] focus:ring-2 focus:ring-dust-light"
      />
    </div>
  );
}

export default Contact;
