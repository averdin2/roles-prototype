import mongoose from 'mongoose';

const RoleSchema = new mongoose.Schema(
  {
    role_name: {
      type: String,
      required: [true, 'Please provide a name for this role'],
    },
    project_name: {
      type: String,
      required: [true, 'Please provide a project this role belongs to'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description for the role'],
    },
    meeting_times: {
      type: String,
      required: [true, 'Please provide meeting times for the project'],
    },
    about: {
      type: String,
    },
    directions: {
      type: String,
    },
    time_commitment: {
      type: String,
    },
    responsibilities: {
      type: String,
    },
    positions: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Role || mongoose.model('Role', RoleSchema);
