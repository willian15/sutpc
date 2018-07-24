/**
 *@author ZhangJincheng
 *@date 2018-7-24 14:56
 */
import axios from 'axios'
axios.defaults.timeout = 1000;
axios.defaults.baseURL = 'http://192.168.1.11:8083';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default axios
