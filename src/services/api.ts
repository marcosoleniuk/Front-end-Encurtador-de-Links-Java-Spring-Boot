import axios from "axios";

// export const token = '85248b8ad39fc2b62cf6b7f5fcb3347adae64ef3';

// const api = axios.create({
//     baseURL: 'https://api-ssl.bitly.com/v4',
//     headers: {
//         'Authorization': `Bearer ${token}`,
//     },
// });

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

