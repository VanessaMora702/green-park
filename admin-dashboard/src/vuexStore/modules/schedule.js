import axios from 'axios';

const state = {
    nflSchedule: [],
    nbaSchedule: [],
    nhlSchedule: [],
    leagueVal: '',
    tabVal: ''
}
const mutations = {
    getNflSchedule(state, payload) {
        state.nflSchedule = payload
    },
    getNbaSchedule(state, payload) {
        state.nbaSchedule = payload
    },
    getNhlSchedule(state, payload) {
        state.nhlSchedule = payload
    },
    setLeagueVal(state, payload) {
        state.leagueVal = payload
    },
    setTabVal(state, payload) {
        state.tabVal = payload
    }
}
const actions = {
    async fetchNflSchedule({commit}) {
        const res = await axios.get('http://localhost:3000/nflSchedule')
        commit('getNflSchedule', res.data);
    },
    async fetchNbaSchedule({commit}) {
        const res = await axios.get('http://localhost:3000/nbaSchedule')
        commit('getNbaSchedule', res.data);
    },
    async fetchNhlSchedule({commit}) {
        const res = await axios.get('http://localhost:3000/nhlSchedule')
        commit('getNhlSchedule', res.data);
    },
    setLeagueValue({commit}, params) {
        commit('setLeagueVal', params)
    },
    setTabVal({commit}, params) {
        commit('setTabVal', params)
    }
}
const getters = {
    fetchNflSchedules(state) {
        return state.nflSchedule
    },
    fetchNbaSchedules(state) {
        return state.nbaSchedule
    },
    fetchNhlSchedules(state) {
        return state.nhlSchedule
    },
    getLeagueVal(state) {
        return state.leagueVal
    },
    getTabVal(state) {
        return state.tabVal
    }
    
}

export default {
    state,
    getters,
    actions,
    mutations,
}