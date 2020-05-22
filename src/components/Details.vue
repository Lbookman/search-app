<template>
	<div class="Details">
		<div class="container">
			<div class="row">
				<div class="col-md-12" v-for="result in results" :key="result._gddid"> 
					<div v-if="id == result._gddid">
					</div>
				</div>		
			</div>
		</div> 
    </div>    
</template>
<script>
 export default {
  name: 'Details',
  props: ['result'],
  
};
</script>