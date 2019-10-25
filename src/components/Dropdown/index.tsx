import React, { useState } from "react";
import { SelectStyle, SelectDiv } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface OwnProps {
  onChange(value: any): void;
}

type Props = OwnProps & ApplicationState;

const Dropdown = (props: Props) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [selectedRegion, setRegion] = useState();

  return (
    <SelectDiv theme={props.theme}>
      <SelectStyle
        value={selectedRegion}
        onChange={event => {
          setRegion(event.target.value);
          props.onChange(event.target.value);
        }}
        theme={props.theme}
      >
        <option value="" disabled>
          Filter By Region
        </option>
        {regions.map(region => (
          <option key={region} value={region.toLowerCase()}>
            {region}
          </option>
        ))}
      </SelectStyle>
      <FontAwesomeIcon
        icon={faChevronDown}
        style={{
          flex: 1,
          transition: "opacity 0.3s ease-in-out"
        }}
        color={props.theme.text}
      />
    </SelectDiv>
  );
};

const mapStateToProps = (state: ApplicationState) => ({ ...state });

export default connect(mapStateToProps)(Dropdown);
