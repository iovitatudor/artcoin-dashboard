<template>
  <div class="fixed-plugin">
    <argon-button @click="toggle" color="dark" variant="gradient">
      <i class="fas fa-plus me-2"></i>
      {{ title }}
    </argon-button>
    <div class="shadow-lg card">
      <div class="pt-3 pb-0 bg-transparent card-header">
        <div class="float-start">
          <h5 class="mt-3 mb-0">{{ title }}</h5>
        </div>
        <div
            class="mt-4 float-end"
            @click="toggle"
        >
          <button class="p-0 btn btn-link text-dark fixed-plugin-close-button">
            <i class="fa fa-close"></i>
          </button>
        </div>
      </div>
      <hr class="my-1 horizontal dark"/>
      <div class="pt-0 card-body pt-sm-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import {activateDarkMode, deactivateDarkMode} from "@/assets/js/dark-mode";
import ArgonButton from "@/components/ArgonButton.vue";

export default {
  name: "configurator",
  components: {ArgonButton},
  props: ["toggle", "title"],
  methods: {
    ...mapMutations(["navbarMinimize", "sidebarType", "navbarFixed"]),
    sidebarColor(color = "success") {
      document.querySelector("#sidenav-main").setAttribute("data-color", color);
      this.$store.state.mcolor = `card-background-mask-${color}`;
    },
    sidebarType(type) {
      this.$store.state.sidebarType = type;
    },
    setNavbarFixed() {
      if (
          this.$route.name !== "Profile" ||
          this.$route.name !== "All Projects"
      ) {
        this.$store.state.isNavFixed = !this.$store.state.isNavFixed;
      }
    },
    setDarkMode() {
      if (this.$store.state.darkMode) {
        this.$store.state.darkMode = false;
        this.$store.state.sidebarType = "bg-white";
        deactivateDarkMode();
        return;
      } else {
        this.$store.state.darkMode = true;
        this.$store.state.sidebarType = "bg-default";
        activateDarkMode();
      }
    },
    sidenavTypeOnResize() {
      let white = document.querySelector("#btn-white");
      if (window.innerWidth < 1200) {
        white.classList.add("disabled");
      } else {
        white.classList.remove("disabled");
      }
    }
  },
  computed: {
    sidenavResponsive() {
      return this.sidenavTypeOnResize;
    }
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";
    window.addEventListener("resize", this.sidenavTypeOnResize);
    window.addEventListener("load", this.sidenavTypeOnResize);
  }
};
</script>
