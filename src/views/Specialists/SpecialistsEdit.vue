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
            <p class="text-uppercase text-sm">Specialist Information</p>
            <div class="row">
              <form action="">
                <div class="row mt-1">
                  <div class="col-md-6">
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
                  <div class="col-md-6">
                    <label for="example-text-input" class="form-control-label">Name</label>
                    <argon-input type="text" name="name"/>
                  </div>
                </div>
                <div class="row mt-1">
                  <div class="col-md-6">
                    <label for="example-text-input" class="form-control-label">Email</label>
                    <argon-input type="text" name="email"/>
                  </div>
                  <div class="col-md-6">
                    <label for="example-text-input" class="form-control-label">Function</label>
                    <argon-input type="text" name="function"/>
                  </div>
                </div>
                <div class="col-md-12">
                  <label for="formFile" class="form-control-label">Avatar</label>
                  <div class="form-group">
                    <input class="form-control" type="file" id="formFile">
                  </div>
                </div>
                <div class="row mt-1">
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

export default {
  name: "specialistEdit",
  data() {
    return {
      showMenu: false
    };
  },
  components: {
    ArgonInput,
    ArgonButton
  },

  mounted() {
    setNavPills();
    setTooltip();
  },
};
</script>
