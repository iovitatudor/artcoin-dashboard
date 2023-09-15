<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <users-table/>
      </div>
    </div>
  </div>
</template>

<script>
import UsersTable from "@/views/Users/components/UsersTable.vue";

export default {
  name: "users",
  components: {UsersTable},
};
</script>
