import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarById } from "../../redux/cars/operations.js";
import Loader from "../../components/Loader/Loader";
import Navigation from "../../components/Navigation/Navigation.jsx";
import css from "./CatalogDetailsPage.module.css";
import { GrLocation } from "react-icons/gr";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { BsCarFront } from "react-icons/bs";
import { RiGasStationLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import BookingForm from "../../BookingForm/BookingForm.jsx";

export default function CarDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCar: car, isLoading } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  if (isLoading) return <Loader />;
  if (!car) return <p className={css.error}>Car not found</p>;

  const shortId = car.id.match(/\d+/g)?.join("").slice(-4);

  const location = car.address
    ?.split(",")
    .slice(1)
    .map((part) => part.trim())
    .join(", ");

  return (
    <>
      <Navigation />
      <div className={css.detailsContainer}>
        <div className={css.leftColumn}>
          <img className={css.carImage} src={car.img} alt={car.brand} />
          <BookingForm />
        </div>

        <div className={css.rightColumn}>
          <h2 className={css.title}>
            {car.brand} {car.model}, {car.year}
            <span className={css.carId}>ID: {shortId}</span>
          </h2>

          <div className={css.infoLine}>
            <GrLocation />
            <p className={css.locationText}>
              {location}
              <span className={css.styleMileage}>
                Mileage: {car.mileage.toLocaleString()} km
              </span>
            </p>
          </div>
          <div className={css.price}>${car.rentalPrice}</div>
          <div className={css.desc}>
            <p className={css.description}>{car.description}</p>
          </div>
          <div className={css.section}>
            <h3 className={css.subtitleConditions}>Rental Conditions:</h3>
            {car.rentalConditions?.map((condition, index) => (
              <div key={index} className={css.conditionItem}>
                <FaRegCircleCheck className={css.icon} />
                <p>{condition}</p>
              </div>
            ))}
          </div>
          <div className={css.section}>
            <h3 className={css.textSpecifications}>Car Specifications:</h3>
            <ul className={css.specList}>
              <li className={css.inlineItem}>
                <IoCalendarOutline className={css.icon} />
                <p>Year: {car.year}</p>
              </li>
              <li className={css.inlineItem}>
                <BsCarFront className={css.icon} />
                <p>Type: {car.type}</p>
              </li>
              <li className={css.inlineItem}>
                <RiGasStationLine className={css.icon} />
                <p>Fuel Consumption: {car.fuelConsumption}</p>
              </li>
              <li className={css.inlineItem}>
                <FiSettings className={css.icon} />
                <p>Engine Size: {car.engineSize}</p>
              </li>
            </ul>
          </div>
          <div className={css.section}>
            <h3 className={css.additionsText}>
              Accessories and functionalities:
            </h3>
            {[...(car.accessories || []), ...(car.functionalities || [])].map(
              (item, i) => (
                <div key={i} className={css.additionsItem}>
                  <FaRegCircleCheck />
                  <p className={css.additionsContent}>{item}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
