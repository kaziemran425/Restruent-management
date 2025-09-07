<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
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
    title: 'login',
    caption: '',
    icon: 'login',
    link: '/login'
  },
  {
    title: 'Dashboard',
    caption: 'dashboard',
    icon: 'dashboard',
    link: '/dashboard'
  },
  {
    title: 'our services',
    caption: 'our services',
    icon: 'services',
    link: '/ourservices'
  },
  {
    title: 'Booking',
    caption: 'booking',
    icon: 'record_voice_over',
    link: '/booking'
  },
  {
    title: 'billing page',
    caption: 'billing page',
    icon: 'rss_feed',
    link: '/billing'
  },
  {
    title: 'reports',
    caption: 'reports',
    icon: 'reports',
    link: '/reports'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
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
      linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
