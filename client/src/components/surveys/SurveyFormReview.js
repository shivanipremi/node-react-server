import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import FIELDS from "./formFields";
import * as actions from "../../actions";
import { withRouter } from "react-router";
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  console.log("formValues===", formValues);
  const reviewFields = _.map(FIELDS, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h5>Please confirm your enteries </h5>
      {reviewFields}
      <button
        className="btn-flat yellow darken-3 white-text"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="btn-flat green right white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};
function mapStateToProps(state) {
  console.log("state=====", state);
  return { formValues: state.form.SurveyForm.values };
}
export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
