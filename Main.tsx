import React, { useContext } from "react";

import { GameContext } from "./context/GameContext";

import SignUpNavigation from "./stacks/SignUpNavigation";
import GameNavigation from "./stacks/GameNavigation";

const Main = () => {
  const { round } = useContext(GameContext)

  return round === 0 ? <SignUpNavigation/> : <GameNavigation/>
};

export default Main;