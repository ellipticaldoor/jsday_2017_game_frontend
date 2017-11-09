import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex'
import feathersClient from './feathers'

const { service } = feathersVuex(feathersClient, { idField: 'id' })

Vue.use(Vuex)

export default new Vuex.Store({
	plugins: [service('votes')],
})
