import axios from 'axios';

const headers = {
  'content-type': 'application/json',
  apikey: 'FcKdtJs202204',
  username: 'TeamTwo',
};

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
    async disconnect(context, accountId) {
      try {
        const accessToken = window.sessionStorage.getItem('token');
        await axios({
          url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/account',
          method: 'delete',
          headers: {
            'content-type': 'application/json',
            apikey: 'FcKdtJs202204',
            username: 'TeamTwo',
            Authorization: accessToken,
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
    async buy(context, { productId, accountId }) {
      const accessToken = window.sessionStorage.getItem('token');
      try {
        await axios({
          url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/buy',
          method: 'post',
          headers: {
            'content-type': 'application/json',
            apikey: 'FcKdtJs202204',
            username: 'TeamTwo',
            Authorization: accessToken,
          },
          data: {
            productId,
            accountId,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async refund(context, detailId) {
      const accessToken = window.sessionStorage.getItem('token');
      try {
        await axios({
          url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/cancel',
          method: 'post',
          headers: {
            'content-type': 'application/json',
            apikey: 'FcKdtJs202204',
            username: 'TeamTwo',
            Authorization: accessToken,
          },
          data: {
            detailId,
          },
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
