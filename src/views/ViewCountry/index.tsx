import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import * as CountryActions from "../../store/ducks/country/actions";
import * as ThemeActions from "../../store/ducks/theme/actions";
import { connect } from "react-redux";
import history from "../../routes/history";
import { ThemeType } from "../../store/ducks/theme/types";
import Container from "../../components/Container";
import Row from "../../components/Row";
import { RouteComponentProps } from "react-router-dom";
import { Country } from "../../store/ducks/country/types";
import {
  FlagDivStyle,
  DetailsStyle,
  BackButtonStyle,
  CountryTitle,
  OtherInfo,
  OtherCountries
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface MatchParams {
  countryId: string;
}

type Props = ApplicationState & RouteComponentProps<MatchParams>;

const ViewCountry = (props: Props) => {
  const countryId = props.match.params.countryId;
  const [country, setCountry] = useState<Country | undefined>(
    props.countries.data.find(country => country.numericCode === countryId)
  );

  if (!countryId || !country) {
    history.push("/");
  } else {
    return (
      <Container>
        <Row>
          <div style={{ flex: 1 }}>
            <BackButtonStyle
              theme={props.theme}
              onClick={() => {
                history.goBack();
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span style={{ fontWeight: 300 }}>Back</span>
            </BackButtonStyle>
          </div>
        </Row>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center"
          }}
        >
          <FlagDivStyle>
            <img src={country && country.flag} />
          </FlagDivStyle>

          <DetailsStyle>
            <CountryTitle color={props.theme.text}>{country.name}</CountryTitle>
            <div style={{ display: "flex", flexFlow: "column wrap" }}>
              <div
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <OtherInfo color={props.theme.text}>
                  Native Name: <span>{country.nativeName}</span>
                </OtherInfo>
                <OtherInfo color={props.theme.text}>
                  Population: <span>{country.population.toLocaleString()}</span>
                </OtherInfo>
                <OtherInfo color={props.theme.text}>
                  Region: <span>{country.region}</span>
                </OtherInfo>
                <OtherInfo color={props.theme.text}>
                  Sub Region: <span>{country.subregion}</span>
                </OtherInfo>
                <OtherInfo color={props.theme.text}>
                  Capital: <span>{country.capital}</span>
                </OtherInfo>
              </div>
              <div
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <OtherInfo color={props.theme.text}>
                  Top Level Domain: <span>{country.topLevelDomain}</span>
                </OtherInfo>
                <OtherInfo color={props.theme.text}>
                  Currencies:{" "}
                  <span>{country.currencies.map(c => c.name).join(",")}</span>
                </OtherInfo>
                <OtherInfo color={props.theme.text}>
                  Languages:{" "}
                  <span>{country.languages.map(l => l.name).join(",")}</span>
                </OtherInfo>
              </div>
            </div>
            <OtherCountries theme={props.theme}>
              Border Countries:{" "}
              {country.borders.map(border => (
                <span key={border}>{border}</span>
              ))}
            </OtherCountries>
          </DetailsStyle>
        </div>
      </Container>
    );
  }
  return null;
};

const mapStateToProps = (state: ApplicationState) => ({ ...state });
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ ...ThemeActions, ...CountryActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewCountry);
