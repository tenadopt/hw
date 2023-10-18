import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const sortedUsers = [...state].sort((a, b) => {
                if (action.payload === 'up') {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            });
            return sortedUsers;
        }
        case 'check': {
            const filteredUsers = state.filter((user) => user.age >= action.payload);
            return filteredUsers;
        }
        default:
            return state
    }
}
