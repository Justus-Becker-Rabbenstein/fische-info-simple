import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/apiFische");
      const data = await response.json();
      setApiData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <button onClick={() => console.log(apiData)}>apiData</button>
          {apiData.map((singleApiEntry) =>
            <div key={singleApiEntry.id}>
              <p>Fisch Name:{singleApiEntry.name}</p>
              <p>Fisch Gattung: {singleApiEntry.gattung}</p>
              <p>Wasserart: {singleApiEntry.wasser}</p>
              <p>{singleApiEntry.pictureurl}</p>
              <img src={singleApiEntry.pictureurl} alt={singleApiEntry.name} height="150" width="150" />
            </div>
          )}
        </div>
      </main>
    </>
  )
}
