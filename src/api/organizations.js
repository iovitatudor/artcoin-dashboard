import {FormDataApiInstance, DefaultApiInstance} from '@/api';

export const OrganizationsApi = {
    getAll() {
        const url = `/api/organizations`;
        return DefaultApiInstance.get(url);
    },

    getById(id) {
        const url = `/api/organizations/${id}`;
        return DefaultApiInstance.get(url);
    },

    create(data) {
        const url = `/api/organizations`;
        return FormDataApiInstance.post(url, data);
    },

    update(id, data) {
        const url = `/api/organizations/${id}`;
        return FormDataApiInstance.patch(url, data);
    },

    delete(id) {
        const url = `/api/organizations/${id}`;
        return DefaultApiInstance.delete(url);
    }
};