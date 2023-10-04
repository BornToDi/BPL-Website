<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-sky-950 text-yellow-400 text-bold">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="py-5">
          BSTI Premiure League
          <q-img class="rounded-3xl h-[40px] w-[40px] animate-bounce" src="https://e0.pxfuel.com/wallpapers/314/359/desktop-wallpaper-cricket-ideas-in-2022-cricket-cricket-poster-cricket-logo-cricket-batting.jpg"></q-img>
        </q-toolbar-title>


      </q-toolbar>
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

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'History',

    icon: 'book',
    link: '/'
  },
  {
    title: 'Group Image',

    icon: 'group',
    link: 'http://localhost:8080/#/image'
  },
  {
    title: 'Players Image',

    icon: 'people',
    link: 'http://localhost:8080/#/single'
  },
  {
    title: 'Forum',

    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',

    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',

    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',

    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
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
