import slice from './slice'

export const selectSlice = (state) => state[slice.name]

export const selectShouldShowSpinner = (state) => selectSlice(state).spinnerVisibility