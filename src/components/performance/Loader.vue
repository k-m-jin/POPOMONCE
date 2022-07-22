<template>
  <div
    class="wrap">
    <div class="loader">
      <div class="ballWrap">
        <div class="bounceball"></div>
      </div>
      <div class="text">
        NOW LOADING
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loader: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
$width: 15px;
$height: 15px;

$bounce_height: 30px;

body {
  position: relative; 
  width: 100%;
  height: 100%;
  font-size: 20px;
  .wrap {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
    .ballWrap {
      animation: move 10s alternate infinite linear;
      .bounceball {
        position: relative;
        display: inline-block;
        height: 37px;
        width: $width;
      &:before {
        position: absolute;
        content: '';
        display: block;
        top: 0;
        width: $width;
        height: $height;
        border-radius: 50%;
        background-color: rgb(16, 15, 18);
        transform-origin: 50%;
        animation: bounce 500ms alternate infinite ease;
        }
      }
    }
    .text {
      color: rgb(16, 15, 18);
      display: inline-block;
      margin-left: 5px;
      font-size: 20px;
    }
  }
}

@keyframes bounce {
  0% {
    top: $bounce_height;
    height: 5px;
    border-radius: 60px 60px 20px 20px;
    transform: scaleX(2);
  }
  35% {
    height: $height;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0;
  }
}

@keyframes move {
  0% {
    transform: translateX(0)
  }
  50% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(0)
  }
}
</style>