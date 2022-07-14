import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//Components
import { App } from "./App";
import { ComposerScreen } from "./Components/Composer/ComposerScreen";
import { PiecesScreen } from "./Components/Pieces/PiecesScreen";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/composers" element={<ComposerScreen />} />
      <Route path="/pieces" element={<PiecesScreen />} />
    </Routes>
  </BrowserRouter>
);
