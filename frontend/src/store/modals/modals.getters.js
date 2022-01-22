import slice from './slice'

export const selectSlice = (state) => state[slice.name]

export const getSelectedModal = (state) => selectSlice(state).selectedModal