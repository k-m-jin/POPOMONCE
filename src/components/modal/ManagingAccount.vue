<template>
  <div class="modal-content">
    <h2>등록 계좌 관리</h2>
    <div class="account-list--wrap">
      <div v-if="!myBanks.accounts" class="no-account">
        <i class="fa-solid fa-circle-exclamation"></i>
        등록된 계좌가 없습니다<br />
        새로운 계좌를 등록해주세요
      </div>
      <div v-else>
        <div v-for="bank in myBanks.accounts" :key="bank.id" class="account">
          <div class="account--details">
            <h4>{{ bank.bankName }}</h4>
            <p>{{ bank.accountNumber }}</p>
            <p>잔액: {{ bank.balance }} 원</p>
            <button @click="deleteAccount(bank.id)" class="del">
              연결 해지
            </button>
          </div>
        </div>
      </div>
      <div class="bank-card new-bank" @click="toggleModal">
        <p><i class="fa-solid fa-plus"></i></p>
        신규계좌등록
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      myBanks() {
        console.log(this.$store.state.payment.accountList);
        return this.$store.state.payment.accountList;
      },
    },
    methods: {
      deleteAccount(bankId) {
        this.$store.dispatch('payment/', bankId);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .modal-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    h2 {
      font-size: 20px;
      line-height: 60px;
      background-color: #000;
      width: 100%;
      color: #fff;
      text-align: center;
    }
    .account-list--wrap {
      width: 100%;
      background-color: #fff;

      .no-account {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 30px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        i {
          font-size: 20px;
          margin-bottom: 20px;
        }
      }
      .account {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #ccc;
        cursor: pointer;

        .account--details {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          line-height: 25px;
          padding: 20px;

          h4 {
            font-size: 16px;
            color: #000;
          }
          p {
            font-size: 14px;
            color: #999;
          }
        }
        .del {
          position: absolute;
          right: 20px;
          width: 90px;
          height: 35px;
          background-color: #000;
          color: #fff;
          border: none;
          border-radius: 17.5px;
          font-size: 12px;
          line-height: 12px;
          transition: all 0.1s;
          cursor: pointer;

          &:hover {
            background-color: #fe253f;
            color: #fff;
          }
        }
      }
    }
  }
</style>
