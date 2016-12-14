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

class MptTicketCreatorForm extends React.Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div style={styles.root}>
        <form>
          <h1>Multiplication Ticket Creator</h1>
          <Field name="gameMPTTable" component={SelectField} hintText="Game Table">
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
          <Field name="gameDifficulty" component={RadioButtonGroup}>
            <RadioButton value="easy" label="easy"/>
            <RadioButton value="moderate" label="moderate"/>
            <RadioButton value="hard" label="hard"/>
            <RadioButton value="extreme" label="extreme"/>
          </Field>
         <Field name="time"
                component={TextField}
                hintText="Game Time"
                floatingLabelText="Game Time"/>
         <Field name="qTotal"
                component={TextField}
                hintText="Amount of q's"
                floatingLabelText="Amount of q's"/>
         <Field name="pointsPerCorrect"
                component={TextField}
                hintText="Points per correct"
                floatingLabelText="Points per correct"/>
         <Field name="pointsPerWrong"
                component={TextField}
                hintText="Points per wrong"
                floatingLabelText="Points per wrong"/>
         <Field name="bonus100Perc"
                component={TextField}
                hintText="100% bonus pts"
                floatingLabelText="100% bonus pts"/>
         <Field name="bonus90Perc"
                component={TextField}
                hintText="100% bonus pts"
                floatingLabelText="90% bonus pts"/>
         <Field name="bonus80Perc"
                component={TextField}
                hintText="100% bonus pts"
                floatingLabelText="80% bonus pts"/>
         <Field name="penalty49Perc"
                component={TextField}
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
  form: 'MptTicketCreatorForm'
})(MptTicketCreatorForm);

export default MptTicketCreatorForm;
