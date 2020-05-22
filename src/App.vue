<template>
  <div id="app">
    <Header/>
    <SearchForm v-on:search="search"/>
    <SearchResults
      v-if="results.length > 0"
      v-bind:results="results"
      v-bind:reformattedSearchString="reformattedSearchString"/>
    <Details
      v-bind:results="results"
     />
    
    <Pagination
      v-if="results.length > 0"
      v-bind:prevPageToken="api.prevPageToken"
      v-bind:next_page="api.scrollId"
      v-on:prev-page="prevPage"
      v-on:next-page="nextPage"
    />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import Details from './components/Details'
import Pagination from './components/Pagination';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Header,
    SearchForm,
    SearchResults,
    Details,
    Pagination
  },

   data() {
    return {
      results: [],
      reformattedSearchString: '',
      api: {
        baseUrl: 'https://geodeepdive.org/api/v1/articles?',
        max: 25,
        q: '',
        prevPageToken: '',
        scrollId: ''
      }
    };
  },
 
  
   methods: {
    search(searchParams) {
      this.reformattedSearchString = searchParams.join(' ');
      this.api.q = searchParams.join('+');
      const { baseUrl, q, max} = this.api;
      const apiUrl = `${baseUrl}&term=${q}&title_like=${q}&recent&max=${max}&full_results`;
      this.getData(apiUrl);

    },

    prevPage() {
      const { baseUrl, q, max, prevPageToken } = this.api;
      const apiUrl = `${baseUrl}&term=${q}&title_like=${q}&max=${max}&pageToken=${prevPageToken}`;
      this.getData(apiUrl);
    },

    nextPage() {
      const { baseUrl, q, max,scrollId } = this.api;
      const apiUrl = `${baseUrl}&term=${q}&title_like=${q}&max=${max}&recent&full_results&scroll_id=${scrollId}`;
      this.getData(apiUrl);
    },

    getData(apiUrl) {
      axios
        .get(apiUrl)
        .then(res => {
          this.results = res.data.success.data;
          this.api.prevPageToken = res.data.success.data.prevPageToken;
          this.api.next_page = res.data.scrollId;
        })
        .catch(error => console.log(error))
    }  
  }
};
</script>