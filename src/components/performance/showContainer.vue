<template>
  <div class="body">
    <i
      class="fa-solid fa-arrow-left"
      @click="back"></i>
    <showDetail />
    <showPoster />
    <showTicketing />
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
    methods:{
      back(){
        this.$router.go(-1)
      }
    }
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
    i {
      position: fixed;
      left: 30px;
      top: 90px;
      
    }
  }
</style>
