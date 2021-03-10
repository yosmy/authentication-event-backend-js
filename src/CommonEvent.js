import {enrich as phoneEnrich} from "@yosmy/phone";

const enrichUsers = async (events, api, type) => {
    return await phoneEnrich.enrichUsers(
        events,
        // filter
        (event) => {
            return event.labels.includes(type);
        },
        // pick
        (event) => {
            return event.involved.user;
        },
        // collect
        async (users) => {
            return await api.collectPhones(
                users,
            );
        },
        // enrich
        (event, user) => {
            return {
                ...event,
                involved: {
                    ...event.involved,
                    user: user
                }
            }
        }
    );
};

export {
    enrichUsers
};