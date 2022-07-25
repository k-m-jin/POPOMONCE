<template>
  <div class="modal-content">
    <h2>신규 계좌 등록</h2>
    <div class="registration">
      <div class="register-info">
        <h4>* 본인 명의의 계좌만 등록 가능합니다.</h4>
        <p>( 1은행 1계좌 )</p>
      </div>
      <div class="account-form">
        <select
          v-model="account"
          class="account-select">
          <option
            :value="null"
            disabled
            hidden>
            은행명
          </option>
          <option
            v-for="item in accountOptions"
            :key="item"
            :label="item"
            :value="item">
          </option>
        </select>
        <input
          v-model="accountNumber"
          class="account-number"
          type="text"
          placeholder="계좌번호를 입력해주세요"
          minlength="12"
          maxlength="13"
          @keyup.enter="apply" />
        <p>하이픈기호(-)를 생략하여 숫자만 입력해주세요</p>
      </div>
    </div>
    <div class="add-btn">
      <p>등록</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        accountNumber: '',
        account: null,
        accountOptions: [
          'KB국민은행',
          '신한은행',
          '우리은행',
          '하나은행',
          '케이뱅크',
          '카카오뱅크',
          'NH농협은행'
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal-content {
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 20px;
      line-height: 60px;
      background-color: #000;
      width: 100%;
      color: #fff;
      text-align: center;
    }
    .registration {
        width: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .register-info {
          text-align: center;
          margin: 50px 0;
          font-weight: 900;
          color: #fe253f;
          letter-spacing: 0.2em;
          h4 {
            font-size: 14px;
          }
          p {
            margin-top: 10px;
            font-size: 12px;;
          }
        }

        .account-form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          
          .account-select,
          .account-number {
            margin: 60px 0 0;
            border: none;
            border-bottom: 1px solid #ccc;
            padding: 10px;
            width: 300px;
            text-align: center;
            &:focus {
              outline: none;
            }
          } 
          .account-select {
            letter-spacing: 1em;
          }
          .account-number {
            letter-spacing: .5em;
          }

          p {
            margin-top: 20px;
            font-size: 10px;
            letter-spacing: 0.15em;
            color: #999;
          }
        }
    }
    .add-btn {
        width: 50px;
        height: 50px;
        background-color: #fe253f;
        border-radius: 50%;
        position: absolute;
        bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover p {
          transform: scale(0.85);
        }
        p {
          color: #fff;
          font-size: 16px;
          font-weight: 900;
          text-align: center;
          transition: all .3s;
        }
      }
  }
</style>