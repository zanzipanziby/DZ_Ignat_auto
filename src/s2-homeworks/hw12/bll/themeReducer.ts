const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdACType):{themeId: number} => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state,themeId: action.id}

        default:
            return state
    }
}

type ChangeThemeIdACType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }as const) // fix any
