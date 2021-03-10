import React from "react";
import PropTypes from "prop-types";
import {Json, Text} from "@yosmy/ui";
import {EventInvolved} from "@yosmy/event";
import {Device, DevicePlaceholder, enrich as deviceEnrich} from "@yosmy/device";
import {enrichDevices} from "./CommonEvent";

const type = "yosmy.finish_authentication_with_code_success";

const FinishAuthenticationWithCodeSuccessEvent = ({
    ui, involved, extra, date, hide, onSelectInvolved
}) => {
    return <ui.layout
        label={<Text>Final exitoso de autenticación con sms</Text>}
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

FinishAuthenticationWithCodeSuccessEvent.propTypes = {
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

FinishAuthenticationWithCodeSuccessEvent.defaultProps = {
    hide: {
        device: false,
    }
};

const enrichFinishAuthenticationWithCodeSuccessEvent = async (events, api) => {
    events = await enrichDevices(
        events,
        api,
        type
    );

    return events;
}

export {
    FinishAuthenticationWithCodeSuccessEvent,
    type as FinishAuthenticationWithCodeSuccessEventType,
    enrichFinishAuthenticationWithCodeSuccessEvent,
};