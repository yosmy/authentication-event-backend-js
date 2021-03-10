import React from "react";
import PropTypes from "prop-types";
import {Json, Text} from "@yosmy/ui";
import {EventInvolved} from "@yosmy/event";
import {Device, DevicePlaceholder, enrich as deviceEnrich} from "@yosmy/device";
import {enrichDevices} from "./CommonEvent";

const type = "yosmy.finish_authentication_with_code_fail";

const FinishAuthenticationWithCodeFailEvent = ({
    ui, involved, extra, date, hide, onSelectInvolved
}) => {
    return <ui.layout
        label={<Text>Final fallido  de autenticación con pin</Text>}
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
            </EventInvolved>
        ]}
        extra={<Json>{extra}</Json>}
        date={date}
    />
}

FinishAuthenticationWithCodeFailEvent.propTypes = {
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

FinishAuthenticationWithCodeFailEvent.defaultProps = {
    hide: {
        device: false,
    }
};

const enrichFinishAuthenticationWithCodeFailEvent = async (events, api) => {
    events = await enrichDevices(
        events,
        api,
        type
    );

    return events;
}

export {
    FinishAuthenticationWithCodeFailEvent,
    type as FinishAuthenticationWithCodeFailEventType,
    enrichFinishAuthenticationWithCodeFailEvent,
};