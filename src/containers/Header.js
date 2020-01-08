import { connect } from 'react-redux';
import Header from '../components/Header/Header';

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
