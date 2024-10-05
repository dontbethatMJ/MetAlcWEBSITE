import { useState } from "react";
import { motion } from "framer-motion";
import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";
import Link from "next/link";
import Head from 'next/head';

const Testimonials = () => {
  const [name, setName] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(""); // Added state for result message

  const handleSubmit = async (event) => { // Added handleSubmit function
    event.preventDefault();
    setIsLoading(true);
    // Removed setResult

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY); // Added access key

    try {
      const response = await fetch("https://api.web3forms.com/submit", { // Fetch request to Web3Forms
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        alert("Thank You for your feedback :)"); // Show success alert
        setName("");
        setTestimonial("");
        setRating(0);
      } else {
        console.log("Error", data);
        alert("Try again later :("); // Show error alert
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Try again later :("); // Show error alert
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Head>
        <title>MetAlc Productions</title>
    </Head>
    <div className="h-screen bg-[url('/bg2.png')] bg-cover bg-center text-center pt-16 flex flex-col">
      <div className="container mx-auto flex-grow flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 md:mt-16"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>

        {/* Testimonial Slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-grow flex items-center -mt-12"
        >
          <TestimonialSlider />
        </motion.div>

        {/* Testimonial Form */}
        <motion.form
          className="flex justify-center items-stretch max-w-4xl mx-auto gap-6 mb-24 md:mb-8"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          autoComplete="off"
          autoCapitalize="off"
          style={{ width: '80%' }}
          onSubmit={handleSubmit} // Added onSubmit handler
        >
          <div className="flex flex-col items-center gap-2 md:w-1/3 w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input w-full text-white border-white placeholder-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
              required
            />
            <div className="flex flex-col items-center mb-2 w-full">
              <input
                type="number"
                name="rating"
                min="0"
                max="5"
                value={rating === 0 ? "" : rating} // Removed default 0 value
                onChange={(e) => setRating(Number(e.target.value))}
                className="input w-3/4 text-white border-white placeholder-white text-center" // Added text-center for centering
                placeholder="Rate Us out of 5"
                disabled={isLoading}
                required
              />
            </div>
            <button
              type="submit"
              className="btn rounded-full border border-white w-full max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mt-auto"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] border-white text-white group-hover:opacity-0 transition-all duration-500">
                {isLoading ? "Submitting..." : "Submit"}
              </span>
            </button>
          </div>
          <textarea
            name="testimonial"
            placeholder="Submit your Testimonial here"
            className="textarea w-2/3 border-white text-white placeholder-white"
            value={testimonial}
            onChange={(e) => setTestimonial(e.target.value)}
            disabled={isLoading}
            required
          />
          <input type="hidden" name="subject" value="Someone gave a feedback" />
          <input type="hidden" name="from_name" value="Testimonials - MetalcProductions" />
        </motion.form>
        <span className="mt-4 text-center">{result}</span> {/* Added result message display */}
      </div>

      {/* Down Arrow */}
      <button
        onClick={() => window.location.href = '/contactus'} // Changed to button with onClick
        className="mb-6 hidden md:block" // Added hidden for small screens and block for medium and up
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

export default Testimonials;