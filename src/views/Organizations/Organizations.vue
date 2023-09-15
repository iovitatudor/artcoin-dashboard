<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <organizations-table/>
      </div>
    </div>
  </div>
</template>

<script>
import OrganizationsTable from "@/views/Organizations/components/OrganizationsTable.vue";

export default {
  name: "organizations",
  components: {OrganizationsTable},
};
</script>
