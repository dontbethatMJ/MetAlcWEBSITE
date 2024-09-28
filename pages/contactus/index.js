import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";
import { useState } from "react";
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY_2);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Head>
        <title>MetAlc Productions</title>
    </Head>
    <div className="h-full bg-cover bg-center" style={{ backgroundImage: "url('/bg2.png')" }}>
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input border-white text-white placeholder-white"
                disabled={isLoading}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input border-white text-white placeholder-white"
                disabled={isLoading}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea border-white text-white placeholder-white"
              disabled={isLoading}
              required
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {isLoading ? "Submitting..." : "Let's talk"}
              </span>

              {!isLoading && (
                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                  aria-hidden
                />
              )}
            </button>
          </motion.form>
          <span className="mt-4 text-center">{result}</span>
        </div>
      </div>
      {/* Down Arrow */}
      <Link href="/newsletter" passHref legacyBehavior>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          whileHover={{ y: [-5, 2], transition: { yoyo: Infinity, duration: 0.5 } }}
        >
          <img
            src="/arrow.png"
            alt="Down Arrow"
            className="rotate-90 w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
          />
        </motion.a>
      </Link>
    </div>
    </>
  );
};

export default Contact;
