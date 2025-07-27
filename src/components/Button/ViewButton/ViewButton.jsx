import { useNavigate } from "react-router-dom";
import css from "./ViewButton.module.css";

export default function ViewCatalogButton({ text = "View Catalog" }) {
  const navigate = useNavigate();

  return (
    <button className={css.button} onClick={() => navigate("/catalog")}>
      {text}
    </button>
  );
}
