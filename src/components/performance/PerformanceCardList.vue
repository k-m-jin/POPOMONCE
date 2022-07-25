<template>
  <div class="container">
    <Loader v-if="isLoading" />
    <div v-for="card in list" v-else :key="card.id" class="cards">
      <div class="card_box">
        <router-link :to="`detail/${card.id}`">
          <div class="card_poster">
            <img :src="card.thumbnail" class="image" />
          </div>
          <div class="card_info">
            <p>{{ card.tags[1] }}</p>
            <span class="title">{{ card.title.split('@')[0] }}</span>
            <div class="bottom">
              <div>
                {{
                  card.title.split('@')[1] + ' ~ ' + card.title.split('@')[2]
                }}
                [ {{ card.tags[3] }} ]
              </div>
              <div>OpenRun : {{ card.tags[2] }}</div>
            </div>
          </div>
        </router-link>
      </div>
      <div v-if="list.length === 0" class="no_results">
        No Search Results Found
      </div>
    </div>
  </div>
</template>

<script>
  import Loader from '~/components/performance/Loader.vue';

  export default {
    components: {
      Loader,
    },
    computed: {
      list() {
        return this.$store.state.performance.performances;
      },
      isLoading() {
        return this.$store.state.performance.isLoading;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .cards {
      position: relative;
      width: 300px;
      height: 400px;
      margin: 2%;
      box-shadow: 5px 5px 10px rgb(69, 69, 69);
      .card_box {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 3;
        overflow: hidden;
        &:hover {
          cursor: pointer;
        }
        .card_poster {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-size: cover;
          transition: all 0.5s;
          &:hover {
            transform: scale(1.05);
          }

          .image {
            width: 100%;
            height: 100%;
          }
        }
        .card_info {
          position: absolute;
          width: 100%;
          height: 35%;
          bottom: 0;
          backdrop-filter: blur(20px);
          background-color: rgba(255, 255, 255, 0.3);
          padding: 25px 20px;
          box-sizing: border-box;

          p {
            font-size: 12px;
            color: rgb(220, 18, 18);
            margin-bottom: 10px;
          }
          .title {
            font-size: 16px;
            font-weight: 500;
            color: #333;
          }
          .bottom {
            font-size: 13px;
            margin: 10px 0;
            color: #333;

            div {
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }
</style>
