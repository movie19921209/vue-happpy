<template>
	<div>
			<itemcontainer father-component="home"></itemcontainer>
	</div>
</template>

<script>
import itemcontainer from '../components/itemcontainer.vue'

export default {
	name:'item',
	components: {
		itemcontainer
	},
	created() {
		console.log("this is item component!");
	}
}	
</script>

<style>
</style>
