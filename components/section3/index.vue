<template>
	<wrapper title="This is what i do" description="No one lights a lamp in order to hide it behind the door: the purpose of light is to create more light, to open people's eyes,to reveal the marvels around" color="whitesmoke">
		<div class="skills">
			<div class="skill_box">
				<div class="icon">
					<i class="fa fa-magic" aria-hidden="true" />
				</div>
				<span class="name">Web design </span>
				<div class="desc">
					Good things come to those who wait, but only the things left by those who hustle
				</div>
			</div>
			<div class="skill_box">
				<div class="icon">
					<i class="fa fa-ravelry" aria-hidden="true" />
				</div>
				<span class="name">Web programming </span>
				<div class="desc">
					Good things come to those who wait, but only the things left by those who hustle
				</div>
			</div>
			<div class="skill_box">
				<div class="icon">
					<i class="fa fa-superpowers" aria-hidden="true" />
				</div>
				<span class="name">branding </span>
				<div class="desc">
					Good things come to those who wait, but only the things left by those who hustle
				</div>
			</div>
			<div class="skill_box">
				<div class="icon">
					<i class="fa fa-question-circle-o" aria-hidden="true" />
				</div>
				<span class="name">consultation </span>
				<div class="desc">
					Good things come to those who wait, but only the things left by those who hustle
				</div>
			</div>
		</div>
	</wrapper>
</template>

<script>
import Wrapper from 'components/wrapper'
export default {
	name: 'Section3',
	components: {
		Wrapper,
	},
	data: () => ({}),
	methods: {},
}
</script>

<style lang="sass" scoped>

.skills
	width: 100%

	display: flex
	justify-content: space-between
	align-items: center

	box-sizing: border-box


.skill_box
	width: 250px
	margin: 0 10px 10px 0
	padding: 50px
	text-align: center
	display: inline-block
	vertical-align: top
	box-sizing: border-box
	background-color: white
	height: 300px
	.icon
		margin-bottom: 20px
		font-size: 30px
	.name
		text-transform: uppercase
		text-align: center
		font-weight: bold
	.desc
		text-align: center
		margin-top: 15px
</style>
