<template>

    <div class=" bg-sky-950 h-screen">
    <q-parallax :height="450" :speed="0.5">
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
      </template>

      <h1 class="text-yellow-400  text-4xl text-[100px] animate-pulse uppercase">
       BSTI Premiure League
      </h1>
    </q-parallax>

    <section>
    <div class="flex min-h-screen items-center justify-center bg-slate-950">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div
          class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
        >
          <div class="h-[600px] w-[550px]">
            <img
              class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://lh3.googleusercontent.com/p/AF1QipPSyLLCxT_7jnLwSGEbkFqXrO120u0IxW_t_f6x=s680-w680-h510"
              alt=""
            />
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
          ></div>
          <div
            class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"
          >
            <h1 class="font-dmserif text-3xl font-bold text-white">
              Player's Image
            </h1>
            <p
              class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              Here you can see
              <span class="text-teal-400 text-bold">US</span>
            </p>
            <q-btn
              href="https://zihadulislam45.netlify.app/#/"
              rounded
              label="Live Project"
              class="py-2 px-5 font-com text-sm bg-teal-950 hover:text-teal-200 text-white capitalize shadow shadow-black/60"
            />
          </div>
        </div>
        <div
          class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
        >
          <div class="h-[600px] w-[550px]">
            <img
              class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://lh3.googleusercontent.com/p/AF1QipP00X88Ic7QlaY0CMIBetP39ED_DDe5JZXlcYp8=s680-w680-h510"
              alt=""
            />
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
          ></div>
          <div
            class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"
          >
            <h1 class="font-dmserif text-3xl font-bold text-white">
              Group Image
            </h1>
            <p
              class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              Here you can see our
              <span class="text-teal-400 text-bold">Group Image</span>

            </p>
            <q-btn
              to="/image"
              rounded
              label="Click Here"
              class="py-2 px-5 font-com text-sm bg-teal-950 hover:text-teal-200 text-white capitalize shadow shadow-black/60"
            />
          </div>
        </div>
        <div
          class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
        >
          <div class="h-[600px] w-[550px]">
            <img
              class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://lh3.googleusercontent.com/p/AF1QipNqCDlQJll1DMBvhxagdnEuwwytF9Civc2IQLhS=s680-w680-h510"
              alt=""
            />
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
          ></div>
          <div
            class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"
          >
            <h1 class="font-dmserif text-3xl font-bold text-white">
              Bsti Quater
            </h1>
            <p
              class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              Here you can see our
              <span class="text-teal-400 text-bold">Quater</span>

            </p>
            <q-btn
              href="https://zihadulislam45.netlify.app/#/"
              rounded
              label="Live Project"
              class="py-2 px-5 font-com text-sm bg-teal-950 hover:text-teal-200 text-white capitalize shadow shadow-black/60"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <q-uploader
        url="http://localhost:4444/upload"
        style="max-width: 300px"
      />
  </section>
  </div>


</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style type="text/tailwindcss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

*
{

}
</style>
