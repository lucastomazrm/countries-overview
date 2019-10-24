import React, { useState } from "react";
import { SearchBoxStyle } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";

interface OwnProps {
  type: string;
  onChange(value: any): void;
}

type Props = OwnProps & ApplicationState;

const SearchBox = (props: Props) => {
  const [focus, setFocus] = useState(false);

  return (
    <div style={{ position: "relative", display: "flex", minHeight: "52px" }}>
      <FontAwesomeIcon
        icon={faSearch}
        style={{
          position: "absolute",
          opacity: focus ? 1 : 0.4,
          top: "18",
          left: "30",
          transition: "opacity 0.3s ease-in-out"
        }}
        color={props.theme.text}
      />
      <SearchBoxStyle
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type={props.type}
        theme={props.theme}
        onChange={event => props.onChange(event.target.value)}
        placeholder="Search for a country..."
      />
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({ ...state });

export default connect(mapStateToProps)(SearchBox);
