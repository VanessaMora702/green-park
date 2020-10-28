<template>
    <div class="q-pa-md">
    <q-table
      grid
      title="NOVEMBER'S CALENDER"
      :data="data"
      :columns="columns"
      row-key="name"
      :filter="filter"
      class="text-black"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:item="props">
          <div :props="props">
        <!-- CALENDER NFL -->
        <template v-if="sport === 'NFL'">
            <div class="q-pa-md">
            <q-date 
            :value="props.row.Days" 
            multiple
            :title="props.row.Team"
            :subtitle="props.row.Sport"
            />
            </div> 
          </template>
        <!-- CALENDER NBA -->
            <template v-else-if="sport === 'NBA'">
            <div class="q-pa-md">
               <q-date 
            :value="props.row.Days" 
            multiple
            :title="props.row.Team"
            :subtitle="props.row.Sport"
            />
            </div>
            </template>
            <!-- CALENDER NHL -->
            <template v-else-if="sport === 'NHL'">
            <div class="q-pa-md">
              <q-date 
            :value="props.row.Days" 
            multiple
            :title="props.row.Team"
            :subtitle="props.row.Sport"
            />
            </div>
            </template>
          </div>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
    props: {
        sport: {
            type: String,
            required: true
        }
    },
     data () {
    return {
    days: [ '2020/11/01', '2020/11/10' ],
      filter: '',
      columns: [
        {
          name: 'Team',
          required: true,
          field: row => row.team,
          sortable: true
        },
        { name: 'Days', sortable: true },
        { name: 'Sport',  sortable: true },
      ],
      data: []
    }
  }
}
</script>

<style>

</style>