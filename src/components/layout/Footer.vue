<template>
  <div class="footer">
    <div class="footer_inner">
      <div class="footer_top">
        <div class="footer_col">
          <div class="col_title">友情链接</div>
          <div class="col_list">
            <a class="link_item" href="https://www.bilibili.com/" target="_blank">哔哩哔哩</a>
            <a class="link_item" href="https://github.com/" target="_blank">GitHub</a>
            <a class="link_item" href="https://www.zhihu.com/" target="_blank">知乎</a>
            <a class="link_item" href="https://www.baidu.com/" target="_blank">百度</a>
          </div>
        </div>

        <div class="footer_col">
          <div class="col_title">网站声明</div>
          <div class="col_text">
            本站内容仅用于学习与交流，资源与链接来源于互联网整理；如有侵权请联系站长处理。
          </div>
          <div class="col_text">
            使用本站即表示你同意遵守相关法律法规并对自身行为负责。
          </div>
        </div>

        <div class="footer_col">
          <div class="col_title">联系站长</div>
          <div class="col_list">
            <div class="contact_item">
              <span class="label">邮箱：</span>
              <a class="value" href="mailto:admin@younger.site">liangqiyang@qq.com</a>
            </div>
            <div class="contact_item">
              <span class="label">反馈：</span>
              <span class="value">欢迎提出建议与需求</span>
            </div>
            <div class="contact_item">
              <span class="label">合作：</span>
              <span class="value">友链合作请联系站长</span>
            </div>
          </div>
        </div>

        <div class="footer_col footer_qr">
          <div class="qr_grid">
            <div class="qr_item">
              <div class="qr_title">赞赏支持</div>
              <div class="qr_box">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=thanks" alt="赞赏二维码" />
              </div>
              <div class="qr_tip">感谢你的支持</div>
            </div>
            <div class="qr_item">
              <div class="qr_title">站长微信</div>
              <div class="qr_box">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=wechat" alt="站长微信二维码" />
              </div>
              <div class="qr_tip">添加请备注来意</div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer_divider"></div>

      <div class="footer_bottom">
        <div class="bottom_left">
          <span>© {{ year }} Younger 洋果教育 · All Rights Reserved</span>
        </div>
        <div class="bottom_right">
          <a class="bottom_link" href="javascript:;">隐私政策</a>
          <span class="dot">·</span>
          <span class="bottom_text">Powered by LiangQiYang</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutFooter',
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/common/main.scss' as *;

.footer {
  @include wh(100p, n);
  margin-top: 30px;

  @include theme {
    background-color: color(c-g1);
    border-top: 1px solid color(c-g2);
  }
}

.footer_inner {
  @include wh($header_width, n);
  margin: 0 auto;
  padding: 26px 0;
}

.footer_top {
  display: grid;
  grid-template-columns: 1.1fr 1.4fr 1.1fr 1.4fr;
  gap: 24px;
}

.footer_col {
  @include flex(n, n, c);
  gap: 12px;

  .col_title {
    font-size: 14px;
    font-weight: 700;

    @include theme {
      color: color(c-g9, 0.85);
    }
  }

  .col_text {
    font-size: 12px;
    line-height: 1.7;

    @include theme {
      color: color(c-g9, 0.55);
    }
  }

  .col_list {
    @include flex(n, n, c);
    gap: 10px;
  }

  .link_item {
    font-size: 12px;
    text-decoration: none;

    @include theme {
      color: color(c-g9, 0.6);
    }

    transition: 0.18s;

    &:hover {
      @include theme {
        color: color(c-p-light);
      }
    }
  }
}

.contact_item {
  font-size: 12px;
  @include flex(c, n);
  gap: 6px;

  .label {
    @include theme {
      color: color(c-g9, 0.55);
    }
  }

  .value {
    text-decoration: none;

    @include theme {
      color: color(c-g9, 0.7);
    }

    &:hover {
      @include theme {
        color: color(c-p-light);
      }
    }
  }
}

.footer_qr {
  .qr_grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .qr_item {
    @include flex(c, c, c);
    gap: 8px;

    .qr_title {
      font-size: 12px;
      font-weight: 650;

      @include theme {
        color: color(c-g9, 0.75);
      }
    }

    .qr_box {
      @include wh(90);
      padding: 8px;
      border-radius: 12px;
      box-sizing: border-box;

      @include theme {
        background-color: color(c-g0);
        border: 1px solid color(c-g2);
      }

      img {
        @include wh;
        object-fit: cover;
        border-radius: 8px;
      }
    }

    .qr_tip {
      font-size: 12px;

      @include theme {
        color: color(c-g9, 0.5);
      }
    }
  }
}

.footer_divider {
  margin: 22px 0;
  @include wh(100p, 1);

  @include theme {
    background-color: color(c-g2);
  }
}

.footer_bottom {
  @include flex(c, s-b);
  gap: 12px;
  font-size: 12px;

  @include theme {
    color: color(c-g9, 0.55);
  }

  .bottom_right {
    @include flex(c, c);
    gap: 8px;
  }

  .bottom_link {
    text-decoration: none;

    @include theme {
      color: color(c-g9, 0.55);
    }

    &:hover {
      @include theme {
        color: color(c-p-light);
      }
    }
  }

  .dot {
    @include theme {
      color: color(c-g9, 0.35);
    }
  }

  .bottom_text {
    @include theme {
      color: color(c-g9, 0.45);
    }
  }
}

@media screen and (max-width: 1200px) {
  .footer_inner {
    width: 100%;
    padding: 26px 16px;
  }

  .footer_top {
    grid-template-columns: 1fr;
  }

  .footer_qr {
    .qr_grid {
      grid-template-columns: repeat(2, 160px);
      justify-content: flex-start;
    }
  }
}
</style>
