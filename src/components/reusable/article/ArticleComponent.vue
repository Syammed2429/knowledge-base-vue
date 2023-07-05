

<template>
    <v-card class="mb-2">

        <v-card-text>
            <v-row>
                <v-col>
                    <v-row align="center">
                        <v-img class="ml-3" src="@/assets/icons/file-text.svg" max-width="20px" max-height="20px"></v-img>

                        <div class="flex flex-col ml-5 ">
                            <p class="title my-3">
                                {{ article.title }}

                            </p>
                            <p class="my-3 subtitle">
                                Updated {{ article.updatedOn }}

                            </p>
                        </div>
                    </v-row>
                </v-col>
                <v-col cols="auto" class="mt-3">
                    <v-img src="@/assets/icons/NextIcon.svg"></v-img>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        article: {
            required: true,
        },
    },
};
</script>

<style scoped>
.title {
    font-size: 1.25rem;
    font-weight: 400;
}

.subtitle {
    font-size: 0.7875rem;
    font-weight: 400;
    line-height: 1.375rem;
}
</style>
