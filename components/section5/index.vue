<template>
	<section class="section_4 content_wrapper">
		<div class="content">
			<h3 class="title">
				My skills
			</h3>
			<div class="separator" />
			<p class="desc">
				No one lights a lamp in order to hide it behind the
				door: the purpose of light is to create more light, to open people's eyes,
				to reveal the marvels around.
			</p>
			<div class="diagrams_row">
				<div class="diagram">
					<svg viewBox="0 0 32 32">
						<circle r="16" cx="16" cy="16" class="circle" />
						<circle r="16" cx="16" cy="16" stroke-dasharray="90 100" class="circle-diagrams" />
					</svg>
					<div class="diagram-data">
						90%
					</div>
					<span class="diagram_desc">programming</span>
				</div>
				<div class="diagram">
					<svg viewBox="0 0 32 32">
						<circle r="16" cx="16" cy="16" class="circle" />
						<circle r="16" cx="16" cy="16" stroke-dasharray="85 100" class="circle-diagrams" />
					</svg>
					<div class="diagram-data">
						85%
					</div>
					<span class="diagram_desc">design</span>
				</div>
				<div class="diagram">
					<svg viewBox="0 0 32 32">
						<circle r="16" cx="16" cy="16" class="circle" />
						<circle r="16" cx="16" cy="16" stroke-dasharray="95 100" class="circle-diagrams" />
					</svg>
					<div class="diagram-data">
						95%
					</div>
					<span class="diagram_desc">marketing</span>
				</div>
				<div class="diagram">
					<svg viewBox="0 0 32 32">
						<circle r="16" cx="16" cy="16" class="circle" />
						<circle r="16" cx="16" cy="16" stroke-dasharray="88 100" class="circle-diagrams" />
					</svg>
					<div class="diagram-data">
						88%
					</div>
					<span class="diagram_desc">UI/UX</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Wrapper from 'components/wrapper'
export default {
	name: 'Section5',
	components: {
		Wrapper
	},
	data: () => ({}),
	methods: {},
}
</script>

<style lang="sass" scoped>
.section_4
	background-color: whitesmoke
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
		margin: 0 auto
		display: block
		text-align: center
.diagrams_row
	width: 100%
	display: flex
	flex-wrap: wrap
	justify-content: space-between
	margin-top: 80px
	.diagram
		width: 150px
		height: 150px
		position: relative
		.diagram-data
			position: absolute
			top: 50%
			left: 50%
			transform: translate(-50%, -50%)
			text-align: center
			font-size: 22px
		.diagram_desc
			text-transform: uppercase
			font-weight: bold
			display: flex
			align-items: center
			justify-content: center
			margin-top: 30px
.circle
	fill: transparent
	stroke: #dfdcd5
	stroke-width: 5
/*       stroke-dasharray: 101 100; */
.circle-diagrams
	fill: transparent
	stroke: red
	stroke-width: 5
svg
	width: 150px
	height: 150px
	transform: rotate(-70deg)
	background: transparent
	border-radius: 50%
.scroll_top
	position: fixed
	right: 40px
	bottom: 40px
	width: 50px
	height: 50px
	background-color: purple
</style>
