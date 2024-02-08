import { Fragment } from "react";
import { styled} from "@mui/material";
import BuisinessDetailsCard from "./customized/BusinessDetailsCards"
import SpecificationCard from "./customized/SpecificationCards";
import NameValidateCard from "./customized/NameValidateCards";
import { useSelector} from 'react-redux';
import { Stack } from "@mui/material";
import { SimpleCard } from "app/components";
import SimpleForm from "./customized/SimpleForm";
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';

const Container = styled("div")(({ theme }) => ({
  //margin: "30px",
  margin: "10px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

// STYLED COMPONENTS
const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" }
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize"
}));

const SubTitle = styled("span")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary
}));

const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "16px",
  textTransform: "capitalize",
  color: theme.palette.text.secondary
}));


const createSpecifications = (action) => {

  return action.content.map((item) => <SpecificationCard id={action.id} wipoClassName={item.class_name} specification={item.specification} />)
}

const createBuisinessDetailsCard= (action) => {
  console.log(action);
  return <BuisinessDetailsCard 
  id={action.id}
  coreProductOrService={action.content.core_product_or_service}
  targetMarket={action.content.target_market}
  businessGoal={action.content.business_goal}
  keyBenefit={action.content.key_benefit}
  uniqueSellingProposition={action.content.unique_selling_proposition}
  brandPersonality={action.content.brand_personality}
  brandStory={action.content.brand_story}
  emotionalConnection={action.content.emotional_connection}
  />
}


const createNameValidateCard = (action) => {
  console.log("Action object:", action);
  console.log("Action content:", action.content);

  return action.content.map((item) => {
    console.log("Item object:", item.is_rejected);
    console.log("Item object:", item.rejection_reasons);

    return (
      <NameValidateCard
        key={item.id} // Ensure each card has a unique key
        id={action.id}
        isRejected={item.is_rejected}
        rejectedReasons={item.rejection_reasons} // Ensure this matches the expected prop name
        />
    );
  });
}


const createActionResultView = (action) => {
  switch(action.type) {
    case "GenerateSpecification":
      return createSpecifications(action);
    case "BusinessNatureAnalysis":
      return createBuisinessDetailsCard(action);
    case "ValidateTrademarkName":
      return createNameValidateCard(action);
    default:
      return 
  }
    
    
}


export default function Analytics() {
  const ActionResultView = useSelector(state => state.actionViews);

  return (
    <Container>
    <Fragment>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <b style = {{fontSize: '16px'}}>Tool Results</b>
        </AccordionSummary>
        <Stack spacing={3}>
         
          {ActionResultView.actionResult[0] && ActionResultView.actionResult.map((result) => createActionResultView(result))}
        </Stack>
      </Accordion>

      <Accordion defaultExpanded>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
           >
            <b style = {{fontSize: '16px'}}>Trade Mark Form T2</b>

          </AccordionSummary>
        
          <p style = {{fontStyle: 'italic', fontWeight: 'normal', paddingLeft: '20px', margin: '0', color: '#3490dc'}}>Fill in as much information you have, but don't worry if you don't have any. We will generate an editable PDF application form for you.</p>
          <Stack spacing={3}>
          <SimpleCard>
            <SimpleForm />
          </SimpleCard>
                
          </Stack>
      </Accordion>
    </Fragment>
    </Container>
  );
}