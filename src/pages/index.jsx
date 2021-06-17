import Head from 'next/head';
import HomeCard from '../components/HomeCard';
import FilterCard from '../components/FilterCard';

import { connectToDatabase } from '../util/mongodb';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container sm px-4 bg-gray-400">
        <p>Hello There</p>
      </div>
      <FilterCard />
      <HomeCard />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data = await db.collection('listingsAndReviews').find({}).limit(10).toArray();

  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: { properties: properties },
  };
}
