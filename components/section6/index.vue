<template>
	<section class="section_5 content_wrapper">
		<div class="content">
			<div class="hire_me_section">
				<div class="hire_me_section_desc">
					<h2 class="hire_me_header">
						Are you ready to start?
					</h2>
					<div class="hire_me_desc">
						I'm available for freelance projects
					</div>
					<div class="hire_me_button">
						<button>HIRE ME</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Wrapper from 'components/wrapper'
export default {
	name: 'Section6',
	components: {
		Wrapper
	},
	data: () => ({}),
	methods: {},
}
</script>

<style lang="sass" scoped>
.section_5
	background-image: url("/static/images/item_3.jpg")
	background-color: #222
	background-repeat: no-repeat
	background-size: cover
	padding: 50px 0
	color: #999
	.hire_me_section_desc
		display: flex
		align-items: center
		flex-direction: column
		.hire_me_header
			color: white
			text-transform: uppercase
		.hire_me_desc
			color: white
			margin-bottom: 40px
		.hire_me_button
			color: #111
			margin-top: 5px
			margin-bottom: 5px
			padding: 10px 25px
			font-size: 25px
			font-family: Raleway, sans-serif
			text-transform: uppercase
			letter-spacing: 1px
			border: 0
			border-radius: 3px
			cursor: pointer

button
	width: 120px
	height: 40px
	cursor: pointer

</style>
