
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
                                    <div class="no-data-card">
                                        No articles found.
                                    </div>
                                </template>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>

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
import NavBar from '../NavBar.vue';
import infoIconSVG from '@/assets/icons/info.svg'

export default {
    components: {
        CardComponent,
        ArticleComponent,
        NavBar,
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
        }
    },
    methods: {
        handleSearch(value) {
            this.searchQuery = value.toLowerCase();
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
        }
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
        const cardData = computed(() => {
            const category = dataJSON.categories.find(category => category.title === id.value);
            if (category) {
                const currentDate = new Date();
                const updatedOn = new Date(category.updatedOn);
                const timeDiff = currentDate.getTime() - updatedOn.getTime();
                const weeksDiff = Math.floor(timeDiff / (1000 * 3600 * 24 * 7));

                return {
                    ...category,
                    updateTime: `${weeksDiff} ${weeksDiff === 1 ? "week" : "weeks"}`,
                    infoIcon: infoIconSVG
                };
            }
            return null;
        });

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
.no-data-card {
    background-color: #f5f5f5;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    color: #888;
    box-shadow: 0 2px 43px -4px rgba(0, 0, 0, .19)
}

.green-color {
    color: #03A84E
}
</style>
