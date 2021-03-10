import {enrich as deviceEnrich} from "@yosmy/device";

const enrichDevices = async (events, api, type) => {
    return await deviceEnrich.enrichDevices(
        events,
        // filter
        (event) => {
            return event.labels.includes(type);
        },
        // pick
        (event) => {
            return event.involved.device;
        },
        // collect
        async (devices) => {
            return await api.collectDevices(
                devices,
            );
        },
        // enrich
        (event, device) => {
            return {
                ...event,
                involved: {
                    ...event.involved,
                    device: device
                }
            }
        }
    );
};

export {
    enrichDevices,
};