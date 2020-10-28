<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
        <q-toolbar class="background-color glossy text-white">
      <q-avatar size="60px" class="q-ml-xl">
        <img :src="('https://greenparksports.com/current/static/media/logo.7d66f9bf.svg')" >
      </q-avatar>
      <q-tabs  class="q-ml-xl" v-model="tab" shrink>
        <q-tab name="Users" label="Users" />
        <q-tab name="Leagues" label="Leagues" />
        <q-tab name="Analytics" label="Analytics" />
      </q-tabs>
    </q-toolbar>
    </q-header>
    <q-page-container>
      <Dashboard />
    </q-page-container>
  </q-layout>
</template>

<script>
import Dashboard from './components/Dashboard'
export default {
  name: 'LayoutDefault',

  components: {
    Dashboard
  },

  data () {
    return {
      tab: ''
    }
  }
}
</script>

<style>
.background-color {
  background: #001f4f; 
} 
</style>
