import slice from './slice'

export const selectSlice = (state) => state[slice.name]

export const getNotificationMessage = (state) => selectSlice(state).message

export const getNotificationMessageVariant = (state) => selectSlice(state).variant
