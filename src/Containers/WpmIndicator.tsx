import { IStoreState } from "@appState/store";

import WpmView from "@Views/WpmIndicator";

import * as React from "react";
import { connect } from "react-redux";

const millisecsInMin = 60000; // 1000 milli * 60 secs
const charsInWord = 5;
const updatePeriod = 1000;

interface IProps {
  startTime: number | null;
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
    const { resetWpm, startUpdatingWpm, stopUpdatingWpm, updateWpm } = this;

    if (isPlaying !== prevIsPlaying) {
      if (isPlaying) {
        // typing started
        resetWpm();
        startUpdatingWpm();
      } else {
        // typing completed
        stopUpdatingWpm();
        updateWpm();
      }
    } else if (isPlaying && startTime !== prevStartTime) {
      // typing restarted
      resetWpm();
      stopUpdatingWpm();
      startUpdatingWpm();
    }
  }

  public render() {
    return <WpmView wpm={this.state.wpm} />;
  }

  public componentWillUnmount() {
    this.stopUpdatingWpm();
  }

  private resetWpm = () => {
    this.setState(() => ({ wpm: 0 }));
  };

  private startUpdatingWpm = () => {
    this.intervalId = self.setInterval(this.updateWpm, updatePeriod);
  };

  private stopUpdatingWpm = () => {
    clearInterval(this.intervalId);
  };

  private updateWpm = () => {
    const { current: typedCharsCount, startTime } = this.props;

    if (startTime === null) {
      this.resetWpm();
      return;
    }

    const typingTimeInMins = (Date.now() - startTime) / millisecsInMin;
    const wpm = Math.floor(typedCharsCount / typingTimeInMins / charsInWord);

    this.setState(() => ({ wpm }));
  };
}

const mapState = ({ startTime, isPlaying, current }: IStoreState) => {
  return { startTime, isPlaying, current };
};

export default connect(mapState)(WpmIndicator);
