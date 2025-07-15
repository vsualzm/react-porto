function App() {
  
  const menu = [
    {
      nama : 'Nasi Goreng',
      harga : 20000
    },
    {
      nama : 'Mie Goreng',
      harga : 15000
    },
    {
      nama : 'Ayam Goreng',
      harga : 25000
    }
  ]
  
  return (
  
    <>

      {
        menu.map((item, index) => {
          return (
            <div key={index}>
              <h1> NAMA MENU : {item.nama}</h1>
              <p> HARGA :{item.harga}</p>
            </div>
          )
        })
      }
     {/* <h1 className="text-4xl text-red-600">Hello World</h1> */}
    </>
  )
}

export default App
