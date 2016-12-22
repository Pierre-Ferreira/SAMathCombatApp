import React from 'react';
import { reduxForm, Field } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  RadioButtonGroup,
  SelectField,
  TextField
} from 'redux-form-material-ui';

const styles = {
  root: {

  },
  styleRaisedButton: {
    margin: 12,
  }
};


const validate = values => {
  const errors = {};
  const requiredFields = [ 'gameMPTTable',
                           'gameDifficulty',
                           'time',
                           'qTotal',
                           'pointsPerCorrect',
                           'pointsPerWrong',
                           'bonus100Perc',
                           'bonus90Perc',
                           'bonus80Perc',
                           'penalty49Perc' ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  const digitsOnlyFields = [ 'time',
                             'qTotal',
                             'pointsPerCorrect',
                             'pointsPerWrong',
                             'bonus100Perc',
                             'bonus90Perc',
                             'bonus80Perc',
                             'penalty49Perc' ];
  digitsOnlyFields.forEach(field => {
    if (!/^-?\d+$/i.test(values[field])) {
      errors[field] = errors[field] ? errors[field] + ', ' + 'Digits only' : 'Digits only';
    }
  });
  const negativeDigitsOnlyFields = [ 'pointsPerWrong',
                                     'penalty49Perc' ];
  digitsOnlyFields.forEach(field => {
    if (values[field] > 0) {
      errors[field] = errors[field] ?
                      errors[field] + ', ' + 'Negative Digits only' :
                      'Negative Digits only';
    }
  });
  return errors;
};

const renderTextField = props => (
  <TextField hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.touched && props.error}
    {...props}
  />
);

const renderCheckbox = props => (
  <Checkbox label={props.label}
    checked={props.value ? true : false}
    onCheck={props.onChange}/>
)

const renderSelectField = props => (
  <SelectField
    floatingLabelText={props.label}
    errorText={props.touched && props.error}
    {...props}
    onChange={(event, index, value) => props.onChange(value)}>
  </SelectField>
)

class MptTicketCreatorForm extends React.Component {

  _ticketCreateSubmit(e) {
    // e.preventDefault();
    let ticketObj = this.props.Store.getState().form.MptTicketCreatorForm.values;
console.log("ticketObj",ticketObj)
    let {CreateMPTTicket} = this.props;
    CreateMPTTicket(ticketObj)
  }

  render() {
    const { change, handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div style={styles.root}>
        <form onSubmit={handleSubmit(this._ticketCreateSubmit.bind(this))}>
          <h1>Multiplication Ticket Creator</h1>
          <Field name="gameMPTTable" component={renderSelectField} hintText="Game Table">
            <MenuItem value="MPT_1" primaryText="1x Table"/>
            <MenuItem value="MPT_2" primaryText="2x Table"/>
            <MenuItem value="MPT_3" primaryText="3x Table"/>
            <MenuItem value="MPT_4" primaryText="4x Table"/>
            <MenuItem value="MPT_5" primaryText="5x Table"/>
            <MenuItem value="MPT_6" primaryText="6x Table"/>
            <MenuItem value="MPT_7" primaryText="7x Table"/>
            <MenuItem value="MPT_8" primaryText="8x Table"/>
            <MenuItem value="MPT_9" primaryText="9x Table"/>
            <MenuItem value="MPT_10" primaryText="10x Table"/>
            <MenuItem value="MPT_11" primaryText="11x Table"/>
            <MenuItem value="MPT_12" primaryText="12x Table"/>
            <MenuItem value="MPT_13" primaryText="13x Table"/>
            <MenuItem value="MPT_14" primaryText="14x Table"/>
            <MenuItem value="MPT_15" primaryText="15x Table"/>
          </Field>
          <Field name="gameDifficulty" component={renderSelectField} hintText="Game Difficulty">
            <MenuItem value="easy" primaryText="easy"/>
            <MenuItem value="moderate" primaryText="moderate"/>
            <MenuItem value="hard" primaryText="hard"/>
            <MenuItem value="extreme" primaryText="extreme"/>

          </Field>
         <Field name="time"
                component={renderTextField}
                hintText="Game Time"
                floatingLabelText="Game Time"/>
         <Field name="qTotal"
                component={renderTextField}
                hintText="Amount of q's"
                floatingLabelText="Amount of q's"/>
         <Field name="pointsPerCorrect"
                component={renderTextField}
                hintText="Points per correct"
                floatingLabelText="Points per correct"/>
         <Field name="pointsPerWrong"
                component={renderTextField}
                hintText="Points per wrong"
                floatingLabelText="Points per wrong"/>
         <Field name="bonus100Perc"
                component={renderTextField}
                hintText="100% bonus pts"
                floatingLabelText="100% bonus pts"/>
         <Field name="bonus90Perc"
                component={renderTextField}
                hintText="100% bonus pts"
                floatingLabelText="90% bonus pts"/>
         <Field name="bonus80Perc"
                component={renderTextField}
                hintText="100% bonus pts"
                floatingLabelText="80% bonus pts"/>
         <Field name="penalty49Perc"
                component={renderTextField}
                hintText="<50% penalty pts"
                floatingLabelText="<50% penalty pts"/>
          <div>
            <RaisedButton type="submit"
                    disabled={pristine || submitting}
                    primary={true}
                    style={styles.styleRaisedButton}
                    label="Submit" />
            <RaisedButton type="button"
                    disabled={pristine || submitting}
                    primary={true}
                    onClick={reset}
                    style={styles.styleRaisedButton}
                    label="Clear Values" />
          </div>
        </form>
      </div>
    );
  }
}

// Decorate with redux-form
MptTicketCreatorForm = reduxForm({
  form: 'MptTicketCreatorForm',
  validate
})(MptTicketCreatorForm);

export default MptTicketCreatorForm;
