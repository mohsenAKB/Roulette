import { Chakra_Petch } from "next/font/google"

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-chakra-petch"
})

export { chakraPetch }