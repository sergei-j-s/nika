import apiHeader from '@/services/api/api.header';

class ApiService {
    Users() {
        return axios.get('users', apiHeader);
    };

    Albums(formData) {
        let { id } = formData;
        return axios.get(`albums?userId=${id}`, apiHeader);
    };

    Photos(formData) {
        let { id } = formData;
        return axios.get(`photos?albumId=${id}`, apiHeader);
    };
}

export default new ApiService();