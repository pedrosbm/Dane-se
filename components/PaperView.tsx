
import React, { PropsWithChildren } from "react"
import { View } from "react-native"
import { useTheme } from "react-native-paper"

export default function PaperView({ children, style }: PropsWithChildren<{ style?: object }>) {
    const { colors } = useTheme()

    return (
        <View style={{ flex: 1, backgroundColor: colors.background, ...style }}>
            {children}
        </View>
    )
}