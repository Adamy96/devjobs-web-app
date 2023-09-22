import { ThemeProvider } from '@context'
import { combineComponents } from '@utils'

const providers = [ ThemeProvider ]
const AppContextProvider = combineComponents(...providers)

export default AppContextProvider
