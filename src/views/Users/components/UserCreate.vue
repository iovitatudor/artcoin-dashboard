<template>
  <div>
    <configurator
        title="Add new user"
        :toggle="toggleConfigurator"
        :class="[
        this.$store.state.showConfig ? 'show' : '',
        this.$store.state.hideConfigButton ? 'd-none' : ''
      ]"
    >
      <div class="row">
        <form action="">
          <div class="col-md-12">
            <label for="example-text-input" class="form-control-label">Name</label>
            <argon-input type="text" name="name"/>
          </div>
          <div class="col-md-12">
            <label for="example-text-input" class="form-control-label">Email</label>
            <argon-input type="text" name="email"/>
          </div>
          <div class="col-md-12">
            <label for="example-text-input" class="form-control-label">Phone</label>
            <argon-input type="phone" name="phone"/>
          </div>
          <div class="col-md-12">
            <label for="example-text-input" class="form-control-label">Gender</label>
            <div class="row">
              <div class="col-md-4">
                <argon-radio name="gender" id="male">male</argon-radio>
              </div>
              <div class="col-md-4">
                <argon-radio name="gender" id="female">female</argon-radio>
              </div>
              <div class="col-md-4">
                <argon-radio name="gender" id="unisex">unisex</argon-radio>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <label for="formFile" class="form-control-label">Avatar</label>
            <div class="form-group">
              <input class="form-control" type="file" id="formFile">
            </div>
          </div>
          <div class="col-md-12">
            <label for="example-text-input" class="form-control-label">Password</label>
            <argon-input type="password" name="password"/>
          </div>
          <div class="col-md-12">
            <label for="example-text-input" class="form-control-label">Password Confirmation</label>
            <argon-input type="password" name="password-confirmation"/>
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
import ArgonRadio from "@/components/ArgonRadio.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import {mapMutations} from "vuex";

export default {
  components: {ArgonInput, ArgonRadio, ArgonButton, Configurator},
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"])
  },
}
</script>