import "./sort.scss"

export const Sort = ({ handleChangeFilters, searchParams }) => {
  const selectedSort = searchParams.get("_order")
  return (
    <div className="sort">
      <span>Сортировка по цене:</span>
      <span
        onClick={() => handleChangeFilters("sort", "asc")}
        className={selectedSort === "asc" ? "sortActive" : ""}
      >
        По возрастанию
      </span>
      <span
        onClick={() => handleChangeFilters("sort", "desc")}
        className={selectedSort === "desc" ? "sortActive" : ""}
      >
        По убыванию{" "}
      </span>
    </div>
  )
}
