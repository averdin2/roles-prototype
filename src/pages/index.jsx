import Head from 'next/head';
import HomeCard from '../components/HomeCard';
import FilterCard from '../components/FilterCard';

import { connectToDatabase } from '../util/mongodb';

export default function Home({ properties }) {
  return (
    <div>
      <Head>
        <title>HFLA Roles Prototype</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row justify-around mt-8">
        <div className="w-64">
          <FilterCard />
        </div>
        <div>
          {properties &&
            properties.map((property) => (
              <div className="mb-8">
                <HomeCard
                  id={property._id}
                  roleName={property.role_name}
                  projectName={property.project_name}
                  datePosted={property.date_posted}
                  description={property.description}
                  meetingTimes={property.meeting_times}
                  directions={property.directions}
                  timeCommitment={property.time_commitment}
                  about={property.about}
                  responsibilities={property.responsibilities}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data = await db.collection('roles').find({}).limit(10).toArray();

  const properties = await JSON.parse(JSON.stringify(data));

  return {
    props: { properties: properties },
  };
}
