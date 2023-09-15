<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header pb-0">
            <div class="d-flex align-items-center">
              <p class="mb-0">Edit Profile</p>
              <argon-button color="success" size="sm" class="ms-auto">Save</argon-button>
            </div>
          </div>
          <div class="card-body">
            <p class="text-uppercase text-sm">User Information</p>
            <div class="row">
              <form action="">
                <div class="row mt-1">
                  <div class="col-md-4">
                    <label for="example-text-input" class="form-control-label">Name</label>
                    <argon-input type="text" name="name"/>
                  </div>
                  <div class="col-md-4">
                    <label for="example-text-input" class="form-control-label">Email</label>
                    <argon-input type="text" name="email"/>
                  </div>
                  <div class="col-md-4">
                    <label for="example-text-input" class="form-control-label">Phone</label>
                    <argon-input type="phone" name="phone"/>
                  </div>
                </div>
                <div class="row mt-1">
                  <div class="col-md-6">
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
                  <div class="col-md-6">
                    <label for="formFile" class="form-control-label">Avatar</label>
                    <div class="form-group">
                      <input class="form-control" type="file" id="formFile">
                    </div>
                  </div>
                </div>
                <div class="row  mt-5">
                  <div class="col-md-6">
                    <label for="example-text-input" class="form-control-label">Password</label>
                    <argon-input type="password" name="password"/>
                  </div>
                  <div class="col-md-6">
                    <label for="example-text-input" class="form-control-label">Password Confirmation</label>
                    <argon-input type="password" name="password-confirmation"/>
                  </div>
                </div>
                <div class="col-md-12 mt-5">
                  <div class="form-group">
                    <argon-button :fullWidth="true" color="success" variant="gradient">Save</argon-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import ArgonRadio from "@/components/ArgonRadio.vue";

export default {
  name: "profile",
  data() {
    return {
      showMenu: false
    };
  },
  components: {
    ArgonRadio,
    ArgonInput,
    ArgonButton
  },

  mounted() {
    setNavPills();
    setTooltip();
  },
};
</script>
