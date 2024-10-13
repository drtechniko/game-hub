import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"



function App() {
  return <Grid templateAreas={{
    lg: `
      "nav nav" 
      "aside main"
      `,
    base: `
      "nav" 
      "main"
      `,
  }}>
    <GridItem area={'nav'}>
      <NavBar />
    </GridItem>
    <Show above="lg">
      <GridItem area={'aside'} bg="gold">Aside</GridItem>
    </Show>
    <GridItem area={'main'} bg="pink">Main</GridItem>
  </Grid>
}

export default App
