<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class=" bg-sky-950 text-yellow-400 text-bold">

        <div class="row">
          <div class="col-12 col-md-8 flex mt-5 md:mt-0 pl-2 md:pl-5 ">
          <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <div class="py-5 md:text-xl">
          BSTI Premiure League
          <q-img class="rounded-3xl h-[40px] w-[40px] animate-bounce" src="https://e0.pxfuel.com/wallpapers/314/359/desktop-wallpaper-cricket-ideas-in-2022-cricket-cricket-poster-cricket-logo-cricket-batting.jpg"></q-img>

        </div>
        </div>
       <div class="col-12 col-md-4 md:text-center md:mt-5">
        <q-btn to="/" class="px-10 mb-4 md:mb-0 mx-10 md:mx-14 " outline color="warning" label="Home" />
       </div>

        </div>



    </q-header>

    <q-drawer
    class="  bg-sky-950 text-yellow-400 text-bold"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >

        </q-item-label>

        <div>
          <div class="pb-14 text-2xl text-yellow-500 text-center">
            <q-img class="w-[100px] rounded-[400px] animate-spin border-4 border-yellow-500" src="https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-gallery-vector-icon-png-image_1027754.jpg"></q-img>
          </div>
          <q-btn to="/single" flat class="w-full text-bold text-xl py-5 " color="warning" label="Player's photo" />
          <q-btn to="/image" flat class="w-full text-bold text-xl py-5 " color="warning" label="Group photo" />
          <q-btn to="/bsti" flat class="w-full text-bold text-xl py-5 " color="warning" label="BSTI field" />
          <q-btn to="/video" flat class="w-full text-bold text-xl py-5" color="warning" label="Our Videos" />
        </div>


      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'




export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {

      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style type="text/tailwindcss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

*
{
  .hello{
    background-color: aqua;
  }
}
</style>
