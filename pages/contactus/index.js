import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";
import { useState } from "react";
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState(""); // New state for popup message
  const [showPopup, setShowPopup] = useState(false); // New state for popup visibility

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setPopupMessage("Sending...."); // Update to set popup message
    // setShowPopup(false); // Remove popup visibility control

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setPopupMessage("Message Sent Successfully"); // Success message
        event.target.reset(); // Clear the input fields
      } else {
        console.log("Error", data);
        setPopupMessage("Message not sent, Try again later :("); // Error message
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setPopupMessage("Message not sent, Try again later :("); // Error message
    } finally {
      setIsLoading(false);
      alert(popupMessage); // Show alert with the message
      // setShowPopup(true); // Remove popup visibility control
    }
  };

  return (
    <>
    <Head>
        <title>MetAlc Productions</title>
    </Head>
    <div className="h-full bg-cover bg-center" style={{ backgroundImage: "url('/bg23.png')" }}>
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="h2 text-center -mb-0"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            className="text-center mb-12"
          >
            <a href="mailto:support@metalcproductions.com" className="text-[#ffffffc8]">support@metalcproductions.com</a>
          </motion.p>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
          >
            <input type="hidden" name="subject" value="Someone wants to connect" />
            <input type="hidden" name="from_name" value="Contact Us - MetalcProductions"></input>

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
                type="number" // Changed to 'tel' for phone number
                name="phone"
                placeholder="Phone Number (with country code)"
                className="input border-white text-white placeholder-white"
                disabled={isLoading}
                required
              />
            </div>
            <div className="flex gap-x-6 w-full">
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
        </div>
      </div>
      {/* Popup for messages */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg text-center" style={{ width: '200px', height: '300px' }}>
            <p>{popupMessage}</p>
            <button onClick={() => setShowPopup(false)} className="mt-2 btn">Close</button>
          </div>
        </div>
      )}
      {/* Down Arrow */}
      <button
        onClick={() => window.location.href = '/aboutus'}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block" // Centered and hidden on small devices
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ y: [-5, 2], transition: { yoyo: Infinity, duration: 0.5 } }}
        >
          <img
            src="/arrow.png"
            alt="Down Arrow"
            className="rotate-90 w-8 h-8 cursor-pointer hover:scale-110 transition-transform mx-auto"
          />
        </motion.div>
      </button>
    </div>
    </>
  );
};

export default Contact;