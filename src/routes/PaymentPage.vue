<template>
  <div class="container">
    <div class="pageWrap">
      <div class="bookingInfo">
        <h2>예매정보</h2>
        <div class="bookingInfo__details">
          <div class="poster">
            <img
              :src="myChoice.mainPoster"
              :alt="myChoice.title" />
          </div>
          <div class="tags">
            <h3>{{ myChoice.title }}</h3>
            <p>공연날짜 : {{ myChoice.startDate }}</p>
            <p>공연시간 : {{ myChoice.showTime }}</p>
            <p>공연장소 : {{ myChoice.concertHall }}</p>
            <h4>
              결제금액 :
              <span :style="{ fontSize: 22 + 'px', fontWeight: 800 }">{{ myChoice.price }} 원</span>
            </h4>
          </div>
        </div>
      </div>
      <div class="payment">
        <h2>결제수단</h2>
        <div class="payment__select">
          <h3>간편계좌이체</h3>
          <div
            v-if="!loading"
            class="payment__select__bank">
            <div
              v-for="bank in ableBankList"
              :key="bank.id"
              class="bank-card">
              <h4>{{ bank.name }}</h4>
              <div
                v-if="bank.disabled"
                class="bank-detail">
                <p>{{ bank.accountNumber }}</p>
                <p>잔액: {{ bank.balance }} 원</p>
              </div>
            </div>
            <div
              class="bank-card new-bank"
              @click="toggleModal">
              <p><i class="fa-solid fa-plus"></i></p>
              신규계좌등록
            </div>
          </div>
          <div v-else>
            Loading...
          </div>
        </div>
        <div class="payment__button">
          결제하기
        </div>
        <Modal
          :modal-active="modalActive"
          @close="toggleModal">
          <div class="modal-content">
            <!-- <ManagingAccount /> -->
            <NewAccountRegistration />
          </div>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
  import Modal from '../components/modal/Modal.vue';
  import ManagingAccount from '../components/modal/ManagingAccount.vue';
  import NewAccountRegistration from '../components/modal/NewAccountRegistration.vue';
  import { ref } from 'vue';

  export default {
    components: {
      Modal,
      ManagingAccount,
      NewAccountRegistration,
    },
    setup() {
      const modalActive = ref(false);

      const toggleModal = () => {
        modalActive.value = !modalActive.value;
      };

      return { modalActive, toggleModal };
    },
    computed: {
      loading() {
        return this.$store.state.payment.loading;
      },
      myChoice() {
        return this.$store.state.performance.detailData;
      },
      ableBankList() {
        const bankIndexes = {};
        const bankList = this.$store.state.payment.bankList;
        const mine = this.$store.state.payment.accountList.accounts;

        mine.forEach((item, idx) => {
          bankIndexes[item.bankCode] = idx;
        });

        const result = bankList.map((item) => {
          const account = mine[bankIndexes[item.code]];

          if (!account) {
            return item;
          }

          return Object.assign(item, account);
        });
        console.log('result: ', result);

        return result;
      },
    },
    created() {
      this.$store.dispatch('payment/bankList');
      this.$store.dispatch('payment/accountList');
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(27, 27, 31);
    .pageWrap {
      width: 60%;
      height: 80%;
      display: flex;
      position: relative;
      top: 25px;
      background-color: #fff;
      overflow-y: auto;
      border-radius: 20px;
      h2 {
        font-size: 20px;
        color: #fff;
        text-align: center;
        width: 100%;
        line-height: 60px;
        background-color: #000;
      }
      .bookingInfo {
        width: 30%;
        height: 100%;
        border-right: 1px solid #fff;
        .bookingInfo__details {
          .poster {
            width: 100%;
            height: 350px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
            img {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              background-color: #ddd;
            }
            ::after {
              content: “”;
              width: 100%;
              height: 1px;
              background-color: #aaa;
              position: absolute;
              bottom: 0;
            }
          }
          .tags {
            display: flex;
            flex-direction: column;
            padding: 40px 30px;
            font-size: 16px;
            line-height: 30px;
            position: relative;
            h3 {
              font-size: 22px;
              font-weight: 700;
              margin-bottom: 20px;
            }
            h4 {
              font-weight: 500;
              color: #fe253f;
              margin-top: 20px;
            }
          }
        }
      }
      .payment {
        width: 70%;
        height: 100%;
        background-color: #f8f8f8;
        .payment__select {
          width: 100%;
          background-color: #eee;
          padding: 40px 100px;
          letter-spacing: 1.2px;
          h3 {
            text-indent: -30px;
            font-size: 15px;
            font-weight: 800;
            margin-bottom: 25px;
          }
          .payment__select__bank {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .bank-card {
              display: flex;
              justify-content: center;
              font-size: 16px;
              line-height: 30px;
              width: 38%;
              height: 90px;
              background-color: #fff;
              border: 1px solid #fff;
              border-radius: 20px;
              margin: 10px;
              cursor: pointer;
              display: flex;
              flex-direction: column;
              align-items: center;
              transition: all 0.4s;
              p {
                color: #aaa;
                font-size: 14px;
              }
              &:last-child {
                font-size: 14px;
                color: #aaa;
                line-height: 30px;
                p {
                  font-size: 30px;
                }
              }
              &:hover {
                border: 1px solid #fe253f;
                p {
                  color: #fe253f;
                }
              }
            }
          }
        }
        .payment__button {
          width: 100%;
          height: 74px;
          background-color: #fe253f;
          color: #efefef;
          font-size: 20px;
          font-weight: 800;
          line-height: 74px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          &:hover {
            font-size: 18px;
          }
        }
      }
    }
  }
</style>
