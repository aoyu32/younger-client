<template>
  <div class="layout">
    <header>
      <LayoutHeader></LayoutHeader>
    </header>
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>
<script>
import LayoutHeader from '@/components/layout/Header.vue'
export default {
  name: 'Layout',
  components: {
    LayoutHeader
  },
  data() {
    return {
      currentTheme: 'light'
    }
  },
  mounted() {
    this.setTheme()
  },
  methods: {
    setTheme() {
      document.documentElement.setAttribute('data-theme', this.currentTheme)
    }
  }
}
</script>
<style lang="scss" scoped>
@use '@/assets/styles/common/main.scss' as *;
.layout {
  header {
    @include wh;
    @include flex(c, c);
    @include shadow(m);
  }
}
</style>
