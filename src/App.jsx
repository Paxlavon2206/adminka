import { Route, Routes } from "react-router-dom"
import { AppLayout } from "./layout/app-layout"
import routes from "./router/routes"
import { Login } from "./pages/login/login"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      {routes?.map(({component,id, path}) =>
          <Route path={path} element={component} key={id} index={path ? false : true}/>)}
    </Routes>
  )
}

export default App
