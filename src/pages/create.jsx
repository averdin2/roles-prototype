import RoleForm from '../components/RoleForm';

export default function NewRole() {
  const roleForm = {
    role_name: '',
    project_name: '',
    description: '',
    meeting_times: '',
    about: '',
    directions: '',
    time_commitment: '',
    responsibilities: '',
    positions: '',
  };
  return <RoleForm roleForm={roleForm} />;
}
