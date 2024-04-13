import { ObjectId } from 'mongodb';
import { findOneDocument, response } from '../_common';

type Params = {
  team: string;
};

export async function GET(_request: Request, _context: { params: Params }) {
  const doc = await findOneDocument('Inventories', {
    _id: new ObjectId('661b05681264c33cc1dd374b'),
  });
  console.log({ doc });
  // Return a response object with a proper HTTP status code and body
  return response({ doc });
}

// Define params type according to your route parameters (see table below)
