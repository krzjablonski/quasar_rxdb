import { RxStoragePouch } from 'rxdb';

export async function getDatabaseStorage(): Promise<RxStoragePouch> {
  const imported = await import('./ElectronDatabaseStorage')
  return imported.electronDatabaseStorage()
}

export async function getDatabaseLocation(): Promise<string> {
  const imported = await import('./ElectronDatabaseStorage')
  return imported.electronDatabaseLocationPath()
}
