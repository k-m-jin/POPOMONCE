<template>
  <el-card
    v-if="!isLoading"
    class="box-card">
    <div class="calender-box">
      <!-- 원래코드 -->
      <!-- <el-calendar
        v-model="value" 
        :range="[
          new Date(startDate[0], startDate[1] - 1, startDate[2]),
          new Date(endDate[0], endDate[1] - 1, endDate[2]),
        ]" /> -->

      <!-- 시도하다 실패한 코드 -->
      <el-calendar
        :range="[
          new Date(startDate[0], startDate[1] - 1, startDate[2]),
          new Date(endDate[0], endDate[1] - 1, endDate[2]),
        ]">
        <template #dateCell="{ data }">
          <p
            :isSelected="data.isSelected ? true : false"
            :class="data.isSelected ? 'is-selected' : ''"
            @click="!isSelected">
            {{ data.day.split('-').slice(2).join('-') }}
            {{ data.isSelected ? '✔️' : '' }}
          </p>
        </template>
      </el-calendar>
    </div>
    <div class="info">
      <div class="price">
        결제금액 : {{ price }} 원
      </div>
      <el-button
        :class="isSelected ? 'buy-btn' : ''"
        :disabled="!isSelected"
        @click="goReservate">
        결제하기
      </el-button>
    </div>
  </el-card>
</template>
<script>
  export default {
    data() {
      return {
        // selectDate: (val) => {
        //   calendar.value.selectDate(val);          
        // },
        isSelected: false,
      };
    },
    computed: {
      isLoading() {
        return this.$store.state.performance.isLoading;
      },
      price() {
        return this.$store.state.performance.price;
      },
      startDate() {
        const res =
          this.$store.state.performance.detailData.startDate.split('.');
        const start = res.map((d) => {
          return Number(d);
        });
        return start;
      },
      endDate() {
        const res = this.$store.state.performance.detailData.endDate.split('.');
        const end = res.map((d) => {
          return Number(d);
        });
        return end;
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
        .range{

        }
      }
    }
    .info {
      display: flex;
      flex-direction: column;

      .price {
        font-size: 16px;
        font-weight: 500;
        color: #fe253f;
        text-align: end;
        margin-right: 20px;
        margin-bottom: 30px;
      }
      .buy-btn {
        height: 50px;
        border: 1px solid #fe253f;
        background-color: #fe253f;
        color: #fff;
        font-size: 16px;
        letter-spacing: 0.5em;
        &:hover {
          border: 1px solid #fe253f;
          color: #fe253f;
          background-color: #fff;
        }
      }
    }
    .date {
      height: 2rem;
    }
  }
</style>
