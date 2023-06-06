import { createContext } from "react"

import { AppState } from '../interfaces/interface'

type State = {
    state: AppState
}
export const Context = createContext<State>({} as State)