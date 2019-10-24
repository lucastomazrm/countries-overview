import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import * as CountryActions from "../../store/ducks/country/actions";
import * as ThemeActions from "../../store/ducks/theme/actions";
import { connect } from "react-redux";
import { ThemeType } from "../../store/ducks/theme/types";
import { darkTheme } from "../../store/ducks/theme/themes";
import Container from "../../components/Container";

interface DispatchProps {
  loadAllCountries(region?: string): void;
  changeTheme(theme: ThemeType): void;
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
    <Container>
      <button
        onClick={() => {
          props.changeTheme(darkTheme);
        }}
      >
        teste
      </button>
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({ ...state });
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ ...ThemeActions, ...CountryActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
