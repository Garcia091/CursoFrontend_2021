import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import Cards from './Cards'
import CardSelect from './CardSelect'
import EditProduct from './EditProduct'
import AddProduct from './AddProduct'
import '../../styles/App.css'

const AppProduct = () => {
    const dispatch = useDispatch()
    const { card } = useSelector(state => state.card)
    const { active } = useSelector(state => state.card)
    const { name } = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(startLogout())
    }



    return (
        <div className="App">
            <div className=" d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark text-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">Taks</h5>
                <span className="badge badge-pill bg-danger ml-2 m-2">
                    {card.length}
                </span>
                <nav className="my-2 my-md-0 mr-md-3 d-flex   ">
                    <a className="p-2 text-white " href="/">
                        Inicio
                    </a>
                    <a className="p-2 text-white" href="/">
                        Nosotros
                    </a>
                    <a className="p-2 text-white" href="/"
                        onClick={handleLogout}>

                        Logaut

                    </a>
                    <p className="p-2 text-white d-flex" href="/">
                        {name}
                    </p>
                </nav>
            </div>

            <div className="container ">
                <div className="row mt-4">
                    <div className="col-md-4 text-center py-3">
                        <img src="https://res.cloudinary.com/db9wh5uvt/image/upload/c_thumb,w_200,g_face/v1622742996/x9min2yx30d4bbwgrzpk.png" className="App-logo " alt="logo" />

                        {
                            (active)
                                ? <EditProduct />
                                : <AddProduct />
                        }
                    </div>

                    <div className="col-md-8">
                        <div className="row">

                            <main>
                                {
                                    (card.length !== 0)
                                        ? <Cards card={card} />
                                        : <CardSelect />
                                }
                            </main>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppProduct
