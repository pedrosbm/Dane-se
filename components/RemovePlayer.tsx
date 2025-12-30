import React from "react"

import { IconButton } from "react-native-paper"
import { Player } from "../types/player"
import { useGame } from "../hooks/useGame"

type RemovePlayerProps = {
    player: Player
}

export default function RemovePlayer({ player }: RemovePlayerProps) {
    const { removePlayer } = useGame()

    return (
        <IconButton size={30} onPress={() => removePlayer(player.nome)} iconColor={player.color.contrast} icon={"delete-outline"} />
    )
}