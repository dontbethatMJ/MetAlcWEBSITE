import { Comfortaa } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Nav from "../components/Nav";

// setup font
const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  weight: ["300", "400", "500", "600", "700"],
});

const Layout = ({ children }) => {

  const router = useRouter(); // Get the router object
  const isArtworkPage = router.asPath === '/artwork' || router.asPath === 'https://community.metalcproductions.com/artwork'; // Check if the current page is /artwork or the full URL

  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${comfortaa.variable} font-comfortaa relative`}
    >
      {/* metadata */}
      <Head>
        <title>Metalc Productions</title>
        <link rel="icon" href="/favicon.webp" type="image/x-icon" />
        <meta
          name="MetAlcProductions"
          content="Metaverse Alchemists building Multiversal Realities!"
        />
        <meta
          name="keywords"
          content="unreal, blender, unity"
        />
        <meta name="author" content="Tarun" />
        <meta name="theme-color" content="#f13024" />
        <meta property="og:title" content="Metalc Productions" />
        <meta property="og:description" content="Metaverse Alchemists building Multiversal Realities!" />
        <meta property="og:image" content="/banner.webp" />
        <meta property="og:url" content="https://metalcproductions.com" />
      </Head>

      {/* 
    */}
    <Nav /> 
      {/*  */}
      <Header isArtworkPage={isArtworkPage} />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;