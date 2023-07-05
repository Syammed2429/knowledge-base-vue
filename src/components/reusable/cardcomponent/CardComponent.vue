<template>
    <v-container fluid>
        <v-row justify="center" mt="5">
            <v-col cols="12">
                <v-card outlined class="text-center">
                    <v-card-text>
                        <v-row justify="center" align="center">
                            <v-col cols="12">
                                <v-img :src="cardOptions.icon" max-height="50" contain class="mt-3"></v-img>
                                <span class="font-weight-bold mt-3 card-title"
                                    :style="{ width: '250px', textAlign: 'center' }">
                                    {{ cardOptions.title }}
                                </span>
                            </v-col>
                            <v-col cols="12">
                                <v-row justify="center">
                                    <div class="bottom">
                                        <span class="font-weight-medium article-nums" color="#03A84E">
                                            {{ cardOptions.totalArticle }} articles
                                        </span>
                                        <span class="font-weight-regular last-updated " color="#9C9AA6">
                                            Last updated {{ cardOptions.updateTime }}
                                        </span>
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
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.article-nums,
.last-updated {
    color: #03A84E;
    text-align: center;
    font-size: 0.8125rem;
    font-family: Lato;
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
