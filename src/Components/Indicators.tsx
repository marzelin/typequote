import * as React from "react";
import styled from "react-emotion";
import { connect } from "react-redux";
import { IStore } from "../store";

const Container = styled("div")`
  margin: 5em 0em 3em;
  display: flex;
`;

const Box = styled("div")`
  min-width: 50%;
  margin: 0 0 2em;
  display: inline-flex;
  flex: 0 1 auto;
  flex-direction: column;
`;

const Value = styled("div")`
  font-size: 4rem;
  font-weight: 400;
  line-height: 1em;
  color: #1b1c1d;
  text-transform: uppercase;
  text-align: center;
`;

const Label = styled("div")`
  font-size: 1em;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
  text-align: center;
`;

const mapStateToPropsTypos = ({ typos }: IStore) => {
  return { typos };
};

const Typos = connect(mapStateToPropsTypos)(({ typos }) => (
  <Value>{typos.size}</Value>
));

const mapStateToPropsWpm = ({ startTime, isPlaying, current }: IStore) => {
  return { startTime, isPlaying, current };
};

interface IPropsWpm {
  startTime: number;
  isPlaying: boolean;
  current: number;
}

const Wpm = connect(mapStateToPropsWpm)(
  class WpmComp extends React.Component<IPropsWpm, { wpm: number }> {
    public state = { wpm: 0 };
    public componentWillReceiveProps(nextProps: IPropsWpm) {
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
      return <Value>{this.state.wpm}</Value>;
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

export default () => (
  <Container>
    <Box>
      <Typos />
      <Label>TYPOS</Label>
    </Box>
    <Box>
      <Wpm />
      <Label>WORDS PER MINUTE</Label>
    </Box>
  </Container>
);
