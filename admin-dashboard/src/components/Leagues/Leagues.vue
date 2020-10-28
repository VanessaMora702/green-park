<template>
  <div >
    <q-splitter
        v-model="splitterModel"
        >
        <template v-slot:before>
    <!-- Dropdown -->
        <div class="q-pa-md dropdown-button">
            <q-btn-dropdown
            flat
            class="glossy"
            color="primary"
            :label="button === false ? 'LEAGUE SELECTORS' : dropdownName"
            >
        <q-list>
            <q-item clickable v-close-popup @click="onItemClick('NFL') ">
            <q-item-section avatar>
                <q-avatar icon="fas fa-football-ball" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
                <q-item-label>NFL</q-item-label>
            </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick('NBA')">
            <q-item-section avatar>
                <q-avatar icon="fas fa-basketball-ball" color="red" text-color="white" />
            </q-item-section>
            <q-item-section>
                <q-item-label>NBA</q-item-label>
            </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick('NHL')">
            <q-item-section avatar>
                <q-avatar icon="fas fa-hockey-puck" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
                <q-item-label>NHL</q-item-label>
            </q-item-section>
            </q-item>
        </q-list>
        </q-btn-dropdown>
        </div>
        <q-separator color="primary" inset />
        <br/>
        <!--  -->
        <q-tabs
        v-model="innerTab"
        vertical
        class="icon-color"
        indicator-color="primary"
        >
        <q-tab name="schedule" label="Schedule" icon='fas fa-calendar-alt' />
        <q-tab name="teams" icon="fab fa-teamspeak" label="Teams" />
        <q-tab name="athletics" icon="fas fa-running" label="Athletics" />
        </q-tabs>
        </template>
        <template v-slot:after>
            <q-tab-panels
            v-model="innerTab"
            animated
            transition-prev="slide-down"
            transition-next="slide-up"
            class="container"
            >
            <q-tab-panel class="text-margin" name="schedule">
                <template v-if="dropdownName === 'NFL'|| dropdownName === 'NBA' || dropdownName === 'NHL'">
                <ScheduleTable :sport ='dropdownName'/>
                </template>
                <template v-else>
                <div class="text-h4 text-black q-mb-md">Schedule</div>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                </template>
            </q-tab-panel>

            <q-tab-panel class="text-margin" name="teams">
                <template v-if="dropdownName === 'NFL'|| dropdownName === 'NBA' || dropdownName === 'NHL'">
                <div class="text-h4 text-black q-mb-md"> {{dropdownName}} Teams</div>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                </template>
                   <template v-else>
                <div class="text-h4 text-black q-mb-md"> Teams</div>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                </template>
            </q-tab-panel>

            <q-tab-panel class="text-margin" name="athletics">
                <template  v-if="dropdownName === 'NFL'|| dropdownName === 'NBA' || dropdownName === 'NHL'">
                <div class="text-h4 text-black q-mb-md">{{dropdownName}} Athletics</div>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                </template>
                <template  v-else>
                <div class="text-h4 text-black q-mb-md">Athletics</div>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                </template>
            </q-tab-panel>
            </q-tab-panels>
        </template>
        </q-splitter>
  </div>
</template>

<script>
import ScheduleTable from './ScheduleTable/table';
export default {
    components: {
        ScheduleTable,
    },
    data() {
        return {
        innerTab: 'schedule',
        splitterModel: 20, 
        dropdownName: '',
        button: false,
        }
    },
    methods: {
    onItemClick(val) {
        this.button = true
        console.log("VAL", val)
        this.dropdownName = val
    }
  }
}
</script>

<style>
.icon-color {
    color: #001f4f;
}
.container {
  height: 100vh;
  overflow-y: auto;
}
.dropdown-button {
    display: flex;
    justify-content: center;
}
.text-margin {
    margin-top: 4%;
}
</style>