import { createStore } from "redux"
import Reducer from './Reducer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
const persistConfig = {

    key: 'persistedReducer',
 
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, Reducer)

const store = createStore(persistedReducer)

let persistor = persistStore(store)

export {store, persistor}


