<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <!--FOOTER-->
    <q-footer reveal elevated class="text-white">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          Majkl Zumberi @ Devchallenges.io
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
};
</script>
