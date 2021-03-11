<template>
	<section class="section_6 content_wrapper">
		<div class="content">
			<h3 class="title">
				What my clients say
			</h3>
			<div class="separator" />
			<p class="desc">
				No one lights a lamp in order to hide it behind the
				door: the purpose of light is to create more light, to open people's eyes,
				to reveal the marvels around.
			</p>
			<div class="top_red_line">
				<div class="comment_area_value">
					<blockquote class="text_image">
						<p class="text_image">
							I'm really happy with the results. Get 100% satisfaction is difficult but Alex got it without problems
						</p>
						<footer class="comment_area_name">
							Pino Caruso
						</footer>
					</blockquote>
					<div class="comment_image">
						<img src="images/client-1.jpg" alt="client-1">
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Section7',
	data: () => ({}),
	methods: {},
}
</script>

<style lang="sass" scoped>
.section_6
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
.comment_area_value
	display: flex
	justify-content: center
	align-items: center
	margin-top: 100px
	.comment_area_name
		text-align: left
		&:before
			content: " —"
.text_image
	flex-direction: row
	font-size: 19px

.top_red_line
	border-top: red 4px solid
	margin-top: 40px

</style>
