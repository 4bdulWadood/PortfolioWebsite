import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="lg:hidden bg-[#1F1F1F] p-8 rounded-lg space-y-6">
      <h2
        className="text-[24px] font-bold text-center bg-gradient-to-r from-[#7A19D3] via-[#F1810B] to-[#FF00B9] bg-clip-text text-transparent w-full"
        style={{
          backgroundSize: "200% 100%",
          backgroundPosition: "0 0",
        }}
      >
        CONTACT ME
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#715DFC] transition-colors"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#715DFC] transition-colors"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Subject (Optional)"
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#715DFC] transition-colors"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </div>
        <div className="space-y-2">
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#715DFC] transition-colors resize-none"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-[#7A19D3] to-[#715DFC] text-white font-medium hover:opacity-90 transition-opacity"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
