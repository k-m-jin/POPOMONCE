<template>
  <div class="user-page__container">
    <div class="user-container">
      <SignUpForm class="sign-up" />
      <LoginForm class="login" />
      <div
        class="box"
        :class="{ login: isSignUp || isLogin }">
        <el-button
          class="changeFormBtn"
          @click="change">
          {{ isLogin || isSignUp ? '회원가입 하기' : '로그인 하기' }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import SignUpForm from './SignUpForm.vue';
  import LoginForm from './LoginForm.vue';
  import EditUserInfo from './EditUserInfo.vue';

  export default {
    components: {
      SignUpForm,
      LoginForm,
      EditUserInfo,
    },
    data() {
      return {
        isLogin: true,
      };
    },
    computed: {
      isSignUp() {
        return this.$store.state.user.signUp;
      },
    },
    methods: {
      change() {
        this.isLogin = !this.isLogin;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .user-page__container {
    display: flex;
    align-items: center;
    margin: auto;
    position: relative;
    top: 150px;
    .user-container {
      width: 1000px;
      height: 700px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      // top: 100px;
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      color: #fff;
      background-color: rgb(16, 15, 18);
      .box {
        width: 500px;
        height: 100%;
        position: absolute;
        left: 50%;
        display: flex;
        align-content: center;
        justify-content: center;
        background-color: #b8ac8f;
        transition: all 0.4s ease-in;
        &.login {
          left: 0;
          animation-fill-mode: forwards;
          background-color: #797a53;
          .changeFormBtn {
            background-color: #eee;
            color: #797a53;
            border: 1px solid #797a53;
          }
        }
        .changeFormBtn {
          margin: auto;
          background-color: rgb(16, 15, 18);
          border: 1px solid rgb(16, 15, 18);
          color: #eee;
        }
      }
    }
    .is-login {
      justify-content: center;
      align-items: center;
      width: 1000px;
      height: 700px;
      margin: 0 auto;
      top: 100px;
      background-color: #f4f4f5;
      border-radius: 10px;
      overflow: hidden;
    }
    .el-button:focus, .el-button:hover {
      background-color: rgb(16, 15, 18);
    }
  }
</style>
