import {enrichStartAuthenticationWithPasswordSuccessEvent} from "./StartAuthenticationWithPasswordSuccessEvent";
import {enrichStartAuthenticationWithPasswordFailEvent} from "./StartAuthenticationWithPasswordFailEvent";
import {enrichFinishAuthenticationWithPasswordSuccessEvent} from "./FinishAuthenticationWithPasswordSuccessEvent";
import {enrichFinishAuthenticationWithPasswordFailEvent} from "./FinishAuthenticationWithPasswordFailEvent";
import {enrichStartAuthenticationWithCodeSuccessEvent} from "./StartAuthenticationWithCodeSuccessEvent";
import {enrichStartAuthenticationWithCodeFailEvent} from "./StartAuthenticationWithCodeFailEvent";
import {enrichFinishAuthenticationWithCodeSuccessEvent} from "./FinishAuthenticationWithCodeSuccessEvent";
import {enrichFinishAuthenticationWithCodeFailEvent} from "./FinishAuthenticationWithCodeFailEvent";

const enrich = async (events, api) => {
    events = await enrichStartAuthenticationWithPasswordSuccessEvent(
        events,
        {
            collectDevices: api.collectDevices,
        }
    );

    events = await enrichStartAuthenticationWithPasswordFailEvent(
        events,
        {
            collectDevices: api.collectDevices,
        }
    );

    events = await enrichFinishAuthenticationWithPasswordSuccessEvent(
        events,
        {
            collectDevices: api.collectDevices,
        }
    );

    events = await enrichFinishAuthenticationWithPasswordFailEvent(
        events,
        {
            collectDevices: api.collectDevices,
        }
    );

    events = await enrichStartAuthenticationWithCodeSuccessEvent(
        events,
        {
            collectDevices: api.collectDevices,
        }
    );

    events = await enrichStartAuthenticationWithCodeFailEvent(
        events,
        {
            collectDevices: api.collectDevices,
        }
    );

    events = await enrichFinishAuthenticationWithCodeSuccessEvent(
        events,
        {
            collectDevices: api.collectDevices,
        }
    );

    events = await enrichFinishAuthenticationWithCodeFailEvent(
        events,
        {
            collectDevices: api.collectDevices,
        }
    );
    
    return events;
};

export default enrich;