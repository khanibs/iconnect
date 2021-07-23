
import {BrowserRouter as Route} from 'react-router-dom';
import Study from '../components/study';
function Routes() {
  return (
  <>
 <Route path="/study" component={Study} />
  </>
  );
}

export default Routes;
