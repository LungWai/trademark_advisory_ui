class ActionResponseResult{
    constructor(is_error, error_message, result) {
      this.is_error = is_error;
      this.error_message = error_message;
      this.result = result;
    }
 }

class ActionMessageResult{
    constructor(actions) {
        this.actions(actions);
    }
}

class Action{
    constructor(type, content) {
      this.type = type;
      this.content = content; 
    }
  }

class GenerateSpecificationResult{
    constructor(type, content) {
        this.type = type;
        this.content = content;
    }
  }

class Specification{
    constructor(class_name, specification) {
      this.class_name = class_name;
      this.specification = specification;
    }
  }

  class ActionAndMessageResponseResult{
    constructor(is_error, error_message, result) {
        this.is_error = is_error;
        this.error_message = error_message;
        this.result = result;
    }
  }
  
  class ActionAndMessageResult{
    constructor(actions, messages) {
        this.actions = actions;
        this.messages = messages;
    }
  }



  class ValidateTrademarkNameResult{
    constructor(type, content) {
        this.type = type;
        this.content = content;
    }
  }

  class TrademarkNameValidationResult{
    constructor(is_rejected, rejected_reasons) {
        this.is_rejected = is_rejected;
        this.rejected_reasons = rejected_reasons;
    }
  }

  class RejectionReason{
    constructor(rejection_class, rejection_reason) {
        this.rejection_class = rejection_class;
        this.rejection_reason = rejection_reason;
    }
  }





  class MessageResponseResult{
    constructor(is_error, error_message, result) {
        this.is_error = is_error;
        this.error_message = error_message;
        this.result = result;
    }
  }

  class MessageResult{
    constructor(messages) {
        this.messages = messages;
    }
  }

  class Message{
    constructor(speaker, message, created_at, id, suggestion) {
        this.speaker = speaker;
        this.message = message;
        this.created_at = created_at;
        this.id = id;
        this.suggestion = suggestion;
    }
  }

  class BusinessNatureAnalysisResult{
    constructor(type, content) {
        this.type = type;
        this.content = content;
    }
  }

  class AnalysisResult{
    constructor(
        core_product_or_service, 
        target_market, 
        business_goal, 
        key_benefit, 
        unique_selling_proposition, 
        brand_personality, 
        brand_story, 
        emotional_connection) {
        this.core_product_or_service = core_product_or_service;
        this.target_market = target_market;
        this.business_goal = business_goal;
        this.key_benefit = key_benefit;
        this.unique_selling_proposition = unique_selling_proposition;
        this.brand_personality = brand_personality;
        this.brand_story = brand_story;
        this.emotional_connection = emotional_connection;
    }
  }