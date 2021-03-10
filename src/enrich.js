import {enrichStartAuthenticationWithPasswordSuccessEvent} from "./StartAuthenticationWithPasswordSuccessEvent";

const enrich = async (events, api) => {
    events = await enrichStartAuthenticationWithPasswordSuccessEvent(
        events,
        {
            collectPhones: api.collectPhones,
        }
    );

    return events;
};

export default enrich;