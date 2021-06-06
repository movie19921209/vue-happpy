<template>
  <div class="home">
	<itemcontainer father-component="home"></itemcontainer>
  </div>
</template>

<script>
// @ is an alias to /src
import itemcontainer from '../components/itemcontainer.vue'

export default {
  name: 'Home',
  components: {
    itemcontainer
  },
	created() {
		console.log("component home is created!");
	}
}
</script>
