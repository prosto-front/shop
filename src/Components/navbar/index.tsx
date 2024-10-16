import { Flex, Input } from "antd"
import "./index.scss"
import { debounce } from "lodash"
import { SearchParamProps } from "../../types";


export const Navbar = ({ handleChangeFilters, searchParams }: SearchParamProps) => {
  const selectedCategory = searchParams.get("category")

  const debouncedHandlerPrice = debounce(
    (key: string, value: string) => handleChangeFilters(key, value),
    700
  )

  return (
    <>
      <div className="category">
        <div
          onClick={() => handleChangeFilters("category", "phone")}
          className={selectedCategory === "phone" ? "active" : ""}
        >
          Телефоны
        </div>
        <div
          onClick={() => handleChangeFilters("category", "laptop")}
          className={selectedCategory === "laptop" ? "active" : ""}
        >
          Ноутбуки
        </div>
        <div
          onClick={() => handleChangeFilters("category", "monitor")}
          className={selectedCategory === "monitor" ? "active" : ""}
        >
          Мониторы
        </div>
      </div>

      <div className="priceBlock">
        <h3>Цена</h3>
        <Flex gap="middle">
          <Input
            onChange={(e) => debouncedHandlerPrice("price_gte", e.target.value)}
            defaultValue={searchParams.get("price_gte") || ""}
          />
          -
          <Input
            onChange={(e) => debouncedHandlerPrice("price_lte", e.target.value)}
            defaultValue={searchParams.get("price_lte") || ""}
          />
        </Flex>
      </div>
    </>
  )
}
