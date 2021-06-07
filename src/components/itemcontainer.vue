<template>
	<section>
		<header>
			<span v-if="fatherComponent == 'home'">在home下</span>
			<span v-if="fatherComponent == 'item'">在item组件下</span>
			<h1>this is itemconstainer!</h1>
		</header>

		<div v-if="fatherComponent == 'home'">
			<div class="home_logo item_container_style"></div>
			<router-link to="item" class="start button_style"></router-link>
		</div>
		
		<div v-if="fatherComponent == 'item'">
			<span class="next_item button_style" @click="nextItem" v-if="itemNum == 0"></span>
			<span class="submit_item button_style" @click="submitAnswer" v-else></span>
		</div>
	</section>
</template>

<script>

export default {
	name:'itemcontainer',
	props:['fatherComponent'],
	data() {
		return {
			itemNum: 3
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
	.home_logo{
		background-image: url(../images/1-2.png);
		background-size: 13.142rem 100%;
		background-position: right center;
	}
	.item_container_style{
		height: 11.625rem;
		width: 13.15rem;
		background-repeat: no-repeat;
		position: absolute;
		top: 4.1rem;
		left: 1rem;
	}
	.start{
		background-image: url(../images/1-4.png);
	}
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
