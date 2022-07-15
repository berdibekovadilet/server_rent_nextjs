import Head from "next/head";
import Image from "next/image";
import Hero from "../components/server/Hero";
import styles from "../styles/Home.module.scss";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Аренда серверов | Helpdesk</title>
        <meta name="description" content="Аренда серверов в Бишкеке" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      
    </div>
  );
}
