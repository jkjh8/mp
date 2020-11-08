<template>
  <div>
    <q-item>
      <q-item-section avatar>
        <q-avatar color="warning" size="36px">
          <q-icon name="mdi-folder" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>
          FILE LIST
        </q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-btn icon="mdi-delete-outline" round flat @click="confirm=!confirm" />
      </q-item-section>
      <q-item-section side>
        <q-btn icon="mdi-plus-circle-outline" round flat @click="upload" />
      </q-item-section>
    </q-item>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="mdi-delete-outline" color="primary" text-color="white" />
          <span class="q-ml-sm">You are delete checked files.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Confirm" color="primary" v-close-popup @click="deleteFiles" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      confirm: false
    }
  },
  methods: {
    upload () {
      this.$emit('upload')
    },
    deleteFiles () {
      this.$emit('delFiles')
    }
  }
}
</script>
