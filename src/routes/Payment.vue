<template>
  <BankList />
  <AccountList />
</template>

<script>
import AccountList from '../components/payment-detail/AccountList.vue'
import BankList from '../components/payment-detail/BankList.vue'

export default {
  components: {
    BankList,
    AccountList,
  }
}
</script>