<template>

    <div class=" bg-sky-950 h-screen">
    <q-parallax :height="450" :speed="0.5">
      <template v-slot:media>
        <img class="border-b-orange-600 bg-cover bg-center h-[400px]" src="https://img.freepik.com/premium-vector/cricket-horizontal-banner-batsman-championship-background-use-cover-poster-template-brochure-decorated-flyer-banner_460848-3151.jpg" />
      </template>

      <div class="container   ">
       <span class="text1">BSTI Premiure League</span>
       <span class="text2 text-base">Since from 2007 and still GOING ON!</span>
      </div>
    </q-parallax>

    <section>
    <div class="flex min-h-screen items-center justify-center bg-slate-950">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div
          class="mx-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
        >
          <div class="h-[450px] w-[450px]">
            <img
              class="rounded-xl h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="http://localhost:8080/img/12.0739e84d.jpg"
              alt=""
            />
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
          ></div>
          <div
            class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"
          >
            <h1 class="font-dmserif text-3xl font-bold text-yellow-500">
              Player's Image
            </h1>
            <p
              class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              Here you can see
              <span class="text-teal-400 text-bold">US</span>
            </p>
            <q-btn
             to="/single"
              rounded
              label="Click Here"
              class="py-2 px-5 font-com text-sm bg-teal-950 hover:text-teal-200 text-white capitalize shadow shadow-black/60"
            />
          </div>
        </div>
        <div
          class=" mx-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
        >
          <div class=" h-[450px] w-[450px]">
            <img
              class="rounded-xl h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
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
            <h1 class="font-dmserif text-3xl font-bold text-yellow-500">
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
          class="mx-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
        >
          <div class=" h-[450px] w-[450px]">
            <img
              class=" rounded-xl h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
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
            <h1 class="font-dmserif text-3xl font-bold text-yellow-500">
              Bsti Quater
            </h1>
            <p
              class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              Here you can see our
              <span class="text-teal-400 text-bold">Quater</span>

            </p>
            <q-btn
              to="/bsti"
              rounded
              label="Click Here"
              class="py-2 px-5 font-com text-sm bg-teal-950 hover:text-teal-200 text-white capitalize shadow shadow-black/60"
            />
          </div>
        </div>
      </div>
    </div>
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
  .container{
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  .container span{
    text-transform: uppercase;
    display: block;
  }
.text1{
  color: aliceblue;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 8px;
  margin-bottom: 20px;
  background: black;
  position: relative;
  animation: text 3s 1;
}
.text2{
  font-size: 30px;
  color: aqua;
}

@keyframes text{
  0%{
    color: black;
    margin-bottom: -40px;
  }
  30%
  {
    letter-spacing: 25px;
    margin-bottom: -40px;
  }
  85%
  {
    letter-spacing: 8px;
    margin-bottom: -40px;
  }
}
}
</style>
