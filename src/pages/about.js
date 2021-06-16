import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projectImage from '../../public/images/civic-tech-index.png';

export default function HomeCard() {
  return (
    // Overall container div
    <div className="flex flex-col justify-center w-11/12 bg-green-400">
      {/* div for top image, posted, name, project, and meeting times */}
      <div className="flex flex-row w-full justify-between">
        <div className="self-center">
          <Image src={projectImage} alt="Civic Tech Index Project Image" width={75} height={50} />
        </div>
        {/* div for posted, name, and project */}
        <div>
          <p>Posted 3/17/21</p>
          <h3>UX Program Design Mangager</h3>
          <p>Civic Tech Index</p>
        </div>
        {/* div for meeting times */}
        <div>
          <p>Meeting Times:</p>
          <p>Wed 12:30-1:30pm - Designers</p>
          <p>Thu 6:00-7:00pm - Full Team</p>
        </div>
      </div>
      {/* div for role description, and other items */}
      <div className="w-11/12 mt-8 bg-blue-400 self-center">
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
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
