import { ComposerGrid } from "./ComposerGrid";
import { MainContainer } from "../../shared/Layout/MainContainer";

export const ComposerScreen = () => {
    return (
        <MainContainer component={<ComposerGrid />} />
    );
};
