import React from 'react'
import { connect } from 'react-redux'
import { Divider, Drawer, FlatButton, List, ListItem } from 'material-ui'
import DashboardIcon from 'material-ui/svg-icons/action/dashboard'
import LibraryBooksIcon from 'material-ui/svg-icons/av/library-books'
import WorkIcon from 'material-ui/svg-icons/action/work'
import ForumIcon from 'material-ui/svg-icons/communication/forum'
import ViewAgendaIcon from 'material-ui/svg-icons/action/view-agenda'
import HourglassEmptyIcon from 'material-ui/svg-icons/action/hourglass-empty'
import EmailIcon from 'material-ui/svg-icons/communication/email'
// import { ImpressumDialog } from './dialogs/ImpressumDialog'
// import { AGBDialog } from './dialogs/AGBDialog'
// import { DSEDialog } from './dialogs/DSEDialog'
// import ProfileMenu from '../containers/ProfileMenu'
// import toggleMenu from '../actions'

class MainSidebarNavImpl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileView: window.innerWidth < 1024,
      open: false,
      loginOpen: false,
      registerOpen: false
    }

    this.handleResize = () => {
      this.setState({
        mobileView: window.innerWidth < 1024
      })
    }
  }


  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  impressumOpen() {
    this.setState({ impressumOpen: true })
  }

  onImpressumCancel() {
    this.setState({ impressumOpen: false })
  }

  agbOpen() {
    this.setState({ agbOpen: true })
  }

  onAGBCancel() {
    this.setState({ agbOpen: false })
  }

  dseOpen() {
    this.setState({ dseOpen: true })
  }

  onDSECancel() {
    this.setState({ dseOpen: false })
  }

  handleClose() {
    if (this.state.mobileView) {
      this.props.dispatch(toggleMenu())
    }
  }

  render() {
    return (
      <div>
        <Drawer
          docked={!this.state.mobileView}
          open={this.state.mobileView ? this.props.menuOpen : true}
          onRequestChange={() => this.handleClose()}
        >
          {/* <ProfileMenu /> */}

          <List>
            <ListItem
              leftIcon={<DashboardIcon />}
              href="/"
              primaryText="HOME"
              onTouchTap={() => this.handleClose()}
            />
            <ListItem
              leftIcon={<LibraryBooksIcon />}
              href="/item2"
              primaryText="Item 2"
              onTouchTap={() => this.handleClose()}
            />
            <ListItem
              leftIcon={<WorkIcon />}
              href="#"
              primaryText="S.E.L.F"
              onTouchTap={() => this.handleClose()}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  href="/q"
                  primaryText="X"
                  key={1}
                  onTouchTap={() => this.handleClose()}
                />,
                <ListItem
                  href="/tc"
                  primaryText="'+-++-+--...'"
                  key={2}
                  onTouchTap={() => this.handleClose()}
                />,
                <ListItem
                  href="/item3/subitem1"
                  primaryText="PEMDAS"
                  key={3}
                  onTouchTap={() => this.handleClose()}
                />
              ]}
            />
            <Divider />
            <ListItem
              leftIcon={<EmailIcon />}
              href="/contact"
              primaryText="Contact"
              onTouchTap={() => this.handleClose()}
            />
          </List>
          {/* <FlatButton
            label="Impressum"
            onTouchTap={() => this.impressumOpen()}
          />
          <FlatButton
            label="AGB"
            onTouchTap={() => this.agbOpen()}
          />
          <FlatButton
            label="Datenschutzbestimmungen"
            onTouchTap={() => this.dseOpen()}
          /> */}

          {/* <ImpressumDialog
            open={this.state.impressumOpen}
open= {false} //DELETME
            onCancel={() => this.onImpressumCancel()}
            onRequestClose={() => this.onImpressumCancel()}
          />
          <AGBDialog
            open={this.state.agbOpen}
open= {false}  //DELETME
            onCancel={() => this.onAGBCancel()}
            onRequestClose={() => this.onAGBCancel()}
          />
          <DSEDialog
            open={this.state.dseOpen}
open= {false}  //DELETME
            onCancel={() => this.onDSECancel()}
            onRequestClose={() => this.onDSECancel()}
          /> */}
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  menuOpen: state.menu.menuOpen
})

export const MainSidebarNav = connect(mapStateToProps)(MainSidebarNavImpl)
