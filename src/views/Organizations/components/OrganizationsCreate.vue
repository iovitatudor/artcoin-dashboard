<template>
  <div>
    <configurator
        :toggle="toggleConfigurator"
        :class="[
        this.$store.state.showConfig ? 'show' : '',
        this.$store.state.hideConfigButton ? 'd-none' : ''
      ]"
    >
      <div class="row">
        <div class="col-md-12">
            <div class="row">
              <div class="col-md-12">
                <label for="example-text-input" class="form-control-label">Name</label>
                <argon-input type="text" value="lucky.jesse"/>
              </div>
              <div class="col-md-12">
                <label for="example-text-input" class="form-control-label">Email</label>
                <argon-input type="text" value="lucky.jesse"/>
              </div>
              <div class="col-md-12">
                <label for="example-text-input" class="form-control-label">Password</label>
                <argon-input type="text" value="lucky.jesse"/>
              </div>
              <div class="col-md-12">
                <label for="example-text-input" class="form-control-label">Username</label>
                <argon-input type="text" value="lucky.jesse"/>
              </div>
            </div>
        </div>
      </div>
    </configurator>
  </div>
</template>

<script>
import Configurator from "@/widgets/Configurator.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import {mapMutations} from "vuex";

export default {
  components: {ArgonInput, Configurator},
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"])
  },
}
</script>