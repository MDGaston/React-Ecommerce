import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  //Shopping Cart Incremet quantity
  const [count, setCount] = useState(0)

  //Product Detail Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail=() => setIsProductDetailOpen(true)
  const closeProductDetail=() => setIsProductDetailOpen(false)

  //Product Detail Show product
  const [productToShow, setProductToShow] = useState({})

  //Shoping Cart Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  //Checkout side menu Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu=() => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu=() => setIsCheckoutSideMenuOpen(false)

  //Shoping Cart Order
  const [order, setOrder] = useState([])
  
  //Get products
  const [products, setProducts] = useState(null);

  //Get filteredProducts
  const [filteredProducts, setfilteredProducts] = useState(null);

  //Get products by titlte
  const [searchByTitle, setSearchByTitle] = useState(null);

  //Get products by Category
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const filteredProductsByTittle = (products, searchByTitle) =>{
    return products?.filter((product) => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  
  const filteredProductsByCategory = (products, searchByCategory) => {
    if (!searchByCategory || searchByCategory === 'All' || searchByCategory === 'Shopi') {
      return products;
    }
    return products?.filter((product) => product.category.name.toLowerCase() === searchByCategory.toLowerCase())
  }

  const filterBy = (searchType, products, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredProductsByTittle(products, searchByTitle)
    }
    if (searchType === 'BY_CATEGORY') {
      return filteredProductsByCategory(products, searchByCategory)
    }
    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredProductsByCategory(products, searchByCategory)
        .filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    return products
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setfilteredProducts(filterBy('BY_TITLE_AND_CATEGORY', products, searchByTitle, searchByCategory))
    else if (searchByTitle) setfilteredProducts(filterBy('BY_TITLE', products, searchByTitle, searchByCategory))
    else if (searchByCategory) setfilteredProducts(filterBy('BY_CATEGORY', products, searchByTitle, searchByCategory))
    else setfilteredProducts(filterBy(null, products, searchByTitle, searchByCategory))
  }, [products, searchByTitle, searchByCategory])

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      products,
      setProducts,
      searchByTitle,
      setSearchByTitle,
      filteredProducts,
      searchByCategory,
      setSearchByCategory
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}