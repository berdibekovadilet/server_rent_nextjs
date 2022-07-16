import Head from "next/head";
import Image from "next/image";
import Advantages from "../components/server/Advantages";
import Hero from "../components/server/Hero";
import WhyWe from "../components/server/WhyWe";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Аренда серверов | Helpdesk</title>
        <meta name="description" content="Аренда серверов в Бишкеке" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Advantages />
      <WhyWe />
    </div>
  );
}
