import * as React from 'react';

import CounterOutput from './CounterOutput';

// interface IAppProps {}

interface IAppState {
  counterValue: number;
}

class App extends React.Component</*IAppProps*/ {}, IAppState> {
  public state = { counterValue: 0 };

  public render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <CounterOutput counter={this.state.counterValue} />
        <button onClick={this.incrementHandler}>Increment</button>
        <button onClick={this.decrementHandler}>Decrement</button>
      </div>
    );
  }

  private incrementHandler = () => {
    // this.setState({ counterValue: this.state.counterValue + 1 });
    this.setState(prevState => ({
      counterValue: prevState.counterValue + 1
    }));
  };

  private decrementHandler = () =>
    this.setState({ counterValue: this.state.counterValue - 1 });
}

export default App;
