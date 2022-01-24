import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const mapsData = [
    {
      title: "文青 Cafes",
      description: "2 work at",
      link:
        "https://www.google.com/maps/placelists/list/6UoUNzyeTsmyXKlnT2P5Og",
    },
    {
      title: "Bars",
      description: "",
      link: "https://goo.gl/maps/XR9QrDMDMQTf1Wz5A",
    },
    {
      title: "Food",
      description: "🥘🥘",
      link: "https://goo.gl/maps/E3RHTq4CjXPEU7hg6",
    },{
      title: "Go w Yao",
      description: "🥘🥘",
      link: "https://goo.gl/maps/fkGfwTWfSDTqiMbd6",
    }
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Taipei Maps</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Taipei Maps</h1>

        {/* <p className={styles.description}>description</p> */}
        <div className={styles.grid}>
          {mapsData.map(({ id, description, title, link }) => (
            <a
              href={link}
              className={styles.card}
              key={title + description.length}
            >
              <h2>{title}</h2>
              {/* <h2>{title} &rarr;</h2> */}
              <p>{description}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a rel="noopener noreferrer">Powered by 𝖄𝖔𝖚𝖗 𝕯𝖆𝖉&apos;𝖘 𝕬𝖘𝖘</a>
      </footer>
    </div>
  );
}
