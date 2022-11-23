import { useNavigate, useParams } from "react-router-dom";
import { goToHomePage , goToProfilePage } from "../routes/coordinator";

function Header() {
  const navigate = useNavigate()

const pathParams = useParams()
console.log(pathParams)

  return (
    <header>
      <button onClick={()=> goToHomePage(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={()=> goToProfilePage(navigate, "edipo")}>
        Ir para página de perfil
      </button>
    </header>
  );
}

export default Header;