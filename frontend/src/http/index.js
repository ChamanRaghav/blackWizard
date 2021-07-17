import http from './axiosClient';

export const axiosClientRequest = ({ url, httpMethod = 'get', config = {}, data } = {}) => {
    return http[httpMethod](url, config, data)
}

export default axiosClientRequest