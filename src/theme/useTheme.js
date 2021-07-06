import { useEffect, useState } from "react";
import { setLocalStorage, getLocalStorage } from "../utils/storage";
import _ from "lodash";

export const useTheme = () => {
  const themes = getLocalStorage("all-themes");
  const [theme, setTheme] = useState(themes.default.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setLocalStorage("theme", mode);
    setTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.default.data, "font"));
    return allFonts;
  };

  useEffect(() => {
    const localTheme = getLocalStorage("theme");
    localTheme ? setTheme(localTheme) : setTheme(themes.default.data.light);
    setThemeLoaded(true);
    // eslint-disable-next-line
  }, []);

  return { theme, themeLoaded, setMode, getFonts };
};
