<template>
    <v-container fluid>
        <v-row justify="center" align="center" class="mb-8">
            <v-col cols="12">
                <div class="text-center">
                    <h2 class="font-weight-bold header my-3">Knowledge base doesn't have to be boring</h2>
                    <h4 class="sub-header">Everything you need to manage your messaging</h4>
                </div>
            </v-col>

            <v-col cols="12" sm="8" md="6" lg="6">
                <v-row justify="center">
                    <v-col cols="10">

                        <v-text-field v-model="model" :rules="rules" label="Search for answers" solo clearable
                            append-icon="mdi-magnify" class="search-field"></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// import { useSearchQueryStore } from '@/store/searchQuery'; // Update the path to your searchQuery store file
// import { computed } from 'vue';

export default {
    data() {
        return {
            model: '',
        };
    },
    computed: {
        rules() {
            return [
                value => (value || '').length <= 20 || 'Max 20 characters',
            ];
        },
    },
    watch: {
        model(value) {
            this.$emit('search', value);
        },
    },
};
</script>

<style>
.header {
    color: #373737;
    text-align: center;
    font-size: 2.125rem;
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.sub-header {
    color: #373737;
    text-align: center;
    font-size: 1.25rem;
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>