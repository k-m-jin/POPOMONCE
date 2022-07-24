<template>
  <el-card class="box-card">
    <div class="calender-box">
      <el-calendar
        :range="[
          new Date(startDate[0], startDate[1] - 1, startDate[2]),
          new Date(endDate[0], endDate[1] - 1, endDate[2]),
        ]"
      />
    </div>
    <div class="price">가격 : {{ price }}</div>
    <div class="date">
      {{ startDate }}
    </div>
    <div class="date">
      {{ endDate }}
    </div>
    <el-button @click="goReservate">결제하기</el-button>
  </el-card>
</template>
<script>
  export default {
    data() {
      return {
        startDate: [],
        endDate: [],
        selectDate: (val) => {
          calendar.value.selectDate(val);
        },
      };
    },
    computed: {
      price() {
        return this.$store.state.performance.price;
      },
      getDate() {
        this.startDate =
          this.$store.state.performance.detailData['공연 시작일'].split('.');
        this.endDate =
          this.$store.state.performance.detailData['공연 종료일'].split('.');
        return;
      },
    },
    methods: {
      goReservate() {
        this.$router.push(`/paymentpage/${this.$route.params.detailId}`);
      },
    },
  };
</script>
<style lang="scss" scoped>
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box-card {
    margin-top: 60px;
    width: 480px;
    height: 90vh;
    display: flex;
    justify-content: center;
    .calender-box {
      .calender {
        width: inherit;
        height: 400px;
        --el-calendar-cell-width: 30px;
      }
    }
    .date {
      height: 2rem;
    }
  }
</style>
