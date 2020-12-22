import React, {useEffect} from "react";
import "./index.css"

export default function Main() {
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

    useEffect(() => {
        document.addEventListener("keydown", handleRightArrowDown, false);
        document.addEventListener("keyup", handleRightArrowUp, false);

        return () => {
            document.removeEventListener("keydown", handleRightArrowDown, false);
            document.removeEventListener("keyup", handleRightArrowUp, false);
        };
    }, []);

    return (
        <div id="background"/>
    )
}