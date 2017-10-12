import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchMoonData } from "../actions/moon";

import Moon from "../components/Moon";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMoonData
    },
    dispatch
  );

const mapStateToProps = ({ moon }) => ({ ...moon });

const MoonContainer = connect(mapStateToProps, mapDispatchToProps)(Moon);

export default MoonContainer;
