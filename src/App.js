import { useEffect, useState } from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Main } from "./Main"
import { FavoritePage } from "./FavoritePage"

const prodacts = [
  {
    id: 1,
    brand: "samsung",
    name: "samsung s20",
    price: 300,
    category: "phone",
    rating: 5,
    img: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2Fsmartfon_gsm_samsung_sm_s911bzkgskz_thx_61_50_5_galaxy_s23_256gb_black_269582_1q.jpg&w=3840&q=85",
  },
  {
    id: 2,
    brand: "samsung",
    name: "samsung s24",
    price: 2000,
    category: "phone",
    rating: 5,
    img: "https://www.soliton.az/images/articles/2024/01/23/20240123052429310_c1_1.jpg",
  },
  {
    id: 3,
    brand: "hp",
    name: "15S",
    price: 1300,
    category: "laptop",
    rating: 4,
    img: "https://object.pscloud.io/cms/cms/Photo/img_0_62_2804_1_6.png",
  },
  {
    id: 4,
    brand: "philips",
    name: "S27",
    price: 770,
    category: "monitor",
    rating: 3,
    img: "https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/PH272S9MON_philips_27_272s9_fhd_ips_75hz_monitor.jpg/resize?size=600&auth=MjA5OTcwODkwMg__",
  },
  {
    id: 5,
    brand: "apple",
    name: "iphone 13",
    price: 400,
    category: "phone",
    rating: 5,
    img: "https://object.pscloud.io/cms/cms/Photo/img_0_77_3127_4_1.jpg",
  },
  {
    id: 6,
    brand: "apple",
    name: "iphone 14",
    price: 700,
    category: "phone",
    rating: 5,
    img: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F265302_1hh.jpg&w=3840&q=85",
  },
  {
    id: 7,
    brand: "asus",
    name: "Vivobook",
    price: 1000,
    category: "laptop",
    rating: 4,
    img: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2Fnoutbuk_16_asus_vivobook_16_m1605ya_mb350_275199_tl.jpg&w=3840&q=85",
  },
  {
    id: 8,
    brand: "asus",
    name: "tuf",
    price: 1500,
    category: "laptop",
    rating: 4,
    img: "https://object.pscloud.io/cms/cms/Photo/img_0_62_2635_11_1.jpg",
  },
  {
    id: 9,
    brand: "samsung",
    name: "Galaxy Book",
    price: 1700,
    category: "laptop",
    rating: 5,
    img: "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/S300868182_1?1704801808",
  },
  {
    id: 10,
    brand: "samsung",
    name: "T37",
    price: 660,
    category: "monitor",
    rating: 2,
    img: "https://object.pscloud.io/cms/cms/Photo/img_0_65_439_7_6.png",
  },
  {
    id: 11,
    brand: "philips",
    name: "V243",
    price: 420,
    category: "monitor",
    rating: 3,
    img: "https://itmag.kz/upload/iblock/19/05/product_image_5705_1136638.jpg",
  },
  {
    id: 12,
    brand: "samsung",
    name: "samsung s24",
    price: 1900,
    category: "phone",
    rating: 5,
    img: "https://images.samsung.com/hu/smartphones/galaxy-s24-ultra/buy/03_Color-Selection/03-1_Basic-Color/Titanium-Violet-MO.png",
  },
]


function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setUsers(result))
      .catch((error) => console.log(error))
  }, [])

  const [inputName, setInputName] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [favoritesIds, setFavoritesIds] = useState([])

  const [openNavbar, setOpenNavbar] = useState(false)

  const filteredProduct = prodacts.filter(
    (el) =>
      el.category.includes(selectedCategory) &&
      el.name.toLowerCase().includes(inputName.toLowerCase())
  )

  const handleInput = (text) => {
    setInputName(text)
  }

  const handleOpen = () => {
    setOpenNavbar(!openNavbar)
  }

  const handleChangeCategory = (changedCategory) => {
    if (changedCategory === selectedCategory) {
      setSelectedCategory("")
      return
    }

    setSelectedCategory(changedCategory)
  }

  const addToFavorites = (id) => {
    if (favoritesIds.includes(id)) {
      setFavoritesIds(favoritesIds.filter((i) => i !== id))
      return
    }

    setFavoritesIds([...favoritesIds, id])
  }

  const favoriteProducts = prodacts.filter((product) =>
    favoritesIds.includes(product.id)
  )

  return (
    <div>
      <h1>sait</h1>
      {users.map((user) => (
        <div>
          <div>{user.name}</div>
          <div>{user.phone}</div>
        </div>
      ))}

      {/* <Routes>
        <Route
          path="/"
          element={
            <Main
              openNavbar={openNavbar}
              handleInput={handleInput}
              handleOpen={handleOpen}
              handleChangeCategory={handleChangeCategory}
              selectedCategory={selectedCategory}
              filteredProduct={filteredProduct}
              addToFavorites={addToFavorites}
              favoritesIds={favoritesIds}
            />
          }
        />

        <Route
          path="/favorite"
          element={<FavoritePage favoriteProducts={favoriteProducts} />}
        />
      </Routes> */}
    </div>
  )
}

export default App
