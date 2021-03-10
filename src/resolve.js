import React from "react";
import {StartAuthenticationWithPasswordSuccessEventType, StartAuthenticationWithPasswordSuccessEvent} from "./StartAuthenticationWithPasswordSuccessEvent";

const resolve = (labels) => {
    if (labels.includes(StartAuthenticationWithPasswordSuccessEventType)) {
        return StartAuthenticationWithPasswordSuccessEvent;
    }

    return false;
};

export default resolve;