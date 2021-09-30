import { DatabaseFactory } from './DatabaseFactory';

export function getDatabase() {
  return DatabaseFactory.init()
}
