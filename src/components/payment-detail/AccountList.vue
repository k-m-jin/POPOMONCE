<template>
  <div class="account">
    <br /><br /><br />
    2. 예매 및 계좌 해지 <br />
    총 잔액 {{ totalBalance }} <br />
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
  export default {
    name: 'AccountList',
    computed: {
      totalBalance() {
        return this.$store.state.payment.accountList.totalBalance;
      },
      accounts() {
        return this.$store.state.payment.accountList.accounts;
      },
    },
    mounted() {
      this.$store.dispatch('payment/accountList');
    },
    methods: {
      getUrl() {
        console.log(location.pathname.slice(9));
      },
      async disconnect(accountId) {
        await this.$store.dispatch('payment/disconnect', accountId);
        alert('계좌가 해지되었습니다.');
        location.reload();
      },
      async buy(accountId) {
        await this.$store.dispatch('payment/buy', accountId);
        alert('예매가 완료되었습니다.');
        location.reload();
      },
      async refund() {
        await this.$store.dispatch('payment/refund', accountId);
        alert('예매가 취소되었습니다.');
        location.reload();
      },
    },
  };
</script>

<style>
  .account {
    color: white;
  }
</style>
