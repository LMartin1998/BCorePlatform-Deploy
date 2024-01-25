const data = [
    {
        id: "PCS401",
        rows: 10,
        racks: 7,
        panels: 2,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 0,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                            { "panelId": "p-2", "show": true, "state": 3 },
                            { "panelId": "p-3", "show": false, "state": 3 },
                            { "panelId": "p-4", "show": false, "state": 0 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS108",
        rows: 1,
        racks: 7,
        panels: 9,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 3,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": false, "state": 2 },
                            { "panelId": "p-2", "show": true, "state": 0 },
                            { "panelId": "p-3", "show": true, "state": 0 },
                            { "panelId": "p-4", "show": true, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": true, "state": 2 },
                            { "panelId": "p-2", "show": true, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 1,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-4",
                        state: 1,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": true, "state": 1 },
                            { "panelId": "p-2", "show": true, "state": 2 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS402",
        rows: 4,
        racks: 9,
        panels: 7,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 3,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": true, "state": 0 },
                            { "panelId": "p-2", "show": false, "state": 1 },
                            { "panelId": "p-3", "show": false, "state": 3 },
                            { "panelId": "p-4", "show": true, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 0,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                            { "panelId": "p-1", "show": true, "state": 2 },
                            { "panelId": "p-2", "show": false, "state": 2 },
                            { "panelId": "p-3", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-2",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                            { "panelId": "p-2", "show": true, "state": 1 },
                            { "panelId": "p-3", "show": true, "state": 3 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS404",
        rows: 7,
        racks: 7,
        panels: 9,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                            { "panelId": "p-2", "show": true, "state": 0 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS403",
        rows: 6,
        racks: 2,
        panels: 1,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                            { "panelId": "p-1", "show": true, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                            { "panelId": "p-2", "show": false, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 1,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                            { "panelId": "p-2", "show": true, "state": 1 },
                            { "panelId": "p-3", "show": false, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                            { "panelId": "p-2", "show": true, "state": 0 },
                            { "panelId": "p-3", "show": true, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                            { "panelId": "p-2", "show": true, "state": 1 },
                            { "panelId": "p-3", "show": true, "state": 0 },
                            { "panelId": "p-4", "show": false, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-4",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 0 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-2",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 1 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                            { "panelId": "p-2", "show": false, "state": 3 },
                            { "panelId": "p-3", "show": false, "state": 2 },
                            { "panelId": "p-4", "show": true, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 0 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS405",
        rows: 9,
        racks: 1,
        panels: 8,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 3,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                            { "panelId": "p-2", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                            { "panelId": "p-2", "show": true, "state": 1 },
                            { "panelId": "p-3", "show": true, "state": 2 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                            { "panelId": "p-2", "show": false, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 3,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                            { "panelId": "p-2", "show": false, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": true, "state": 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                            { "panelId": "p-2", "show": true, "state": 1 },
                            { "panelId": "p-3", "show": false, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-4",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 0 },
                            { "panelId": "p-2", "show": true, "state": 0 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-2",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS406",
        rows: 4,
        racks: 3,
        panels: 3,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": true, "state": 1 },
                            { "panelId": "p-2", "show": true, "state": 3 },
                            { "panelId": "p-3", "show": true, "state": 0 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS304",
        rows: 6,
        racks: 6,
        panels: 4,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 3,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 3,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 0,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                            { "panelId": "p-2", "show": false, "state": 1 },
                            { "panelId": "p-3", "show": false, "state": 0 },
                            { "panelId": "p-4", "show": true, "state": 1 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 1,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 1 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS303",
        rows: 10,
        racks: 4,
        panels: 6,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                            { "panelId": "p-2", "show": true, "state": 3 },
                            { "panelId": "p-3", "show": true, "state": 0 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 1 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                            { "panelId": "p-2", "show": false, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                            { "panelId": "p-1", "show": false, "state": 2 },
                            { "panelId": "p-2", "show": true, "state": 3 },
                            { "panelId": "p-3", "show": false, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                            { "panelId": "p-2", "show": true, "state": 0 },
                            { "panelId": "p-3", "show": false, "state": 0 },
                            { "panelId": "p-4", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 0,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-4",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 1 },
                            { "panelId": "p-2", "show": true, "state": 0 },
                            { "panelId": "p-3", "show": true, "state": 0 },
                            { "panelId": "p-4", "show": false, "state": 2 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS301",
        rows: 4,
        racks: 10,
        panels: 9,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 1,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 2 },
                            { "panelId": "p-2", "show": true, "state": 1 },
                            { "panelId": "p-3", "show": false, "state": 0 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": true, "state": 0 },
                            { "panelId": "p-2", "show": false, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                            { "panelId": "p-2", "show": true, "state": 1 },
                            { "panelId": "p-3", "show": false, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 0 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                            { "panelId": "p-2", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 0,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-2",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                            { "panelId": "p-2", "show": true, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 2 },
                            { "panelId": "p-2", "show": true, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 3,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                            { "panelId": "p-2", "show": true, "state": 3 },
                            { "panelId": "p-3", "show": false, "state": 3 },
                            { "panelId": "p-4", "show": false, "state": 2 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS302",
        rows: 4,
        racks: 1,
        panels: 2,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 1,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 1 },
                            { "panelId": "p-2", "show": false, "state": 2 },
                            { "panelId": "p-3", "show": true, "state": 1 },
                            { "panelId": "p-4", "show": true, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": true, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                            { "panelId": "p-2", "show": true, "state": 2 },
                            { "panelId": "p-3", "show": true, "state": 0 },
                            { "panelId": "p-4", "show": false, "state": 1 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                            { "panelId": "p-2", "show": false, "state": 3 },
                            { "panelId": "p-3", "show": false, "state": 3 },
                            { "panelId": "p-4", "show": false, "state": 2 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-2",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 3,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                            { "panelId": "p-2", "show": true, "state": 0 },
                            { "panelId": "p-3", "show": true, "state": 3 },
                            { "panelId": "p-4", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 0,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                            { "panelId": "p-2", "show": false, "state": 3 },
                            { "panelId": "p-3", "show": true, "state": 0 },
                            { "panelId": "p-4", "show": false, "state": 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS307",
        rows: 10,
        racks: 1,
        panels: 9,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 1,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": false, "state": 2 },
                            { "panelId": "p-2", "show": false, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 1,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 1 },
                            { "panelId": "p-1", "show": false, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-4",
                        state: 3,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 0 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-2",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                            { "panelId": "p-2", "show": false, "state": 0 },
                            { "panelId": "p-3", "show": false, "state": 2 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS101",
        rows: 3,
        racks: 8,
        panels: 3,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 1,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 0,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 1 },
                            { "panelId": "p-1", "show": false, "state": 2 },
                            { "panelId": "p-2", "show": true, "state": 1 },
                            { "panelId": "p-3", "show": false, "state": 3 },
                            { "panelId": "p-4", "show": false, "state": 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                            { "panelId": "p-2", "show": true, "state": 2 },
                            { "panelId": "p-3", "show": false, "state": 1 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-2",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 1,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 1,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS102",
        rows: 5,
        racks: 7,
        panels: 2,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 1 },
                            { "panelId": "p-2", "show": false, "state": 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                            { "panelId": "p-2", "show": true, "state": 3 },
                            { "panelId": "p-3", "show": false, "state": 0 },
                            { "panelId": "p-4", "show": false, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 0,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": false, "state": 2 },
                            { "panelId": "p-2", "show": true, "state": 1 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS103",
        rows: 2,
        racks: 7,
        panels: 8,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 0,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                            { "panelId": "p-2", "show": true, "state": 0 },
                            { "panelId": "p-3", "show": true, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 2 },
                            { "panelId": "p-2", "show": false, "state": 2 },
                            { "panelId": "p-3", "show": false, "state": 0 },
                            { "panelId": "p-4", "show": false, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 0,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                            { "panelId": "p-2", "show": true, "state": 2 },
                            { "panelId": "p-3", "show": false, "state": 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-4",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                            { "panelId": "p-2", "show": false, "state": 2 },
                            { "panelId": "p-3", "show": false, "state": 3 },
                            { "panelId": "p-4", "show": false, "state": 2 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                            { "panelId": "p-2", "show": true, "state": 3 },
                            { "panelId": "p-3", "show": true, "state": 3 },
                            { "panelId": "p-4", "show": false, "state": 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 2 },
                            { "panelId": "p-2", "show": false, "state": 3 },
                            { "panelId": "p-3", "show": true, "state": 3 },
                            { "panelId": "p-4", "show": true, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                            { "panelId": "p-2", "show": true, "state": 2 },
                            { "panelId": "p-3", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS104",
        rows: 2,
        racks: 7,
        panels: 5,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 0,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 1 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": true, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": true, "state": 1 },
                            { "panelId": "p-2", "show": true, "state": 2 },
                            { "panelId": "p-3", "show": false, "state": 0 },
                            { "panelId": "p-4", "show": false, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 1 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS105",
        rows: 10,
        racks: 6,
        panels: 6,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 3,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 2 },
                            { "panelId": "p-2", "show": true, "state": 3 },
                            { "panelId": "p-3", "show": false, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                            { "panelId": "p-2", "show": false, "state": 3 },
                            { "panelId": "p-3", "show": false, "state": 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 2 },
                            { "panelId": "p-2", "show": false, "state": 3 },
                            { "panelId": "p-3", "show": false, "state": 0 },
                            { "panelId": "p-4", "show": true, "state": 1 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS201",
        rows: 9,
        racks: 1,
        panels: 6,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 3,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 0 },
                            { "panelId": "p-1", "show": true, "state": 1 },
                            { "panelId": "p-2", "show": false, "state": 2 },
                            { "panelId": "p-3", "show": false, "state": 3 },
                            { "panelId": "p-4", "show": true, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 3,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 0,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                            { "panelId": "p-2", "show": true, "state": 2 },
                            { "panelId": "p-3", "show": false, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-4",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": true, "state": 0 },
                            { "panelId": "p-2", "show": false, "state": 3 },
                            { "panelId": "p-3", "show": true, "state": 3 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS202",
        rows: 4,
        racks: 2,
        panels: 10,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 0,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": true, "state": 2 },
                            { "panelId": "p-2", "show": true, "state": 3 },
                            { "panelId": "p-3", "show": false, "state": 1 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS203",
        rows: 7,
        racks: 3,
        panels: 8,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 1 },
                            { "panelId": "p-1", "show": true, "state": 2 },
                            { "panelId": "p-2", "show": false, "state": 3 },
                            { "panelId": "p-3", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 1,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                            { "panelId": "p-2", "show": false, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 3,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 0 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": true, "state": 2 },
                            { "panelId": "p-2", "show": true, "state": 3 },
                            { "panelId": "p-3", "show": false, "state": 1 },
                            { "panelId": "p-4", "show": false, "state": 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 0,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                            { "panelId": "p-2", "show": true, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-2",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                            { "panelId": "p-2", "show": false, "state": 3 },
                            { "panelId": "p-3", "show": true, "state": 2 },
                            { "panelId": "p-4", "show": true, "state": 2 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS205",
        rows: 1,
        racks: 4,
        panels: 10,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                            { "panelId": "p-1", "show": true, "state": 2 },
                            { "panelId": "p-2", "show": false, "state": 1 },
                            { "panelId": "p-3", "show": true, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 1 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                            { "panelId": "p-2", "show": true, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                            { "panelId": "p-2", "show": true, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 3,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS206",
        rows: 6,
        racks: 1,
        panels: 4,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                            { "panelId": "p-2", "show": true, "state": 3 },
                            { "panelId": "p-3", "show": false, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                            { "panelId": "p-2", "show": true, "state": 2 },
                            { "panelId": "p-3", "show": true, "state": 0 },
                            { "panelId": "p-4", "show": true, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-4",
                        state: 0,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                            { "panelId": "p-2", "show": false, "state": 3 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": true, "state": 1 },
                            { "panelId": "p-2", "show": true, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": true, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                            { "panelId": "p-2", "show": false, "state": 2 },
                            { "panelId": "p-3", "show": true, "state": 2 },
                            { "panelId": "p-4", "show": true, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 1,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 1 },
                            { "panelId": "p-1", "show": true, "state": 1 },
                            { "panelId": "p-2", "show": true, "state": 0 },
                            { "panelId": "p-3", "show": true, "state": 3 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-2",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 1,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": true, "state": 2 },
                            { "panelId": "p-2", "show": false, "state": 0 },
                            { "panelId": "p-3", "show": false, "state": 3 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS204",
        rows: 8,
        racks: 2,
        panels: 5,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                            { "panelId": "p-2", "show": true, "state": 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 3,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 0 },
                            { "panelId": "p-1", "show": true, "state": 0 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                            { "panelId": "p-2", "show": true, "state": 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                            { "panelId": "p-1", "show": true, "state": 2 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-2",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS107",
        rows: 7,
        racks: 2,
        panels: 6,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 3,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                            { "panelId": "p-2", "show": true, "state": 3 },
                            { "panelId": "p-3", "show": true, "state": 0 },
                            { "panelId": "p-4", "show": false, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 0,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 0 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                            { "panelId": "p-2", "show": false, "state": 0 },
                            { "panelId": "p-3", "show": false, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                            { "panelId": "p-1", "show": false, "state": 2 },
                            { "panelId": "p-2", "show": false, "state": 2 },
                            { "panelId": "p-3", "show": false, "state": 1 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-2",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 1 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                            { "panelId": "p-2", "show": true, "state": 2 },
                            { "panelId": "p-3", "show": false, "state": 1 },
                            { "panelId": "p-4", "show": true, "state": 3 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 2 },
                            { "panelId": "p-1", "show": false, "state": 2 },
                            { "panelId": "p-2", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 0,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": true, "state": 1 },
                            { "panelId": "p-2", "show": false, "state": 1 },
                            { "panelId": "p-3", "show": false, "state": 3 },
                            { "panelId": "p-4", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS106",
        rows: 4,
        racks: 7,
        panels: 4,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 2,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 1 },
                            { "panelId": "p-1", "show": true, "state": 3 },
                            { "panelId": "p-2", "show": false, "state": 3 },
                            { "panelId": "p-3", "show": true, "state": 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 3,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 0 },
                            { "panelId": "p-1", "show": true, "state": 2 },
                            { "panelId": "p-2", "show": false, "state": 1 },
                            { "panelId": "p-3", "show": false, "state": 3 },
                            { "panelId": "p-4", "show": false, "state": 1 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 3,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 2 },
                            { "panelId": "p-1", "show": false, "state": 1 },
                            { "panelId": "p-2", "show": true, "state": 2 },
                            { "panelId": "p-3", "show": true, "state": 3 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 1,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 1 },
                            { "panelId": "p-1", "show": false, "state": 2 },
                            { "panelId": "p-2", "show": false, "state": 3 },
                            { "panelId": "p-3", "show": true, "state": 0 },
                            { "panelId": "p-4", "show": true, "state": 0 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-2",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 3 },
                            { "panelId": "p-2", "show": false, "state": 1 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "PCS305",
        rows: 10,
        racks: 9,
        panels: 2,
        sections: [
            {
                sectionId: "s-0",
                torqueTubes: [
                    {
                        torqueTubeId: "t-0",
                        state: 0,
                        show: true,
                        panels: [
                            { "panelId": "p-0", "show": true, "state": 3 },
                            { "panelId": "p-1", "show": false, "state": 2 },
                            { "panelId": "p-2", "show": false, "state": 3 },
                            { "panelId": "p-3", "show": false, "state": 2 },
                            { "panelId": "p-4", "show": true, "state": 2 },
                        ],
                    },
                    {
                        torqueTubeId: "t-1",
                        state: 2,
                        show: false,
                        panels: [
                            { "panelId": "p-0", "show": false, "state": 0 },
                            { "panelId": "p-1", "show": false, "state": 2 },
                            { "panelId": "p-2", "show": true, "state": 1 },
                            { "panelId": "p-3", "show": true, "state": 2 },
                        ],
                    },
                ],
            },
        ],
    },

];

export default data;