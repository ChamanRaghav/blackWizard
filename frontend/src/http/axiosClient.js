
const axios = require('axios').default;

const axiosWizard = axios.create({
    baseURL: 'http://localhost:8081'
});

const axiosRequest = async (requestUrl, method, config, data) => {
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
        return res.data
    } catch (exception) {
        throw exception
    }
};

const makeAxiosRequest = (method) => (requestUrl, config, data) => axiosRequest(requestUrl, method, config, data);

export default {
    get: makeAxiosRequest('get'),
    post: makeAxiosRequest('post'),
    put: makeAxiosRequest('put'),
    delete: makeAxiosRequest('delete'),
};
