import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "./../../utils/validateEmail";
import FIELDS from "./formFields";
const _ = require("lodash");

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, field => {
      return (
        <Field
          key={field.name}
          label={field.label}
          type="text"
          name={field.name}
          component={SurveyField}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn white-text btn-flat">
            Cancel
          </Link>
          <button type="submit" className="teal btn btn-flat right white-text">
            Next
            <i className="right material-icons">done</i>
          </button>
        </form>
      </div>
    );
  }
}
function validate(values) {
  console.log("Values here====", values);
  const errors = {};
  if (!values.title) {
    errors.title = "You must provide a title";
  }
  if (!values.subject) {
    errors.subject = "You must provide a subject";
  }
  if (!values.body) {
    errors.body = "You must provide a email";
  }
  if (!values.recipients) {
    errors.recipients = "You must provide a recipient";
  }
  if (values.recipients) {
    errors.recipients = validateEmails(values.recipients || "");
  }

  console.log("errors");
  return errors;
}

SurveyForm = reduxForm({
  validate,
  form: "SurveyForm",
  destroyOnUnmount: false // a unique name for this form
})(SurveyForm);
export default SurveyForm;
