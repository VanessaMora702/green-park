<template>
  <div >
    <router-view/>
    <q-splitter
        v-model="splitterModel"
        >
        <template v-slot:before>
            <q-tabs
            v-model="innerTab"
            vertical
            class=" q-mt-sm icon-color"
            indicator-color="primary"
            >
            <q-tab name="userProfile" label="User Profile" icon='fas fa-user' />
            <q-tab name="userStats" icon="fas fa-chart-line" label="User Stats" />
            <q-tab name="user Setttings" icon="fas fa-user-cog" label="User Settings" />
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
            <q-tab-panel name="userProfile">
                <div class="text-h4 text-black q-mb-md">User Profile</div>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>

            <q-tab-panel name="userStats">
                <div class="text-h4 text-black q-mb-md">User Stats</div>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>

            <q-tab-panel name="user Setttings">
                <div class="text-h4 text-black q-mb-md">User Settings</div>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>
            </q-tab-panels>
        </template>
        </q-splitter>
  </div>
</template>

<script>
export default {
    name: 'users',
    data() {
        return {
        innerTab: 'userProfile',
        splitterModel: 20
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
</style>