
import { Box, Card, Grid, IconButton, styled, Tooltip , Icon, Stack} from "@mui/material";
import { Small } from "app/components/Typography";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {remove} from  "app/redux/features/actions/actionResultViewSlices";
import { useDispatch } from 'react-redux';

// STYLED COMPONENTS
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" }
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  "& small": { color: theme.palette.text.secondary },
  "& .icon": { opacity: 0.6, fontSize: "44px", color: theme.palette.primary.main }
}));

const Heading = styled("h6")(({ theme }) => ({
  margin: 0,
  marginTop: "4px",
  fontSize: "14px",
  fontWeight: "500",
  color: theme.palette.primary.main
}));

export default function BuisinessDetailsCard(
  {id,
  coreProductOrService,
  targetMarket,
  businessGoal,
  keyBenefit,
  uniqueSellingProposition,
  brandPersonality,
  brandStory,
  emotionalConnection}
) {
  const dispatch = useDispatch();
  return (
    <StyledCard elevation={6}>
            <Small>Buisiness Details</Small>
            <ContentBox>
              <Icon className="icon" />

              <Stack direction="column">

              <Box ml="12px">
                <Small>Core Product Or Service</Small>
                <Heading>{coreProductOrService}</Heading>
              </Box>

              <Box ml="12px">
                <Small>Target Market</Small>
                <Heading>{targetMarket}</Heading>
              </Box>

              <Box ml="12px">
                <Small>Business Goal</Small>
                <Heading>{businessGoal}</Heading>
              </Box>

              <Box ml="12px">
                <Small>Key Benefit</Small>
                <Heading>{keyBenefit}</Heading>
              </Box>

              <Box ml="12px">
                <Small>Unique Selling Proposition</Small>
                <Heading>{uniqueSellingProposition}</Heading>
              </Box>

              <Box ml="12px">
                <Small>Brand Personality</Small>
                <Heading>{brandPersonality}</Heading>
              </Box>

              <Box ml="12px">
                <Small>Brand Story</Small>
                <Heading>{brandStory}</Heading>
              </Box>

              <Box ml="12px">
                <Small> Emotional Connection</Small>
                <Heading>{emotionalConnection}</Heading>
              </Box>
              </Stack>
            </ContentBox>

            <Tooltip title="Delete Result" placement="top">
               <IconButton onClick={(e)=> {
                    dispatch(remove(id));
               }}>
                    <HighlightOffIcon />
               </IconButton>
            </Tooltip>
          </StyledCard>
      
  );
}
