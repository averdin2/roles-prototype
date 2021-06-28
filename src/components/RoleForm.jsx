import { useState } from 'react';
import { useRouter } from 'next/router';

export default function RoleForm({ roleForm }) {
  const router = useRouter();
  const contentType = 'application/json';
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const [form, setForm] = useState({
    role_name: roleForm.role_name,
    project_name: roleForm.project_name,
    description: roleForm.description,
    meeting_times: roleForm.meeting_times,
    about: roleForm.about,
    directions: roleForm.directions,
    time_commitment: roleForm.time_commitment,
    responsibilities: roleForm.responsibilities,
    positions: roleForm.positions,
  });

  // Method to post data to db
  const postData = async (form) => {
    try {
      const res = await fetch('/api/roles', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(res.status);
      }

      router.push('/');
    } catch (error) {
      setMessage('Failed to add role!');
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit Clicked');
    postData(form);
  };

  return (
    <div className="my-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-blue-100 py-8 px-6 shadow rounded-lg sm:px-10">
        <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="role_name">Role Name</label>
          </div>
          <div className="mt-1">
            <input type="text" name="role_name" value={form.role_name} onChange={handleChange} className="w-full border border-gray-300" />
          </div>
          <div>
            <label htmlFor="project_name">Project Name</label>
          </div>
          <div className="mt-1">
            <input type="text" name="project_name" value={form.project_name} onChange={handleChange} className="w-full border border-gray-300" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
          </div>
          <div className="mt-1">
            <input type="text" name="description" value={form.description} onChange={handleChange} className="w-full border border-gray-300" />
          </div>
          <div>
            <label htmlFor="meeting_times">Meeting Times</label>
          </div>
          <div className="mt-1">
            <input type="text" name="meeting_times" value={form.meeting_times} onChange={handleChange} className="w-full border border-gray-300" />
          </div>
          <div>
            <label htmlFor="about">About</label>
          </div>
          <div className="mt-1">
            <input type="text" name="about" value={form.about} onChange={handleChange} className="w-full border border-gray-300" />
          </div>
          <div>
            <label htmlFor="directions">Directions</label>
          </div>
          <div className="mt-1">
            <input type="text" name="directions" value={form.directions} onChange={handleChange} className="w-full border border-gray-300" />
          </div>
          <div>
            <label htmlFor="time_commitment">Time Commitment</label>
          </div>
          <div className="mt-1">
            <input type="text" name="time_commitment" value={form.time_commitment} onChange={handleChange} className="w-full border border-gray-300" />
          </div>
          <div>
            <label htmlFor="responsibilities">Responsibilities</label>
          </div>
          <div className="mt-1">
            <input type="text" name="responsibilities" value={form.responsibilities} onChange={handleChange} className="w-full border border-gray-300" />
          </div>
          <div>
            <label htmlFor="positions">Positions</label>
          </div>
          <div className="mt-1">
            <input type="text" name="positions" value={form.positions} onChange={handleChange} className="w-full border border-gray-300" />
          </div>

          <button type="submit" className="w-48 mt-8 rounded-full bg-red-500 p-2 text-center text-sm text-white font-bold focus:outline-none">
            Submit
          </button>
        </form>
        <p>{message}</p>
        <div>
          {Object.keys(errors).map((err, index) => (
            <li key={index}>{err}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
