import css from "./Loader.module.css";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loader({ loading }) {
  return (
    <div className={css.sweetLoading}>
      <ClipLoader color="#3470ff" loading={loading} size={150} />
    </div>
  );
}