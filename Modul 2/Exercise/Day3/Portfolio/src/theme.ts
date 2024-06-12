import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const themeExt = extendTheme({
    colors: {
        brand: {
            100: "#f7fafc",
            // ...
            900: "#1a202c",
        },
    },
})

export default themeExt;