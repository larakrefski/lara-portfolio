"use client";

import { useState } from "react";


export function ContactMe() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // This ensures 'form' is not null when the fetch finishes
    const form = e.currentTarget;
    
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "a936953d-7a0f-48bc-83e4-26e58bfe4339");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        // When using JSON headers, you must stringify the body
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();

      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="relative inline-block text-3xl md:text-[2.5rem] font-display font-semibold text-[#141e22] uppercase tracking-wider">
            Contact Me
            <span className="absolute -bottom-2 left-0 w-full h-[10px] bg-[#90C9E1]" />
          </h2>
        </div>

        {status === "success" ? (
          <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
            <p className="text-green-800 font-medium">Message sent successfully! I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            <div className="flex flex-col gap-2">
              {/* <label htmlFor="name" className="font-bold text-[#141e22]">Name</label> */}
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="NAME"
                className="p-4 border-2 border-[#90c9e1] rounded-lg focus:border-[#081f73] outline-none transition-all duration-200 ease-in-out focus:ring-4 focus:ring-[#081f73]/15 placeholder:text-xl placeholder:text-[#141e22]/60"
              />
            </div>

            <div className="flex flex-col gap-2">
              {/* <label htmlFor="email" className="font-bold text-[#141e22]">Email</label> */}
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="EMAIL"
                className="p-4 border-2 border-[#90c9e1] rounded-lg focus:border-[#081f73] outline-none transition-all duration-200 ease-in-out focus:ring-4 focus:ring-[#081f73]/15 placeholder:text-xl placeholder:text-[#141e22]/60"
              />
            </div>

            <div className="flex flex-col gap-2">
              {/* <label htmlFor="message" className="font-bold text-[#141e22]">Message</label> */}
              <textarea
                required
                id="message"
                name="message"
                rows={5}
                placeholder="MESSAGE"
                className="p-4 border-2 border-[#90c9e1] rounded-lg focus:border-[#081f73] outline-none resize-none transition-all duration-200 ease-in-out focus:ring-4 focus:ring-[#081f73]/15 placeholder:text-xl placeholder:text-[#141e22]/60"
              />
            </div>


            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-4 bg-[#90c9e1] text-[#141e22] font-display font-bold py-2 px-4 w-fit mx-auto rounded-lg text-xl uppercase hover:opacity-80 transition-opacity disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Let's connect"}
            </button>

            {status === "error" && (
              <p className="text-red-600 font-medium text-center">
                Something went wrong. Please try again.
              </p>
            )}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
          </form>
        )}
      </div>
    </section>
  );
}