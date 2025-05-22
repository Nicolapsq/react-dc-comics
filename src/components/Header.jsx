export default function Header() {
  return (
  <>
    <div className="container">
      <nav className="navbar">
        <div className="navbar-img">
            <img src="dc-logo.png" alt="DC-logo" />
        </div>
        <div>
            <ul>
                <li>CHARACTERS</li>
                <div className="border-active">
                <li className="active" >COMICS</li>
                </div>
                <li>MOVIES</li>
                <li>TV</li>
                <li>GAMES</li>
                <li>COLLECTIBLES</li>
                <li>VIDEOS</li>
                <li>FANS</li>
                <li>NEWS</li>
                <li>SHOP</li>
            </ul>
        </div>
      </nav>
    </div>
    <div>
      <img src="jumbotron.jpg" alt="jumbotron" />
    </div>
  </>
  );
}
