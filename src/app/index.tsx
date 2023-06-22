import { withRouter } from './providers/withRouter';
import './index.scss';
import Routing from 'pages';

function App() {
  return (
    <>
      <Routing></Routing>
    </>
  );
}

export default withRouter(App);
