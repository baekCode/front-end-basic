import {action, observable} from "mobx";

class VolumeStore {
  static MAX = 100;
  static MIN = 0;
  @observable volume = 0;

  @action
  changeVolume = (e, v) => {
    console.log('changeVolume', this.volume);
    this.volume = v;
  };

  @action
  volumeUp = () => {
    if (this.volume <= VolumeStore.MAX) {
      this.volume++;
    }
  };

  @action
  volumeDown = () => {
    if (this.volume >= VolumeStore.MIN) {
      this.volume--;
    }
  }
}

export default VolumeStore;