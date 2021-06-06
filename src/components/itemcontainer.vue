<template>
	<section>
		<span v-if="fatherComponent == 'home'">在home下</span>
		<span v-if="fatherComponent == 'item'">在item组件下</span>
		<h1>this is itemconstainer!</h1>
	</section>
</template>

<script>

export default {
	name:'itemcontainer',
	props:['fatherComponent'],
}
	
</script>

<style>
</style>
