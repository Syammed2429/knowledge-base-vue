<template>
    <NavBar @search="handleSearch" />
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="9">
                <v-row justify="center">
                    <v-col cols="12" sm="6" md="3" lg="4" v-for="category in filteredCategories" :key="category.id">
                        <div @click="navigateToCategory(category.title)" class="pointer">
                            <CardComponent :cardOptions="getCardOptions(category)" />
                        </div>
                    </v-col>
                    <v-col v-if="filteredCategories.length === 0" cols="12" sm="6" md="3" lg="4">
                        <div class="no-data-card">
                            No card data found.
                        </div>
                    </v-col>
                </v-row>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import CardComponent from "../../components/reusable/cardcomponent/CardComponent.vue";
import NavBar from '../NavBar.vue';
import dataJSON from '@/assets/data/data.json';


export default {
    components: {
        CardComponent,
        NavBar,
    },
    data() {
        return {
            jsonData: dataJSON.categories,
            enabledCategories: dataJSON.categories,
            originalCategories: dataJSON.categories,
            searchQuery: '',

        };
    },
    computed: {
        filteredCategories() {
            if (!this.searchQuery) {
                return this.originalCategories;
            }

            const query = this.searchQuery.toLowerCase();
            return this.originalCategories.filter(category =>
                category.title.toLowerCase().includes(query)
            );
        },
        gridColumns() {
            return {
                base: 1,
                md: 2,
                lg: 3,
            };
        },
    },
    methods: {
        handleSearch(value) {
            this.searchQuery = value.toLowerCase();
        },
        navigateToCategory(title) {
            this.$router.push(`/about/${title}`);
        },
        getCardOptions(category) {
            const currentDate = new Date();
            const updatedOn = new Date(category.updatedOn);
            const timeDiff = currentDate.getTime() - updatedOn.getTime();
            const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
            const weeksDiff = Math.floor(daysDiff / 7);

            let updateTime = "";

            if (daysDiff < 7) {
                updateTime = `${daysDiff} ${daysDiff === 1 ? "day" : "days"}`;
            } else {
                updateTime = `${weeksDiff} ${weeksDiff === 1 ? "week" : "weeks"}`;
            }

            return {
                ...category,
                updateTime,
            };
        },
    },
    watch: {
        searchResults(value) {
            this.enabledCategories = value.filter((el) => el.enabled === true);
            this.originalCategories = [...this.enabledCategories].sort((a, b) => a.order - b.order);
        },

        jsonData: {
            immediate: true,
            handler(value) {
                this.enabledCategories = value.filter((el) => el.enabled === true);
                this.originalCategories = [...this.enabledCategories].sort(
                    (a, b) => a.order - b.order
                );
            },
        },
    },
};
</script>

<style>
.no-data-card {
    background-color: #f5f5f5;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    color: #888;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.pointer {
    cursor: pointer;
}
</style>
