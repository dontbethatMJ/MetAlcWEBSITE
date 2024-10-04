import { Comfortaa } from "next/font/google";
import Head from "next/head";

 import Header from "../components/Header";
 import Nav from "../components/Nav";

// setup font
const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  weight: ["300", "400", "500", "600", "700"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${comfortaa.variable} font-comfortaa relative`}
    >
      {/* metadata */}
      <Head>
        <title>Metalc Productions</title>
        <meta
          name="MetAlcProductions"
          content="Helping people to find work in gaming."
        />
        <meta
          name="keywords"
          content="unreal, blender, unity"
        />
        <meta name="author" content="MetAlc" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      {/* 
    */}
    <Nav /> 
      {/*  */}
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;