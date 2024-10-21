import { useState } from "react"
import { Card } from "../../Components/productCard"
import { Header } from "../../Components/header"
import { Navbar } from "../../Components/navbar"
import { useAppSelector } from "../../reduxHooks"
import { Sort } from "../../Components/Sort/Sort"
import { Drawer, Pagination, Card as CardAntd } from "antd"
import { SearchParamProps } from "../../types"

export const Main = ({
  searchParams,
  handleChangeFilters,
}: SearchParamProps) => {
  const [openNavbar, setOpenNavbar] = useState(false)

  const { products, loading } = useAppSelector((state) => state.products)

  const handleOpen = () => {
    setOpenNavbar(!openNavbar)
  }

  return (
    <>
      <Header
        handleChangeFilters={handleChangeFilters}
        handleOpen={handleOpen}
        searchParams={searchParams}
      />
      <Drawer
        open={openNavbar}
        placement="left"
        onClose={() => setOpenNavbar(false)}
      >
        <Navbar
          handleChangeFilters={handleChangeFilters}
          searchParams={searchParams}
        />
      </Drawer>

      <Sort
        searchParams={searchParams}
        handleChangeFilters={handleChangeFilters}
      />
      <div className="card-block">
        {loading ? (
          <div
            style={{
              display: "flex",
              margin: 50,
              gap: 30,
            }}
          >
            {[...Array(5).keys()].map((i) => (
              <CardAntd
                key={i}
                loading
                style={{
                  minWidth: 270,
                }}
              />
            ))}
          </div>
        ) : (
          <>
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </>
        )}
      </div>
      <Pagination
        current={
          searchParams.get("_page") ? Number(searchParams.get("_page")) : 1
        }
        total={23}
        onChange={(page) => handleChangeFilters("_page", String(page))}
      />
    </>
  )
}
