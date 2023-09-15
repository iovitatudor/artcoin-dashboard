<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <task-types-table/>
      </div>
    </div>
  </div>
</template>

<script>
import TaskTypesTable from "@/views/TaskTypes/components/TaskTypesTable.vue";

export default {
  name: "task-types",
  components: {TaskTypesTable},
};
</script>
