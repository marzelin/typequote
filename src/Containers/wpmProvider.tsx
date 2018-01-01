import { IStoreState } from "@state/store";

import { calculateWpm } from "@helpers/calculateWpm";

import * as React from "react";
import { connect } from "react-redux";

const updatePeriod = 1000;

interface IProps {
  startTime: number | null;
  isPlaying: boolean;
  current: number;
}

interface IState {
  wpm: number;
}

function wpmProvider<T extends object>(Comp: React.ComponentType<T>) {
  // { [K in keyof T]: T[K]} is needed to make `...rest` work
  class WpmProvider extends React.Component<
    IProps & { [K in keyof T]: T[K] },
    IState
  > {
    public state = { wpm: 0 };
    private intervalId: number;

    public componentWillReceiveProps({ isPlaying, startTime }: IProps) {
      const { isPlaying: prevIsPlaying, startTime: prevStartTime } = this.props;
      const { resetWpm, startUpdatingWpm, stopUpdatingWpm, updateWpm } = this;

      if (isPlaying !== prevIsPlaying) {
        if (isPlaying) {
          // typing started
          startUpdatingWpm();
        } else {
          // typing completed
          stopUpdatingWpm();
          if (startTime !== null) {
            // update last time to get the final typing speed
            // but NOT when typing is stopped
            // by choosing a new quote (when startTime === null)
            updateWpm();
          }
        }
      }
      if (startTime !== prevStartTime) {
        // reset on start, restart and new quote
        resetWpm();
        if (isPlaying) {
          // typing restarted
          // reset interval to get regular periodic updates
          // from the start
          stopUpdatingWpm();
          startUpdatingWpm();
        }
      }
    }

    public render() {
      const {
        isPlaying,
        current,
        startTime,
        children,
        ...restProps
      } = this.props;
      return <Comp {...restProps}>{this.state.wpm}</Comp>;
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
      this.setState(() => {
        const { current: typedCharsCount, startTime } = this.props;

        if (startTime === null) {
          return { wpm: 0 };
        }

        return { wpm: calculateWpm(startTime, typedCharsCount) };
      });
    };
  }

  return connect<{ [K in keyof T]: T[K] }, IProps>(mapState)(WpmProvider);
}

const mapState = ({ startTime, isPlaying, current }: IStoreState) => {
  return { startTime, isPlaying, current };
};

export default wpmProvider;
