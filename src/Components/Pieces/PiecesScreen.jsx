import { PiecesGrid } from "./PiecesGrid";
import { MainContainer } from "../../shared/Layout/MainContainer";

export const PiecesScreen = () => {
    return (
        <MainContainer component={<PiecesGrid />} />
    );
};
