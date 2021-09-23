import { addPouchPlugin, getRxStoragePouch } from 'rxdb';

export async function capacitorDatabaseStorage() {
  addPouchPlugin(await import('pouchdb-adapter-cordova-sqlite'))
  return getRxStoragePouch('cordova-sqlite')
}
