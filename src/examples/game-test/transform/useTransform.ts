import React from "react";
import {TransformContext} from "./TransformContext";

export const useTransform = () => {
    return React.useContext(TransformContext);
}
