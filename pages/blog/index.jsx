import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

export const BlogData = [
  {
    id: 1,
    title: 'Introduction to React',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit....',
    author: 'John Doe',
    date: 'March 1, 2024',
  },
  {
    id: 2, // Change the ID to make it unique
    title: 'Another React Blog',
    content: 'Another blog content...',
    author: 'Jane Doe',
    date: 'March 5, 2024',
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-32 text-center xl:text-left flex flex-col overflow-y-auto">
      <Circles />
      <div className="flex-1 container mx-auto flex flex-col items-center xl:flex-row gap-x-6 overflow-y-auto">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Some EYE Catchy <span className="text-accent">Blogs</span>
          </motion.h2>
          <div className="blog-list" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto' }}>
            {BlogData.map((blog) => (
              <div key={blog.id} className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300" style={{ marginBottom: '20px', marginLeft: '0' }}>
                <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px', padding: '20px' }}>
                  <h2 style={{ color: '#f13024', marginBottom: '10px', fontWeight: 'bold' }}>{blog.title}</h2>
                  <p style={{ color: '#F8F8F8', marginBottom: '5px' }}>
                    <strong>Author:</strong> {blog.author}
                  </p>
                  <p style={{ color: '#F8F8F8', marginBottom: '5px' }}>
                    <strong>Date:</strong> {blog.date}
                  </p>
                  <p style={{ color: '#EEEEEE' }}>{blog.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
