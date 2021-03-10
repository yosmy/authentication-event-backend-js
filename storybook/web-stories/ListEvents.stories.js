import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import {EmptyLayout} from "@yosmy/ui";
import theme from "../Theme";
import delay from "../Delay";

import ListEvents from '../ListEvents';

export default {
  title: 'ListEvents',
  component: ListEvents,
};

const Template = () => {
    return <ThemeProvider theme={theme}>
        <ListEvents
            ui={{
                layout: EmptyLayout,
            }}
            api={{
                collectEvents: async (labels, involved, extra, from, to, skip, limit) => {
                    await delay(3000);

                    switch (skip) {
                        case 0:
                            return [
                                {
                                    id: "1",
                                    labels: ["yosmy.start_authentication_with_password_success", "success"],
                                    involved: {
                                        "device": "device-1",
                                        "country": "US",
                                        "prefix": "1",
                                        "number": "7867861234",
                                    },
                                    extra: {},
                                    date: 1603992716
                                },
                                {
                                    id: "2",
                                    labels: ["yosmy.start_authentication_with_password_fail", "fail"],
                                    involved: {
                                        "device": "device-1",
                                        "country": "US",
                                        "prefix": "1",
                                        "number": "786",
                                    },
                                    extra: {},
                                    date: 1603992816
                                },
                                {
                                    id: "3",
                                    labels: ["yosmy.finish_authentication_with_password_success", "success"],
                                    involved: {
                                        "device": "device-1",
                                        "country": "US",
                                        "prefix": "1",
                                        "number": "786",
                                    },
                                    extra: {},
                                    date: 1603992916
                                },
                                {
                                    id: "4",
                                    labels: ["yosmy.finish_authentication_with_password_fail", "fail"],
                                    involved: {
                                        "device": "device-1",
                                        "country": "US",
                                        "prefix": "1",
                                        "number": "7867861234",
                                        "password": "1111"
                                    },
                                    extra: {},
                                    date: 1603994816
                                },
                                {
                                    id: "5",
                                    labels: ["yosmy.start_authentication_with_code_success", "success"],
                                    involved: {
                                        "device": "device-1",
                                        "country": "US",
                                        "prefix": "1",
                                        "number": "7867861234",
                                    },
                                    extra: {},
                                    date: 1603992716
                                },
                                {
                                    id: "6",
                                    labels: ["yosmy.start_authentication_with_code_fail", "fail"],
                                    involved: {
                                        "device": "device-1",
                                        "country": "US",
                                        "prefix": "1",
                                        "number": "786",
                                    },
                                    extra: {
                                        exception: "Exception X"
                                    },
                                    date: 1603992816
                                },
                                {
                                    id: "7",
                                    labels: ["yosmy.finish_authentication_with_code_success", "success"],
                                    involved: {
                                        "device": "device-1",
                                        "country": "US",
                                        "prefix": "1",
                                        "number": "786",
                                    },
                                    extra: {},
                                    date: 1603992916
                                },
                                {
                                    id: "8",
                                    labels: ["yosmy.finish_authentication_with_code_fail", "fail"],
                                    involved: {
                                        "device": "device-1",
                                        "country": "US",
                                        "prefix": "1",
                                        "number": "7867861234",
                                        "code": "1111"
                                    },
                                    extra: {
                                        exception: "Exception X"
                                    },
                                    date: 1603994816
                                },
                            ];
                        default:
                            return [];
                    }
                },
                collectPhones: async (users, phones, onReturn) => {
                    await delay(3000);

                    return [
                        {
                            user: "user-1",
                            country: "US",
                            prefix: "1",
                            number: "7867861234"
                        },
                        {
                            user: "user-2",
                            country: "US",
                            prefix: "1",
                            number: "7867865678"
                        }
                    ];
                },
                collectDevices: async (ids) => {
                    await delay(3000);

                    return [
                        {
                            id: "device-1",
                            data: {
                                device: {
                                    modelName: "Model 1",
                                    osInternalBuildId: "Internal 1"
                                }
                            }
                        },
                        {
                            id: "device-2",
                            data: {
                                device: {
                                    modelName: "Model 2",
                                    osInternalBuildId: "Internal 2"
                                }
                            }
                        }
                    ];
                },
            }}
            criteria={{
                query: {
                    from: null,
                    to: null,
                },
                limit: 2
            }}
            onSelectDevice={(id) => {
                console.log(id);
            }}
    />
    </ThemeProvider>
};

export const Default = Template.bind({});

