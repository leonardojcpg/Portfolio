import { Container } from "@mui/material";
import { HeaderContainer, NavLinks } from "./style.js";
import Button from "@mui/material/Button";

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLinks>
        <Button
          href="/"
          sx={{
            color: "#141414",
            "&:hover": {
              backgroundColor: "#dfdeda",
              borderColor: "#5d740c",
              color: "#5d740c",
            },}}
        >
          Home
        </Button>
        <Button
          href="/about"
          sx={{
            color: "#141414",
            "&:hover": {
              backgroundColor: "#dfdeda",
              borderColor: "#5d740c",
              color: "#5d740c",
            },
          }}
        >
          About
        </Button>
        <Button
          href="/techs"
          sx={{
            color: "#141414",
            "&:hover": {
              backgroundColor: "#dfdeda",
              borderColor: "#5d740c",
              color: "#5d740c",
            },
          }}
        >
          Techs
        </Button>
        <Button
          href="/projects"
          sx={{
            color: "#141414",
            "&:hover": {
              backgroundColor: "#dfdeda",
              borderColor: "#5d740c",
              color: "#5d740c",
            },
          }}
        >
          Projects
        </Button>
        <Container sx={{ display: "flex" }}>
          <Button
            variant="outlined"
            href="/contact"
            sx={{
              backgroundColor: "#5d740c",
              color: "#dfdeda",
              borderColor: "#5d740c",
              "&:hover": {
                backgroundColor: "#dfdeda",
                borderColor: "#5d740c",
                color: "#5d740c",
              },
            }}
          >
            Contact
          </Button>
        </Container>
      </NavLinks>
    </HeaderContainer>
  );
};
