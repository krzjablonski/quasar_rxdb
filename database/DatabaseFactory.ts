import { createRxDatabase, RxDatabase, } from 'rxdb';
import { UserCollection, userCollectionMethods, userMethods, userSchema } from './schema/user/User';
import { getDatabaseLocation, getDatabaseStorage } from './DatabaseStorage';

export type DatabaseCollections = {
  users: UserCollection
}

export abstract class DatabaseFactory {
  private static instance: RxDatabase<DatabaseCollections> | null = null;

  private static async createDatabase() {
    if (DatabaseFactory.instance === null) {
      const storage = await getDatabaseStorage();
      const location = await getDatabaseLocation();
      DatabaseFactory.instance = await createRxDatabase<DatabaseCollections>({
        name: location,
        storage: storage,
      });
      void await DatabaseFactory.instance.addCollections(
        {
          users: {
            schema: userSchema,
            methods: userMethods,
            statics: userCollectionMethods
          }
        }
      )
    }
  }

  public static async init() {
    if (!DatabaseFactory.instance) {
      await DatabaseFactory.createDatabase();
    }
    return DatabaseFactory.instance;
  }
}


