import { ReactElement } from 'react';
import ReactDOM from 'react-dom';

const Root = ():ReactElement => {
  return (<div>Hello React!</div>);
};

ReactDOM.render(<Root/>, document.getElementById('root'));