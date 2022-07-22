<template>
  <div class="container">
    <h2>공연 구매 내역</h2>
    <div class="ticket_listbox">
      <ul class="ticket_list">
        <li class="ticket_info">
          <div class="ticket_title_wrap">
            <h4 class="performance_date">2022.07.21(목)</h4>
            <div class="circle_big">
              <div class="circle_sm"></div>
            </div>
            <div class="title_wrap">
              <h3 class="title">title</h3>
              <span class="price">14,000원</span>
              <span class="reservation_info">예약정보: 000000</span>
            </div>
          </div>
          <div class="ticket_card">
            <div class="info_area">
              <div class="thumbnail">thumbnail</div>
              <div class="info">
                <p>공연일시 : <span>start - end</span></p>
                <p>
                  공연시간 : <span>08:50 ~ 10:50</span><span> (2시간)</span>
                </p>
                <p>공연장 : <span>region description</span></p>
                <div class="paid_toggle" @click="openPaid">결제내역</div>
              </div>

              <transition v-show="paidOpen" name="openFade" class="paid">
                <div class="paid_info">
                  <p>결제일시 : <span>timepaid</span></p>
                  <div class="paid_check">
                    <p>결제취소 : <span>Y/N</span></p>
                    <p>결제완료 : <span>Y/N</span></p>
                  </div>
                  <p>총 결제 금액 : <span>product.price</span></p>
                  <div class="paid_bank">
                    <p>결제 정보</p>
                    <span>account.bankName</span>
                    <span>accountNumber</span>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        paidOpen: false,
      };
    },
    created() {
      this.$store.dispatch('payment/paymentAll');
    },
    computed: {
      payments() {
        console.log(this.$store.state.user.paidInfo);
        return this.$store.state.user.paidInfo;
      },
    },
    methods: {
      openPaid() {
        this.paidOpen = !this.paidOpen;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    background-color: rgb(18, 18, 19);
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 0.5px;
    padding-bottom: 350px;
    h2 {
      color: #eee;
      font-size: 24px;
      padding: 200px 0 100px;
    }
    .ticket_listbox {
      border-radius: 30px;
      width: 70%;
      height: 100%;
      background-color: rgba(239, 239, 239, 0.964);
      overflow: hidden;
      margin: 0 auto;
      .ticket_list {
        width: 80%;
        margin: 10px auto;
        .ticket_info {
          width: 100%;
          position: relative;
          padding: 50px 0;
          &::before {
            content: '';
            height: 100%;
            border-left: 1px dashed #999;
            position: absolute;
            left: 15%;
          }
          .ticket_title_wrap {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            .performance_date {
              font-weight: 600;
              width: 15%;
              display: flex;
              align-items: center;
              position: relative;
            }
            .circle_big {
              position: relative;
              top: 2px;
              right: 2.5%;
              width: 20px;
              height: 20px;
              background-color: #e5294b;
              border-radius: 50%;
              .circle_sm {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 7px;
                height: 7px;
                background-color: rgb(255, 255, 255);
                border-radius: 50%;
              }
            }
            .title_wrap {
              width: 80%;
              display: flex;
              align-items: center;

              .title {
                font-size: 22px;
                font-weight: 600;
                margin-right: 20px;
                position: relative;
              }
              .price {
                font-size: 16px;
                font-weight: 700;
                margin-right: 30px;
              }
              .reservation_info {
                font-size: 14px;
                font-weight: 500;
                color: #222;
              }
            }
          }
          .ticket_card {
            border-radius: 10px;
            padding: 20px 0;
            width: 80%;
            position: relative;
            right: -20%;
            background-color: rgba(243, 243, 243, 0.85);
            color: #111;
            .info_area {
              display: flex;
              align-items: center;
              .thumbnail {
                border: 1px solid #000;
                overflow: hidden;
                width: 150px;
                height: 200px;
                margin-left: 20px;
                border-radius: 10px;
              }
              .info {
                display: flex;
                flex-direction: column;
                text-align: start;
                margin-left: 50px;

                .paid_toggle {
                  background-color: rgb(18, 18, 19);
                  color: #fff;
                  text-align: center;
                  margin-top: 20px;
                  font-size: 12px;
                  letter-spacing: 2px;
                  border: 1px solid rgb(18, 18, 19);
                  border-radius: 20px;
                  transition: all 0.3s;
                  cursor: pointer;
                  &:hover {
                    background-color: transparent;
                    color: rgb(18, 18, 19);
                  }
                }
              }
              .paid {
                position: relative;
                left: 50px;
                text-align: start;
                font-size: 14px;
                line-height: 25px;
                .paid_info {
                  margin-left: 50px;
                  margin-right: 20px;
                  .paid_check {
                    display: flex;
                    span {
                      margin-right: 10px;
                    }
                  }
                  .paid_bank {
                    display: flex;
                    flex-direction: column;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // paid transition
  .openFade-enter-active {
    animation: fade-in 0.7s ease-out forwards;
    transition: opacity 0.7s;
  }
  .openFade-leave-active {
    animation: fade-out 0.8s ease-out forwards;
    transition: opacity 0.5s;
    opacity: 0;
  }

  @keyframes fade-in {
    from {
      transform: translateX(-50px);
    }
    to {
      transform: translateX(0px);
    }
  }

  @keyframes fade-out {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(50px);
    }
  }
</style>
