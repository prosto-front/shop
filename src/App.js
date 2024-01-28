import "./App.css"
import { Card } from "./Components/Card"
import { Header } from "./Components/Header"

const prodacts = [
  {
    brand: "samasung",
    name: "samsung s20",
    price: 300,
    category: "phone",
    rating: 5,
    img: "https://m.media-amazon.com/images/I/61NiMaFqtGL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    brand: "apple",
    name: "iphone 13",
    price: 400,
    category: "phone",
    rating: 5,
    img: "https://m.media-amazon.com/images/I/81KF1mHjZsL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className="card-block">
        {prodacts.map((el) => (
          <Card
            name={el.name}
            img={el.img}
            rating={el.rating}
            price={el.price}
          />
        ))}
      </div>
    </div>
  )
}

export default App
