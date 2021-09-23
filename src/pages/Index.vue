<template>
  <q-page class='row items-center justify-evenly'>
    <q-btn label='Click' @click='databaseStart'></q-btn>
  </q-page>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { getDatabase } from 'app/database/Database';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const databaseStart = async () => {
      const db = await getDatabase()
      void await db.users.insert({
        email: 'test@test.pl',
        password: 'some password',
        roles: ['some role'],
        username: 'test username'
      })
      const users = await db.users.countAll()
      console.log(users)
    };

    return { databaseStart };
  }
});
</script>
