import { createStore } from 'vuex';
import user from './user';
import product from './product';
import admin from './admin';
import performance from './performance'
import payment from './payment'


export default createStore({
  state: () => {
    return {
      isAdmin: false,
    };
  },
  modules: {
    user,
    product,
    admin,
    performance,
    payment
  },
});

