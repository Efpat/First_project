<template>
	<wrapper title="This is what i do" description="No one lights a lamp in order to hide it behind the door: the purpose of light is to create more light, to open people's eyes,to reveal the marvels around" color="white">
		<div class="gallery">
			<div class="item margin_top_0">
				<div class="hover_area">
					<div class="desc_area">
						<span class="text"> <strong>CRAZY SHARK </strong><br>Lilly likes to play with crayons and pencils</span>
					</div>
				</div>
				<img src="images/shark.jpg" alt=" shark">
			</div>
			<div class="item margin_top_0">
				<div class="hover_area">
					<div class="desc_area">
						<span class="text"> <strong>Funny tortoise </strong><br>Lilly likes to play with crayons and pencils</span>
					</div>
				</div>
				<img src="images/turtle-2.jpg" alt=" turtle">
			</div>
			<div class="item margin_top_0">
				<div class="hover_area">
					<div class="desc_area">
						<span class="text"> <strong>The hat </strong><br>Lilly likes to play with crayons and pencils</span>
					</div>
				</div>
				<img src="images/hats-3.jpg" alt=" hats">
			</div>
			<div class="item">
				<div class="hover_area">
					<div class="desc_area">
						<span class="text"> <strong>Bang Bang </strong><br>Lilly likes to play with crayons and pencils</span>
					</div>
				</div>
				<img src="images/turtle-4.jpg" alt=" another turtle">
			</div>
			<div class="item">
				<div class="hover_area">
					<div class="desc_area">
						<span class="text"><strong>Crypton dude </strong><br>Lilly likes to play with crayons and pencils</span>
					</div>
				</div>
				<img src="images/super-5.jpg" alt=" superman">
			</div>
			<div class="item">
				<div class="hover_area">
					<div class="desc_area">
						<span class="text"><strong>Don't poke </strong><br>Lilly likes to play with crayons and pencils</span>
					</div>
				</div>
				<img src="images/pika-6.jpg" alt=" pikachu">
			</div>
		</div>
	</wrapper>
</template>

<script>
import Wrapper from 'components/wrapper'
export default {
	name: 'Section4',
	components: {
		Wrapper
	},
	data: () => ({}),
	methods: {},
}
</script>

<style lang="sass" scoped>
	.gallery
		width: 100%
		display: flex
		flex-wrap: wrap
		justify-content: space-between
		margin-top: 80px
		.item
			width: 360px
			height: 225px
			margin-top: 40px
			position: relative
			&:hover
				.hover_area
					opacity: 1
					cursor: pointer
					transition: 0.5s ease
					.desc_area
						opacity: 1
						transition: .5s ease
			img
				width: 360px
				height: 225px
			.hover_area
				position: absolute
				top: 0
				bottom: 0
				left: 0
				right: 0
				background: rgba(158, 84, 6, .4)
				padding: 30px
				opacity: 0
				transition: 0.5s ease
				.desc_area
					border: 1px solid #ffffff
					width: 100%
					height: 100%
					display: flex
					justify-content: center
					align-items: center
					padding: 0 20px
					box-sizing: border-box
					opacity: 0
					transition: 2s ease
					.text
						text-align: center
						text-transform: uppercase
						font-size: 18px
						color: white

</style>
