import { setNotificationMessage } from '../store/notifications';

const axios = require('axios').default;

// Update this url as per env or deployement
const API_BASE_URL = 'http://localhost:8081'

const axiosWizard = axios.create({
    baseURL: API_BASE_URL
});

const axiosRequest = async (requestUrl, method, config, data, dispatch, successMessage, errorMessage) => {
    console.log('requestUrl, method, config, data', requestUrl, method, config, data, dispatch, successMessage, errorMessage)
    try {
        const res = await axiosWizard.request({
            url: requestUrl,
            method,
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            data
        })
        if (res.data && successMessage) {
            dispatch(setNotificationMessage({ message: successMessage, variant: 'success' }))
        }
        return res.data
    } catch (exception) {
        if (errorMessage) {
            dispatch(setNotificationMessage({ message: errorMessage, variant: 'danger' }))
        }
        throw exception
    }
};

const makeAxiosRequest = (method) => (requestUrl, config, data, dispatch, successMessage, errorMessage) => axiosRequest(requestUrl, method, config, data, dispatch, successMessage, errorMessage);

export default {
    get: makeAxiosRequest('get'),
    post: makeAxiosRequest('post'),
    put: makeAxiosRequest('put'),
    delete: makeAxiosRequest('delete'),
};
