import slice from './slice'

export const selectSlice = (state) => state[slice.name]

export const selectProducts = (state) => selectSlice(state).products

export const selectProductIdToBeDeleted = (state) => selectSlice(state).productIdToBeDeleted
