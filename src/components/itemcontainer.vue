<template>
	<section>
		<span v-if="fatherComponent == 'home'">在home下</span>
		<span v-if="fatherComponent == 'item'">在item组件下</span>
		<h1>this is itemconstainer!</h1>
		
		<span class="next_item button_style" @click="nextItem" v-if="itemNum == 0"></span>
		<span class="submit_item button_style" @click="submitAnswer" v-else></span>
	</section>
</template>

<script>

export default {
	name:'itemcontainer',
	props:['fatherComponent'],
	data() {
		return {
			itemNum: 0
		}
	},
	created() {
		console.log("itemNum = " + this.itemNum);
	},
	methods: {
		nextItem() {
			alert("click....");
			this.itemNum ++;
		},
		submitAnswer() {
			alert("submit answer...");
			this.itemNum = 0;
		}
	}
}
	
</script>

<style>
	.button_style{
		display: block;
		height: 2.1rem;
		width: 4.35rem;
		background-size: 100% 100%;
		position: absolute;
		top: 16.5rem;
		left: 50%;
		margin-left: -2.4rem;
		background-repeat: no-repeat;
	}
	.next_item{
		background-image: url(../images/2-2.png);
	}
	.submit_item{
		background-image: url(../images/3-1.png);
	}
</style>
