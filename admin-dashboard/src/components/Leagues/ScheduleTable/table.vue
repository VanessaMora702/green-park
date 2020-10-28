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
import {mapActions, mapGetters} from "vuex";
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
  },
  async mounted() {
    await this.fetchNflSchedule();
    await this.fetchNbaSchedule();
    await this.fetchNhlSchedule();
    await this.getAllSchedules();
  },
  watch : {
      sport: function() {
          this.getAllSchedules();
      },
  },
  computed: {
      ...mapGetters(['fetchNflSchedules', 'fetchNbaSchedules', 'fetchNhlSchedules'])
  },
  methods: {
     ...mapActions(['fetchNflSchedule','fetchNbaSchedule', 'fetchNhlSchedule']),
     getAllSchedules() {
         if (this.sport === 'NFL') {
             console.log("THIS.SPORT", this.sport)
             this.getAllNflSchedule();
         } else if (this.sport === 'NBA') {
             this.getAllNbaSchedule();
         } else if (this.sport === "NHL"){
             this.getAllNhlSchedule();
         }
     },
      getAllNflSchedule() {
         let nflSchedule = this.fetchNflSchedules;
         console.log("NFL", nflSchedule);
         this.data = nflSchedule
     },
        getAllNbaSchedule() {
         let nbaSchedule = this.fetchNbaSchedules;
         console.log("NBA", nbaSchedule);
         this.data = nbaSchedule
     },
         getAllNhlSchedule() {
         let nhlSchedule = this.fetchNhlSchedules;
         console.log("NHL", nhlSchedule);
         this.data = nhlSchedule
     }
     
  }
}
</script>

<style>

</style>