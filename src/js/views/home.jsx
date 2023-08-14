import React, { useContext } from "react";
import "../../styles/home.css";
import CardList from "../component/cardList.jsx";
import { Context } from "../store/appContext";
import Spinner from "react-bootstrap/Spinner";

function Home() {
  const { store } = useContext(Context);
  let peopleObj = store.data.people;
  let planetsObj = store.data.planets;
  let vehiclesObj = store.data.vehicles;
  let favoritesObj = { results: store.data.favorites };
 

  return (
    <section className="container container-home">
      <h1 className="text-light">STAR WARS</h1>
     
      {peopleObj ? (
        <CardList obj={peopleObj} group="people" />
      ) : (
        <Spinner animation="border" variant="light" />
      )}
      {planetsObj ? (
        <CardList obj={planetsObj} group="planets" />
      ) : (
        <Spinner animation="border" variant="light" />
      )}
      {vehiclesObj ? (
        <CardList obj={vehiclesObj} group="vehicles" />
      ) : (
        <Spinner animation="border" variant="light" />
      )}
    </section>
  );
}

export default Home;
