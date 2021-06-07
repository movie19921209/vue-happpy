import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	level: '第一周',
	itemNum: 1,
	itemDetail: [
		{
			"topic_name": "题目一",
			"topic_answer": [
				{
					"topic_answer_id": 1,
					"answer_name": "答案AAA"
				},
				{
					"topic_answer_id": 2,
					"answer_name": "答案BBB"
				},
				{
					"topic_answer_id": 3,
					"answer_name": "答案CCC"
				},
				{
					"topic_answer_id": 4,
					"answer_name": "答案DDD"
				},
			]
		},
		{
			"topic_name": "题目二",
			"topic_answer": [
				{
					"topic_answer_id": 1,
					"answer_name": "答案111"
				},
				{
					"topic_answer_id": 2,
					"answer_name": "答案222"
				},
				{
					"topic_answer_id": 3,
					"answer_name": "答案333"
				},
				{
					"topic_answer_id": 4,
					"answer_name": "答案444"
				},
			]
		},
		
	]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
