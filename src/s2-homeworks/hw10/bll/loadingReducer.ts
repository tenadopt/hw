const initState = {
    isLoading: false,
}

type ActinonType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: ActinonType): any => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING':
        return {
            ...state,
            isLoading: action.isLoading
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
}) as const
