<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
      </div>
    </div>
  </div>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Sign In</h4>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form role="form" @submit.prevent="singIn">
                    <div class="mb-3">
                      <argon-input type="email"
                                   placeholder="Email"
                                   name="email"
                                   size="lg"
                                   :value="form.email"
                                   @input="form.email = $event.target.value"/>
                    </div>
                    <div class="mb-3">
                      <argon-input type="password"
                                   placeholder="Password"
                                   name="password"
                                   size="lg"
                                   :value="form.password"
                                   @input="form.password = $event.target.value"/>
                    </div>
                    <div class="text-center">
                      <argon-button
                          type="submit"
                          class="mt-4"
                          variant="gradient"
                          color="success"
                          fullWidth
                          size="lg"
                      >Sign in
                      </argon-button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
                class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column"
            >
              <div
                  class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                  style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg');
          background-size: cover;"
              >
                <span class="mask bg-gradient-success opacity-6"></span>
                <h4
                    class="mt-5 text-white font-weight-bolder position-relative"
                >"Attention is the new currency"</h4>
                <p
                    class="text-white position-relative"
                >The more effortless the writing looks, the more effort the writer actually put into the process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "signin",
  data() {
    return {
      credentials: {
        email: 'root@email.com',
        password: 'pass',
      },
      form: {
        email: null,
        password: null,
      },
    }
  },
  components: {
    ArgonInput,
    ArgonButton,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  methods: {
    singIn() {
      console.log(this.form.email, this.credentials.email)
      if (this.form.email !== this.credentials.email) {
        alert('email error');
        return;
      }
      if (this.form.password !== this.credentials.password) {
        alert('password error');
        return;
      }
      localStorage.setItem('auth', '1');
      return this.$router.push('dashboard');
    }
  }
};
</script>
