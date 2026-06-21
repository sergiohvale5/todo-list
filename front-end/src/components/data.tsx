import "../style/data.css";
import { FaCalendarAlt } from "react-icons/fa";

function Data() {
    const data = new Date().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="data">
            <FaCalendarAlt className="calendario" />
            {data}
        </div>
    );
}

export default Data;