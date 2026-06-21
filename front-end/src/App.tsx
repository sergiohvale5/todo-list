import "./style/app.css";
import baner from "./images/Gemini_Generated_Image_ffpxp4ffpxp4ffpx.png"
import { GrAdd } from "react-icons/gr";
import { Link } from "react-router-dom";

//Componente da estrutura app
function App(){
  return(
    <div className="app_container">
      <img src={baner} alt="Todo Baner"  className="img_banner"/>

      <h4 className="titulo_1">Escreva agora, e se organize</h4>

      <p className="texto_tarefa">Adicione suas tarefas agora e organize sua rotina. Um espaço simples para se organizar e ser mais produtivo.</p>

      <Link to="/add_tarefas/tarefas" className="link_tarefas">
        <button className="btn_adicionar">
          <GrAdd className="icon_add"/>
          Adicionar tarefas
        </button>
      </Link>
    </div>
  )
}

export default App;