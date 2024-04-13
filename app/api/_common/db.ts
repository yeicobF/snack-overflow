import { ObjectId } from 'mongodb';
import { Collections } from '../_collections';
import clientPromise from './mongodb';
import { MutationDto } from '../_dto';

// Find a single document in a collection
export const findOneDocument = async <T extends Record<string, any>>(
  collection: Collections,
  query: any,
  options?: any
): Promise<T | null> => {
  const client = await clientPromise;
  return client
    .db(process.env['DB_NAME'])
    .collection<T>(collection)
    .findOne(query, options) as any;
};

// Find multiple documents in a collection
export const findDocuments = async <T extends Record<string, any>>(
  collection: Collections,
  query: any = {}
): Promise<T[]> => {
  const client = await clientPromise;
  return client
    .db(process.env['DB_NAME'])
    .collection<T>(collection)
    .find(query)
    .toArray() as any;
};

// Aggregate documents in a collection based on a pipeline
export const aggregateDocuments = async <T extends Record<string, any>>(
  collection: Collections,
  pipeline: any[]
): Promise<T[]> => {
  const client = await clientPromise;
  return client
    .db(process.env['DB_NAME'])
    .collection<T>(collection)
    .aggregate(pipeline)
    .toArray() as any;
};

// Insert a new document into a collection
export const insertDocument = async <T extends Record<string, any>>(
  collection: Collections,
  document: T & { _id?: string | ObjectId },
  successMessage: string,
  options: any = {},
  errorMessage: string = 'An error occurred'
): Promise<MutationDto> => {
  const client = await clientPromise;
  try {
    await client
      .db(process.env['DB_NAME'])
      .collection(collection)
      .insertOne(document as any, options);
    return { success: true, message: successMessage };
  } catch (error) {
    let message = getErrorMessage(error);
    if (options.session) {
      throw new Error(errorMessage || message);
    }
    return { success: false, message };
  }
};

// Utility function to handle error messages based on MongoDB error codes
function getErrorMessage(error: any): string {
  switch (error.code) {
    case 11000:
      return 'Duplicate record';
    case 121:
      return 'Failed validation';
    default:
      return `Internal error: ${error}`;
  }
}
