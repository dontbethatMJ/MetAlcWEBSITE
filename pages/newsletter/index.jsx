import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Link from 'next/link';
import Head from 'next/head';

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
  },
  {
    id: 5,
    title: 'Another React Blog',
    content: 'Another blog content...',
    author: 'Jane Doe',
    date: 'March 5, 2024',
  },
  {
    id: 6,
    title: 'Another React Blog',
    content: 'Another blog content...',
    author: 'Jane Doe',
    date: 'March 5, 2024',
  }
];

const Blog = () => {
  return (
    <>
    <Head>
      <title>MetAlc Productions</title>
    </Head>
    <div className="h-dvh py-32 text-center xl:text-left flex flex-col overflow-hidden relative" style={{
      backgroundImage: 'url("/bg2.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="flex-1 container mx-auto flex flex-col items-center xl:flex-row gap-x-6" style={{ marginTop: '-20px' }}>
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="h2"
          >
            News and Articles
          </motion.h2>
          <div className="blog-list-container font-comfortaa max-w-[1000px] mx-auto h-[60vh] overflow-y-scroll">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {BlogData.map((blog) => (
                <motion.div
                  key={blog.id}
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  animate="show"
                  className="bg-[#22272a] text-[#eef0f1] rounded-lg px-6 py-8 group cursor-pointer hover:bg-[#c8dae0]" // Ensure group class is present
                >
                  <div className="border-b border-[#eef0f1] group-hover:border-[#16232b] mb-5 p-5"> {/* Changed to use Tailwind classes */}
                    <h2 className="text-xl text-accent" style={{ marginBottom: '10px', fontWeight: 'bold' }}>{blog.title}</h2>
                    <p className="text-[#eef0f1] group-hover:text-[#16232b]" style={{ marginBottom: '5px' }}>
                      <strong>Author:</strong> {blog.author}
                    </p>
                    <p className="text-[#eef0f1] group-hover:text-[#16232b]" style={{ marginBottom: '5px' }}>
                      <strong>Date:</strong> {blog.date}
                    </p>
                    <p className="text-[#eef0f1] group-hover:text-[#16232b]" style={{ marginBottom: '5px' }}>{blog.content}</p> {/* Added group-hover class */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Down Arrow */}
      <button
        onClick={() => window.location.href = 'https://community.metalcproductions.com/artwork'}
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
      <style jsx global>{`
        html, body {
          overflow: hidden;
          height: 100%;
          margin: 0;
          padding: 0;
        }
        #__next {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
      <style jsx>{`
        .blog-list-container {
          -ms-overflow-style: auto;  /* Internet Explorer 10+ */
          scrollbar-width: thin;  /* Firefox */
          border-right: 8px solid transparent; /* Add space for scrollbar */
        }

        .blog-list-container::-webkit-scrollbar {
          width: 8px;  /* Width of the scrollbar */
        }

        .blog-list-container::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.5); /* Color of the scrollbar */
          border-radius: 10px; /* Rounded corners for the scrollbar */
        }

        .blog-list-container::-webkit-scrollbar-track {
          background: transparent; /* Background of the scrollbar track */
        }
      `}</style>
    </div>
    </>
  );
};

export default Blog;
