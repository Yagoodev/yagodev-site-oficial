import { ChakraProvider } from "@chakra-ui/react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </ChakraProvider>
  )
}

export default App;