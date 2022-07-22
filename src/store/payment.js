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
    async accountList({ commit }) {
      const accessToken = window.sessionStorage.getItem('token');
      const { data } = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/account',
        method: 'GET',
        headers: {
          ...headers,
          Authorization: `Bearer ${accessToken}`,
        },
      });
      commit('accountList', data);
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
