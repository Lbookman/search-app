<template>
  <div>
    <div class="card-body"> 
    <h6 class="card-text">{{ result.title }}</h6>
      <p class="card-subtitle mb-2 text-muted"
      >{{ result.publisher }} | {{ result.journal }} | {{ result.year }}</p>
      <a :href="'https://geodeepdive.org/api/articles?docid=' + result._gddid" target="_blank">
        <i class="fa fa-download"  alt="Download"> </i>
      </a>
        <router-link dark :to="{name:'Details', params: {id: result._gddid}}">
              Click here for more Details
        </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleListItem',
  props: ['result'],  
}


</script>