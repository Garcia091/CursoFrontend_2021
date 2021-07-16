import {createStore,combineReducers} from 'redux';
import CitasReducer  from "../reducer/CitasReducer";
import {obtenerStateStorage , guardarStateStorage} from '../LocalStorage'
const reducer = combineReducers ({
    citas: CitasReducer
})

//storageState
const storageState =obtenerStateStorage()

const store = createStore(
    reducer, 
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );

//mostrar el storage
store.subscribe( () => {
    guardarStateStorage({
        citas: store.getState().citas
    })
  } )
  

export default store;