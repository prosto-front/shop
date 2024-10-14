import "./sort.scss"

type Props = {
  handleChangeFilters: (a: string, b: string) => void
  searchParams: URLSearchParams 
}

export const Sort = ({ handleChangeFilters, searchParams }: Props) => {
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
