<template>
  <div class="container">
    <div class="pageWrap">
      <div class="bookingInfo">
        <h2>예매정보</h2>
        <div class="bookingInfo__details">
          <div class="poster">
            <div>POSTER</div>
          </div>
          <div class="tags">
            <h3>공연제목</h3>
            <p>공연날짜 : {{}}</p>
            <p>공연시간 : {{}}</p>
            <p>공연장소 : {{}}</p>
            <h4>결제금액 : <span :style="{fontSize: 22+'px', fontWeight: 800}">10,000원{{}}</span></h4>
          </div>
        </div>
      </div>
      <div class="payment">
        <h2>결제수단</h2>
        <div class="payment__select">
          <h3>간편계좌이체</h3>
          <div class="payment__select__bank">
            <div>
              <h4>KB국민은행</h4>
              <p>111-11-11111-1</p>
            </div>
            <div>
              <h4>신한은행</h4>
              <p>111-11-11111-1</p>
            </div>
            <div>
              <h4>우리은행</h4>
              <p>111-11-11111-1</p>
            </div>
            <div>
              <h4>하나은행</h4>
              <p>111-11-11111-1</p>
            </div>
            <div>
              <h4>케이뱅크</h4>
              <p>111-11-11111-1</p>
            </div>
            <div>
              <h4>카카오뱅크</h4>
              <p>111-11-11111-1</p>
            </div>
            <div>
              <h4>NH농협은행</h4>
              <p>111-11-11111-1</p>
            </div>
            <div>
              <p><i class="fa-solid fa-plus"></i></p>
              신규계좌등록
            </div>
          </div>
        </div>
        <div class="payment__button">
          결제하기
        </div>
      </div>
    </div>
  </div>
</template>

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
      overflow: hidden;
      border-radius: 20px;

      h2 {
        font-size: 20px;
        color:#fff;
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
            width:100%;
            height: 350px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            div {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 65%;
              height: 80%;
              background-color: #ddd;
            }
            ::after {
              content: "";
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
              color: #FE253F;
              margin-top: 20px;
            }
          }
        }
      }
      .payment {
        width: 70%;
        background-color: #F8F8F8;
        .payment__select {
          width: 100%;
          background-color: #eee;
          padding: 40px 100px;
          letter-spacing: 1.5px;
          h3 {
            text-indent: -30px;
            font-size: 15px;
            font-weight: 800;
            margin-bottom: 20px;
          }

          .payment__select__bank {
            display: flex;
            flex-wrap: wrap;
            div {
              display: flex;
              justify-content: center;
              font-size: 16px;
              line-height: 30px;
              width: 250px;
              height: 100px;
              background-color: #fff;
              border: 2px solid #fff;
              border-radius: 20px;
              margin: 10px;
              cursor: pointer;
              display: flex;
              flex-direction: column;
              align-items: center;
              transition: all .4s;

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
              border: 2px solid #FE253F;
              p {
                color:#FE253F;
              }
            }
            }
          }
        }
        .payment__button {
          width: 100%;
          height: 100%;
          background-color: #FE253F;
          color: #efefef;
          font-size: 20px;
          font-weight: 800;
          line-height: 70px;
          text-align: center;
          cursor: pointer;
          transition: all .2s;

          &:hover {
            font-size: 18px;
          }
        }
      }
    }
  }

</style>