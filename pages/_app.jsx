import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import Layout from "../components/Layout";

import "../styles/globals.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
    <Head>
        <title>MetAlc Productions</title>
    </Head>
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
    </>
  );
}

export default MyApp;