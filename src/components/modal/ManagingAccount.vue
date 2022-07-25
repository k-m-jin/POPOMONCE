<template>
  <div class="modal-content">
    <h2>등록 계좌 관리</h2>
    <div class="account-list--wrap">
      <div class="no-account">
        <i class="fa-solid fa-circle-exclamation"></i>
        등록된 계좌가 없습니다<br />
        새로운 계좌를 등록해주세요
      </div>
      <div class="account">
        <div class="account--details">
          <h4>KB국민은행</h4>
          <p>111-111-1111-1</p>
        </div>
        <button class="del">
          삭제
        </button>
      </div>
      <div class="account">
        <div class="account--details">
          <h4>신한은행</h4>
          <p>111-111-1111-1</p>
        </div>
        <button class="del">
          삭제
        </button>
      </div>
    </div>
    <div class="add-btn">
      <i class="fa-solid fa-plus"></i>
    </div>
  </div>
</template>

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
          width: 50px;
          height: 30px;
          background-color: #000;
          color: #fff;
          border: none;
          border-radius: 15px;
          font-size: 12px;
          line-height: 12px;
          transition: all 0.3s;
          cursor: pointer;

          &:hover {
            background-color: #fe253f;
            color: #fff;
          }
        }
      }
    }
    .add-btn {
      width: 50px;
      height: 50px;
      background-color: #fe253f;
      border-radius: 50%;
      position: absolute;
      bottom: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:hover i {
        transform: scale(0.85);
      }
      i {
        color: #fff;
        font-size: 30px;
        text-align: center;
        transition: all 0.3s;
      }
    }
  }
</style>
