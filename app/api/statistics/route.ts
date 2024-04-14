import { response } from '../_common';
import clientPromise from '../_common/mongodb';

export async function getStatistics() {
  const client = await clientPromise;
  try {
    await client.connect();
    const database = client.db(process.env['DB_NAME']);
    const providersCollection = database.collection('Providers');

    // Aggregate providers sorted by foodDonated in descending order
    const providers = await providersCollection
      .aggregate([
        { $sort: { foodDonated: -1 } }, // Sort by foodDonated descending
        {
          $project: {
            provider: '$name',
            locationDisplayName: 1,
            locationUrl: {
              $concat: [
                'https://www.google.com/maps/@',
                { $toString: '$latitude' },
                ',',
                { $toString: '$longitude' },
                ',13z',
              ],
            },
            foodDonated: { $toString: '$foodDonated' },
          },
        },
      ])
      .toArray();

    const result = {
      statistics: providers,
    };

    return result;
  } catch (error) {
    console.error('Failed to retrieve providers sorted by donation:', error);
    throw error;
  }
}

export async function GET(request: Request, context: { params: string }) {
  const res = await getStatistics();
  return response(res);
}

// Define params type according to your route parameters (see table below)
