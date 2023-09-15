<template>
  <div class="card">
    <div class="card-header pb-0 d-flex justify-content-between">
      <h6>Organizations table</h6>
      <organizations-create/>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Organization</th>
            <th class="text-secondary opacity-7"></th>
            <th class="text-secondary opacity-7"></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">Health Center</h6>
                </div>
              </div>
            </td>
            <td class="align-middle">
              <router-link
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  to="/dashboard/organizations/edit"
              >Edit
              </router-link>
            </td>
            <td class="align-middle">
              <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
              >Delete</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import OrganizationsCreate from "@/views/Organizations/components/OrganizationsCreate.vue";

export default {
  name: "organizations-table",
  components: {OrganizationsCreate},
};
</script>
