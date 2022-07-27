<template>
  <div class="navigation">
    <div class="nav-container">
      <div class="main">
        <router-link to="/"> HOME </router-link>
      </div>
      <div v-if="isAdmin" class="admin-header-link">
        <AdminNav />
      </div>
      <div v-else class="user">
        <div v-if="isLogined">
          <div class="login-form">
            <el-dropdown>
              <span class="el-dropdown-link">
                <div class="user-form">
                  <img :src="userImg" alt="" />
                  <div>{{ userName }} 님, 환영합니다!</div>
                  <el-icon class="el-icon--right">
                    <arrow-down-bold />
                  </el-icon>
                </div>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item class="drop-down">
                    <router-link
                      class="router-link"
                      :to="`/user/mypage/${userName}`"
                    >
                      <el-icon class="el-icon--left"> <info-filled /> </el-icon
                      >회원 정보 수정
                    </router-link>
                  </el-dropdown-item>
                  <el-dropdown-item divided class="drop-down">
                    <el-icon class="el-icon--left"> <wallet-filled /> </el-icon
                    >내 계좌 정보 확인
                  </el-dropdown-item>
                  <el-dropdown-item divided class="drop-down">
                    <router-link class="router-link" to="/paidlist">
                      <el-icon class="el-icon--left">
                        <shopping-cart /> </el-icon
                      >내 구매 목록 확인
                    </router-link>
                  </el-dropdown-item>
                  <el-dropdown-item divided class="drop-down" @click="logout">
                    <el-icon class="el-icon--left"> <switch-button /> </el-icon
                    >로그아웃
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
        <router-link v-else to="/user/signup">
          <div>회원가입 / 로그인</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    ArrowDownBold,
    InfoFilled,
    WalletFilled,
    ShoppingCart,
    SwitchButton,
  } from '@element-plus/icons-vue';
  import AdminNav from './admin/AdminNav.vue';
  export default {
    components: {
      AdminNav,
      ArrowDownBold,
      InfoFilled,
      WalletFilled,
      ShoppingCart,
      SwitchButton,
    },
    computed: {
      isLogined() {
        return this.$store.state.user.isLogin;
      },
      userName() {
        return this.$store.state.user.displayName;
      },
      userImg() {
        return this.$store.state.user.profileImg;
      },
      isAdmin() {
        return this.$store.state.isAdmin;
      },
    },
    methods: {
      async logout() {
        await this.$store.dispatch('user/logout');
        this.$router.push('/');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .navigation {
    position: fixed;
    top: 0;
    z-index: 99;
    background-color: rgba(15, 15, 15, 0.9);
    width: 100%;
    height: 60px;
    .nav-container {
      width: 1000px;
      margin: auto;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .main {
        font-size: 20px;
        font-weight: 500;
        align-items: center;
        & > * {
          text-decoration: none;
          display: block;
          color: #ddd;
          &:hover {
            color: #fff;
          }
        }
      }
      .user {
        font-size: 14px;
        font-weight: 500;
        align-items: center;
        & > * {
          text-decoration: none;
          display: block;
          color: #ddd;
          &:hover {
            color: #fff;
          }
          .login-form {
            .user-form {
              display: flex;
              align-items: center;
              color: #fff;
              div {
                display: flex;
                align-items: center;
              }
              img {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                background-size: cover;
                margin-right: 8px;
                background-color: #fff;
              }
            }
          }
        }
        .admin-header-link {
          align-items: center;
        }
      }
    }
    .router-link {
      color: #fff;
      text-decoration: none;
    }
  }
</style>
