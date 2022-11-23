import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";

function ErrorPage() {
  const navigate = useNavigate()
  return (
    <section>
      <h1>Página não encontrada</h1>
      <button onClick={()=> goToHomePage(navigate)}>Ir para Home</button>
    </section>
  );
}

export default ErrorPage;
