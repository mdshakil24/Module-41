import { useEffect, useState } from 'react'
import './App.css'
import Sunglass from './Components/Sunglass/Sunglass'

function App() {

  // const watchs = [
  //   {id: 1, name: 'Samsung Watch', price: 200},
  //   {id: 2, name: 'MI Watch', price: 200},
  //   {id: 3, name: 'Apple Watch', price: 200}
  // ]

  // const watchs = [
  //   {
  //     id: 1,
  //     name: "Rolex",
  //     price: 15000 // USD
  //   },
  //   {
  //     id: 2,
  //     name: "Omega",
  //     price: 5000 // USD
  //   },
  //   {
  //     id: 3,
  //     name: "Tag Heuer",
  //     price: 3000 // USD
  //   },
  //   {
  //     id: 4,
  //     name: "Patek Philippe",
  //     price: 30000 // USD
  //   },
  //   {
  //     id: 5,
  //     name: "Audemars Piguet",
  //     price: 25000 // USD
  //   }
  // ];

  const [watchs, setWatchs] = useState([])

  // useEffect(() => {
  //   fetch('watchs.json')
  //   .then(res => res.json())
  //   .then(data => setWatchs(data));
  // },[])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mdshakil24/watches/refs/heads/main/watches.json')
    
    .then(res => res.json())
    .then(data => setWatchs(data));
  },[])




  
  

  return (
    <>
    <h2>All Brand Watchs</h2>

    {watchs.map(watch => <Sunglass key={watch.id} watch={watch}></Sunglass>)}


      {/* <Sunglas watch={watchs[0]}></Sunglass> */}


    </>
  )
}

export default App
