import { useState } from "react";
import "./DarkModeToggleStyles.css";
import {useTheme} from '../theme/useTheme'
import { getLocalStorage } from "../utils/storage";






export const DarkModeToggle = (props: any) => {
  const {setSelectedTheme} = props
  const themesFromStore = getLocalStorage('all-themes');
  const currentTheme = getLocalStorage('theme') ? getLocalStorage('theme') : themesFromStore.default.data.light

  const [data] = useState(themesFromStore.default.data);

  
  const {setMode} = useTheme();


const OnSwitch = () => {
  const newTheme = currentTheme.name === 'Light' ? data.seaWave : currentTheme.name === 'Sea Wave' ? data.light : ''
  console.log(newTheme)

  setMode(newTheme)
  setSelectedTheme(newTheme)
}
  return (
    <label className="switch">
      <input type="checkbox" onChange={OnSwitch} checked={currentTheme.name === 'Light' ? false : true} />
      <span className="slider round"></span>
    </label>
  );
};
