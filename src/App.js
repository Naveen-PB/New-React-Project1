// import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import Layout from './Layout'
// export default function App() {
//   return (
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout/>}>
//           <Route index element={<Home/>}/>
//           <Route path="about" element={<About/>}/>
//           <Route path="contact" element={<Contact/>}/>

//         </Route>
//       </Routes>
//       </BrowserRouter>
//   )
// }
import React from 'react'
import Basic from './EventClass/Basic'
import Counter from './Counter'
import Operation from './Operation'
import UseState from './UseState'
import Reducer from './Reducer'

export default function App() {
  return (
    <>
    <Basic/>
    <Counter/>
    <Operation/>
    <UseState/>
    <Reducer/>
    </>
  )
}

