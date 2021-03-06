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
import building5 from "../../images/buildings/building_5.png";
import building6 from "../../images/buildings/building_6.png";
import building7 from "../../images/buildings/building_7.png";
import building8 from "../../images/buildings/building_8.png";
import building9 from "../../images/buildings/building_9.png";
import building10 from "../../images/buildings/building_10.png";
import building11 from "../../images/buildings/building_11.png";
import building12 from "../../images/buildings/building_12.png";
import building13 from "../../images/buildings/building_13.png";
import building14 from "../../images/buildings/building_14.png";

import "./index.css"

export default function Main() {
    const [car, setCar] = useState(car0);
    const [currentCarIndex, setCurrentCarIndex] = useState(0);
    const carList = [car0, car1, car2, car3, car4];

    const buildingList = [
        building0,
        building1,
        building2,
        building3,
        building4,
        building5,
        building6,
        building7,
        building8,
        building9,
        building10,
        building11,
        building12,
        building13,
        building14
    ];

    let myFlag = true;
    let interval;
    let interval2;
    let interval3;
    let interval4;
    let interval5;

    let buildingPresetRemoved = false;

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

            //remove preset buildings
            if (!buildingPresetRemoved) {
                removeBuildingPreset();
            }
        }, timeout);
    }

    function addBuildings(n) {
        const buildingId = "building" + n;
        const buildingContainer = document.getElementById(buildingId);
        buildingContainer.innerHTML = '';

        //simple randomizer to render building only with 33.(3)% chances
        if (getRandomInt(2) === 0) {
            const getRandomBuilding = getRandomInt(15);

            buildingContainer.innerHTML +=
                `<img src=${buildingList[getRandomBuilding]} class="building" alt="building number ${getRandomBuilding}"/>`
        }
    }

    function removeBuildingPreset() {
        const buildingPresetContainer = document.getElementById("building0");
        buildingPresetContainer.innerHTML = '';
        buildingPresetRemoved = true;
    }

    function moveBackground() {
        console.log("🚗 💨");

        const backgroundTopStyles = document.getElementById("background-top").classList;
        backgroundTopStyles.remove("pause");
        backgroundTopStyles.add("animation");

        const backgroundBottomStyles = document.getElementById("background-bottom").classList;
        backgroundBottomStyles.remove("pause");
        backgroundBottomStyles.add("animation");
    }

    function stopBackgroundMove() {
        console.log("🚘 ✋");

        const backgroundTopStyles = document.getElementById("background-top").classList;
        backgroundTopStyles.add("pause");

        const backgroundBottomStyles = document.getElementById("background-bottom").classList;
        backgroundBottomStyles.add("pause");
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
        <>
            <div id="background-top">
                <img src={car} className="car" alt="car" onClick={handleCarChange}/>
                <div id="building1" className="building-container"/>
                <div id="building2" className="building-container"/>
                <div id="building3" className="building-container"/>
                <div id="building4" className="building-container"/>
                <div id="building5" className="building-container"/>

                <div id="building0" className="building-container">
                    <img id="building-preset1" src={building2} className="building" alt="building preset"/>
                    <img id="building-preset2" src={building3} className="building" alt="building preset"/>
                    <img id="building-preset3" src={building4} className="building" alt="building preset"/>
                </div>
            </div>

            <div id="background-bottom"/>
        </>
    )
}