/* eslint-disable @typescript-eslint/no-var-requires,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access */
import { getRxStoragePouch, addPouchPlugin } from 'rxdb';
import { config } from './config';

// eslint-disable-next-line @typescript-eslint/require-await
export async function electronDatabaseStorage() {
  addPouchPlugin(require('pouchdb-adapter-leveldb')); // leveldown adapters need the leveldb plugin to work
  const leveldown = require('leveldown');
  return getRxStoragePouch(leveldown)
  // addPouchPlugin(require('pouchdb-adapter-idb'));
  // return getRxStoragePouch('idb')
}

export async function electronDatabaseLocationPath() {
  const os = require('os')
  const homeDir = os.homedir() as string
  return Promise.resolve(homeDir + '/db/' + config.databaseDirName)
}
