import React from "react";
import PropTypes from "prop-types";
import {Json, Text} from "@yosmy/ui";
import {Phone, PhonePlaceholder} from "@yosmy/phone";
import {EventInvolved} from "@yosmy/event";
import {enrich as phoneEnrich} from "@yosmy/phone";
import {enrichUsers} from "./CommonEvent";

const type = "yosmy.start_authentication_with_password_success";

const StartAuthenticationWithPasswordSuccessEvent = ({
    ui, involved, extra, date, hide, onSelectInvolved
}) => {
    return <ui.layout
        label={<Text>El usuario verificó la tarjeta</Text>}
        involved={[
            !hide.user && <EventInvolved
                label="Usuario"
            >
                {typeof involved.user === "string"
                    ? <PhonePlaceholder/>
                    : <Phone
                        country={involved.user.country}
                        prefix={involved.user.prefix}
                        number={involved.user.number}
                        onClick={() => {
                            onSelectInvolved(
                                "user",
                                involved.user
                            );
                        }}
                    />
                }
            </EventInvolved>,
        ]}
        extra={<Json>{extra}</Json>}
        date={date}
    />
}

StartAuthenticationWithPasswordSuccessEvent.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired
    }).isRequired,
    involved: PropTypes.shape({
        user: phoneEnrich.UserProp,
        card: paymentEnrich.CardProp,
    }).isRequired,
    hide: PropTypes.shape({
        user: PropTypes.bool,
        card: PropTypes.bool,
    }).isRequired,
    onSelectInvolved: PropTypes.func.isRequired
};

StartAuthenticationWithPasswordSuccessEvent.defaultProps = {
    hide: {
        user: false,
        card: false
    }
};

const enrichStartAuthenticationWithPasswordSuccessEvent = async (events, api) => {
    events = await enrichUsers(
        events,
        api,
        type
    );

    return events;
}

export {
    StartAuthenticationWithPasswordSuccessEvent,
    type as StartAuthenticationWithPasswordSuccessEventType,
    enrichStartAuthenticationWithPasswordSuccessEvent,
};