import { useContext } from "react"
import { GameContext } from "../context/GameContext"

export const useGame = () => {
    const context = useContext(GameContext)
    if (context === undefined || Object.keys(context).length === 0) {
        throw new Error("GameContext must be used within an AuthProvider")
    }

    return context
}