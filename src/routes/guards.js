import router from './index';
import axios from 'axios';
import store from '~/store';

const CHECK_POINT =
  'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me';
const headers = {
  'content-type': 'application/json',
  apikey: 'FcKdtJs202204',
  username: 'TeamTwo',
};

router.beforeEach(async () => {
  const accessToken = window.sessionStorage.getItem('token');
  if (!accessToken) return;
  try {
    const res = await axios({
      url: CHECK_POINT,
      method: 'POST',
      headers: {
        ...headers,
        Authorization: `Bearer ${accessToken}`,
      },
    });
    Object.keys(res.data).forEach((key) => {
      store.state.user[key] = res.data[key];
    });
    store.state.user.isLogin = true;

    if (res.email === 'manager22@management.admin') {
      store.state.admin = true;
    }
  } catch (err) {
    console(err);
  }
});
