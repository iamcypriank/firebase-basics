import { RouterProvider } from "react-router-dom"
import { router } from "./routes/router"
import AuthContextProvider from "./contexts/AuthContextProvider"
import { ThemeContext } from "./contexts/ThemeContext"
import ThemeContextProvider from "./contexts/ThemeContextProvider"


function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </AuthContextProvider>
  )
}

export default App
