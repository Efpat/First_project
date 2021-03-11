<template>
	<h1>{{ time }}</h1>
</template>

<script>
export default {
	name: 'Timer',
	data: () => ({
		time: 0
	}),
	mounted() {
		setInterval(()=> {this.time++}, 2000)
	},
	methods: {},
}
</script>

<style lang="sass" scoped>

</style>
