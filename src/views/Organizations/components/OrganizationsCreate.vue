<template>
  <div>
    <configurator
        title="Add new organization"
        :toggle="toggleConfigurator"
        :class="[
        this.$store.state.showConfig ? 'show' : '',
        this.$store.state.hideConfigButton ? 'd-none' : ''
      ]"
    >
      <div class="row">
        <form action="">
          <div class="col-md-12">
            <label for="example-text-input" class="form-control-label">Organization Name</label>
            <argon-input type="text" name="name"/>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <argon-button :fullWidth="true" color="success" variant="gradient">Save</argon-button>
            </div>
          </div>
        </form>
      </div>
    </configurator>
  </div>
</template>

<script>
import Configurator from "@/widgets/Configurator.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import {mapMutations} from "vuex";
import ArgonButton from "@/components/ArgonButton.vue";

export default {
  components: {ArgonButton, ArgonInput, Configurator},
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"])
  },
}
</script>