import { connectToDatabase } from '../../../util/mongodb';
import Role from '../../../models/Role';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'POST':
      try {
        const role = await Role.create(req.body);
        res.status(201).json({ success: true, data: role });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
