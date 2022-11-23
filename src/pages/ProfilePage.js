import { useNavigate , useParams } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";

function ProfilePage() {
  const navigate = useNavigate()
  const pathParams = useParams()

  return (
    <section>
      <h1>Página de perfil de {pathParams.name}</h1>
      <button onClick={()=> goToHomePage(navigate, "edipo")}>Ir para Home</button>
    </section>
  );
}

export default ProfilePage;
