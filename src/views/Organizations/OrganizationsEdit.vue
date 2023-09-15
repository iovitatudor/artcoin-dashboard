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
  name: "organizations-edit",
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
