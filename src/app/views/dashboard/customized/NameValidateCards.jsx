import React, { useEffect } from 'react';
import { Box, Card, Grid, IconButton, styled, Tooltip , Icon, Stack} from "@mui/material";
import { Small } from "app/components/Typography";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch } from 'react-redux';
import {remove} from  "app/redux/features/actions/actionResultViewSlices";

import PropTypes from 'prop-types';

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

export default function NameValidateCard(
  { id, isRejected, rejectedReasons} // Ensure default value is an array
) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Received props:', { id, isRejected, rejectedReasons});
  }, [id, isRejected, rejectedReasons]);

  // Log to debug received parameters locally
  console.log('Debug - isRejected:', isRejected);
  console.log('Debug - rejectedReasons:', rejectedReasons);

  return (
    <StyledCard elevation={6}>
            <Small>Trademark Name Validation</Small>
            <ContentBox>
              <Icon className="icon" />

              <Stack direction="column">

              <Box ml="12px">
                <Heading>{isRejected}</Heading>
              </Box>

              {rejectedReasons.length > 0 ? (
                rejectedReasons.map((item, idx) => (
                  <Box ml="12px" key={idx}>
                     <Heading>Rejected class: {item.rejection_class}</Heading>
                     <Small>Reason: {item.rejection_reason}</Small>
                  </Box>
                ))
              ) : (
                <Box ml="12px">
                  <Small>No Rejected Reasons</Small>
                </Box>
              )}

              </Stack>
            </ContentBox>

            <Tooltip title="Delete Result" placement="top">
               <IconButton onClick={(e) => {
                    dispatch(remove(id));
               }}>
                    <HighlightOffIcon />
               </IconButton>
            </Tooltip>
          </StyledCard>
      
  );
}
/*
// Add PropTypes for validation
NameValidateCard.propTypes = {
  id: PropTypes.string.isRequired,
  isRejected: PropTypes.bool,
  rejectedReasons: PropTypes.arrayOf(PropTypes.shape({
    rejected_reason: PropTypes.string
  }))
};

// Set default props
NameValidateCard.defaultProps = {
  isRejected: true,
  rejectedReasons: [{rejection_class: 0, rejection_reason: "Some error is appeared, pls try again"}]
};
*/