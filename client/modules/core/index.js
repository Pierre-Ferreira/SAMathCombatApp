import actions from './actions';
import routes from './routes.jsx';
import * as reducers from './configs/reducers.js'

console.log('index.reducers:', reducers)
export default {
  routes,
  actions,
  reducers,
  load(context) {

  }
};
