import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import * as ThemeActions from "../../store/ducks/theme/actions";
import { connect } from "react-redux";
import { ThemeType } from "../../store/ducks/theme/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faRegularMoon } from "@fortawesome/free-regular-svg-icons";
import { darkTheme, lightTheme } from "../../store/ducks/theme/themes";
import { HeaderStyle, TitleStyle, ThemeSelectorStyle } from "./style";

interface DispatchProps {
  changeTheme(theme: ThemeType): void;
}

type Props = DispatchProps & ApplicationState;

const Header = (props: Props) => {
  return (
    <HeaderStyle theme={props.theme}>
      <TitleStyle theme={props.theme}>Where in the world?</TitleStyle>
      <ThemeSelectorStyle
        theme={props.theme}
        onClick={() => {
          if (props.theme.name === "light") {
            props.changeTheme(darkTheme);
          } else {
            props.changeTheme(lightTheme);
          }
        }}
      >
        <FontAwesomeIcon
          icon={props.theme.name === "light" ? faRegularMoon : faMoon}
        />
        Dark Mode
      </ThemeSelectorStyle>
    </HeaderStyle>
  );
};

const mapStateToProps = (state: ApplicationState) => ({ ...state });
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(ThemeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
