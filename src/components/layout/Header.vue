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
            <router-link :to="item.route">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="header_right">
      <div class="right_user">
        <div class="user_name">张三</div>
        <div class="user_avatar">
          <img src="@/assets/avatar.png" alt="" />
        </div>
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
          route: ''
        },
        {
          icon: '',
          name: '教育视频',
          route: ''
        }
      ]
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
    }
  }
}

.header_right {
  @include flex(c, c);
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
