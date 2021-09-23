import { RxCollection, RxDocument, RxJsonSchema } from 'rxdb';

export type UserDocType = {
  password: string,
  email: string,
  username: string,
  roles: string[]
}

export type UserMethodsType = {
  toString: () => string
}

export type UserDocument = RxDocument<UserDocType, UserMethodsType>

export type UserCollectionMethods = {
  countAll: () => Promise<number>
}

export type UserCollection = RxCollection<UserDocType, UserMethodsType, UserCollectionMethods>

export const userSchema = {
  title: 'User Schema',
  description: 'Base user',
  version: 0,
  // keyCompression: true,
  primaryKey: 'email',
  type: 'object',
  properties: {
    password: { type: 'string' },
    email: { type: 'string' },
    username: { type: 'string' },
    roles: { type: 'array' }
  },
  required: [ 'password', 'email', 'username', 'roles' ]
}

export const userMethods = {
  toString: function(this: UserDocument) {
    return this.username
  }
}

export const userCollectionMethods = {
  countAll: async function(this: UserCollection) {
    const allDocs = await this.find().exec()
    return allDocs.length;
  }
}
