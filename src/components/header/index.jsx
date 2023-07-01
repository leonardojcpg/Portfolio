import { Container } from "@mui/material";
import { HeaderContainer, NavLinks } from "./style.js";
import Button from "@mui/material/Button";

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLinks>
      <Button
          sx={{
            color: "#141414",
            "&:hover": {
              backgroundColor: "#dfdeda",
              borderColor: "#5d740c",
              color: "#5d740c",
            },
          }}
        >
          Home
        </Button>
        <Button
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
        <Container sx={{ display: "flex", marginLeft: "80%" }}>
          <Button
            variant="outlined"
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
