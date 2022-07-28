<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <i class="close fa-solid fa-xmark" @click="close"></i>
          <!-- Modal Content -->
          <div class="modal-content">
            <ManagingAccount v-if="!isNewAccount" />
            <NewAccountRegistration v-else />
          </div>
          <slot></slot>
          <div class="btn-group">
            <div class="desc">
              {{ isNewAccount ? '내 계좌 조회' : '신규 계좌 연결' }}
            </div>
            <div @click="changeModal" class="add-btn">
              <i v-if="!isNewAccount" class="add-btn__i fa-solid fa-plus"></i>
              <i v-else class="add-btn__i fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
  export default {
    props: ['modalActive'],
    setup(props, { emit }) {
      const close = () => {
        emit('close');
      };

      return { close };
    },
    data() {
      return {
        isNewAccount: true,
      };
    },
    methods: {
      changeModal() {
        this.isNewAccount = !this.isNewAccount;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .modal-animation-enter-active,
  .modal-animation-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  .modal-animation-enter-from,
  .modal-animation-leave-to {
    opacity: 0;
  }

  .modal-animation-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
  }
  .modal-animation-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  .modal-animation-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
  }
  .modal-animation-inner-leave-to {
    transform: scale(0.8);
  }

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(2px);
    background-color: rgb(27, 27, 31, 0.75);
    .modal-inner {
      position: relative;
      max-width: 500px;
      width: 80%;
      max-height: 70%;
      height: 800px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      background-color: #fff;
      border-radius: 20px;
      overflow: hidden;

      .close {
        color: #fff;
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 20px;
        cursor: pointer;
        z-index: 9;
        transition: all 0.1s;
        &:hover {
          transform: scale(0.9);
        }
      }
      .btn-group {
        position: absolute;
        z-index: 10;
        display: flex;
        justify-content: flex-end;
        width: 150px;
        height: 40px;
        bottom: 30px;
        right: 30px;
        cursor: pointer;
        .desc {
          position: absolute;
          height: 100%;
          display: flex;
          right: 50px;
          font-size: 15px;
          justify-content: center;
          align-items: center;
        }
        .add-btn {
          width: 40px;
          height: 40px;
          background-color: #aaa;
          border-radius: 50%;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;

          &:hover .add-btn__i {
            transform: scale(0.9);
          }

          .add-btn__i {
            display: flex;
            color: #fff;
            font-size: 25px;
            text-align: center;
            transition: all 0.1s;
          }
        }
      }
    }
  }
</style>
