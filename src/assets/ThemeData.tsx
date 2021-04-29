import simple from "./themes/simple"
import vintage from "./themes/vintage"
import dark from "./themes/dark"
import westeros from "./themes/westeros"
import essos from "./themes/essos"
import wonderland from "./themes/wonderland"
import walden from "./themes/walden"
import chalk from "./themes/chalk"
import infographic from "./themes/infographic"
import macarons from "./themes/macarons"
import roma from "./themes/roma"
import shine from "./themes/shine"
import purplePassion from "./themes/purplePassion"
import halloween from "./themes/halloween"

export const ThemeData = {
  simple: simple,
  vintage: vintage,
  dark: dark,
  westeros: westeros,
  essos: essos,
  wonderland: wonderland,
  walden: walden,
  chalk: chalk,
  infographic: infographic,
  macarons: macarons,
  roma: roma,
  shine: shine,
  purplePassion: purplePassion,
  halloween: halloween,
}

export type ThemeDataType = keyof typeof ThemeData
