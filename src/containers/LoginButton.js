import { connect } from 'react-redux';
import { loginAction } from '../actions';
import LoginButton from '../components/LoginButton';

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => ({
  login: (val) => dispatch(loginAction(val))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton);
