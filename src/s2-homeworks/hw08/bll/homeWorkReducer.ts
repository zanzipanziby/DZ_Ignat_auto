import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload === 'up'){
                return [...state].sort((a, b) => {
                   return  a.name < b.name ? -1 : 1
                })
            } else  return [...state].sort((a, b) => {
                return  a.name > b.name ? -1 : 1
            })

        }
        case 'check': {

            return state.filter(el => el.age > 18).sort((a, b) => {
                return  a.age - b.age
            })
        }
        default:
            return state
    }
}
