import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoritesList from "./favoritesList.jsx";
import { Context } from "../store/appContext.js";



export const Navbar = () => {
  const { store } = useContext(Context);
 
  let storeData = [];
  let people, planets, vehicles;
  let peopleObj = store.data.people;
  let planetsObj = store.data.planets;
  let vehiclesObj = store.data.vehicles;

  if (peopleObj) {
    people = store.data.people.results;
    for (let person of people) {
      storeData.push(person);
    }
  }
  if (planetsObj) {
    planets = store.data.planets.results;
    for (let planet of planets) {
      storeData.push(planet);
    }
  }
  if (vehiclesObj) {
    vehicles = store.data.vehicles.results;
    for (let vehicle of vehicles) {
      storeData.push(vehicle);
    }
  }


  return (
    <nav className="navbar navbar-dark bg-dark px-3 container">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">STAR WARS</span>
      </Link>
      <div className="ml-auto d-flex gap-3">
        
        <FavoritesList favs={store.data.favorites} />
      </div>
    </nav>
  );
};
