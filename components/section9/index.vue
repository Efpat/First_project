<template>
	<footer id="finish">
		<div class="content">
			<div class="footer_all">
				<ul class="social_media">
					<li>
						<a href="http://localhost:63342/First_project/index.html?" style="visibility: visible">
							<i class="fa fa-facebook-square" aria-hidden="true" />
						</a>
					</li>
					<li>
						<a href="http://localhost:63342/First_project/index.html?" style="visibility: visible">
							<i class="fa fa-twitter" aria-hidden="true" />
						</a>
					</li>
					<li>
						<a href="http://localhost:63342/First_project/index.html?" style="visibility: visible">
							<i class="fa fa-google-plus" aria-hidden="true" />
						</a>
					</li>
					<li>
						<a href="http://localhost:63342/First_project/index.html?" style="visibility: visible">
							<i class="fa fa-pinterest" aria-hidden="true" />
						</a>
					</li>
					<li>
						<a href="http://localhost:63342/First_project/index.html?" style="visibility: visible">
							<i class="fa fa-envelope-o" aria-hidden="true" />
						</a>
					</li>
				</ul>
				<p class="heart">
					Made with
					<i class="fa fa-heartbeat" aria-hidden="true" />
					in Krasnodar
				</p>
				<p class="copyright">
					&#169; 2020 Artem Bugaev | images:
					<a href="https://unsplash.com">
						Unsplash
					</a>  &
					<a href="https://zoomwalls.com">
						Zoomwalls
					</a>
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Section9',
	data: () => ({}),
	methods: {},
}
</script>

<style lang="sass" scoped>
#finish
	background-color: #222222
	text-align: center
	height: 16vh

.social_media
	display: block
	margin-block-start: 1em
	margin-block-end: 1em
	margin-inline-start: 0
	margin-inline-end: 0
	padding-inline-start: 40px
	list-style: none
	padding: 0
	margin-top: 40px
	text-align: center

.social_media li
	display: inline-block
	margin: 10px
	border: 2px solid gray
	padding: 7px
	border-radius: 5px
	width: 40px

.fa
	display: inline-block
	font: normal normal normal 14px/1 FontAwesome
	font-size: inherit
	text-rendering: auto
	transform: translate(0, 0)
	box-sizing: border-box
	color: rgba(255, 255, 255, .2)
	text-align: center
	cursor: pointer
.heart
	color: white
	font-size: 14px

.fa-heartbeat
	color: crimson
	font-size: 30px
.copyright
	color: white
	font-size: 14px
	.a
		color: #E7746F
		border-bottom: 1px dotted #fff
		text-decoration: none
</style>
