import { ObjectId } from 'mongodb';
import clientPromise from '../../_common/mongodb';
import { response } from '../../_common';

type Params = {
  order: string;
};
export async function getOrderId(orderId: string) {
  const client = await clientPromise;
  try {
    const database = client.db(process.env['DB_NAME']);
    const ordersCollection = database.collection('Orders');
    const consumersCollection = database.collection('Consumers');
    const providersCollection = database.collection('Providers');
    const itemsCollection = database.collection('Items');

    const d = await ordersCollection.find({}).toArray();
    console.log(d);
    const order = await ordersCollection.findOne({
      _id: new ObjectId(orderId),
    });
    if (!order) throw new Error('Order not found');

    const consumer = await consumersCollection.findOne({ _id: order.consumer });
    const provider = await providersCollection.findOne({ _id: order.provider });

    const itemsDetails = await Promise.all(
      order.items.map(async (item: any) => {
        //@ts-expect-error
        const itemDetails: Items = await itemsCollection.findOne({
          _id: item._id,
        });
        const recollectionDateRange = `${itemDetails.initialRecollectionDay} to ${itemDetails.finalRecollectionDay} from ${itemDetails.initialRecollectionTime} to ${itemDetails.finalRecollectionTime}`;
        return {
          name: itemDetails.name,
          unit: itemDetails.unit,
          packages: item.packages.toString(),
          total: (item.packages * itemDetails.quantity).toString(),
          quantity: itemDetails.quantity.toString(),
          recollectionDateRange,
        };
      })
    );

    const result = {
      _id: orderId,
      date: order._id.getTimestamp().toISOString(),
      consumer: consumer?.name || '',
      provider: provider?.name || '',
      locationDisplayName: provider?.locationDisplayName || '',
      locationUrl: `https://www.google.com/maps/@${provider?.latitude},${provider?.longitude},13z`,
      food: itemsDetails,
    };

    return result;
  } catch (error) {
    console.error('Failed to retrieve order details:', error);
    throw error;
  }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const order = params.id;
  const res = await getOrderId(order[0]);
  return response(res);
}

// Define params type according to your route parameters (see table below)
