import { connect } from 'react-redux';
import Historical from './historical';
import { requestHistory } from '../../actions/price_actions';

const mapStateToProps = state => {
  return {
    prices: state.hist_prices,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPrices: () => dispatch(requestHistory()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Historical);
