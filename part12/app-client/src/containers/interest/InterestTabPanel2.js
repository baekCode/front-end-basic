import React from "react";
import TabPanel from "../../components/Tabs/TabPanel";
import Grid from "@material-ui/core/Grid";
import {VolumeDown, VolumeUp} from "@material-ui/icons";
import Slider from "@material-ui/core/Slider";
import {inject, observer} from "mobx-react";

@inject('volumeStore')
@observer
class InterestTabPanel2 extends React.Component {
  render() {
    console.log('render, ',this.props.volumeStore.volume);
    return (
      <TabPanel value={this.props.value} index={1}>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider value={this.props.volumeStore.volume}
                    onChange={this.props.volumeStore.changeVolume}
                    aria-labelledby="continuous-slider" />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
      </TabPanel>
    )
  }
}

export default InterestTabPanel2;