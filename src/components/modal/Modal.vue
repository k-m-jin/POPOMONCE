<template>
  <transition name="modal-animation">
    <div
      v-show="modalActive"
      class="modal">
      <transition name="modal-animation-inner">
        <div
          v-show="modalActive"
          class="modal-inner">
          <i
            class="fa-solid fa-xmark"
            @click="close"></i>
          <!-- Modal Content -->
          <slot></slot>
        </div>        
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['modalActive'],
  setup( props, {emit} ) {
    const close = () => {
      emit("close");
    };

    return { close };
  }
}
</script>

<style lang="scss" scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity .3s cubic-bezier(.52, .02, .19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all .3s cubic-bezier(.52, .02, .19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active {
  transition: all .3s cubic-bezier(.52, .02, .19, 1.02);
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
    max-height: 90%;
    height: 80%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;

    i {
      color: #fff;
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 20px;
      cursor: pointer;
      z-index: 9;
      transition: all .4s;
      &:hover {
        transform: scale(0.9);
      }
    }
  }
}
</style>