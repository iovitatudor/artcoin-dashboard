<template>
  <configurator
      title="Add new specialist"
      :toggle="toggleConfigurator"
      :class="[
        this.$store.state.showConfig ? 'show' : '',
        this.$store.state.hideConfigButton ? 'd-none' : ''
      ]"
  >
    <div class="row">
      <form action="">
        <div class="col-md-12">
          <label for="formFile" class="form-control-label">Organization</label>
          <div class="form-group">
            <select class="form-select" aria-label="Default select example">
              <option selected>Select organization</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="col-md-12">
          <label for="example-text-input" class="form-control-label">Name</label>
          <argon-input type="text" name="name"/>
        </div>
        <div class="col-md-12">
          <label for="example-text-input" class="form-control-label">Email</label>
          <argon-input type="text" name="email"/>
        </div>
        <div class="col-md-12">
          <label for="example-text-input" class="form-control-label">Function</label>
          <argon-input type="text" name="function"/>
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