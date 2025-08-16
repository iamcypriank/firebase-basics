import { RouterProvider } from "react-router-dom"
import { router } from "./routes/router"
import AuthContextProvider from "./contexts/AuthContextProvider"


function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App
