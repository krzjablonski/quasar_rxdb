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
    const databaseStart = () => {
      const db = getDatabase()
      console.log(db)
    };

    return { databaseStart };
  }
});
</script>
