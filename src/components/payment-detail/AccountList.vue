<template>
  <div class="account">
    <br/><br/><br/>
    2. 예매 및 계좌 해지 <br/>
    총 잔액 {{ totalBalance }} <br/>
    <ul>
      <li v-for="account in accounts" :key="account">
        {{ account.bankName }} / {{ account.balance }} /
        <button @click="buy(account.id)">예매</button>
        <button @click="disconnect(account.id)">해지</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AccountList',
  computed: {
    totalBalance() {
      return this.$store.state.payment.accountList.totalBalance;
    },
    accounts() {
      return this.$store.state.payment.accountList.accounts;
    }
  },
  mounted() {
    this.$store.dispatch('payment/accountList');
  },
  methods: {
    getUrl() {
      console.log((location.pathname).slice(9));
    },
    async disconnect(accountId) {
      const accessToken = window.sessionStorage.getItem('token');
      const { data } = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/account',
        method: 'delete',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'TeamTwo',
          'Authorization': accessToken
        },
        data: {
          accountId: accountId,
          signature: true
        }
      });
      alert('계좌가 해지되었습니다.');
      location.reload();
    },
    async buy(accountId) {
      const accessToken = window.sessionStorage.getItem('token');
      const { data } = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/buy',
        method: 'post',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'TeamTwo',
          'Authorization': accessToken
        },
        data: {
          productId: location.pathname.slice(9),
          accountId: accountId
        }
      });
      alert('예매가 완료되었습니다.');
      location.reload();
    },
    async refund() {
      const accessToken = window.sessionStorage.getItem('token');
      const { data } = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/cancel',
        method: 'post',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'TeamTwo',
          'Authorization': accessToken
        },
        data: {
          detailId: '',
        }
      });
      alert('예매가 취소되었습니다.');
      location.reload();
    }
  }
}
</script>

<style>
  .account {
    color: white;
  }
</style>