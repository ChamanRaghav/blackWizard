import http from './axiosClient';

export const axiosClientRequest = ({ url, httpMethod = 'get', config = {}, data, dispatch, successMessage, errorMessage } = {}) => {
    return http[httpMethod](url, config, data, dispatch, successMessage, errorMessage)
}

export default axiosClientRequest