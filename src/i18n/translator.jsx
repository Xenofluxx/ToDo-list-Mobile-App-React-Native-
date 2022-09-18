import * as Localisation from "expo-localization";
import { I18n } from "i18n-js";
import { en, es } from "./languages";
//import MainScreen from "../screens/main";
import App from "../../App";
import * as React from "react";
//suported languages
export const i18n = new I18n({ es, en });
// the same locale as the user's device
i18n.Locales = Localisation.locale;
// if there isn`t a language selected it will fall back to a default
i18n.fallbacks = true;

export const changeLanguage = (languageKey) => {
  i18n.locale = languageKey;
};
