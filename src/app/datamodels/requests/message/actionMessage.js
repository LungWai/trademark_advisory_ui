class ActionMessageRequest{
    constructor(actions) {
      this.actions = actions;
    }
}

class Action{
  constructor(type, content) {
    this.type = type;
    this.content = content; 
  }
}

class GenerateSpecification{
  constructor(type, content) {
    this.type = type;
    this.content = content;
  }
}

class ValidateTrademarkName{
  constructor(type, content) {
    this.type = type;
    this.content = content;
  }
}

class TrademarkNameValidationRequest{
  constructor(name, classes) {
    this.name = name;
    this.classes = classes;
  }
}

class BusinessNatureAnalysis{
  constructor(type, content) {
    this.type = type;
    this.content = content;
  }
}

class ActionAndMessageRequest{
  constructor(actions, message) {
    this.actions = actions;
    this.message = message;
  }
}

class MessageRequest{
  constructor(message){
    this.message = message;
  }
}

class Message{
  constructor(speaker, message, created_at, id) {
    this.speaker = speaker;
    this.message = message;
    this.created_at = created_at;
    this.id = id;
  }
}

class FillPDFFormRequest{
  constructor(
    applicant_name_1, 
    applicant_flat_address_1, 
    applicant_street_address_1,
    applicant_country_address_1,
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
    trademark_logo_4,
    trademark_text_4,
    trademark_series_4,
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
    specification,
    specification_total_7,
    convention_date_8,
    convention_countries_8,
    convention_applications_8,
    convention_details_8,
    checkbox_certification_9,
    checkbox_collective_9,
    checkbox_defensive_9,
    disclaimer_10,
    confirmation_signature_11,
    confirmation_signatory_11,
    confirmation_capacity_11,
    confirmation_date_11,
    attachment_number_12
  ) {
    this.applicant_name_1 = applicant_name_1;
    this.applicant_flat_address_1 = applicant_flat_address_1;
    this.applicant_street_address_1 = applicant_street_address_1;
    this.applicant_country_address_1 = applicant_country_address_1;
    this.applicant_state_address_1 = applicant_state_address_1;
    this.applicant_type_1 = applicant_type_1;
    this.incorporation_country_1 = incorporation_country_1;
    this.incorporation_state_1 = incorporation_state_1;
    this.correspondence_name_2 = correspondence_name_2;
    this.correspondence_flat_address_2 = correspondence_flat_address_2;
    this.correspondence_street_address_2 = correspondence_street_address_2;
    this.correspondence_telephone_2 = correspondence_telephone_2;
    this.correspondence_fax_2 = correspondence_fax_2;
    this.correspondence_reference_2 = correspondence_reference_2;
    this.agent_name_3 = agent_name_3;
    this.agent_flat_address_3 = agent_flat_address_3;
    this.agent_street_address_3 = agent_street_address_3;
    this.agent_country_address_3 = agent_country_address_3;
    this.agent_telephone_3 = agent_telephone_3;
    this.agent_fax_3 = agent_fax_3;
    this.agent_reference_3 = agent_reference_3;
    this.trademark_logo_4 = trademark_logo_4;
    this.trademark_text_4 = trademark_text_4;
    this.trademark_series_4 = trademark_series_4;
    this.language_5 = language_5;
    this.translation_letters_5 = translation_letters_5;
    this.translation_transliteration1_5 = translation_transliteration1_5;
    this.translation_transliteration2_5 = translation_transliteration2_5;
    this.checkBox_color_6 = checkBox_color_6;
    this.color_6 = color_6;
    this.checkBox_shape_6 = checkBox_shape_6;
    this.shape_6 = shape_6;
    this.checkBox_sound_6 = checkBox_sound_6;
    this.checkBox_smell_6 = checkBox_smell_6;
    this.checkBox_others_6 = checkBox_others_6;
    this.others_6 = others_6;
    this.specification = specification;
    this.specification_total_7 = specification_total_7;
    this.convention_date_8 = convention_date_8;
    this.convention_countries_8 = convention_countries_8;
    this.convention_applications_8 = convention_applications_8;
    this.convention_details_8 = convention_details_8;
    this.checkbox_certification_9 = checkbox_certification_9;
    this.checkbox_collective_9 = checkbox_collective_9;
    this.checkbox_defensive_9 = checkbox_defensive_9;
    this.disclaimer_10 = disclaimer_10;
    this.confirmation_signature_11 = confirmation_signature_11;
    this.confirmation_signatory_11 = confirmation_signatory_11;
    this.confirmation_capacity_11 = confirmation_capacity_11;
    this.confirmation_date_11 = confirmation_date_11;
    this.attachment_number_12 = attachment_number_12;  
  }
}

class Specification{
  constructor(class_name, specification) {
    this.class_name = class_name;
    this.specification = specification;
  }
}

class ValidateTrademarkNameResult{
  constructor(type, content) {
    this.type = type;
    this.content = content;
  }
}