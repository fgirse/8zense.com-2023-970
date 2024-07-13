import NavBar from "@/app/components/Navbar/NavBar"
import imagePath from "./assets/your_image_icon.png";
function Navigation() {

  let imagePath = "/assets/images/LogoEZ990.svg"  
  let items = ["about","gallery", "contact"];
  let cooperationName = "8zense.com"

  return (
    <div>
      <NavBar 
      brandName={cooperationName} 
      imageSrcPath={imagePath} 
      navItems={items}/>
    </div>
  );
}
export default Navigation
