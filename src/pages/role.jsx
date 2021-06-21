import Image from 'next/image';
import RolesCard from '../components/RolesCard';
import projectImage from '../../public/images/civic-tech-index.png';

export default function role() {
  return (
    <div>
      {/* container for top section */}
      <div className="flex flex-row w-full p-8 justify-between bg-white">
        {/* container for left top section */}
        <div>
          <div>
            <Image src={projectImage} alt="Civic Tech Index Project Image" width={150} height={100} />
          </div>
          <div>
            <h3 className="font-bold my-4">Team Meeting Times</h3>
            <p>Developers - Tue 5:30-7:30pm</p>
            <p>Product Managers - Wed 12:30-1:30pm</p>
            <p>Team - Thu 6:00-7:00pm</p>
          </div>
        </div>
        {/* vertical line */}
        <div className="border-l-2 border-gray-200 h-64"></div>
        {/* container for right top section */}
        <div className="mt-4">
          <p className="text-gray-500 text-sm">Posted: 3/17/21</p>
          <h1 className="font-bold text-2xl mt-4 mb-8">UX Program Design Manager</h1>
          <p>
            <strong>Project: </strong>Civic Tech Index
          </p>
          <p>
            <strong>Time commitment: </strong>Approx 1-2 mongth. (6-10 hours/week)
          </p>
          <p>
            <strong>Positions: </strong>Need 2-3 volunteers
          </p>
        </div>
      </div>
      {/* container for page card */}

      <RolesCard />
    </div>
  );
}
