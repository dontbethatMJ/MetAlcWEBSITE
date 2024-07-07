import { motion } from "framer-motion";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import Link from 'next/link';

export const BlogData = [
  {
    id: 1,
    title: 'Introduction to React',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit....',
    author: 'John Doe',
    date: 'March 1, 2024',
  },
  {
    id: 2, 
    title: 'Another React Blog',
    content: 'Another blog content...',
    author: 'Jane Doe',
    date: 'March 5, 2024',
  },
  {
    id: 3,
    title: 'Another React Blog',
    content: 'Another blog content...',
    author: 'Jane Doe',
    date: 'March 5, 2024',
  },
  {
    id: 4, 
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {BlogData.map((blog) => (
                <motion.div
                  key={blog.id}
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-8 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
                >
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Down Arrow */}
      <Link href="/" passHref legacyBehavior>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <img
            src="/arrow.png"
            alt="Down Arrow"
            className="rotate-90 w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
          />
        </motion.a>
      </Link>
    </div>
  );
};

export default Blog;
