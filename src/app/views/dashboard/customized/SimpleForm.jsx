import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
  Card,
  CardContent
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import axios from "axios";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px"
}));

const SimpleForm = () => {
  const [state, setState] = useState({
    // date: new Date(),
    applicant_name_1: "",
    applicant_flat_address_1: "",
    applicant_street_address_1: "",
    applicant_state_address_1: "",
    applicant_type_1: "",
    incorporation_country_1: "",
    incorporation_state_1: "",
    correspondence_name_2: "",
    correspondence_flat_address_2: "",
    correspondence_street_address_2: "",
    correspondence_telephone_2: "",
    correspondence_fax_2: "",
    correspondence_reference_2: "",
    agent_name_3: "",
    agent_flat_address_3: "",
    agent_street_address_3: "",
    agent_country_address_3: "",
    agent_telephone_3: "",
    agent_fax_3: "",
    agent_reference_3: "",
    trademark_4: "Disneyland",
    language_5: "",
    translation_letters_5: "",
    translation_transliteration1_5: "",
    translation_transliteration2_5: "",
    checkBox_color_6: false,
    color_6: "",
    checkBox_shape_6: false,
    shape_6: "",
    checkBox_sound_6: false,
    checkBox_smell_6: false,
    checkBox_others_6: false,
    others_6: "",
    class1_7: "45",
    specification1_7: "Specification1 sample",
    class2_7: "42",
    specification2_7: "Specification2 sample",
    convention_date_8: "",
    convention_countries_8: "",
    convention_applications_8: "",
    convention_details_8: "",
    checkbox_certification_9: false,
    checkbox_collective_9: false,
    checkbox_defensive_9: false,
    disclaimer_10: "",
    confirmation_signatory_11: "",
    confirmation_capacity_11: "",
    confirmation_date_11: ""
  });

  const [isPending, setIsPending] = useState(false);
  const handleSubmit = (event) => {
    setIsPending(true);

    const pdf = {
      applicant_name_1: applicant_name_1,
      applicant_flat_address_1: applicant_flat_address_1,
      applicant_street_address_1: applicant_street_address_1,
      applicant_state_address_1: applicant_state_address_1,
      applicant_type_1: applicant_type_1,
      incorporation_country_1: incorporation_country_1,
      incorporation_state_1: incorporation_state_1,
      correspondence_name_2: correspondence_name_2,
      correspondence_flat_address_2: correspondence_flat_address_2,
      correspondence_street_address_2: correspondence_street_address_2,
      correspondence_telephone_2: correspondence_telephone_2,
      correspondence_fax_2: correspondence_fax_2,
      correspondence_reference_2: correspondence_reference_2,
      agent_name_3: agent_name_3,
      agent_flat_address_3: agent_flat_address_3,
      agent_street_address_3: agent_street_address_3,
      agent_country_address_3: agent_country_address_3,
      agent_telephone_3: agent_telephone_3,
      agent_fax_3: agent_fax_3,
      agent_reference_3: agent_reference_3,
      trademark_4: trademark_4,
      language_5: language_5,
      translation_letters_5: translation_letters_5,
      translation_transliteration1_5: translation_transliteration1_5,
      translation_transliteration2_5: translation_transliteration2_5,
      checkBox_color_6: checkBox_color_6,
      color_6: color_6,
      checkBox_shape_6: checkBox_shape_6,
      shape_6: shape_6,
      checkBox_sound_6: checkBox_sound_6,
      checkBox_smell_6: checkBox_smell_6,
      checkBox_others_6: checkBox_others_6,
      others_6: others_6,
      class1_7: class1_7,
      specification1_7: specification1_7,
      class2_7: class2_7,
      specification2_7: specification2_7,
      convention_date_8: convention_date_8,
      convention_countries_8: convention_countries_8,
      convention_applications_8: convention_applications_8,
      convention_details_8: convention_details_8,
      checkbox_certification_9: checkbox_certification_9,
      checkbox_collective_9: checkbox_collective_9,
      checkbox_defensive_9: checkbox_defensive_9,
      disclaimer_10: disclaimer_10,
      confirmation_signatory_11: confirmation_signatory_11,
      confirmation_capacity_11: confirmation_capacity_11,
      confirmation_date_11: confirmation_date_11
    };

    console.log(pdf);
    console.log(typeof pdf);

    axios
      .post(
        "http://172.31.16.20:8000/api/v1/pdfActionRequest",
        {
          actions: [{ type: "FillPDFForm", content: pdf }]
        },
        { responseType: "blob" }
      )
      .then((response) => {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Report.pdf");
        link.setAttribute("target", "_blank");

        document.body.appendChild(link);
        link.click();

        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error(error);
      });

    setIsPending(false);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  // const handleDateChange = (date) => setState({ ...state, date });

  const {
    // username,
    //  firstName,
    //  creditCard,
    //  mobile,
    //  password,
    //  confirmPassword,
    //  gender,
    //  date,
    //  email,
    applicant_name_1,
    applicant_flat_address_1,
    applicant_street_address_1,
    applicant_state_address_1,
    applicant_type_1,
    incorporation_country_1,
    incorporation_state_1,
    correspondence_name_2,
    correspondence_flat_address_2,
    correspondence_street_address_2,
    correspondence_telephone_2,
    correspondence_fax_2,
    correspondence_reference_2,
    agent_name_3,
    agent_flat_address_3,
    agent_street_address_3,
    agent_country_address_3,
    agent_telephone_3,
    agent_fax_3,
    agent_reference_3,
    trademark_4,
    language_5,
    translation_letters_5,
    translation_transliteration1_5,
    translation_transliteration2_5,
    checkBox_color_6,
    color_6,
    checkBox_shape_6,
    shape_6,
    checkBox_sound_6,
    checkBox_smell_6,
    checkBox_others_6,
    others_6,
    class1_7,
    specification1_7,
    class2_7,
    specification2_7,
    convention_date_8,
    convention_countries_8,
    convention_applications_8,
    convention_details_8,
    checkbox_certification_9,
    checkbox_collective_9,
    checkbox_defensive_9,
    disclaimer_10,
    confirmation_signatory_11,
    confirmation_capacity_11,
    confirmation_date_11
  } = state;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <p style={{ fontWeight: "bold", fontSize: "14px" }}>
          Part 01. Details of applicant making request under S.38(2)(a)(i) or (b)(i) of the Trade
          Marks Ordinance for registration of a trade mark
        </p>

        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <TextField
                  type="text"
                  name="applicant_name_1"
                  id="standard-basic"
                  value={applicant_name_1 || ""}
                  label="Name"
                  onChange={handleChange}
                  // errorMessages={["this field is required"]}
                  // validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
                />

                <TextField
                  type="text"
                  name="applicant_flat_address_1"
                  value={applicant_flat_address_1 || ""}
                  label="Flat/Floor/Building"
                  onChange={handleChange}
                  // validators={["required"]}
                  // errorMessages={["this field is required"]}
                />

                <TextField
                  type="text"
                  name="applicant_street_address_1"
                  label="Street/District/City"
                  value={applicant_street_address_1 || ""}
                  onChange={handleChange}
                  // validators={["required", "isEmail"]}
                  // errorMessages={["this field is required", "email is not valid"]}
                />

                <TextField
                  type="text"
                  name="applicant_state_address_1"
                  label="Country/Territory/Area"
                  value={applicant_state_address_1 || ""}
                  onChange={handleChange}
                  // validators={["required", "isEmail"]}
                  // errorMessages={["this field is required", "email is not valid"]}
                />

                {/* <TextField
                  sx={{ mb: 4 }}
                  type="number"
                  name="creditCard"
                  label="Credit Card"
                  onChange={handleChange}
                  value={creditCard || ""}
                  errorMessages={["this field is required"]}
                  validators={["required", "minStringLength:16", "maxStringLength: 16"]}
                /> */}
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <TextField
                  type="text"
                  name="incorporation_country_1"
                  value={incorporation_country_1 || ""}
                  label="Country/Territory/Area of incorporation"
                  onChange={handleChange}
                  // validators={["required"]}
                  // errorMessages={["this field is required"]}
                />
                <TextField
                  type="text"
                  name="incorporation_state_1"
                  label="State of incorporation (For applicant incorporated in the United States)"
                  value={incorporation_state_1 || ""}
                  onChange={handleChange}
                  // validators={["required"]}
                  // errorMessages={["this field is required"]}
                />
                {/* <TextField
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  label="Confirm Password"
                  value={confirmPassword || ""}
                  validators={["required", "isPasswordMatch"]}
                  errorMessages={["this field is required", "password didn't match"]}
                /> */}
                <RadioGroup
                  row
                  name="applicant_type_1"
                  sx={{ mb: 2 }}
                  value={applicant_type_1 || ""}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Individual"
                    label="Individual"
                    labelPlacement="end"
                    control={<Radio color="secondary" />}
                  />

                  <FormControlLabel
                    value="Incorporated"
                    label="Incorporated"
                    labelPlacement="end"
                    control={<Radio color="secondary" />}
                  />

                  <FormControlLabel
                    value="Unincorporated"
                    label="Unincorporated"
                    labelPlacement="end"
                    control={<Radio color="secondary" />}
                  />
                </RadioGroup>

                {/* <FormControlLabel
                  control={<Checkbox />}
                  label="I have read and agree to the terms of service."
                /> */}
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <p style={{ fontWeight: "bold", fontSize: "14px" }}>Part 02. Address for service</p>

        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <TextField
                  type="text"
                  name="correspondence_name_2"
                  value={correspondence_name_2 || ""}
                  label="Name"
                  onChange={handleChange}
                />

                <TextField
                  type="text"
                  name="correspondence_flat_address_2"
                  value={correspondence_flat_address_2 || ""}
                  label="Flat/Floor/Building"
                  onChange={handleChange}
                />

                <TextField
                  type="text"
                  name="correspondence_street_address_2"
                  label="Street/District"
                  value={correspondence_street_address_2 || ""}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <TextField
                  type="text"
                  name="correspondence_telephone_2"
                  label="Telephone no. in Hong Kong"
                  value={correspondence_telephone_2 || ""}
                  onChange={handleChange}
                />
                <TextField
                  type="text"
                  name="correspondence_fax_2"
                  value={correspondence_fax_2 || ""}
                  label="Fax no. in Hong Kong"
                  onChange={handleChange}
                />
                <TextField
                  type="text"
                  name="correspondence_reference_2"
                  label="Reference no."
                  value={correspondence_reference_2 || ""}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <p style={{ fontWeight: "bold", fontSize: "14px" }}>Part 03. Agent's details</p>

        <Card variant="outlined">
          <CardContent>
            <p style={{ margin: "0" }}>
              Required only if you have an agent to act on behalf of the applicant.
            </p>

            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <TextField
                  type="text"
                  name="agent_name_3"
                  value={agent_name_3 || ""}
                  label="Name"
                  onChange={handleChange}
                />

                <TextField
                  type="text"
                  name="agent_flat_address_3"
                  value={agent_flat_address_3 || ""}
                  label="Flat/Floor/Building"
                  onChange={handleChange}
                />

                <TextField
                  type="text"
                  name="agent_street_address_3"
                  label="Street/District"
                  value={agent_street_address_3 || ""}
                  onChange={handleChange}
                />

                <TextField
                  type="text"
                  name="agent_country_address_3"
                  label="Country"
                  value={agent_country_address_3 || ""}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <TextField
                  type="text"
                  name="agent_telephone_3"
                  label="Telephone no. in Hong Kong"
                  value={agent_telephone_3 || ""}
                  onChange={handleChange}
                />
                <TextField
                  type="text"
                  name="agent_fax_3"
                  value={agent_fax_3 || ""}
                  label="Fax no. in Hong Kong"
                  onChange={handleChange}
                />
                <TextField
                  type="text"
                  name="agent_reference_3"
                  label="Reference no."
                  value={agent_reference_3 || ""}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <p style={{ fontWeight: "bold", fontSize: "14px" }}>
          Part 05. Non-Roman letters and non-Chinese characters
        </p>

        <Card variant="outlined">
          <CardContent>
            <p style={{ margin: "0" }}>
              If the trade mark consists of or contains a word, letter or character that is neither
              in Roman letters nor in Chinese characters, please state the language and provide the
              transliteration or translation of the word, letter or character in the space below.
            </p>

            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                <TextField
                  type="text"
                  name="language_5"
                  value={language_5 || ""}
                  label="Language"
                  onChange={handleChange}
                  // errorMessages={["this field is required"]}
                  // validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
                />

                <TextField
                  type="text"
                  name="translation_letters_5"
                  value={translation_letters_5 || ""}
                  label="Non-Roman letters or non-Chinese characters"
                  onChange={handleChange}
                  // validators={["required"]}
                  // errorMessages={["this field is required"]}
                />

                <TextField
                  type="text"
                  name="translation_transliteration1_5"
                  value={translation_transliteration1_5 || ""}
                  label="Transliteration 1"
                  onChange={handleChange}
                  // validators={["required"]}
                  // errorMessages={["this field is required"]}
                />

                <TextField
                  type="text"
                  name="translation_transliteration2_5"
                  value={translation_transliteration2_5 || ""}
                  label="Transliteration 2"
                  onChange={handleChange}
                  // validators={["required"]}
                  // errorMessages={["this field is required"]}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <p style={{ fontWeight: "bold", fontSize: "14px" }}>
          Part 06. 3-Dimensional shape, color, sound, smell or other unconventional mark
        </p>

        <Card variant="outlined">
          <CardContent>
            <p style={{ margin: "0" }}>
              Required only if you claim color(s) or 3-dimensional shape as a trade mark or as an
              element of a trade mark, or the trade mark is a sound, smell or other unconventional
              mark.
            </p>

            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkBox_color_6}
                      onChange={handleCheckboxChange("checkBox_color_6")}
                      value="checkBox_color_6"
                    />
                  }
                  label="Colour"
                />

                <TextField
                  type="text"
                  name="color_6"
                  value={color_6 || ""}
                  label="Example: The applicant claims the colours red and blue as elements of the trade mark."
                  onChange={handleChange}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkBox_shape_6}
                      onChange={handleCheckboxChange("checkBox_shape_6")}
                      value="checkBox_shape_6"
                    />
                  }
                  label="3-Dimensional shape"
                />

                <TextField
                  type="text"
                  name="shape_6"
                  value={shape_6 || ""}
                  label="Example: The mark consists of a 3-dimensional shape. The applicant claims the shape of a shell as an element of the trade mark."
                  onChange={handleChange}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkBox_sound_6}
                      onChange={handleCheckboxChange("checkBox_sound_6")}
                      value="checkBox_sound_6"
                    />
                  }
                  label="Sound"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkBox_smell_6}
                      onChange={handleCheckboxChange("checkBox_smell_6")}
                      value="checkBox_smell_6"
                    />
                  }
                  label="Smell"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkBox_others_6}
                      onChange={handleCheckboxChange("checkBox_others_6")}
                      value="checkBox_others_6"
                    />
                  }
                  label="Others"
                />

                <TextField
                  type="text"
                  name="others_6"
                  value={others_6 || ""}
                  label="Please specify here:"
                  onChange={handleChange}
                  // validators={["required"]}
                  // errorMessages={["this field is required"]}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <p style={{ fontWeight: "bold", fontSize: "14px" }}>Part 08. Convention priority details</p>

        <Card variant="outlined">
          <CardContent>
            <p style={{ margin: "0" }}>
              If you have duly filed an application for registration of this trade mark in respect
              of the same goods or services in a Paris Convention country or WTO member within 6
              months prior to the date of filing of this application, right of priority can be
              claimed. A claim of multiple priority dates in respect of different goods and/or
              services is acceptable.
            </p>
            <p>If you claim priority, please provide particulars of the claim.</p>

            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <TextField
                  type="text"
                  name="convention_date_8"
                  value={convention_date_8 || ""}
                  label="Priority dates(s) claimed (DD-MM-YYYY)"
                  onChange={handleChange}
                />

                <TextField
                  type="text"
                  name="convention_countries_8"
                  value={convention_countries_8 || ""}
                  label="Countries/Territories/Areas"
                  onChange={handleChange}
                />
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <TextField
                  type="text"
                  name="convention_applications_8"
                  label="Application no(s). (If known)"
                  value={convention_applications_8 || ""}
                  onChange={handleChange}
                />
                <TextField
                  type="text"
                  name="convention_details_8"
                  value={convention_details_8 || ""}
                  label="Partial priority claim details"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <p style={{ fontWeight: "bold", fontSize: "14px" }}>
          Part 09. Certification, collective or defensive mark
        </p>

        <Card variant="outlined">
          <CardContent>
            <p style={{ margin: "0" }}>
              Please indicate by marking the appropriate box the type of mark you are applying for
              registration.
            </p>

            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkbox_certification_9}
                      onChange={handleCheckboxChange("checkbox_certification_9")}
                      value="checkbox_certification_9"
                    />
                  }
                  label="Certification mark"
                />

                <p style={{ paddingLeft: "32px", margin: "0" }}>
                  If this application is for a certification mark, you must file regulations within
                  9 months from the date when you file this application. Attention is drawn to
                  paragraphs 6 and 7 of Schedule 4 to the Trade Marks Ordinance and rule 101 of the
                  Trade Marks Rules. The Trade Marks Ordinance and the Trade Marks Rules can be
                  viewed at www.ipd.gov.hk.
                </p>

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkbox_collective_9}
                      onChange={handleCheckboxChange("checkbox_collective_9")}
                      value="checkbox_collective_9"
                    />
                  }
                  label="Collective mark"
                />

                <p style={{ paddingLeft: "32px", margin: "0" }}>
                  If this application is for a collective mark, you must file regulations within 9
                  months from the date when you file this application. Attention is drawn to
                  paragraphs 5 and 6 of Schedule 3 to the Trade Marks Ordinance and rule 100 of the
                  Trade Marks Rules. The Trade Marks Ordinance and the Trade Marks Rules can be
                  viewed at www.ipd.gov.hk.
                </p>

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkbox_defensive_9}
                      onChange={handleCheckboxChange("checkbox_defensive_9")}
                      value="checkbox_defensive_9"
                    />
                  }
                  label="Defensive mark"
                />

                <p style={{ paddingLeft: "32px", margin: "0" }}>
                  If this application is for a defensive mark, you must file statutory declaration
                  or affidavit within 9 months from the date when you file this application.
                  Attention is drawn to section 60 of the Trade Marks Ordinance and rule 99 of the
                  Trade Marks Rules. The Trade Marks Ordinance and the Trade Marks Rules can be
                  viewed at www.ipd.gov.hk.
                </p>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <p style={{ fontWeight: "bold", fontSize: "14px" }}>
          Part 10. Disclaimer, limitation or condition
        </p>

        <Card variant="outlined">
          <CardContent>
            <p style={{ margin: "0" }}>
              If you want to disclaim the right to the exclusive use of any part of your mark or to
              limit your use of the mark, please give details.
            </p>

            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                <TextField
                  type="text"
                  name="disclaimer_10"
                  value={disclaimer_10 || ""}
                  label="Disclaimer/Limitation/Condition"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <p style={{ fontWeight: "bold", fontSize: "14px" }}>Part 11. Confirmation</p>

        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  type="text"
                  name="confirmation_signatory_11"
                  value={confirmation_signatory_11 || ""}
                  label="Name of signatory"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  type="text"
                  name="confirmation_capacity_11"
                  value={confirmation_capacity_11 || ""}
                  label="Official capacity of signatory"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  type="text"
                  name="confirmation_date_11"
                  value={confirmation_date_11 || ""}
                  label="Date (DD-MM-YYYY)"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <br />

        {!isPending && (
          <Button color="primary" variant="contained" type="submit">
            <Icon>send</Icon>
            <Span sx={{ pl: 1, textTransform: "capitalize" }}>Generate</Span>
          </Button>
        )}
        {isPending && (
          <Button disabled color="primary" variant="contained" type="submit">
            <Icon>send</Icon>
            <Span sx={{ pl: 1, textTransform: "capitalize" }}>Generate</Span>
          </Button>
        )}
      </ValidatorForm>
    </div>
  );
};

export default SimpleForm;
