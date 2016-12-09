import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * Import all actions as an object.
 */
import * as Actions from '../actions';

class GamesTicketCardImpl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: true}
  }
  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
         <CardHeader
           title="URL Avatar"
           subtitle="Subtitle"
           avatar="src/MPT_avatar.jpeg"
           actAsExpander={true}
           showExpandableButton={true}
         />
         <CardText>
           <Toggle
             toggled={this.state.expanded}
             onToggle={this.handleToggle}
             labelPosition="right"
             label="This toggle controls the expanded state of the component."
           />
         </CardText>
         <CardMedia
           expandable={true}
           overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
         >
           <img src="images/nature-600-337.jpg" />
         </CardMedia>
         <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
         <CardText expandable={true}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
           Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
           Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
         </CardText>
         <CardActions>
           <FlatButton label="Expand" onTouchTap={this.handleExpand} />
           <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
         </CardActions>
       </Card>
    );
  }
}

// export default GamesTicketCard;
/**
 * This function maps the state to a
 * prop called `state`.
 *
 * In larger apps it is often good
 * to be more selective and only
 * map the part of the state tree
 * that is necessary.
 */
const mapStateToProps = (state) => ({
  state: state
});

/**
 * This function maps actions to props
 * and binds them so they can be called
 * directly.
 *
 * In this case all actions are mapped
 * to the `actions` prop.
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

/**
 * Finally the Redux store is connected
 * to the component with the `connect()`
 * function.
 */
export const GamesTicketCard = connect(
                                    mapStateToProps,
                                    mapDispatchToProps
                                  )(GamesTicketCardImpl);
