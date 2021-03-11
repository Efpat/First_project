<template>
	<div class="next_slide_arrow" @click="nextSection">
		<i class="fa fa-angle-down" />
	</div>
</template>

<script>
export default {
	name: 'Arrow',
	props: {
		icon: {
			type: String,
			default: '',

		}
	},
	data: () => ({}),
	methods: {
		nextSection() {
			console.log('Перевожу на следующий слайд')
		}
	},
}
</script>

<style lang="sass" scoped>
$size: 50px
$color: white
.next_slide_arrow
	position: absolute
	bottom: 20px
	left: 50%
	transform: translateX(-50%)
	width: $size
	height: $size
	border: 1px solid $color
	border-radius: $size
	display: flex
	justify-content: center
	align-items: center

.fa
	color: $color
	font-size: 30px
	&:hover
		color: plum
		cursor: pointer

</style>
