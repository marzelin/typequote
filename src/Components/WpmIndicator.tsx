import * as React from "react";
import { connect } from "react-redux";
import { IStore } from "../store";
import WpmView from "./Views/WpmIndicator";

const millisecsInMin = 60000; // 1000 milli * 60 secs
const charsInWord = 5;
const updatePeriod = 1000;

interface IProps {
  startTime: number;
  isPlaying: boolean;
  current: number;
}

interface IState {
  wpm: number;
}

class WpmIndicator extends React.Component<IProps, IState> {
  public state = { wpm: 0 };
  private intervalId: number;
  public componentWillReceiveProps({ isPlaying, startTime }: IProps) {
    const { isPlaying: prevIsPlaying, startTime: prevStartTime } = this.props;

    if (isPlaying !== prevIsPlaying) {
      if (isPlaying === true) {
        // typing started
        this.resetWpm();
        this.startUpdating();
      } else {
        // typing completed
        this.stopUpdating();
      }
    } else if (startTime !== prevStartTime) {
      // typing restarted
      this.resetWpm();
      this.stopUpdating();
      this.startUpdating();
    }
  }
  public render() {
    return <WpmView wpm={this.state.wpm} />;
  }
  public componentWillUnmount() {
    this.stopUpdating();
  }
  private resetWpm() {
    this.setState(() => ({ wpm: 0 }));
  }
  private startUpdating = () => {
    this.intervalId = self.setInterval(this.updateWpm, updatePeriod);
  };
  private stopUpdating = () => {
    clearInterval(this.intervalId);
  };
  private updateWpm = () => {
    const { current: typedCharsCount, startTime } = this.props;

    const typingTimeInMins = (Date.now() - startTime) / millisecsInMin;
    const wpm = Math.floor(typedCharsCount / typingTimeInMins / charsInWord);

    this.setState(() => ({ wpm }));
  };
}

const mapState = ({ startTime, isPlaying, current }: IStore) => {
  return { startTime, isPlaying, current };
};

export default connect(mapState)(WpmIndicator);
