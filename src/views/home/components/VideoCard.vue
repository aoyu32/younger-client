<template>
  <div class="video-card">
    <div class="card_cover">
      <img :src="video.cover" :alt="video.title" @error="handleImgError" />
    </div>
    <div class="card_info">
      <div class="info_title">
        <span>{{ video.title }}</span>
      </div>
      <div class="info_bottom">
        <div class="bottom_play">
          <span>{{ playText }}</span>
        </div>
        <div class="bottom_date">
          <span>{{ dateText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const FALLBACK_COVER =
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=60'

export default {
  name: 'VideoCard',
  props: {
    video: {
      type: Object,
      default: () => {
        return {
          id: 0,
          title: '',
          cover: '',
          playCount: 0,
          date: ''
        }
      }
    }
  },
  computed: {
    playText() {
      const num = Number(this.video.playCount || 0)
      if (num >= 10000) return `${(num / 10000).toFixed(1)}万播放`
      return `${num}播放`
    },
    dateText() {
      return this.video.date || ''
    }
  },
  methods: {
    handleImgError(e) {
      if (!e || !e.target) return
      if (e.target.src === FALLBACK_COVER) return
      e.target.src = FALLBACK_COVER
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/common/main.scss' as *;

.video-card {
  display: flex;
  flex-direction: column;
  height: 100%; // 确保卡片填满 grid item
  border-radius: 12px;
  overflow: hidden;

  @include theme {
    background-color: color(c-g0);
    border: 1px solid color(c-g2);
  }

  @include shadow(s);
  transition: 0.18s;

  &:hover {
    transform: translateY(-2px);
    @include shadow(m);
  }

  .card_cover {
    @include wh(100p, 135px);
    overflow: hidden;

    img {
      @include wh;
      object-fit: cover;
      transition: 0.25s;
    }
  }

  &:hover {
    .card_cover {
      img {
        transform: scale(1.04);
      }
    }
  }

  .card_info {
    flex: 1;
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .info_title {
    flex: 1;
    font-size: 14px;
    line-height: 1.35;

    @include theme {
      color: color(c-g9, 0.85);
    }

    // 两行省略
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .info_bottom {
    @include flex(c, s-b);

    .bottom_play {
      font-size: 12px;

      @include theme {
        color: color(c-g9, 0.45);
      }
    }

    .bottom_date {
      font-size: 12px;
      padding: 2px 8px;
      border-radius: 999px;

      @include theme {
        background-color: color(c-g2);
        color: color(c-g6, 0.5);
      }
    }
  }
}
</style>
