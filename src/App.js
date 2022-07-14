import { MainContainer } from "./shared/Layout/MainContainer";
import { PrincipalScreen } from "./Components/Principal/PrincipalScreen";
import './App.css';

export const App = () => {
  return (
    <MainContainer component={<PrincipalScreen/>}  />
  );
};