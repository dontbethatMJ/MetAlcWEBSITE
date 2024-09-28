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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle form submission logic here, like sending data to backend or storing locally.
    console.log("Name:", name);
    console.log("Testimonial:", testimonial);
    console.log("Rating:", rating);
    // Clear form fields after submission
    setName("");
    setTestimonial("");
    setRating(0);
    setIsLoading(false);
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
          className="h2 mb-4"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>

        {/* Testimonial Slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-grow flex items-center"
        >
          <TestimonialSlider />
        </motion.div>

        {/* Testimonial Form */}
        <motion.form
          onSubmit={handleFormSubmit}
          className="mt-4 flex justify-center items-stretch max-w-4xl mx-auto gap-6"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          autoComplete="off"
          autoCapitalize="off"
          style={{ width: '80%' }}
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
              <label className="block font-medium mb-1 text-white/80">
                Rating (out of 5)
              </label>
              <div className="flex justify-center w-full">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`text-2xl text-accent focus:outline-none ${
                      star <= rating ? "text-accent" : "text-gray-300"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
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
        </motion.form>
      </div>

      {/* Down Arrow */}
      <Link href="/contactus" passHref>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-4"
          whileHover={{ y: [-5, 2], transition: { yoyo: Infinity, duration: 0.5 } }}
        >
          <img
            src="/arrow.png"
            alt="Down Arrow"
            className="rotate-90 w-8 h-8 cursor-pointer hover:scale-110 transition-transform mx-auto"
          />
        </motion.div>
      </Link>
    </div>

    </>
  );
};

export default Testimonials;
