import React from "react";
import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import * as ThemeActions from "../../store/ducks/theme/actions";
import { connect } from "react-redux";
import { ThemeType } from "../../store/ducks/theme/types";
import { darkTheme, lightTheme } from "../../store/ducks/theme/themes";
import { ContainerStyle } from "./style";

interface OwnProps {
  children: React.ReactNode;
}
interface DispatchProps {
  changeTheme(theme: ThemeType): void;
}

type Props = OwnProps & DispatchProps & ApplicationState;

const Container = (props: Props) => (
  <ContainerStyle theme={props.theme}>{props.children}</ContainerStyle>
);

const mapStateToProps = (state: ApplicationState) => ({ ...state });
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(ThemeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
