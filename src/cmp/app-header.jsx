export const AppHeader = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <h1 className="logo">myteam</h1>
      </div>

      <nav className="nav-container">
        <div className="nav-options">
          <h3>home</h3>
          <h3>about</h3>
        </div>

        <h3 className="menu-hamburger">≡</h3>
      </nav>

      <div className="contact-container">
        <h3>CONTACT US</h3>
      </div>
    </div>
  )
}
