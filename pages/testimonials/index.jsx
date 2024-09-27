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
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>

        {/* Testimonial Slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>

        {/* Testimonial Form */}
        <motion.form
          onSubmit={handleFormSubmit}
          className="mt-8 flex justify-center items-center max-w-4xl mx-auto gap-6"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          autoComplete="off"
          autoCapitalize="off"
          style={{ width: '60%' }}
        >
          <div className="flex flex-col gap-6 w-1/3 items-center">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
              required
            />
            <div className="flex flex-col items-center mb-4 w-full">
              <label className="block font-medium mb-2 text-[#585864]">
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
              className="btn rounded-full border border-white/50 w-full max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {isLoading ? "Submitting..." : "Submit"}
              </span>
            </button>
          </div>
          <textarea
            name="testimonial"
            placeholder="Submit your Testimonial here"
            className="textarea w-2/3 h-full"
            value={testimonial}
            onChange={(e) => setTestimonial(e.target.value)}
            disabled={isLoading}
            required
          />
        </motion.form>
      </div>

      {/* Down Arrow */}
      <Link href="/contactus" passHref>
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

export default Testimonials;
