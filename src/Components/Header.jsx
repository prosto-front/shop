export const Header = ({handleInput}) => {

  return (
    <div className="header">
      <div>
        <img
          width={60}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
          alt="здсь фото"
        />
      </div>
      <input onChange={(e) => handleInput(e.target.value)}/>
      <div>header</div>
    </div>
  )
}
