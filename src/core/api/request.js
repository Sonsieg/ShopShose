// /* eslint-disable no-unused-vars*/

// import axios from 'axios';

// import store from '../../store';
// import idx from 'idx';
// export const BASE_URL = 'URL';
// class Request {
//   axios;

//   constructor() {
//     this.axios = axios.create({
//       baseURL: BASE_URL,
//       timeout: 30000,
//     });

//     this.axios.interceptors.response.use(
//       response => {
//         return response;
//       },
//       error => {
//         return Promise.reject(error);
//       },
//     );
//   }

//   async call(config) {
//     try {
//       const state = await store.getState();
//       const token = config.token
//         ? config.token
//         : idx(state, x => x.auth.userInfo.access_token);
//       const header = idx(config, x => x.header);
//       axios.baseURL = config.baseURL || BASE_URL;
//       const riracleAuth = Constant.Environment.RIRACLE_AUTH;
//       const headers = {
//         Accept: 'application/json',
//         os: 'rn-app',
//         'Content-Type': 'application/json',
//         'X-Riracle-Authorization': riracleAuth,
//         'X-Riracle-Token': token,
//         ...header,
//       };

//       const res = await this.axios.request({headers, ...config});

//       return res;
//     } catch (error) {
//       if (error.response) {
//         throw error.response;
//       } else {
//         throw error;
//       }
//     }
//   }
// }

// export default new Request();
