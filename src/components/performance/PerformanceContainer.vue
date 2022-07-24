<template>
  <div
    class="Performance-container">
    <Poster class="poster" />
    <section
      class="performance-section">
      <Search
        class="search" />
      <PerformanceCardList
        v-if="isSearched"
        class="performanceCardList" />
    </section>
  </div>
</template>

<script>
  import Poster from '~/components/performance/Poster.vue';
  import Search from '~/components/performance/Search.vue';
  import PerformanceCardList from '~/components/performance/PerformanceCardList.vue';

  export default {
    components: {
      Poster,
      Search,
      PerformanceCardList,
    },
    computed: {
      isSearched() {
        return this.$store.state.performance.isSearched;
      },
    },
    created() {
      this.$store.commit('performance/resetList');
    }
  };
</script>

<style lang="scss" scoped>
  .Performance-container {
    display: flex;
    position: relative;
    .poster {
      width: 30vw;
      height: 100vh;
      z-index: 3;
      transition: all 0.5s;
      position: fixed;
      top: 0;
      left: 0;
    }
    .performance-section {
      width: 70vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;
      right: 0;

      .search {
        width: 50vw;
      }

      .performanceCardList {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 15%;
      }

      .loader {
        z-index: 99999999;
      }
    }
  }
</style>
