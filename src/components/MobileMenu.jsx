import NavList from "./NavList"

const MobileMenu = ({setMenuClicked}) => {
  return (
    <div className="mobile-menu">
      <i onClick={()=>setMenuClicked(false)}
      className="fa-solid fa-xmark close"></i>
            <NavList/>
    </div>
  )
}

export default MobileMenu