import React from "react";
import PropTypes from "prop-types";
import {ListEvents as BaseListEvents, FallbackEvent, EventLayout} from "@yosmy/event";
import enrich from "./enrich";
import resolve from "./resolve";

const ListEvents = ({
    ui, api, criteria, onSelectDevice
}) => {
    return <BaseListEvents
        ui={{
            layout: ui.layout,
            item: ({labels, involved, extra, date}) => {
                const Component = resolve(
                    labels,
                ) || FallbackEvent;

                return <Component
                    ui={{
                        layout: EventLayout
                    }}
                    labels={labels}
                    involved={involved}
                    extra={extra}
                    date={date}
                    onSelectInvolved={(type, value) => {
                        if (type !== "device") {
                            return;
                        }

                        onSelectDevice(value.id);
                    }}
                />
            }
        }}
        criteria={{
            query: criteria.query,
            limit: criteria.limit
        }}
        onCollect={async (query, skip, limit) => {
            const events = await api.collectEvents(
                [
                    "yosmy.start_authentication_with_password_success",
                    "yosmy.start_authentication_with_password_fail",
                    "yosmy.finish_authentication_with_password_success",
                    "yosmy.finish_authentication_with_password_fail",
                    "yosmy.start_authentication_with_code_success",
                    "yosmy.start_authentication_with_code_fail",
                    "yosmy.finish_authentication_with_code_success",
                    "yosmy.finish_authentication_with_code_fail",
                ],
                {
                    device: query.device
                },
                null,
                query.from,
                query.to,
                skip,
                limit
            );

            if (events.length === 0) {
                return {
                    items: events,
                };
            }

            return {
                items: events,
                onEnrich: async (events) => {
                    events = await enrich(
                        events,
                        {
                            collectDevices: api.collectDevices,
                        }
                    );

                    return events;
                }
            };
        }}
    />
};

ListEvents.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired,
    }).isRequired,
    api: PropTypes.shape({
        collectEvents: PropTypes.func.isRequired,
        collectDevices: PropTypes.func.isRequired,
    }).isRequired,
    criteria: PropTypes.shape({
        query: PropTypes.shape({
            device: PropTypes.string,
            from: PropTypes.number,
            to: PropTypes.number,
        }).isRequired,
        limit: PropTypes.number.isRequired,
    }).isRequired,
    onSelectDevice: PropTypes.func.isRequired
};

export default ListEvents;