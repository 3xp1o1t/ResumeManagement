import { BASE_URL } from '@/constants/urls';
import axios from 'axios';

const http = axios.create({
  baseURL: BASE_URL,
});

export default http;
