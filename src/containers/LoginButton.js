import { connect } from 'react-redux';
import { toggleLoginAction } from '../actions';
import LoginButton from '../components/LoginButton';

const mapDispatchToProps = dispatch => ({
  toggleLogin: (val) => dispatch(toggleLoginAction(val))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginButton);
