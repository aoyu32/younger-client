<template>
  <a class="web-tool-card" :href="tool.url" target="_blank" rel="noopener noreferrer">
    <div class="card_icon">
      <img v-if="tool.icon" :src="tool.icon" :alt="tool.name" />
      <div v-else class="icon_placeholder"></div>
    </div>
    <div class="card_name">{{ tool.name }}</div>
  </a>
</template>

<script>
export default {
  name: 'WebToolCard',
  props: {
    tool: {
      type: Object,
      default: () => ({
        id: 0,
        name: '',
        url: '',
        icon: ''
      })
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/common/main.scss' as *;

.web-tool-card {
  @include wh(100p, 105px);
  @include theme {
    background-color: color(c-g0);
  }
  border-radius: 10px;
  @include shadow(s);
  @include flex(c, c, c);
  gap: 8px;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    @include shadow(m);
  }

  .card_icon {
    @include wh(40);
    border-radius: 12px;
    overflow: hidden;
    @include flex(c, c);

    img {
      @include wh;
      object-fit: cover;
    }

    .icon_placeholder {
      @include wh;
      @include theme {
        background-color: color(c-g2);
      }
    }
  }

  .card_name {
    width: 100%;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    line-height: 1.2;
    @include theme {
      color: color(c-g9, 0.8);
    }
    @include t-e;
  }
}
</style>

