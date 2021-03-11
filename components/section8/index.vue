<template>
	<section class="section_xxx content_wrapper">
		<div class="content">
			<h3 class="title">
				Drop me a line
			</h3>
			<div class="separator" />
			<p class="desc">
				No one lights a lamp in order to hide it behind the
				door: the purpose of light is to create more light, to open people's eyes,
				to reveal the marvels around.
			</p>
			<div class="form_info">
				<form id="contact_form">
					<div class="form_name">
						<label for="username" />
						<input id="username" type="text" class="username_input" placeholder="Name">
					</div>
					<div class="form_email">
						<label for="email" />
						<input id="email" type="email" class="username_input" placeholder="E-mail">
					</div>
					<div class="form_text_area">
						<label for="for_text_area" />
						<textarea id="for_text_area" class="username_input" placeholder="Message" />
					</div>
					<button type="submit" class="send_message">
						Send message
					</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Section8',
	data: () => ({}),
	methods: {},
}
</script>

<style lang="sass" scoped>
.section_xxx
	background-color: white
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
.form_info
	display: flex
	flex-direction: column
	justify-content: left
	margin-left: 292px
	margin-top: 60px
#username
	width: 68%
	margin-bottom: 20px
	padding: 10px
#email
	width: 68%
	margin-bottom: 20px
	padding: 10px
#for_text_area
	width: 68%
	margin-bottom: 20px
	padding: 10px
	height: 150px
	font-size: 15px

.send_message
	width: 68%
	height: 30px
	color: white
	background-color: dimgray
	text-transform: uppercase
	letter-spacing: 1px
	&:hover
		background-color: rgba(17, 17, 17, 1.8)
</style>
