import Pages_2 from "./pages/Pages_2"
import Pages_3 from "./pages/Pages_3"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Pages_4 from "./pages/Pages_4"
import Pages_5 from "./pages/Pages_5"
import Pages_6 from "./pages/Pages_6"
import Uselocation from "./components/Uselocation"
import Pages_7 from "./pages/Pages_7"
import Pages_8 from "./pages/Pages_8"
import Pages_9 from "./components/Pages_9"
import Pages_10 from "./pages/Pages_10"
import Pages_11 from "./pages/Pages_11"
import Pages_12 from "./pages/Pages_12"
import Pages_13 from "./pages/Pages_13"
import Pages_14 from "./pages/Pages_14"
import Pages_15 from "./pages/Pages_15"
import Pages_16 from "./pages/Pages_16"
import Pages_17 from "./pages/Pages_17"
import Pages_18 from "./pages/Pages_18"

function App() {

  return (
    <div>
      <BrowserRouter>
      <Uselocation/>
        <Routes>
          <Route path="/" element={<Pages_2 />} />
          <Route path="/pages_3" element={<Pages_3 />} />
          <Route path="/pages_4" element={<Pages_4/>}/>
          <Route path="/pages_5" element={<Pages_5/>}/>
          <Route path="/pages_6" element={<Pages_6/>}/>
          <Route path="/pages_7" element={<Pages_7/>}/>
          <Route path="/pages_8" element={<Pages_8/>}/>
          <Route path="/pages_9" element={<Pages_9/>}/>
          <Route path="/pages_10" element={<Pages_10/>}/>
          <Route path="/pages_11" element={<Pages_11/>}/>
          <Route path="/pages_12" element={<Pages_12/>}/>
          <Route path="/pages_13" element={<Pages_13/>}/>
          <Route path="/pages_14" element={<Pages_14/>}/>
          <Route path="/pages_15" element={<Pages_15/>}/>
          <Route path="/pages_16" element={<Pages_16/>}/>
          <Route path="/pages_17" element={<Pages_17/>}/>
          <Route path="/pages_18" element={<Pages_18/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
