import React from "react";
import TabPanel from "../../components/Tabs/TabPanel";
import {inject, observer} from "mobx-react";

@inject('volumeStore')
class InterestTabPanel3 extends React.Component {
  render() {
    return (
      <TabPanel value={this.props.value} index={2}>
        {this.props.volumeStore.volume ? this.props.volumeStore.volume : '음소거'}
      </TabPanel>
    )
  }
}

export default InterestTabPanel3;