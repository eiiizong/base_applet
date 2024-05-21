<template>
  <div class="login-tips">
    <div class="name d-f ai-c jc-c">
      <image class="img" src="/static/images/login/icon-left.png" />
      <div class="con">
        <div class="zh-cn">温馨提示</div>
        <div class="tibetan">
          <ComponentProjectTranslate content="温馨提示" />
        </div>
      </div>
      <image class="img" src="/static/images/login/icon-right.png" />
    </div>
    <div class="cells">
      <div class="cell">
        <div class="zh-cn">1、使用证件扫描登录后，请及时取回证件，以免遗失;</div>
        <div class="tibetan">
          <ComponentProjectTranslate content="使用证件扫描登录后，请及时取回证件，以免遗失" />
        </div>
      </div>
      <div class="cell">
        <div class="zh-cn">2、业务办理结束后请点击“退出”按钮，以免个人信息泄露;</div>
        <div class="tibetan">
          <ComponentProjectTranslate content="业务办理结束后请点击“退出”按钮，以免个人信息泄露" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ComponentProjectTranslate from '@/components/project/translate/translate.vue'
</script>

<style lang="scss" scoped>
  .login-tips {
    width: 100%;
    padding-top: 7.5rem;
    .name {
      margin-bottom: 20rpx;
      .img {
        width: 13.75rem;
        height: 1rem;
      }
      .con {
        color: #343434;
        font-size: 1.75rem;
        line-height: 1;
        font-weight: 500;
        text-align: center;
        padding: 0 1rem;
        .tibetan {
          padding-top: 0.5rem;
        }
      }
    }
    .cells {
      padding-left: 6.375rem;
      padding-top: 2.625rem;
      .cell {
        color: #676767;
        font-size: 1.5rem;
        line-height: 1;
        margin-bottom: 2rem;
        .tibetan {
          padding-top: 0.75rem;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
