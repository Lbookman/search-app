<template>
  <div class="container mb-3">
    <div class="d-flex mb-3">
      <div class="mr-auto">
        <h3>Search Results for "{{ reformattedSearchString }}"</h3>
      </div>
      <div class="btn-group ml-auto" role="group">
        <button
          @click="changeDisplayMode('grid')"
          type="button"
          class="btn btn-outline-secondary"
          v-bind:class="{ active: displayMode === 'grid' }"
        >
          <i class="fas fa-th"></i>
        </button>
        <button
          @click="changeDisplayMode('list')"
          type="button"
          class="btn btn-outline-secondary"
          v-bind:class="{ active: displayMode === 'list' }"
        >
          <i class="fas fa-list"></i>
        </button>
      </div>
    </div>

    <div class="card-columns" v-if="displayMode === 'grid'">
      <div class="card" v-bind:key="result._gddid" v-for="result in results">
        <ArticleGridItem v-bind:result="result"/>
      </div>
    </div>
    <div v-else>
      <div class="card mb-2" v-bind:key="result._gddid" v-for="result in results">
        <ArticleListItem v-bind:result="result"/>
      </div>
    </div>
    <div class="card mb-2" v-bind:key="result._gddid" v-for="result in results">
        <Details v-bind:result="result"/>
    </div>
  </div>
</template>

<script>
import ArticleListItem from './ArticleListItem';
import ArticleGridItem from './ArticleGridItem';
import Details from './Details';


export default {
  name: 'SearchResults',
  components: {
    ArticleListItem,
    ArticleGridItem,
    Details,
  },
  data() {
    return {
      title: 'Search Results',
      displayMode: 'grid'
    };
  },
  methods: {
    changeDisplayMode(displayMode) {
      this.displayMode = displayMode;
    }
  },
  props: ['results', 'reformattedSearchString']
};
</script>

<style scoped>
button:focus {
  box-shadow: none !important;
}
</style>