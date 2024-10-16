export type ProductType = {
  id: number
  name: string
  brand: string
  price: number
  category: string
  description: string
  rating: number
  quantity: number
  img: string
}

export type SearchParamProps = {
  handleChangeFilters: (a: string, b: string) => void
  searchParams: URLSearchParams 
}

