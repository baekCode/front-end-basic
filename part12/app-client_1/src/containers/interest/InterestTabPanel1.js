import React from "react";
import TabPanel from "../../components/Tabs/TabPanel";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

// function Test1() {
//   return (
//     <div>1</div>
//   );
// }
// class Test1 extends React.Component {
//   render() {
//     return (
//       <div>1</div>
//     );
//   }
// }
class InterestTabPanel1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    }
  }

  handleClose = () => {
    this.setState({
      opened: false
    })
  };

  render() {
    return (
      <TabPanel value={this.props.value} index={0}>
        <Button variant={'contained'}
                color={'primary'}
                onClick={() => this.setState({opened: true})}>
          열기
        </Button>
        <Dialog
          open={this.state.opened}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </TabPanel>
    )
  }
}

export default InterestTabPanel1;