import React, {useEffect, useState} from "react";

import car0 from "../../images/cars/car_0.png";
import car1 from "../../images/cars/car_1.png";
import car2 from "../../images/cars/car_2.png";
import car3 from "../../images/cars/car_3.png";
import car4 from "../../images/cars/car_4.png";

import building0 from "../../images/buildings/building_0.png";
import building1 from "../../images/buildings/building_1.png";
import building2 from "../../images/buildings/building_2.png";
import building3 from "../../images/buildings/building_3.png";
import building4 from "../../images/buildings/building_4.png";

import "./index.css"

export default function Main() {
    const [car, setCar] = useState(car0);
    const [currentCarIndex, setCurrentCarIndex] = useState(0);
    const carList = [car0, car1, car2, car3, car4];

    const buildingList = [building0, building1, building2, building3, building4];

    let myFlag = true;
    let interval;
    let interval2;
    let interval3;
    let interval4;
    let interval5;

    function handleRightArrowDown(e) {
        if (e.key === "ArrowRight") {
            moveBackground();

            const buildingElements = document.getElementsByClassName("building");

            addClassName("animation-building", buildingElements);
            removeClassName("pause", buildingElements);

            if (myFlag) {
                myFlag = false;

                interval = setIntervalForAddingBuildings(1, 3000);
                interval2 = setIntervalForAddingBuildings(2, 3500);
                interval3 = setIntervalForAddingBuildings(3, 4500);
                interval4 = setIntervalForAddingBuildings(4, 4800);
                interval5 = setIntervalForAddingBuildings(5, 5800);
            }
        }
    }

    function setIntervalForAddingBuildings(buildingNumber, timeout) {
        return setInterval(() => {
            addBuildings(buildingNumber);
        }, timeout);
    }

    function addBuildings(n) {
        const buildingId = "building" + n;
        const buildingContainer = document.getElementById(buildingId);
        buildingContainer.innerHTML = '';

        //simple randomizer to render building only with 33.(3)% chances
        if (getRandomInt(2) === 0) {
            const getRandomBuilding = getRandomInt(4);

            buildingContainer.innerHTML +=
                `<img src=${buildingList[getRandomBuilding]} class="building" alt="building number ${getRandomBuilding}"/>`
        }
    }

    function moveBackground() {
        console.log("🚗 💨");

        const backgroundElementStyles = document.getElementById("background").classList;
        backgroundElementStyles.remove("pause");
        backgroundElementStyles.add("animation");
    }

    function stopBackgroundMove() {
        console.log("🚘 ✋");

        const backgroundElementStyles = document.getElementById("background").classList;
        backgroundElementStyles.add("pause");
    }


    function handleRightArrowUp(e) {
        if (e.key === "ArrowRight") {
            stopBackgroundMove();

            clearInterval(interval);
            clearInterval(interval2);
            clearInterval(interval3);
            clearInterval(interval4);
            clearInterval(interval5);

            myFlag = true;
            const buildingElements = document.getElementsByClassName("building");
            addClassName("pause", buildingElements);
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function handleCarChange() {
        console.log("💅🏼 💅🏿");
        let anotherCar = false;

        while (!anotherCar) {
            let carIndex = getRandomInt(4);
            if (carIndex !== currentCarIndex) {
                setCurrentCarIndex(carIndex);
                anotherCar = true;
                setCar(carList[carIndex]);
            }
        }
    }

    function addClassName(className, elements) {
        if (elements !== undefined) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].className = elements[i].className + " " + className;
            }
        }
    }

    function removeClassName(className, elements) {
        if (elements !== undefined) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove(className);
            }
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleRightArrowDown, false);
        document.addEventListener("keyup", handleRightArrowUp, false);

        console.log("👣 👣 👣");

        return () => {
            document.removeEventListener("keydown", handleRightArrowDown, false);
            document.removeEventListener("keyup", handleRightArrowUp, false);
        };

    });

    return (
        <div id="main-container" style={{height: "100%"}}>
            <div id="background"/>
            <img src={car} className="car" alt="car" onClick={handleCarChange}/>
            <div id="building1"/>
            <div id="building2"/>
            <div id="building3"/>
            <div id="building4"/>
            <div id="building5"/>
            {/*<img src={building0} className="building" alt="building"/>*/}
        </div>
    )
}