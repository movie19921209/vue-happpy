<template>
	<section>
		<header>
			<span v-if="fatherComponent == 'home'">在home下level =  {{level}}</span>
			<span v-if="fatherComponent == 'item'">在item组件下题目 = {{itemNum}} </span>
			<h1>this is itemconstainer!</h1>
		</header>

		<div v-if="fatherComponent == 'home'">
			<div class="home_logo item_container_style"></div>
			<router-link to="item" class="start button_style"></router-link>
		</div>
		
		<div v-if="fatherComponent == 'item'">
			<div class="item_back item_container_style">
				<div class="item_list_container" v-if="itemDetail.length > 0">
					<header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
					<ul>
						<li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" class="item_list">
							<span class="option_style">{{index}}</span>
						</li>
						
					</ul>
				</div>
			</div>			
			<span class="next_item button_style" @click="nextItem" v-if="itemNum == 0"></span>
			<span class="submit_item button_style" @click="submitAnswer" v-else></span>
		</div>
	</section>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name:'itemcontainer',
	props:['fatherComponent'],
	data() {
		return {
		}
	},
	created() {
		console.log("itemNum = " + this.itemNum);
	},
	computed: mapState ([
		'itemNum',
		'level',
		'itemDetail',
	]),
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
	.item_back{
		background-image: url(../images/2-1.png);
		background-size: 100% 100%;
		color: chocolate;
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
	.item_list_container{
		position: absolute;
		height: 7.0rem;
		width: 8.0rem;
		top: 2.4rem;
		left: 3rem;
	-webkit-font-smoothing: antialiased;
	}
	.next_item{
		background-image: url(../images/2-2.png);
	}
	.submit_item{
		background-image: url(../images/3-1.png);
	}
	.item_list{
		font-size: 0;
		margin-top: 0.4rem;
		width: 10rem;
		span{
			display: inline-block;
			font-size: 0.6rem;
			color: #00e;
			vertical-align: middle;
		}
		.option_style{
			height: 0.725rem;
			width: 0.725rem;
			border: 1px solid #fff;
			border-radius: 50%;
			line-height: 0.725rem;
			text-align: center;
			margin-right: 0.3rem;
			font-size: 0.5rem;
			font-family: 'Arial';
			color: #D2691E;
		}
		.has_choosed{
			background-color: #ffd400;
			color: #575757;
			border-color: #ffd400;
		}
		.option_detail{
			width: 7.5rem;
			padding-top: 0.11rem;
		}
	}
</style>
