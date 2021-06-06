<template>
  <div class="about">
    <h1>This is an about page55 --> {{msg}} --> {{username2}}</h1>
  </div>
</template>

<script>
	export default {
		name : "About",
		data() {
			return {
				msg : 'welcome to ...',
			}
		},
		computed: {
			username2 : function() {
			console.log("222222222222");
			console.log(this);
			return "66";
			}
		}
	}
</script>