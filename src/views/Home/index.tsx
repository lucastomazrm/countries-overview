import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import * as CountryActions from "../../store/ducks/country/actions";
import { connect } from "react-redux";

interface DispatchProps {
  loadAllCountries(region?: string): void;
}

type Props = DispatchProps & ApplicationState;

const Home = (props: Props) => {
  useEffect(() => {
    if (!props.countries.data.length) {
      props.loadAllCountries();
    } else {
      console.log(props.countries.data);
    }
  }, [props.countries.data]);

  return (
    <div style={{ backgroundColor: props.theme.primaryColor }}>
      <button
        onClick={() => {
          props.loadAllCountries();
        }}
      >
        teste
      </button>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({ ...state });
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CountryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
