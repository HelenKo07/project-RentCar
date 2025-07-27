import ViewCatalogButton from "../components/Button/ViewButton/ViewButton.jsx";
import css from "./PageTitle.module.css";

export default function PageTitle() {
  return (
    <div className={css.mainPage}>
      <div className={css.container}>
        <h1 className={css.textTitle}>Find your perfect rental car</h1>
        <h2 className={css.textSubtitle}>
          Reliable and budget-friendly rentals for any journey
        </h2>
        <ViewCatalogButton />
      </div>
    </div>
  );
}
