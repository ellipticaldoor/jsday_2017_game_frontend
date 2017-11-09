<template>
	<div id='admin'>
		<div
			v-for='vote of votes'
			v-if='vote.color == "red"'
			class='vote red'
			>
		</div>
		<hr>
		<div class='vote blue'></div>
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
	},

	methods: {
		...mapActions('votes', { findVotes: 'find' }),
	},

	created() {
		this.findVotes()
	},
}
</script>

<style lang='sass' scoped>
.vote
	height: 30px
	width: 30px

.red
	background: red

.blue
	background: blue
</style>
