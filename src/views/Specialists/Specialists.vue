<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <specialists-table/>
      </div>
    </div>
  </div>
</template>

<script>
import SpecialistsTable from "@/views/Specialists/components/SpecialistsTable.vue";

export default {
  name: "specialists",
  components: {
    SpecialistsTable
  },
};
</script>
