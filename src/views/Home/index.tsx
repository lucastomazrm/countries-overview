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
import { Country } from "../../store/ducks/country/types";
import CountryCard from "../../components/CountryCard";

interface DispatchProps {
  loadAllCountries(region?: string): void;
  changeTheme(theme: ThemeType): void;
}

type Props = DispatchProps & ApplicationState;

const Home = (props: Props) => {
  const [countries, setCountries] = useState<Country[]>();

  useEffect(() => {
    if (!props.countries.data.length) {
      props.loadAllCountries();
    } else {
      setCountries(props.countries.data);
    }
  }, [props.countries.data]);

  return (
    <Container>
      <Row>
        <div style={{ flex: 1 }}>
          <SearchBox
            type="text"
            onChange={value => {
              setCountries(
                props.countries.data.filter(c =>
                  c.name.toLowerCase().includes(value.toLowerCase())
                )
              );
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
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center"
        }}
      >
        {countries &&
          countries.map(country => (
            <CountryCard country={country} key={country.alpha3Code} />
          ))}
      </div>
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
