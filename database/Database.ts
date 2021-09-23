/* eslint-disable @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment */
import { RxDatabase } from 'rxdb';
import { DatabaseCollections } from 'app/database/DatabaseFactory';

declare global {
  interface Window { db: { getDatabase: () => Promise<RxDatabase<DatabaseCollections>> }  }
}

class Database {
  private static instance: Database|null = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static init(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance
  }
  async get() {
    console.log('before window.db.getDatabase')
    return window.db.getDatabase()
    console.log('after window.db.getDatabase')
  }
}

export const database = Database.init()
