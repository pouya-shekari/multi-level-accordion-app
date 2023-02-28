import http from 'services/http.service';

export async function getCategories(config) {
    try {
        const response = await http.get(`/categories.json`,config);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}

