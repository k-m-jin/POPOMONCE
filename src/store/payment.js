import axios from 'axios';

const headers = {
  'content-type': 'application/json',
  apikey: 'FcKdtJs202204',
  username: 'TeamTwo',
};
const CANCEL_URL =
  'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/cancel';
const BANK_ACCESS =
  'https://asia-northeast3-heropy-api.cloudfunctions.net/api/account';

export default {
  namespaced: true,
  state: () => {
    return {
      bankList: [],
      accountList: [],
      paidInfo: [],
      loading: false,
    };
  },
  mutations: {
    bankList(state, payload) {
      state.bankList = payload;
    },
    accountList(state, payload) {
      state.accountList = payload;
    },
    paymentAll(state, payload) {
      state.paidInfo = payload;
      state.loading = false;
    },
    connectAccount(state, payload) {
      state.accountList.accounts = {
        ...state.accountList.accounts,
        ...payload,
      };
    },
  },
  actions: {
    async bankList({ commit }) {
      const accessToken = window.sessionStorage.getItem('token');
      const { data } = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/account/banks',
        method: 'GET',
        headers: {
          ...headers,
          Authorization: `Bearer ${accessToken}`,
        },
      });
      commit('bankList', data);
    },
    async accountList({ state, commit }) {
      const accessToken = window.sessionStorage.getItem('token');
      state.loading = true;
      try {
        const { data } = await axios({
          url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/account',
          method: 'GET',
          headers: {
            ...headers,
            Authorization: `Bearer ${accessToken}`,
          },
        });
        commit('accountList', data);
      } catch (error) {
        console.log(error);
      } finally {
        state.loading = false;
      }
    },
    async connectAccount({ commit }, data) {
      const accessToken = window.sessionStorage.getItem('token');
      const res = await axios({
        url: BANK_ACCESS,
        method: 'POST',
        headers: {
          ...headers,
          Authorization: `Bearer ${accessToken}`,
        },
        data,
      });
      commit('connectAccount', res.data);
    },
    async disconnect(context, accountId) {
      try {
        const accessToken = window.sessionStorage.getItem('token');
        await axios({
          url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/account',
          method: 'DELETE',
          headers: {
            ...headers,
            Authorization: `Bearer ${accessToken}`,
          },
          data: {
            accountId,
            signature: true,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async buy(context, data) {
      const accessToken = window.sessionStorage.getItem('token');
      try {
        await axios({
          url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/buy',
          method: 'POST',
          headers: {
            ...headers,
            Authorization: `Bearer ${accessToken}`,
          },
          data,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async paymentAll({ state, commit }) {
      try {
        state.loading = true;
        const accessToken = window.sessionStorage.getItem('token');
        const { data } = await axios({
          url: TRADEDALL_URL,
          method: 'GET',
          headers: {
            ...headers,
            Authorization: `Bearer ${accessToken}`,
          },
        });
        commit('paymentAll', data);
      } catch (error) {
        console.log(error);
      }
    },
    async cancelPayment(context, data) {
      try {
        const accessToken = window.sessionStorage.getItem('token');
        await axios({
          url: CANCEL_URL,
          method: 'GET',
          headers: {
            ...headers,
            Authorization: `Bearer ${accessToken}`,
          },
          data,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
