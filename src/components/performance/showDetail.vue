<template>
  <div class="box">
    <swiper
      :direction="'vertical'"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="swiper-container"
    >
      <swiper-slide
        v-for="(detail, key) in details"
        :key="key"
        class="swiper-slide"
      >
        <div class="detail-info">
          {{ key }}
        </div>
        <div class="detail">
          {{ detail }}
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css/bundle';
  // import required modules
  import { Autoplay } from 'swiper';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay],
      };
    },
    computed: {
      details() {
        const details = this.$store.state.performance.detailData;
        Object.entries(details).forEach(([k, v]) => {
          if (!v.trim()) {
            delete details[k];
          }
        });
        return details;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .swiper-container {
    width: 30vw;
    height: 200px;
    .swiper-slide {
      width: 100%;
      display: flex;
      flex-direction: column;
      /* background-color: orange; */
      justify-content: center;
      align-items: center;
      .detail-info {
        font-size: 1rem;
      }
      .detail {
        font-size: 1.3rem;
        font-weight: 500;
        margin: 1rem;
      }
    }
  }
</style>
