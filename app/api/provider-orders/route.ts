import { ObjectId } from 'mongodb';
import { response } from '../_common';
import clientPromise from '../_common/mongodb';

type Params = {
  team: string;
};

async function getOrdersByProvider() {
  const providerId = '661b656a24854d0f62b34766';
  const client = await clientPromise;

  try {
    const database = client.db(process.env['DB_NAME']);
    const ordersCollection = database.collection('Orders');

    // Aggregate orders linked to the provider ID
    const orders = await ordersCollection
      .aggregate([
        { $match: { provider: new ObjectId(providerId) } },
        {
          $lookup: {
            from: 'Consumers',
            localField: 'consumer',
            foreignField: '_id',
            as: 'consumerDetails',
          },
        },
        { $unwind: '$consumerDetails' },
        {
          $project: {
            _id: 1,
            consumerName: '$consumerDetails.name',
            date:  { $toDate: '$_id' },
          },
        },
      ])
      .toArray();

    const result = {
      _id: providerId,
      orders,
    };

    return result;
  } catch (error) {
    console.error('Failed to retrieve orders by provider:', error);
    throw error;
  }
}

export async function GET(request: Request, context: { params: Params }) {
  const res = await getOrdersByProvider();
  return response(res);
}

// Define params type according to your route parameters (see table below)
