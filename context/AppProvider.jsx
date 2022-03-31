import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [categoryActual, setCategoryActual] = useState({})
    const [productActual, setProductActual] = useState({})
    const [modal, setModal] = useState(false)
    const obtenerCategories = async () => {
        const { data } = await axios('/api/categories')
        setCategories(data)
    }
    useEffect(() => {
        obtenerCategories()
    }, [])
    useEffect(() => {
        setCategoryActual(categories[0])
    }, [categories])


    const handleClickCategory = (id) => {
        const categoria = categories.filter(c => c.id == id)
        setCategoryActual(categoria[0])
    }

    const handleClickProducto = (product) => {
        setProductActual(product)
    }
    const handleModalChange = () => {
        setModal(!modal)
    }
    return (
        <AppContext.Provider value={{ categories, categoryActual, productActual, modal, handleClickCategory, handleClickProducto, handleModalChange }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider }

export default AppContext;