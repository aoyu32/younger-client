<template>
  <div class="ao-banner" :style="{ width: width, height: height }">
    <div
      class="carousel"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div
        class="carousel-inner"
        ref="carouselInnerRef"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          class="carousel-item"
          v-for="(item, index) in carouselList"
          :key="index"
        >
          <a>
            <img :src="item.img" alt="" />
          </a>
        </div>
      </div>

      <button class="carousel-control prev" @click="handleToPrev">
        <i class="iconfont icon-xiangzuo-1"></i>
      </button>
      <button class="carousel-control next" @click="handleToNext">
        <i class="iconfont icon-xiangyou-1"></i>
      </button>

      <div class="carousel-indicator">
        <span
          v-for="(_, index) in carouselList.length"
          :key="index"
          :class="{ active: indicatorIndex - 1 === index }"
          @click="handleIndicator(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AoBanner',
  props: {
    width: {
      type: String,
      default: '500px'
    },
    height: {
      type: String,
      default: '450px'
    },
    screenshots: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      carouselInnerRef: null,
      currentIndex: 1,
      indicatorIndex: 1,
      isDisable: false,
      autoPlayTimer: null
    }
  },

  computed: {
    carouselList() {
      if (this.screenshots && this.screenshots.length > 0) {
        return this.screenshots.map((url) => ({
          to: '',
          img: url
        }))
      }
      return []
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.initCarousel()
      this.startAutoplay(3000, true)
    })
  },

  beforeDestroy() {
    this.startAutoplay(3000, false)
  },

  methods: {
    handleMouseEnter() {
      this.startAutoplay(3000, false)
    },

    handleMouseLeave() {
      this.startAutoplay(3000, true)
    },

    startAutoplay(time, start) {
      if (!start) {
        clearInterval(this.autoPlayTimer)
        this.autoPlayTimer = null
        return
      }
      clearInterval(this.autoPlayTimer)
      this.autoPlayTimer = setInterval(() => this.handleToNext(), time)
    },

    handleIndicator(index) {
      this.currentIndex = index + 1
      this.indicatorIndex = this.currentIndex
    },

    initCarousel() {
      const inner = this.$refs.carouselInnerRef
      if (!inner || !inner.firstElementChild) return

      const expected = this.carouselList.length
      // 清理已有克隆
      while (inner.children.length > expected) {
        inner.removeChild(inner.lastElementChild)
      }

      // 克隆首尾
      const first = inner.firstElementChild.cloneNode(true)
      const last = inner.lastElementChild.cloneNode(true)

      inner.appendChild(first)
      inner.insertBefore(last, inner.firstElementChild)
    },

    handleToPrev() {
      if (this.isDisable) return

      this.currentIndex--
      this.indicatorIndex = this.currentIndex
      this.updateCarousel()

      if (this.currentIndex <= 0) {
        this.indicatorIndex = this.carouselList.length
        setTimeout(() => {
          this.isDisable = false
          this.$refs.carouselInnerRef.style.transition = 'none'
          this.currentIndex = this.carouselList.length
        }, 300)
      }
    },

    updateCarousel() {
      this.$refs.carouselInnerRef.style.transition = 'transform .4s ease-in-out'
    },

    handleToNext() {
      if (this.isDisable) return

      this.currentIndex++
      this.indicatorIndex = this.currentIndex
      this.updateCarousel()

      if (this.currentIndex > this.carouselList.length) {
        this.isDisable = true
        this.indicatorIndex = 1
        setTimeout(() => {
          this.isDisable = false
          this.$refs.carouselInnerRef.style.transition = 'none'
          this.currentIndex = 1
        }, 300)
      }
    }
  },

  watch: {
    screenshots: {
      handler(newList) {
        if (newList && newList.length > 0) {
          this.startAutoplay(3000, false)
          this.currentIndex = 1
          this.indicatorIndex = 1

          this.$nextTick(() => {
            this.initCarousel()
            this.startAutoplay(3000, true)
          })
        }
      }
    },

    carouselList: {
      handler(newList) {
        this.$nextTick(() => {
          const inner = this.$refs.carouselInnerRef
          if (inner && inner.children.length === newList.length) {
            this.initCarousel()
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/common/main.scss' as *;
.ao-banner {
  @include wh(100p);

  .carousel {
    @include wh(100p);
    position: relative;
    overflow: hidden;
    border-radius: 6px;

    .carousel-inner {
      @include wh(100p);
      display: flex;
      transition: transform 0.3s ease-in-out;
    }

    .carousel-item {
      @include wh(100p);
      flex-shrink: 0;

      a {
        @include wh(100p);
        display: block;
      }

      img {
        @include wh(100p);
        object-fit: cover;
        border-radius: 6px;
      }

      &.clone {
        pointer-events: none;
      }
    }

    .carousel-control {
      width: 60px;
      height: 100%;
      position: absolute;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;

      .iconfont {
        @include theme {
          color: color(c-g9, 0.3);
        }

        font-size: 20px;
      }

      &:hover {
        opacity: 1;
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.3;
      }
    }

    .prev {
      left: 0;
      top: 0;
      opacity: 0;

      &::before {
        content: '';
        @include wh(30px);
        border-radius: 50%;
        z-index: 0;

        @include theme {
          background-color: color(c-g5, 0.2);
        }

        @include p-a;
      }
    }

    .next {
      right: 0;
      top: 0;
      opacity: 0;

      &::before {
        content: '';
        @include wh(30px);
        border-radius: 50%;
        z-index: 0;

        @include theme {
          background-color: color(c-g5, 0.2);
        }

        @include p-a;
      }
    }

    &:hover .carousel-control {
      opacity: 1;
    }

    .carousel-indicator {
      width: 100%;
      height: 50px;
      padding: 0 20px;
      position: absolute;
      bottom: 0px;
      right: 0px;
      @include flex(c, c);
      gap: 10px;

      span {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        display: inline-block;
        cursor: pointer;
        transition: all 0.3s ease;

        @include theme {
          background-color: color(c-g, 0.5);
        }

        &.active {
          @include theme {
            background-color: color(c-g);
          }

          transform: scale(1.2);
        }

        &:hover {
          transform: scale(1.1);

          @include theme {
            background-color: color(c-g);
          }
        }
      }
    }
  }
}
</style>
