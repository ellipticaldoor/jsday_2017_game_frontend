<template>
	<div id='admin'>
		<span>{{ height }}</span>
		<div class='votes blue' :style='"height:" + blue_height + "%"'>
			<div>{{ blue_votes }}</div>
		</div>

		<div class='votes red' :style='"height:" + red_height + "%"'>
			<div>{{ red_votes }}</div>
		</div>

		<button @click='reset()'>reset</button>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'admin',

	computed: {
		...mapGetters('votes', { findVotesInStore: 'find' }),

		votes() {
			return this.findVotesInStore().data
		},

		red_votes() {
			return this.votes.filter(vote => vote.color == 'red').length
		},

		blue_votes() {
			return this.votes.filter(vote => vote.color == 'blue').length
		},

		red_height() {
			return this.red_votes * 100 / this.votes.length
		},

		blue_height() {
			return this.blue_votes * 100 / this.votes.length
		},
	},

	methods: {
		...mapActions('votes', { findVotes: 'find', removeVotes: 'remove' }),

		reset() {
			this.removeVotes()
		},
	},

	created() {
		this.findVotes()
	},
}
</script>

<style lang='sass' scoped>

#admin
	height: 90vh

.vote
	height: 30px
	width: 30px

.red
	background: red

.blue
	background: blue

.votes
	display: flex
	align-items: center
	justify-content: center
	font-size: 300%
	font-weight: bold
	color: white

button
	margin: 1rem
	background: gray
	border: 0

</style>
