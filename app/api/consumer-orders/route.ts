import { ObjectId } from 'mongodb';
import clientPromise from '../_common/mongodb';
import { Items } from '../_collections/items';
import { response } from '../_common';

type Params = {
  order: string;
};
export async function getOrdersByConsumer() {
  const consumerId = '661b638524854d0f62b34761';
  const client = await clientPromise;

  try {
    const database = client.db(process.env['DB_NAME']);
    const ordersCollection = database.collection('Orders');

    // Aggregate orders linked to the consumer ID
    const orders = await ordersCollection
      .aggregate([
        { $match: { consumer: new ObjectId(consumerId) } },
        {
          $lookup: {
            from: 'Providers',
            localField: 'provider',
            foreignField: '_id',
            as: 'providerDetails',
          },
        },
        { $unwind: '$providerDetails' },
        {
          $lookup: {
            from: 'Items',
            localField: 'items._id',
            foreignField: '_id',
            as: 'itemDetails',
          },
        },
        { $unwind: '$itemDetails' },
        {
          $group: {
            _id: '$_id',
            providerName: { $first: '$providerDetails.name' },
            locationDisplayName: {
              $first: '$providerDetails.locationDisplayName',
            },
            recollectionDateRange: {
              $first: {
                $concat: [
                  { $toString: '$itemDetails.initialRecollectionDay' },
                  ' to ',
                  { $toString: '$itemDetails.finalRecollectionDay' },
                  ' from ',
                  { $toString: '$itemDetails.initialRecollectionTime' },
                  ' to ',
                  { $toString: '$itemDetails.finalRecollectionTime' },
                ],
              },
            },
            latitude: { $first: '$providerDetails.latitude' },
            longitude: { $first: '$providerDetails.longitude' },
          },
        },
        {
          $project: {
            _id: 1,
            providerName: 1,
            locationDisplayName: 1,
            recollectionDateRange: 1,
            locationUrl: {
              $concat: [
                'https://www.google.com/maps/@',
                { $toString: '$latitude' },
                ',',
                { $toString: '$longitude' },
                ',13z',
              ],
            },
            status: { $literal: 'in progress' },
          },
        },
      ])
      .toArray();

    const result = {
      _id: consumerId,
      orders,
    };

    return result;
  } catch (error) {
    console.error('Failed to retrieve orders by consumer:', error);
    throw error;
  } finally {
    await client.close();
  }
}

export async function GET(request: Request, context: { params: Params }) {
  const res = await getOrdersByConsumer();
  return response(res);
}

// Define params type according to your route parameters (see table below)
