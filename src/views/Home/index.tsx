import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import * as CountryActions from "../../store/ducks/country/actions";
import * as ThemeActions from "../../store/ducks/theme/actions";
import { connect } from "react-redux";
import { ThemeType } from "../../store/ducks/theme/types";
import Container from "../../components/Container";
import Row from "../../components/Row";
import SearchBox from "../../components/SearchBox";
import Dropdown from "../../components/Dropdown";

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
      <Row>
        <div style={{ flex: 1 }}>
          <SearchBox
            type="text"
            onChange={value => {
              console.log(value);
            }}
          />
        </div>
        <div style={{ flex: 2, display: "flex", justifyContent: "flex-end" }}>
          <Dropdown
            onChange={region => {
              props.loadAllCountries(region);
            }}
          />
        </div>
      </Row>
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
