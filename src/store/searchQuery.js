import { defineStore } from 'pinia';

export const useSearchQueryStore = defineStore('search', {
    state: () => ({
        query: '',
    }),
    getters: {
        getQuery() {
            return this.query;
        },
    },
    actions: {
        setQuery(query) {
            this.query = query;
        },
    },
});
