<template>
	<div id='vote'>

		<div v-if='status == "choose"'>
			<button class='blue' @click='choose("blue")'>blue</button>
			<button class='red' @click='choose("red")'>red</button>
		</div>

		<div v-else>
			<button :class='color' @click='vote()'>vote</button>
		</div>

	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'vote',

	data() {
		return {
			status: 'choose',
			color: '',
		}
	},

	methods: {
		...mapActions('votes', { createVote: 'create' }),

		choose(color) {
			this.color = color
			this.status = 'vote'
		},

		vote() {
			this.createVote({ color: this.color })
		},
	},
}
</script>

<style lang='sass' scoped>
button
	border: 0
	width: 100%
	font-size: 200%
	height: 35vh

button:active
	border: 10px dashed white

.blue
	background: blue

.red
	background: red
</style>
