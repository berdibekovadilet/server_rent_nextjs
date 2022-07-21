import Head from "next/head";
import Contact from "../components/itoutsource/Contact";
import Footer from "../components/itoutsource/Footer";
import Hero from "../components/itoutsource/Hero";
import Navbar from "../components/itoutsource/Navbar";
import Responsibility from "../components/itoutsource/Responsibility";
import WhyWe from "../components/itoutsource/WhyWe";

const itoutsource = () => {
  return (
    <main>
      <Head>
        <title>ИТ аутсорс | Helpdesk</title>
        <meta
          name="description"
          content="ИТ аутсорс и системный администратор в Бишкеке"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <WhyWe />
      <Responsibility />
      <Contact />
      <Footer />
    </main>
  );
};

export default itoutsource;
