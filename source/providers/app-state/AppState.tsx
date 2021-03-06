import React, {
  createContext,
  useState,
  FunctionComponent,
  useContext
} from 'react'
import { Booking } from '../../api.types'

const LOCAL_STORAGE_KEY = 'APP_STATE'

const defaultState = {
  sidebarVisible: false,
  userLocation: {
    lat: 52.5192,
    lon: 13.4061
  },
  placeApiSearchType: 'grocery_or_supermarket',
  currentPlaceApiResult: undefined,
  bookings: []
}

type AppState = {
  sidebarVisible: boolean
  userLocation?: {
    lat: number
    lon: number
  }
  placeApiSearchType: string
  currentPlaceApiResult?: google.maps.places.PlaceResult
  bookings: Booking[]
  ticket: {
    day: Date
    slot: string
    name: string
    nOfPersons: number
    code: number
    store: google.maps.places.PlaceResult
  }
}

const localStorageState = (): any => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (typeof data === 'string') {
    return JSON.parse(data)
  }
  return data
}

const defaultStoredState =
  localStorageState() &&
  ({ ...localStorageState(), visibleMarkers: [] } as typeof defaultState)

const AppStateContext = createContext({
  setAppState: (_State: AppState) => {},
  state: (defaultStoredState || defaultState) as AppState
})

export const AppStateProvider: FunctionComponent = props => {
  const [state, setAppState] = useState<AppState>(
    defaultStoredState || defaultState
  )

  const persistentSetter = (newState: AppState): void => {
    const { currentPlaceApiResult: _c, ...rest } = newState
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(rest))
    setAppState({ ...newState })
  }

  return (
    <AppStateContext.Provider
      value={{
        state,
        setAppState: persistentSetter
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAppState = () => useContext(AppStateContext)
