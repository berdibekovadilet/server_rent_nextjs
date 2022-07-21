import Head from "next/head";
import Advantages from "../components/server/Advantages";
import Contact from "../components/server/Contact";
import Footer from "../components/server/Footer";
import Hero from "../components/server/Hero";
import Navbar from "../components/server/Navbar";
import Responsibility from "../components/server/Responsibility";
import Tariffs from "../components/server/Tariffs";
import WhyWe from "../components/server/WhyWe";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Аренда серверов | Helpdesk</title>
        <meta name="description" content="Аренда серверов в Бишкеке" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Advantages />
      <Tariffs />
      <WhyWe />
      <Responsibility />
      <Contact />
      <Footer />
    </main>
  );
}
