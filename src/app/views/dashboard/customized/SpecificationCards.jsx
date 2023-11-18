
import { Box, Card, IconButton, styled, Tooltip , Icon} from "@mui/material";
import { Small } from "app/components/Typography";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {useDispatch } from 'react-redux';
import {removeChildContent} from  "app/redux/features/actions/actionResultViewSlices";

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

export default function SpecificationCard(
{id, wipoClassName,specification}
) {
  const dispatch = useDispatch();
  return (
    <StyledCard elevation={6}>
            <Small>Specification</Small>
            <ContentBox>
              <Icon className="icon" />

              <Box ml="12px">
                <Small>{wipoClassName}</Small>
                <Heading>{specification}</Heading>
              </Box>

            </ContentBox>

            <Tooltip title="Delete Result" placement="top">
               <IconButton onClick={()=> {
                    dispatch(removeChildContent({id:id, class_name:wipoClassName, specification:specification}));
                }}>
                    <HighlightOffIcon />
               </IconButton>
            </Tooltip>
            
    </StyledCard>
      
  )
}
