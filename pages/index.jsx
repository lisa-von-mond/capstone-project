import Head from 'next/head';
import { Intro } from '../components/intro-outro/intro';

export default function App() {
  return (
    <div>
      <Head>
        <title>lush:3000</title>
        <meta name="lush:3000" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Intro />
      </main>
    </div>
  );
}
