"use client";

import { useEffect } from "react";


export default function PhaserGame() {

    useEffect(() => {

        let destroyGame: (() => void) | null = null;


        async function loadGame() {

            const gameModule = await import("@/game/Game");

            gameModule.startGame();

            destroyGame = gameModule.destroyGame;

        }


        loadGame();


        return () => {

            if (destroyGame) {

                destroyGame();

            }

        };


    }, []);


    return (

        <div

id="game-container"

className="
absolute
inset-0
w-full
h-full
"

/>

    );

}