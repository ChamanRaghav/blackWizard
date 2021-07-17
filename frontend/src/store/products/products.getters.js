import slice from './slice'

export const selectSlice = (state) => state[slice.name]

export const selectProducts = (state) => selectSlice(state).products