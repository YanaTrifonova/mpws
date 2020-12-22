import errorImg from "../../images/404/error.jpg";
import "./index.css";

export default function PageNotFound() {

    return(
        <div>
            <h1>Page not found</h1>
            <img src={errorImg} className="img" alt="Error image"/>
        </div>
    )
}