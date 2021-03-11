<template>
	<div>
		<button @click="button1">
			1
		</button>
		<button @click="button2">
			2
		</button>
		<button @click="button3">
			3
		</button>
		<nuxt-link to="/gallery">
			link
		</nuxt-link>
		<timer />
	</div>
</template>

<script>
import Timer from 'components/timer'
export default {
	name: 'About',
	components: { Timer },
	data: () => ({}),
	methods: {
		button1(){
			this.$router.push('/gallery')
		},
		button2(){

		},
		button3() {

		},
	},
}
</script>

<style lang="sass" scoped>

</style>
