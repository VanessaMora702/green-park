import axios from 'axios';

const state = {
    nflSchedule: [],
    nbaSchedule: [],
    nhlSchedule: [],
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
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}