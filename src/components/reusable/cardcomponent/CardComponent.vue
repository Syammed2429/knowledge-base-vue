<template>
    <v-container fluid>
        <v-row justify="center" mt="5">
            <v-col cols="12">
                <v-card outlined class="text-center">
                    <v-card-text>
                        <v-row justify="center" align="center">
                            <v-col cols="12" class="mb-6">
                                <v-img :src="cardOptions.icon" max-height="50" contain class="mt-3 mb-5"></v-img>
                                <span class="font-weight-bold card-title" :style="{ width: '250px', textAlign: 'center' }">
                                    {{ cardOptions.title }}
                                </span>
                            </v-col>
                            <v-col cols="12">
                                <v-row justify="center">
                                    <div class="bottom">
                                        <span class="font-weight-medium article-nums" color="#03A84E">
                                            {{ cardOptions.infoIcon ? '' : cardOptions.totalArticle + ' articles' }}
                                        </span>
                                        <span class="font-weight-regular last-updated " color="#9C9AA6">
                                            Last updated {{ cardOptions.updateTime }}
                                        </span>
                                    </div>
                                    <div v-if="cardOptions.infoIcon" class="desc-box">

                                        <v-divider></v-divider>
                                        <div class="mb-6">

                                            <v-img :src="cardOptions.infoIcon" max-height="20px" contain
                                                class="my-2"></v-img>

                                            <p class="description">{{ cardOptions.description }}</p>
                                        </div>
                                    </div>

                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: {
        cardOptions: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style>
.desc-box {
    display: contents !important;
}

.full-width-divider {
    width: 100%;
    margin-bottom: 5px;
}

.description {
    color: #9C9AA6;
    text-align: center;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem;
    width: 13.75rem;

}

.bottom {
    display: flex;
    width: 15.625rem;
    flex-direction: column;
    margin-bottom: 2rem;
}

.card-title {
    color: #373737;
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.article-nums,
.last-updated {
    color: #03A84E;
    text-align: center;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.last-updated {
    color: #9C9AA6;
}

.text-center {
    text-align: center;
}

.font-weight-bold {
    font-weight: bold;
}

.font-weight-medium {
    font-weight: 500;
}

.font-weight-regular {
    font-weight: normal;
}
</style>
