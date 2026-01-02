<template>
  <div class="app-card">
    <div
      class="card_top"
      :style="{
        '--card-top-color': cardTopBgColor
      }"
    >
      <div class="card_image">
        <img :src="app.icon" alt="" />
      </div>
    </div>
    <div class="card_bottom">
      <div class="bottom_name">
        <h3>{{ app.name }}</h3>
      </div>
      <div class="bottom_category">
        <span>{{ app.description }}</span>
      </div>
    </div>
    <div class="card_bottom_2">
      <div class="card_info">
        <div class="info_item">
          <div class="item_label">
            <span>名称</span>
          </div>
          <div class="item_value">
            <span>{{ app.name }}</span>
          </div>
        </div>
        <div class="info_item">
          <div class="item_label">
            <span>分类</span>
          </div>
          <div class="item_value">
            <span>{{ app.category }}</span>
          </div>
        </div>
        <div class="info_item">
          <div class="item_label">
            <span>大小</span>
          </div>
          <div class="item_value">
            <span>{{ app.size }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  data() {
    return {}
  },
  mounted() {},
  props: {
    app: {
      type: Object,
      default: () => {
        return {
          id: 0,
          name: '',
          description: '',
          category: '',
          tag: [],
          size: 0
        }
      }
    }
  },
  computed: {
    cardTopBgColor() {
      return this.randomBackground()
    }
  },
  methods: {
    randomBackground() {
      const r = Math.floor(Math.random() * 60) + 90
      const g = Math.floor(Math.random() * 35) + 170
      const b = Math.floor(Math.random() * 50) + 50
      return `rgb(${r}, ${g}, ${b})`
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/common/main.scss' as *;
$card_width: 180px;
$card_height: 145px;
$theme_color: color(c-p-lighter);
.app-card {
  position: relative;
  @include wh($card_width, $card_height);
  @include theme {
    background-color: color(c-g0);
  }
  @include shadow(l);
  overflow: hidden;
  border-radius: 10px;

  .card_top {
    position: relative;
    @include wh($card_width, $card_height / 2);
    background-color: var(--card-top-color);
    @include flex(c, c);
    transition: 0.5s;

    &::after {
      content: '';
      @include wh(16);
      background-color: var(--card-top-color);
      position: absolute;
      clip-path: polygon(50% 50%, 0 0, 100% 0);
      left: 50%;
      bottom: -15px;
      z-index: 1000;
      transform: translate(-50%);
    }
  }

  &:hover {
    .card_top {
      @include wh(100p, 38);
      .card_image {
        @include wh(24);
        transform: translate(-70px, 0px);
      }
    }

    .card_bottom {
      top: 300px;
    }

    .card_bottom_2 {
      top: 38px;
      @include wh($card_width, ($card_height - 38px));
    }
  }

  .card_image {
    position: absolute;
    @include wh(42);
    @include flex(c, c);
    transition: 0.5s;
    img {
      @include wh;
    }
  }

  .card_bottom,
  .card_bottom_2 {
    @include flex(c, c, c);
    gap: 5px;
    @include wh($card_width, $card_height / 2);
    text-align: center;
    transition: 0.5s;
    position: absolute;
    top: $card_height/2;

    .bottom_name {
      @include wh(110, n);
      @include theme {
        color: color(c-g9, 0.5);
      }
      border-bottom: 1px solid color(c-g9, 0.5);
      padding-bottom: 5px;
      transition: 0.2s;
      
      h3 {
        font-size: 14px;
        font-weight: 600;
      }
    }

    .bottom_category {
      font-size: 11px;
      transition: 0.2s;
      padding: 0 5px;
    }
  }

  .card_bottom_2 {
    top: 200px;
    height: 200px;
  }

  .card_info {
    @include wh;
    @include flex(c, c, c);
    gap: 3px;

    .info_item {
      @include wh(100, n);
      @include flex(n, l);
      gap: 8px;
      transition: 0.2s;
    }

    .item_label {
      font-size: 12px;
      font-weight: 550;
      @include flex(n, c);
      color: color(c-g9, 0.5);
    }

    .item_value {
      font-size: 12px;
      @include flex(c, c);
      @include theme {
        color: color(c-g9, 0.7);
      }
    }
  }
}
</style>
