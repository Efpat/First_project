<template>
	<div>
		<button @click="history">
			History
		</button>
		<button @click="about">
			about
		</button>
		<timer />
	</div>
</template>

<script>
import Timer from 'components/timer'
export default {
	name: 'Gallery',
	components: { Timer },
	data: () => ({}),
	head: {
		title: 'gallery'
	},
	methods: {
		history() {
			this.$router.go(-1)
		},
		about() {
			this.$router.push('/about')
		},
	}
}

</script>

<style lang="sass" scoped>

</style>
