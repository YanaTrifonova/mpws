import React, {useEffect, useState} from "react";
import car0 from "../../images/cars/car_0.png";
import car1 from "../../images/cars/car_1.png";
import car2 from "../../images/cars/car_2.png";
import car3 from "../../images/cars/car_3.png";
import car4 from "../../images/cars/car_4.png";
import "./index.css"

export default function Main() {
    const [car, setCar] = useState(car0);
    const [currentCar, setCurrentCar] = useState(0);
    const carList = [car0, car1, car2, car3, car4];

    function handleRightArrowDown(e) {
        if (e.key === "ArrowRight") {
            const backgroundElementStyles = document.getElementById("background").classList;

            console.log("🚗 💨");
            if (backgroundElementStyles.contains("pause")) {
                backgroundElementStyles.remove("pause");
            }

            if (!backgroundElementStyles.contains("animation")) {
                backgroundElementStyles.add("animation");
            }
        }
    }

    function handleRightArrowUp(e) {
        const backgroundElementStyles = document.getElementById("background").classList;

        if (e.key === "ArrowRight") {
            console.log("🚘 ✋");
            backgroundElementStyles.add("pause");
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
            if (carIndex !== currentCar) {
                setCurrentCar(carIndex);
                anotherCar = true;
                setCar(carList[carIndex]);
            }
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleRightArrowDown, false);
        document.addEventListener("keyup", handleRightArrowUp, false);

        return () => {
            document.removeEventListener("keydown", handleRightArrowDown, false);
            document.removeEventListener("keyup", handleRightArrowUp, false);
        };
    }, []);

    return (
        <>
            <div id="background"/>
            <img src={car} className="car" alt="car" onClick={handleCarChange}/>
        </>
    )
}