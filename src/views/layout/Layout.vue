<template>
  <div class="layout">
    <header>
      <LayoutHeader></LayoutHeader>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <LayoutFooter />
    </footer>
  </div>
</template>
<script>
import LayoutHeader from '@/components/layout/Header.vue'
import LayoutFooter from '@/components/layout/Footer.vue'
export default {
  name: 'Layout',
  components: {
    LayoutHeader,
    LayoutFooter
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
  @include flex(c, c, c);
  position: relative;
  gap: 10px;

  header {
    position: fixed;
    top: 0;
    @include wh(100p, n);
    @include flex(c, c);
    @include shadow(m);
    z-index: 10000;
    background-color: color(c-g);
  }

  main {
    @include wh(100p, 100p);
    @include flex(c, c, c);
    margin-top: $header-height;
    padding-top: 15px;

    // 内容区维持 1200 居中
    :deep(.home) {
      width: $header_width;
    }
  }

  footer {
    width: 100%;
    @include flex(c, c);
  }
}
</style>
