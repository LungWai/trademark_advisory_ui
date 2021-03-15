import { Stack } from "@mui/material";
import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleForm from "../../dashboard/customized/SimpleForm";
import SimpleForm2 from "../../dashboard/customized/SimpleForm";
import StepperForm from "./StepperForm";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppForm() {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Form" }]} />
      </Box>

      <Stack spacing={3}>
        {/* <h1>Trade Mark Form T2</h1>
        <h2 style = {{fontStyle: 'italic', fontWeight: 'normal'}}>Fill in as much information you have, but don't worry if you don't have any. We will generate an editable PDF application form for you.</h2>
        <SimpleCard>
          <SimpleForm />
        </SimpleCard> */}

        {/* <SimpleCard title="Part 2" subtitle="This is subtitle">
          <SimpleForm2 />
        </SimpleCard>

        <SimpleCard title="stepper form">
          <StepperForm />
        </SimpleCard> */}
                
      </Stack>
    </Container>
  );
}
