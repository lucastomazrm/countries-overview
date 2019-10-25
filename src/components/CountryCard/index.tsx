import React from "react";
import {
  CardStyle,
  FlagStyle,
  CountryDetails,
  CountryTitle,
  OtherInfo
} from "./style";
import history from "../../routes/history";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import { Country } from "../../store/ducks/country/types";

interface OwnProps {
  country: Country;
}

type Props = OwnProps & ApplicationState;

const CountryCard = (props: Props) => (
  <CardStyle
    color={props.theme.primaryColor}
    onClick={() => {
      history.push("/Country/" + props.country.numericCode);
    }}
  >
    <FlagStyle src={props.country.flag} />
    <CountryDetails>
      <CountryTitle color={props.theme.text}>{props.country.name}</CountryTitle>
      <OtherInfo color={props.theme.text}>
        Population: <span>{props.country.population.toLocaleString()}</span>
      </OtherInfo>
      <OtherInfo color={props.theme.text}>
        Region: <span>{props.country.region}</span>
      </OtherInfo>
      <OtherInfo color={props.theme.text}>
        Capital: <span>{props.country.capital}</span>
      </OtherInfo>
    </CountryDetails>
  </CardStyle>
);

const mapStateToProps = (state: ApplicationState) => ({ ...state });

export default connect(mapStateToProps)(CountryCard);
