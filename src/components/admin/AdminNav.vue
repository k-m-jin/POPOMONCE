<template>
  <div class="admin-header">
    <div class="header__btn-group">
      <el-button
        v-for="nav in navigations"
        :key="nav.href"
        class="header__btn"
        :type="nav.type"
        round
        size="large"
      >
        <router-link :to="nav.href">
          {{ nav.name }}
        </router-link>
      </el-button>
    </div>
    <div class="logined">관리자 계정입니다</div>
    <el-button class="header__btn" @click="logout">
      <el-icon class="el-icon--left"> <switch-button /> </el-icon>로그아웃
    </el-button>
  </div>
</template>

<script>
  import { SwitchButton } from '@element-plus/icons-vue';

  export default {
    data() {
      return {
        navigations: [
          {
            name: '전체 공연 목록',
            href: '/admin/allsales',
            type: 'primary',
          },
          {
            name: '전체 거래 목록',
            href: '/admin/saled',
            type: 'success',
          },
          {
            name: '공연 추가',
            href: '/admin/add',
            type: 'warning',
          },
        ],
      };
    },
    components: { SwitchButton },
    methods: {
      logout() {
        this.$store.dispatch('user/logout');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .admin-header {
    height: 60px;
    margin: auto;
    z-index: 999;
    display: flex;
    align-items: center;
    .header__btn-group {
      margin-right: 40px;
      .el-button {
        background-color: transparent;
        border-radius: 10px;
        &:nth-child(1) {
          border-color: #797a53;
        }
        &:nth-child(2) {
          border-color: #b8ac8f;
        }
        &:nth-child(3) {
          border-color: #73513d;
        }
        &:hover a {
          color: #fff;
          font-weight: 700;
        }
        a {
          color: #ddd;
          text-decoration: none;
          transition: all 0.4s;
        }
      }
    }
    .logined {
      font-size: 14px;
      color: #fff;
      margin-right: 20px;
    }
    .header__btn {
      background-color: transparent;
      border: 1px solid rgb(120, 120, 120);
      border-radius: 8px;
      &:hover {
        color: #fff;
        font-weight: 700;
      }
    }
  }
</style>
