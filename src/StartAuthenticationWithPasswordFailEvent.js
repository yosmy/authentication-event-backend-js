import React from "react";
import PropTypes from "prop-types";
import {Json, Text} from "@yosmy/ui";
import {EventInvolved} from "@yosmy/event";
import {Device, DevicePlaceholder, enrich as deviceEnrich} from "@yosmy/device";
import {enrichDevices} from "./CommonEvent";

const type = "yosmy.start_authentication_with_password_fail";

const StartAuthenticationWithPasswordFailEvent = ({
    ui, involved, extra, date, hide, onSelectInvolved
}) => {
    return <ui.layout
        label={<Text>Comienzo fallido  de autenticación con pin</Text>}
        involved={[
            !hide.device && <EventInvolved
                label="Dispositivo"
            >
                {typeof involved.device === "string"
                    ? <DevicePlaceholder/>
                    : <Device
                        data={involved.device.data}
                        onClick={() => {
                            onSelectInvolved(
                                "device",
                                involved.device
                            );
                        }}
                    />
                }
            </EventInvolved>,
            <EventInvolved
                label="Teléfono"
            >
                <Json>{{
                    country: involved.country,
                    prefix: involved.prefix,
                    number: involved.number,
                }}</Json>
            </EventInvolved>,
        ]}
        extra={<Json>{extra}</Json>}
        date={date}
    />
}

StartAuthenticationWithPasswordFailEvent.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired
    }).isRequired,
    involved: PropTypes.shape({
        device: deviceEnrich.DeviceProp,
    }).isRequired,
    hide: PropTypes.shape({
        device: PropTypes.bool,
    }).isRequired,
};

StartAuthenticationWithPasswordFailEvent.defaultProps = {
    hide: {
        device: false,
    }
};

const enrichStartAuthenticationWithPasswordFailEvent = async (events, api) => {
    events = await enrichDevices(
        events,
        api,
        type
    );

    return events;
}

export {
    StartAuthenticationWithPasswordFailEvent,
    type as StartAuthenticationWithPasswordFailEventType,
    enrichStartAuthenticationWithPasswordFailEvent,
};