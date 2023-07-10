<template>
    <v-container fluid class="mt-5">
        <v-row justify="center" align="center" class="mb-8">
            <v-col cols="12">
                <div class="text-center mb-8">
                    <h2 class="font-weight-bold header my-3 ">Knowledge base doesn't have to be boring</h2>
                    <h4 class="sub-header">Everything you need to manage your messaging</h4>
                </div>
            </v-col>

            <v-col cols="12" sm="8" md="6" lg="6">
                <v-row justify="center">
                    <v-col cols="12" sm="10">
                        <v-text-field v-model="model" :rules="rules" label="Search for answers" solo
                            append-icon="mdi-magnify" class="search-field"></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            model: '',
        };
    },
    computed: {
        rules() {
            return [
                value => (value || '').length <= 50 || 'Max 50 characters',
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
.v-field__field {
    border-radius: 0.25rem;
    border: 1px solid #EEE;
    background: #FFF;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

}



.v-field--variant-filled .v-field__overlay {
    background-color: transparent !important;
}

.header {
    color: #373737;
    text-align: center;
    font-size: 2.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.v-input--center-affix .v-input__prepend,
.v-input--center-affix .v-input__append {
    width: 5rem;
    height: 3.75rem;
    flex-shrink: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    align-items: center;
    background: #03A84E;
    padding: 0 1.8rem;
    margin-left: 0rem !important;
    color: #FFFFFF;
}

.sub-header {
    color: #373737;
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>