import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <Link to={'/Dash'}>
        <div>Home</div>
      </Link>
      <Link to={'/About'}>
        <div>About</div>
      </Link>
      {/* <Link to={'/Dash'}>
        <div>Dashboard</div>
      </Link> */}
    </div>
  )
}
export default Navbar