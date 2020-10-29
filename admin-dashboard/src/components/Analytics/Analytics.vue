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
            class="icon-color q-mt-sm"
            indicator-color="primary"
            >
            <q-tab name="nflAnalytics" label="NFL Analytics" icon='fas fa-football-ball' />
            <q-tab name="nbaAnalytics" icon="fas fa-basketball-ball" label="NBA Analytics" />
            <q-tab name="nhlAnalytics" icon="fas fa-hockey-puck" label="NHL Analytics" />
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
            <q-tab-panel name="nflAnalytics">
                <div class="text-h4 text-black q-mb-md">NFL Analytics</div>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>

            <q-tab-panel name="nbaAnalytics">
                <div class="text-h4 text-black q-mb-md">NBA Analytics</div>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>

            <q-tab-panel name="nhlAnalytics">
                <div class="text-h4 text-black q-mb-md">NHL Analytics</div>
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
    name: 'analytics',
    data() {
        return {
        innerTab: 'nflAnalytics',
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