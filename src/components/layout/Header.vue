<template>
  <div class="header">
    <div class="header_left">
      <div class="left_logo">
        <div class="logo_img">
          <img src="@/assets/logo.png" alt="" />
        </div>
        <div class="logo_name">
          <div class="name_cn">
            <span v-for="(item, index) in chLogoName" :key="index">
              {{ item }}
            </span>
          </div>
          <div class="name_en">
            <span v-for="(item, index) in enLogoName" :key="index">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
      <div class="left_nav">
        <ul>
          <li v-for="(item, index) in navItems" :key="index">
            <a href="javascript:;" @click="handleNavClick(item.anchor)">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="header_right">
      <div class="tool_collect">
        <button>工具收藏</button>
      </div>
      <div class="right_user">
        <div class="user_avatar">
          <img src="@/assets/avatar.png" alt="" />
        </div>
        <div class="user_name">张三</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LayoutHeader',
  data() {
    return {
      chLogoName: ['洋', '果', '教', '育'],
      enLogoName: ['Y', 'O', 'U', 'N', 'G', 'E', 'R'],
      navItems: [
        {
          icon: '',
          name: '软件工具',
          route: '',
          anchor: 'tools'
        },
        {
          icon: '',
          name: '教育视频',
          route: '',
          anchor: 'videos'
        }
      ]
    }
  },
  methods: {
    handleNavClick(anchor) {
      const el = document.getElementById(anchor)
      if (!el) return
      const header = document.querySelector('header')
      const offset = header ? header.getBoundingClientRect().height : 0
      const to = el.getBoundingClientRect().top + window.pageYOffset - offset - 10
      this.smoothScrollTo(to, 450)
    },
    smoothScrollTo(to, duration = 450) {
      const start = window.pageYOffset
      const distance = to - start
      const startTime = performance.now()

      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      }

      const step = (now) => {
        const elapsed = now - startTime
        const progress = Math.min(1, elapsed / duration)
        const eased = easeInOutCubic(progress)
        window.scrollTo(0, start + distance * eased)
        if (progress < 1) requestAnimationFrame(step)
      }

      requestAnimationFrame(step)
    }
  }
}
</script>
<style lang="scss" scoped>
@use '@/assets/styles/common/main.scss' as *;
.header {
  @include flex(c, s-b);
  padding: 15px 0;
  @include wh($header_width, $header_height);
  img {
    @include wh(40);
    object-fit: cover;
  }
}

.header_left {
  @include flex(c, n);
  gap: 60px;
  .left_logo {
    @include flex;
    gap: 10px;
  }

  .logo_img {
    @include flex(c, c);
  }

  .logo_name {
    @include flex(n, c, c);
    gap: 2px;
  }

  .name_cn {
    @include wh(100, n);
    @include flex(n, s-b);
    font-size: 16px;
    font-weight: 550;
    @include theme {
      color: color(c-p-light);
    }
  }

  .name_en {
    @include flex(n, s-b);
    font-size: 13px;
    @include theme {
      color: color(c-g5, 0.7);
    }
  }

  .left_nav {
    ul {
      @include flex;
      gap: 40px;
      font-size: 14px;

      a {
        text-decoration: none;
        @include theme {
          color: color(c-g9, 0.75);
        }
        transition: 0.18s;

        &:hover {
          @include theme {
            color: color(c-p-light);
          }
        }
      }
    }
  }
}

.header_right {
  @include flex(c, c);
  gap: 14px;

  .tool_collect {
    button {
      padding: 6px 14px;
      font-size: 12px;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: 0.18s;

      @include theme {
        background-color: color(c-p-light, 0.12);
        color: color(c-p-light);
        border-color: color(c-p-light, 0.35);
      }

      &:hover {
        @include theme {
          background-color: color(c-p-light, 0.18);
          border-color: color(c-p-light, 0.5);
        }
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  .right_user {
    @include flex(c, c);
    gap: 10px;
  }

  .user_name {
    font-size: 14px;
  }

  .user_avatar {
    @include wh(36);
    img {
      @include wh;
      border-radius: 50%;
    }
  }
}
</style>
