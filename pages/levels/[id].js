import Head from 'next/head';
import { Game } from '../../components/game';
import levelone from '../../levels/level1';
import leveltwo from '../../levels/level2';
import levelthree from '../../levels/level3';
import { useRouter } from 'next/router';

export default function Level({ levelData }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Bloom 3000</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Game id={id} levelData={levelData} />
      </main>
    </div>
  );
}

const levels = {
  levelone, // same as levelone:levelone
  leveltwo,
  levelthree,
};

export async function getStaticPaths() {
  return {
    // same as [ { params: { id: 'levelone' } }, { params: { id: 'leveltwo' } } ]
    paths: Object.keys(levels).map(id => ({ params: { id } })),
    fallback: false, // gives 404 if no id is matching
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  return {
    props: { levelData: levels[id] }, // will be passed to the page component as props
  };
}

// daten für aktuelles level in props objekt ausgeben lassen