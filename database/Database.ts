/* eslint-disable @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment */
import { RxDatabase } from 'rxdb';
import { DatabaseCollections, DatabaseFactory } from 'app/database/DatabaseFactory';

declare global {
  interface Window { db: { getDatabase: () => Promise<RxDatabase<DatabaseCollections>> }  }
}

export function getDatabase() {
  // return window.db.getDatabase()
  return DatabaseFactory.init()
}
