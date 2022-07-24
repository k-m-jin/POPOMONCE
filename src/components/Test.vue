<template>
  <!-- <div class="test" @click="requestDetail">request Detail</div> -->
  <!-- <div class="test" @click="collectIds">collect ids</div> -->
  <!-- <div class="test" @click="axiosTest">axiosTest</div> -->
  <div
    class="test"
    @click="collectPoster">
    get poster
  </div>
</template>

<script>
  import axios from 'axios';
  // import parser from '~/utils/parser';
  import parser from 'xml2js';
  export default {
    data() {
      return {
        test: '',
      };
    },
    computed: {
      regions() {
        return this.$store.state.product.regions;
      },
    },
    mounted() {
      this.everyProduct();
    },
    methods: {
      async collectIds() {
        // https://cors-anywhere.herokuapp.com
        this.$store.dispatch('product/testCollectIds');
      },
      async requestDetail() {
        // https://cors-anywhere.herokuapp.com
        this.$store.dispatch('product/detailId');
      },
      async postDetail() {
        this.$store.dispatch('product/addProduct');
      },
      async everyProduct() {
        console.log('get products');
        const res = await axios({
          url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products',
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            apikey: 'FcKdtJs202204',
            username: 'TeamTwo',
            masterKey: true,
          },
        });
        this.test = res.data;
        console.log(this.test);
      },
      async axiosTest() {
        const res = await axios.get('http://144.24.86.164/api', {
          headers: {
            'target-url':
              'http://www.kopis.or.kr/upload/pfmPoster/PF_PF194238_220708_100304.jpg',
          },
        });
        console.log(res.data);

        // const getBase64 = (blob) => {
        //   return new Promise((resolve, reject) => {
        //     const reader = new window.FileReader();
        //     reader.readAsDataURL(blob);

        //     reader.onload = () => resolve(reader.result);
        //   });
        // };
      },
      async collectPoster() {
        const list = [
          '1Cks7z2HwzS3MX4iSbvr',
          '36nXXorX6YhDtU2T5fQC',
          'FUlKmAGc9dI7sL7DgKW9',
          'KRoqS8oj8tp1dw8sEzlL',
          'OpFJacG4Ft79WP9eHFJA',
          'omNnKmd0l8dyTX70xApT',
          'SAXE5r2dPQAgXGLj7BWq',
          'oCxKY3NG1HDgs8926LTk',
          'TQL3KbDe5PebAv6zYZTJ',
          'OmsiARNWQJzQySzrdT1A',
          'zUGlz0qWbqVpP20h2jxD',
          'nClkegH9OjALgEKazWCS',
          'jlxuGlfSRY5sP4FPEwLP',
          'ZUxJw6bUIiCfWbBkcwNL',
          'WohRDDiQ22b98hK7CHPT',
          'zHhFzNwYHHvbCn39y0L3',
          'qkP9s4J1BLZfzKZQeaW7',
          'owgUdo1BABZ2BWJMasmu',
          'nPalb18hlddlwbYIGgaZ',
          'nqQguH33CQfDjgUzxcZh',
          'mSmhFOPLpl1zfQY6JZIc',
          'mLBC8PolRHQlSiDfOdIQ',
        ];

        const detailPoster = await Promise.all(
          list.map(async (id) => {
            const res = await axios({
              url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${id}`,
              method: 'GET',
              headers: {
                'content-type': 'application/json',
                apikey: 'FcKdtJs202204',
                username: 'TeamTwo',
              },
            });
            return res.data;
          }),
        );
        console.log(detailPoster);
        this.$store.commit('performance/test', detailPoster);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .test {
    background-color: #fff;
    width: 300px;
    height: 300px;
    margin: auto;
    font-size: 20px;
    cursor: pointer;
  }
</style>
