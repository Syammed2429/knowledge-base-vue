<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container fluid>
    <v-row justify="center" align="center" mt="54">
      <v-col cols="12">
        <v-card class="text-center">
          <v-card-text>
            <v-row justify="center" align="center">
              <v-col cols="12">
                <div class="d-flex flex-column mb-6 ">
                  <v-text class="ma-2 pa-2">Knowledge base doesn't have to be boring</v-text>
                  <v-text class="ma-2 pa-2">Everything you need to manage your messaging</v-text>
                </div>
              </v-col>
              <v-col cols="12" sm="8" md="6" lg="4">
                <v-row justify="center">
                  <v-col cols="10">
                    <v-text-field v-model="searchQuery" label="Search for answers" append-icon="mdi-magnify" solo
                      clearable @input="handleSearch"></v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <v-btn color="primary" small class="ma-0" @click="handleSearch">
                      <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                  </v-col>
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
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    // handleSearch() {
    //   this.$store.dispatch("setSearchQuery", this.searchQuery);
    // },
  },
};
</script>
