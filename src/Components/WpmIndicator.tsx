import * as React from "react";
import { connect } from "react-redux";
import { IStore } from "../store";
import WpmView from "./Views/WpmIndicator";

const mapState = ({ startTime, isPlaying, current }: IStore) => {
  return { startTime, isPlaying, current };
};

interface IProps {
  startTime: number;
  isPlaying: boolean;
  current: number;
}

const WpmIndicator = connect(mapState)(
  class Wpm extends React.Component<IProps, { wpm: number }> {
    public state = { wpm: 0 };
    public componentWillReceiveProps(nextProps: IProps) {
      if (nextProps.isPlaying !== this.props.isPlaying) {
        this.updateWpm(); // to update immediately after completed typing
        setTimeout(this.updateWpm, 100);
      } else if (nextProps.startTime !== this.props.startTime) {
        // when restarted
        this.setState({
          wpm: 0
        });
      }
    }
    public render() {
      return <WpmView wpm={this.state.wpm} />;
    }
    private updateWpm = () => {
      if (this.props.isPlaying) {
        const diff = (Date.now() - this.props.startTime) / 1000 / 60;
        this.setState({
          wpm: Math.floor(this.props.current / diff / 5)
        });
        setTimeout(this.updateWpm, 2000);
      }
      // tslint:disable-next-line:semicolon
    };
  }
);

export default WpmIndicator;
