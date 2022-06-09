import "./assets/scss/main.scss"
import { AppHeader } from "./cmp/app-header";
import { AppFooter } from "./cmp/app-footer"
import { Homepage } from "./views/homepage"

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <AppHeader/>
      </header>

      <main className="main-container">
        <Homepage />
      </main>

      <footer className="app-footer">
        <AppFooter/>
      </footer>
    </div>
  )
}

export default App
