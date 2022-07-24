<template>
  <div class="body">
    <showDetail />
    <showPoster />
    <showTicketing />
    <!-- <button class="btn">예매하기</button> -->
  </div>
</template>
<script>
  import showPoster from './showPoster.vue';
  import showDetail from './showDetail.vue';
  import showTicketing from './showTicketing.vue';

  export default {
    components: {
      showPoster,
      showDetail,
      showTicketing,
    },
    created() {
      this.$store.dispatch(
        'performance/searchShow',
        this.$route.params.detailId,
      );
    },
  };
</script>

<style lang="scss" scoped>
  .body {
    width: 100vw;
    height: 100vh;
    background-color: rgb(27, 27, 31);
    color: aliceblue;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    overflow: auto;
    .btn {
      position: absolute;
      right: 0;
      background-color: #444;
    }
  }
</style>
