<template>
	<section :style="{background:color}" class="section content_wrapper">
		<div class="content">
			<h3 class="title">
				{{ title }}
			</h3>
			<div class="separator" />
			<p class="desc">
				{{ description }}
			</p>
			<slot />
		</div>
	</section>
</template>

<script>

export default {
	name: 'Wrapper',
	props: {
		title: {
			type: String,
			default: 'emptyTitle'
		},
		description: {
			type: String,
			default: 'emptyDescription'
		},
		color: {
			type: String,
			default: 'yellow'
		}
	},
	data: () => ({}),
	methods: {},
}
</script>

<style lang="sass" scoped>
.section
	padding: 120px 0 100px
	.title
		width: 100%
		margin: 0
	.separator
		height: 1px
		border-bottom: 1px solid #c4c4c4
		width: 100px
		margin: 30px auto
	.desc
		font-size: 18px
		color: black
		width: 100%
		max-width: 555px
		margin: 0 auto 60px
		display: block
		text-align: center

</style>
