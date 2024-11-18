"use client";
import sendEmail from "@/actions/sendEmail";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const ContactPage = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("senderEmail", email);
    formData.append("message", message);

    try {
      const { data } = await sendEmail(formData);
      setSuccess(true);
    } catch (error) {
      setError(true);
    }
  };

  const textMessage = "Contact Me";

  return (
    <div className="h-full">
      <div className="flex flex-col lg:flex-row h-full p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex justify-center items-center gap-2 mt-10 text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
          <div>
            {textMessage.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-purple-50"
              >
                {letter}
              </motion.span>
            ))}
            📧
          </div>
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="h-1/2 lg:h-full lg:w-1/2 flex flex-col bg-slate-950/80 rounded text-sm lg:text-xl gap-4 justify-center p-10 lg:p-24"
        >
          <label htmlFor="senderEmail">Email Address</label>
          <input
            id="senderEmail"
            name="senderEmail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className=" bg-transparent border-b-2 border-purple-100 focus:outline-none"
            placeholder="yourname@gmail.com"
          />
          <label htmlFor="message">Dear Hrittik,</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={10}
            required
            className=" bg-transparent border-b-2 border-purple-100 focus:outline-none"
            placeholder="write me a message"
          />
          <button
            type="submit"
            className="bg-purple-900 hover:bg-purple-300 hover:text-purple-950 py-2 mt-5"
          >
            Send
          </button>
          {success && (
            <div className="bg-emerald-800/80 text-white text-center text-xl py-1 ">
              Email sent successfully!
            </div>
          )}
          {error && (
            <div className="bg-rose-800/80 text-white text-center text-xl py-1 ">
              Can&apos; send due to free domain
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
