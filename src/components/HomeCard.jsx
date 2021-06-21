import Image from 'next/image';
import Link from 'next/link';
import projectImage from '../../public/images/civic-tech-index.png';

export default function HomeCard() {
  return (
    // Overall container div
    <div className="flex flex-col max-w-2xl rounded-2xl border-2 border-gray-100 shadow-md bg-white">
      <div className="flex flex-col self-center m-6">
        {/* div for top image, posted, name, project, and meeting times */}
        <div className="flex flex-row w-full justify-between">
          <div className="self-center">
            <Image src={projectImage} alt="Civic Tech Index Project Image" width={75} height={50} />
          </div>
          {/* div for posted, name, and project */}
          <div>
            <p className="text-gray-500 text-sm">Posted 3/17/21</p>
            <h3 className="font-bold">UX Program Design Mangager</h3>
            <p className="text-gray-500 text-sm font-bold">Civic Tech Index</p>
          </div>
          {/* div for meeting times */}
          <div>
            <p className="text-gray-500 text-sm">Meeting Times:</p>
            <p className="text-sm">Wed 12:30-1:30pm - Designers</p>
            <p className="text-sm">Thu 6:00-7:00pm - Full Team</p>
          </div>
        </div>
        {/* div for role description, and other items */}
        <div className="mt-8 self-center">
          <p>
            <strong>Role Description: </strong>Modeling various pilot programs and creating UX feedback process for users.
          </p>
          <p>
            <strong>Responsibilities & Requirements: </strong>Modeling various pilot programs and creating UX feedback. - Modeling various pilot programs for users. - Modeling various pilot programs for users. - Modeling various pilot programs for
            users.
          </p>
          <p>
            <strong>About the Project: </strong>Modeling various pilot programs and creating UX feedback process for users.
          </p>
        </div>
        {/* div for see full description button */}
        <Link href="/role">
          <a className="w-48 mt-8 rounded-full bg-red-500">
            <p className="p-2 text-center text-sm text-white font-bold">See Full Description</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
