<template>
	<section class="content_wrapper section_menu">
		<div class="content name">
			<h2 class="actual_name">
				Artem Bugaev
			</h2>
			<div class="nav_menu">
				<div v-for="item in menu" :key="item.text" class="item" @click="menuClick(item.link)">
					{{ item.text }}
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Section2',
	data: () => ({
		menu: [
			{
				text: 'Home',
				link: '1'
			},
			{
				text: 'Services',
				link: '2'
			},
			{
				text: 'Works',
				link: '3'
			},
			{
				text: 'Skills',
				link: '4'
			},
			{
				text: 'Testimonials',
				link: '5'
			},
			{
				text: 'Contacts',
				link: '6'
			},
		]
	}),
	methods: {
		menuClick(link) {
			console.log(link)
		}
	},
}
</script>

<style lang="sass" scoped>
.section_menu
	background-color: white
	position: sticky
	z-index: 2
	top: 0
	height: 50px
	+tablet
		background-color: yellow
	+tablet-xl
		background-color: blue
	+desktop
		background-color: red

	.name
		display: flex
		justify-content: space-between
		align-items: center
		.actual_name
			margin-left: 50px
		.nav_menu
			display: flex
			@media screen and (max-width: 1000px)
				display: none
			.item
				text-transform: uppercase
				font-size: 12px
				margin-left: 50px
				&:hover
					color: plum
					cursor: pointer
</style>
