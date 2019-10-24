/**
 * Data types
 */

export interface ThemeType {
  name: string;
  primaryColor: string; // Elements
  secondaryColor: string; // Background
  text: string; // Text
  input: string; // Input
}

/**
 * Action types
 */

export enum ThemeActions {
  CHANGE_THEME = "@General/CHANGE_THEME",
}
