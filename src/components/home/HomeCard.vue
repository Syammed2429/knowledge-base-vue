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
                return this.enabledCategories;
            }

            const query = this.searchQuery.toLowerCase();
            return this.enabledCategories.filter(category =>
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
            // Do something with the search value
            console.log('Search value:', value);
        },
        navigateToCategory(title) {
            // console.log('title:', title)
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
                // You can fetch the data from the server and assign it to jsonData here
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
.pointer {
    cursor: pointer;
}
</style>
