<template>
  <div class="wrapper">
    1. 연결 가능한 은행 목록 및 신규 계좌 등록 <br/>
    <div v-for="bank in bankList" :key="bank">
      <ul>
        <li v-if="bank.disabled === false">
          {{ bank.name }}
          <button @click="connect(bank.code)">신규등록</button>
        </li>
      </ul>
    </div> <br/>
    계좌번호: <input placeholder="- 제외, 형식 참고" v-model="accountNumber"> <br/>
    전화번호: <input placeholder="ex) 01012345678" v-model="phoneNumber"> <br/><br/>
    (계좌 번호 형식) <br/>
    KB국민은행: 12자리 <br/>
    신한은행: 12자리 <br/>
    우리은행: 13자리 <br/>
    하나은행: 14자리 <br/>
    케이뱅크: 12자리 <br/>
    카카오뱅크: 13자리 <br/>
    NH농협은행: 13자리
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BankList',
  data() {
    return {
      accountNumber: '',
      phoneNumber: ''
    }
  },
  computed: {
    bankList() {
      return this.$store.state.payment.bankList;
    }
  },
  mounted() {
    this.$store.dispatch('payment/bankList');
  },
  methods: {
    async connect(code) {
      const accessToken = window.sessionStorage.getItem('token');
      const { data } = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/account',
        method: 'post',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'TeamTwo',
          'Authorization': accessToken
        },
        data: {
          bankCode: code,
          accountNumber: this.accountNumber,
          phoneNumber: this.phoneNumber,
          signature: true
        }
      });
      alert('계좌가 연결되었습니다.');
      location.reload();
    }
  }
}
</script>

<style>
  .wrapper {
    margin-top: 100px;
    color: white;
  }
</style>