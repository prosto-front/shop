import { useState } from "react"
import { Card } from "../../Components/productCard"
import { Header } from "../../Components/header"
import { Navbar } from "../../Components/navbar"
import { useSelector } from "react-redux"
import { Sort } from "../../Components/Sort/Sort"
import { Drawer, Pagination } from "antd"

export const Main = ({
  handleInput,
  handleChangeCategory,
  selectedCategory,
  handleChangeSort,
  sort,
  setPrice,
  price,
  setPage,
  page
}) => {
  const [openNavbar, setOpenNavbar] = useState(false)

  const { products, loading } = useSelector((state) => state.products)

  const handleOpen = () => {
    setOpenNavbar(!openNavbar)
  }

  return (
    <>
      <Header handleInput={handleInput} handleOpen={handleOpen} />
      <Drawer
        open={openNavbar}
        placement="left"
        onClose={() => setOpenNavbar(false)}
      >
        <Navbar
          price={price}
          setPrice={setPrice}
          handleChangeCategory={handleChangeCategory}
          selectedCategory={selectedCategory}
        />
      </Drawer>

      <Sort sort={sort} handleChangeSort={handleChangeSort} />

      {loading && <h1>Loading...</h1>}
      <div className="card-block">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <Pagination current={page} total={22} onChange={(page) => setPage(page)} />
    </>
  )
}
