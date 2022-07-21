import Head from "next/head";
import Hero from "../components/itoutsource/Hero";


const itoutsource = () => {
  return (
    <main>
      <Head>
        <title>ИТ аутсорс | Helpdesk</title>
        <meta name="description" content="ИТ аутсорс и системный администратор в Бишкеке" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
   
    </main>
  );
};

export default itoutsource;
