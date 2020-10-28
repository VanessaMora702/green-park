<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
        <q-toolbar class="background-color glossy text-white">
      <q-avatar size="60px" class="q-ml-xl">
        <img :src="('https://greenparksports.com/current/static/media/logo.7d66f9bf.svg')" >
      </q-avatar>
      <q-tabs
        v-model="tab"
        dense
        class="text-white q-ml-xl"
        active-color="yellow"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="Users" label="Users"/>
        <q-tab name="Leagues" label="Leagues" />
        <q-tab name="Analytics" label="Analytics" />
      </q-tabs>
    </q-toolbar>
    <!-- Q-TAB-PANELS -->
     <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="Users" class="q-pa-none">
          <Users/>
        </q-tab-panel>
        <q-tab-panel name="Leagues" class="q-pa-none">
          <Leagues/>
        </q-tab-panel>
          <q-tab-panel name="Analytics" class="q-pa-none">
          <Analytics/>
        </q-tab-panel>
     </q-tab-panels>
    </q-header>
    <q-page-container>
    </q-page-container>
  </q-layout>
</template>

<script>
import Users from './components/Users/Users'
import Leagues from './components/Leagues/Leagues'
import Analytics from './components/Analytics/Analytics'

export default {
  name: 'LayoutDefault',

  components: {
    Users,
    Leagues,
    Analytics,
  },

  data () {
    return {
      tab: 'Users'
    }
  }
}
</script>

<style>
.background-color {
  background: #001f4f; 
} 
</style>
