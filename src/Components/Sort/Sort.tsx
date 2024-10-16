import { SearchParamProps } from "../../types";
import "./sort.scss"


export const Sort = ({ handleChangeFilters, searchParams }: SearchParamProps) => {
  const selectedSort = searchParams.get("_order")
  
  return (
    <div className="sort">
      <span>Сортировка по цене:</span>
      <span
        onClick={() => handleChangeFilters("_order", "asc")}
        className={selectedSort === "asc" ? "sortActive" : ""}
      >
        По возрастанию
      </span>
      <span
        onClick={() => handleChangeFilters("_order", "desc")}
        className={selectedSort === "desc" ? "sortActive" : ""}
      >
        По убыванию{" "}
      </span>
    </div>
  )
}
