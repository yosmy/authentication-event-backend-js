import React from "react";
import {StartAuthenticationWithPasswordSuccessEventType, StartAuthenticationWithPasswordSuccessEvent} from "./StartAuthenticationWithPasswordSuccessEvent";
import {StartAuthenticationWithPasswordFailEventType, StartAuthenticationWithPasswordFailEvent} from "./StartAuthenticationWithPasswordFailEvent";
import {FinishAuthenticationWithPasswordSuccessEventType, FinishAuthenticationWithPasswordSuccessEvent} from "./FinishAuthenticationWithPasswordSuccessEvent";
import {FinishAuthenticationWithPasswordFailEventType, FinishAuthenticationWithPasswordFailEvent} from "./FinishAuthenticationWithPasswordFailEvent";
import {StartAuthenticationWithCodeSuccessEventType, StartAuthenticationWithCodeSuccessEvent} from "./StartAuthenticationWithCodeSuccessEvent";
import {StartAuthenticationWithCodeFailEventType, StartAuthenticationWithCodeFailEvent} from "./StartAuthenticationWithCodeFailEvent";
import {FinishAuthenticationWithCodeSuccessEventType, FinishAuthenticationWithCodeSuccessEvent} from "./FinishAuthenticationWithCodeSuccessEvent";
import {FinishAuthenticationWithCodeFailEventType, FinishAuthenticationWithCodeFailEvent} from "./FinishAuthenticationWithCodeFailEvent";

const resolve = (labels) => {
    if (labels.includes(StartAuthenticationWithPasswordSuccessEventType)) {
        return StartAuthenticationWithPasswordSuccessEvent;
    } else if (labels.includes(StartAuthenticationWithPasswordFailEventType)) {
        return StartAuthenticationWithPasswordFailEvent;
    } else if (labels.includes(FinishAuthenticationWithPasswordSuccessEventType)) {
        return FinishAuthenticationWithPasswordSuccessEvent;
    } else if (labels.includes(FinishAuthenticationWithPasswordFailEventType)) {
        return FinishAuthenticationWithPasswordFailEvent;
    } else if (labels.includes(StartAuthenticationWithCodeSuccessEventType)) {
        return StartAuthenticationWithCodeSuccessEvent;
    } else if (labels.includes(StartAuthenticationWithCodeFailEventType)) {
        return StartAuthenticationWithCodeFailEvent;
    } else if (labels.includes(FinishAuthenticationWithCodeSuccessEventType)) {
        return FinishAuthenticationWithCodeSuccessEvent;
    } else if (labels.includes(FinishAuthenticationWithCodeFailEventType)) {
        return FinishAuthenticationWithCodeFailEvent;
    }

    return false;
};

export default resolve;