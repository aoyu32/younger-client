<template>
  <div class="home">
    <div class="home_text">
      <ScrollText lable="站长说" text="THE  MORE YOU LEARN，THE YOUNGER YOU BECOME（越学习，越年轻）" height="40px" :speed="60" />
    </div>
    <div class="home_banner">
      <div class="banner_left">
        <AoBanner :screenshots="bannerImage" width="800px" height="450px" />
      </div>
      <div class="banner_right">
        <div class="right_top">
          <CalendarCard />
        </div>
        <div class="right_bottom">
          <NewsCard />
        </div>
      </div>
    </div>
    <div class="home_content" id="tools">
      <div class="content_left">
        <div class="content-wrapper">
          <div class="content_label">
            <h3>实用工具</h3>
            <div class="label_text">
              <span>值得放入收藏夹的实用利器</span>
            </div>
          </div>

          <div class="apps_grid">
            <div class="apps_item" v-for="item in appList" :key="item.id">
              <router-link to="/app/detail">
                <AppCard :app="item" />
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="content_right">
        <div class="content-wrapper">
          <div class="content_label">
            <h3>网页工具</h3>
            <div class="label_text">
              <span>常用在线工具与站点</span>
            </div>
          </div>

          <div class="webs_grid">
            <div class="webs_item" v-for="tool in webTools" :key="tool.id">
              <WebToolCard :tool="tool" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="video_content" id="videos">
      <div class="video_label">
        <div class="content_label">
          <h3>视频专区</h3>
          <div class="label_text">
            <span>精选 AI 学习内容</span>
          </div>
        </div>
      </div>
      <div class="video_list">
        <div class="video_item" v-for="item in videos" :key="item.id">
          <VideoCard :video="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AoBanner from '@/components/banner/AoBanner.vue'
import AppCard from '@/views/home/components/AppCard.vue'
import WebToolCard from '@/views/home/components/WebToolCard.vue'
import VideoCard from '@/views/home/components/VideoCard.vue'
import { appData } from '@/mock/appData'
import { webTools } from '@/mock/webTools'
import { videoData } from '@/mock/videoData'
import ScrollText from './components/ScrollText.vue'
import CalendarCard from './components/CalendarCard.vue'
import NewsCard from './components/NewsCard.vue'

export default {
  components: {
    ScrollText,
    AoBanner,
    AppCard,
    CalendarCard,
    NewsCard,
    WebToolCard,
    VideoCard
  },
  data() {
    return {
      bannerImage: [
        'http://localhost:9000/bit-setup/banner/1.png',
        // 'http://localhost:9000/bit-setup/banner/2.png',
        'http://localhost:9000/bit-setup/banner/3.png',
        'http://localhost:9000/bit-setup/banner/4.png',
        'http://localhost:9000/bit-setup/banner/5.png',
        'http://localhost:9000/bit-setup/banner/6.png'
      ],
      apps: appData,
      webTools,
      videos: videoData
    }
  },
  mounted() {
    this.getData()
    this.$nextTick(() => {
      this.syncHeights()
      window.addEventListener('resize', this.syncHeights)
      const leftWrapper = this.$el.querySelector(
        '.content_left .content-wrapper'
      )
      if (leftWrapper && typeof MutationObserver !== 'undefined') {
        this._heightObserver = new MutationObserver(() => {
          this.syncHeights()
        })
        this._heightObserver.observe(leftWrapper, {
          childList: true,
          subtree: true,
          attributes: true
        })
      }
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.syncHeights)
    if (this._heightObserver) {
      this._heightObserver.disconnect()
      this._heightObserver = null
    }
  },
  computed: {
    appList() {
      return this.apps.map((app) => {
        return {
          ...app,
          size: Math.floor(app.size / 1024 / 1024)
        }
      })
    }
  },
  methods: {
    getData() {
      console.log(this.apps)
    },
    syncHeights() {
      this.$nextTick(() => {
        const leftWrapper = this.$el.querySelector(
          '.content_left .content-wrapper'
        )
        const rightWrapper = this.$el.querySelector(
          '.content_right .content-wrapper'
        )
        if (!leftWrapper || !rightWrapper) return

        rightWrapper.style.height = 'auto'

        const h = leftWrapper.getBoundingClientRect().height
        const target = Math.max(420, Math.ceil(h || 0))
        rightWrapper.style.height = `${target}px`
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@use '@/assets/styles/common/main.scss' as *;

.home {
  @include wh;
  @include flex(n, n, c);

  .home_text {
    margin-bottom: 15px;
  }

  .home_banner {
    @include wh(100p, 450px);
    display: flex;
    gap: 20px;

    .banner_left {
      flex-shrink: 0;
    }

    .banner_right {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 450px;

      .right_top {
        height: 200px;
      }

      .right_bottom {
        flex: 1;
      }
    }
  }

  .home_content {
    @include wh(100p, n);
    display: grid;
    grid-template-columns: 420px 1fr;
    gap: 20px;
    margin-top: 20px;
  }

  .video_content {
    @include wh(100p, n);
    margin-top: 20px;

    .video_label {
      @include wh(100p, n);
      margin-bottom: 14px;

      .content_label {
        @include wh(100p, n);
        @include flex(c, s-b);
        padding-bottom: 10px;

        .label_text {
          font-size: 14px;

          @include theme {
            color: color(c-g9, 0.4);
          }
        }
      }
    }

    .video_list {
      @include wh(100p, n);
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      grid-auto-rows: 1fr;

      .video_item {
        @include wh;
      }
    }
  }

  .home_content {
    .content_left {
      width: 420px;
    }

    .content_right {
      width: 100%;
      min-width: 0;
    }

    .content_label {
      @include wh(100p, n);
      @include flex(c, s-b);
      margin: 0 0 14px;

      .label_text {
        font-size: 14px;

        @include theme {
          color: color(c-g9, 0.4);
        }
      }
    }

    .content_left,
    .content_right {
      @include flex(n, n, c);
      min-width: 0;

      .content-wrapper {
        @include wh(100p, n);
        min-height: 420px;

        @include theme {
          background-color: color(c-g0);
          border: 1px solid color(c-g2);
        }

        border-radius: 12px;
        padding: 18px;
        box-sizing: border-box;
        @include shadow(s);
      }
    }

    .apps_grid {
      @include wh(100p, n);
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;

      .apps_item {
        @include wh;
        @include flex(c, c);
      }

      a {
        text-decoration: none;
      }
    }

    .webs_grid {
      @include wh(100p, n);
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;

      .webs_item {
        @include wh;
      }
    }
  }
}
</style>
