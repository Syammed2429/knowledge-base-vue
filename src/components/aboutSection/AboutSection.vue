
<template>
    <NavBar @search="handleSearch" />
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="12">
                <v-row justify="center">
                    <v-col cols="8">
                        <div class="d-flex flex-row mb-6">
                            <div @click="navigateToAllCategories" class="pointer green-color" color="">
                                All Categories
                            </div>
                            <div class="small-icon">
                                <v-img src="@/assets/icons/smallIcon.svg" color="red" max-width="10px" class="mx-2 "
                                    height="24"></v-img>
                            </div>
                            <span>{{ id }}</span>

                        </div>

                    </v-col>
                </v-row>
                <v-col cols="11">
                    <v-row justify="center">
                        <v-col cols="12" sm="6" md="3" lg="3">
                            <div>
                                <CardComponent :cardOptions="cardData" />
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6" md="3" lg="5">

                            <div>
                                <template v-if="filteredArticlesData.length > 0">
                                    <div v-for="article in filteredArticlesData" :key="article.id">
                                        <ArticleComponent :article="article" />
                                    </div>
                                </template>
                                <template v-else>
                                    <v-card>
                                        <v-card-text align="center">
                                            <div class="no-articles">
                                                No articles found.
                                            </div>
                                        </v-card-text>

                                    </v-card>
                                </template>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-divider class="category-divider"></v-divider>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import dataJSON from '@/assets/data/data.json';
import CardComponent from "../../components/reusable/cardcomponent/CardComponent";
import ArticleComponent from "../../components/reusable/article/ArticleComponent.vue";
import NavBar from '../NavBar.vue'

export default {
    components: {
        CardComponent,
        ArticleComponent,
        NavBar
    },
    data() {
        return {
            searchQuery: '',
        };
    },
    computed: {
        filteredArticlesData() {
            if (!this.searchQuery) {
                return this.articlesData;
            }

            const lowercaseQuery = this.searchQuery.toLowerCase();
            return dataJSON.articles.filter(article =>
                article.title.toLowerCase().includes(lowercaseQuery)
            );
        },
    },
    methods: {
        handleSearch(value) {
            this.searchQuery = value.toLowerCase();
        },
    },
    setup() {
        const route = useRoute();
        const router = useRouter();

        const id = computed(() => route.params.title);
        const articlesData = ref([]);

        const fetchArticlesData = () => {
            const onlyPublished = dataJSON.articles.filter(el => el.status === 'published');
            articlesData.value = onlyPublished.map(article => {
                const updatedOnDate = new Date(article.updatedOn);
                const formattedUpdatedOn = updatedOnDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                });

                return {
                    ...article,
                    updatedOn: formattedUpdatedOn,
                };
            });
        };

        const cardData = computed(() => dataJSON.categories.find(category => category.title === id.value));

        const navigateToAllCategories = () => {
            router.push('/');
        };

        fetchArticlesData();

        return {
            id,
            articlesData,
            cardData,
            navigateToAllCategories
        };
    },
};
</script>

<style scoped>
.green-color {
    color: #03A84E
}
</style>
