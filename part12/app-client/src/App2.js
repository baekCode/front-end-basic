import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./components/Tabs/TabPanel";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import InterestTabPanel1 from "./containers/interest/InterestTabPanel1";
import InterestTabPanel2 from "./containers/interest/InterestTabPanel2";
import InterestTabPanel3 from "./containers/interest/InterestTabPanel3";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const App2 = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <InterestTabPanel1 value={value} />
      <InterestTabPanel2 value={value} />
      <InterestTabPanel3 value={value} />
    </div>
  );
};

export default App2;