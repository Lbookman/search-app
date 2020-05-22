<template>
  <div>
    <a>
      <h5 class="card-title">
        <a
          :href="'https://geodeepdive.org/api/articles?docid=' + result._gddid"
          class="card-link"
          target="_blank"
        >{{ result.title }}
        <i class="fa fa-download"></i></a>
      </h5>
    </a>
    <div class="card-body">
      <h5 class="card-title">{{ result.title }}</h5>
      <h6
        class="card-subtitle mb-2 text-muted"
      >{{ result.author.name }} | {{ result.year}}</h6>
      <p class="card-te.xt">{{ result.title }}</p>
      <a class="btn btn-default btn-sm" href="#">
        <i class="fa fa-cog"></i><a @click="details(result._gddid)">view full post</a></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleGridItem',
  props: ['result']
};
</script>