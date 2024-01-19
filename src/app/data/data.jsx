const data = [
    {
        id: "PCS401", //3 secciones, 3 tt, y 2 panel
        rows: 3,
        racks: 9,
        panels: 11,
        sections: [
            {
                sectionId: "s-1",
                torqueTubes: [
                    {
                        torqueTubeId: "t-1",
                        state: 0,
                        show: true,
                        panels: [
                            { panelId: "p-1", show: true, state: 0 },
                            { panelId: "p-2", show: true, state: 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 0,
                        show: true,
                        panels: [
                            { panelId: "p-1", show: true, state: 0 },
                            { panelId: "p-2", show: true, state: 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 0,
                        show: true,
                        panels: [
                            { panelId: "p-1", show: true, state: 0 },
                            { panelId: "p-2", show: true, state: 0 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-2",
                torqueTubes: [
                    {
                        torqueTubeId: "t-1",
                        state: 0,
                        show: true,
                        panels: [
                            { panelId: "p-1", show: true, state: 0 },
                            { panelId: "p-2", show: true, state: 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 0,
                        show: true,
                        panels: [
                            { panelId: "p-1", show: true, state: 0 },
                            { panelId: "p-2", show: true, state: 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 0,
                        show: true,
                        panels: [
                            { panelId: "p-1", show: true, state: 0 },
                            { panelId: "p-2", show: true, state: 0 },
                        ],
                    },
                ],
            },
            {
                sectionId: "s-3",
                torqueTubes: [
                    {
                        torqueTubeId: "t-1",
                        state: 0,
                        show: true,
                        panels: [
                            { panelId: "p-1", show: true, state: 0 },
                            { panelId: "p-2", show: true, state: 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-2",
                        state: 0,
                        show: true,
                        panels: [
                            { panelId: "p-1", show: true, state: 0 },
                            { panelId: "p-2", show: true, state: 0 },
                        ],
                    },
                    {
                        torqueTubeId: "t-3",
                        state: 0,
                        show: true,
                        panels: [
                            { panelId: "p-1", show: true, state: 0 },
                            { panelId: "p-2", show: true, state: 0 },
                        ],
                    },
                ],
            },
        ],
        points: "99.93,0.12 99.93,19.92 69.02,19.92 69.02,39.62 0.12,39.62 0.12,0.12 38.93,0.12 38.93,9.62 61.62,9.62 61.62,0.12",
        viewBox: "0 0 100.05 39.75",
        background: "0 0 100.05 39.75",
    },
    {
        id: "PCS108",
        rows: 6,
        racks: 5,
        panels: 19,
        points: "9.32,21.43 0.12,21.43 0.12,56.33 9.12,56.33 9.12,61.42 39.62,61.42 39.62,0.12 9.32,0.12",
        viewBox: "0 0 39.75 61.55",
        background: "0 0 39.75 61.55",
    },
    {
        id: "PCS402",
        rows: 6,
        racks: 7,
        panels: 11,
        points: "48.83,20.12 48.83,0.12 107.52,0.12 107.52,35.02 74.52,35.02 74.52,40.23 0.12,40.23 0.12,20.22",
        viewBox: "0 0 107.65 40.35",
        background: "0 0 107.65 40.35",
    },
    {
        id: "PCS404",
        rows: 6,
        racks: 2,
        panels: 16,
        points: "53.43,0.12 16.23,0.12 16.23,9.72 0.12,9.72 0.12,61.23 53.83,61.23",
        viewBox: "0 0 53.95 61.35",
        background: "0 0 53.95 61.35",
    },
    {
        id: "PCS403",
        rows: 6,
        racks: 3,
        panels: 12,
        points: "51.92,0.12 51.92,39.62 53.12,39.62 53.12,61.23 0.12,61.23 0.12,0.12 ",
        viewBox: "0 0 53.95 61.35",
        background: "0 0 53.95 61.35",
    },
    {
        id: "PCS405",
        rows: 2,
        racks: 4,
        panels: 12,
        points: "45.73,9.73 45.73,0.13 0.12,0.23 0.12,41.13 1.33,41.13 1.33,61.23 55.12,61.23 55.12,9.73",
        viewBox: "0 0 55.25 61.35",
        background: "0 0 55.25 61.35",
    },
    {
        id: "PCS406",
        rows: 2,
        racks: 3,
        panels: 5,
        points: "26.03,0.12 26.03,19.92 0.12,19.92 0.12,61.12 53.13,61.12 53.13,41.02 51.92,41.02 51.92,0.12",
        viewBox: "0 0 53.25 61.25",
        background: "0 0 53.25 61.25",
    },
    {
        id: "PCS304",
        rows: 5,
        racks: 5,
        panels: 6,
        points: "0.12,40.72 0.12,61.12 49.92,61.12 49.92,19.92 75.83,19.92 75.83,0.12 30.92,0.12 30.92,10.62 33.42,10.62 33.42,19.62 33.02,19.62 33.02,25.12 18.92,25.12 18.92,19.92 11.33,19.92 11.33,24.92 5.23,24.92 5.23,40.72",
        viewBox: "0 0 75.95 61.25",
        background: "0 0 75.95 61.25",
    },
    {
        id: "PCS303",
        rows: 4,
        racks: 7,
        panels: 10,
        points: "0.43,102.53 10.93,102.53 10.93,82.43 11.93,82.43 11.93,77.43 38.13,77.43 37.73,61.42 39.13,61.42 39.13,0.12 0.13,0.12",
        viewBox: "0 0 39.25 102.65",
        background: "0 0 39.25 102.65",
    },
    {
        id: "PCS301",
        rows: 4,
        racks: 10,
        panels: 14,
        points: "67.62,21.23 79.12,21.23 79.12,32.42 76.22,32.42 76.22,41.42 66.72,41.42 66.72,51.73 64.53,51.73 64.53,61.62 34.43,61.62 34.43,51.73 32.12,51.73 32.12,41.33 20.72,41.33 20.72,32.02 17.32,32.02 17.32,22.02 0.12,22.02 0.12,0.12 67.72,0.12",
        viewBox: "0 0 79.25 61.75",
        background: "0 0 79.25 61.75",
    },
    {
        id: "PCS302",
        rows: 2,
        racks: 6,
        panels: 19,
        points: "57.82,61.52 50.52,61.52 50.52,55.92 48.62,55.92 48.62,51.92 42.52,51.92 42.52,41.23 35.52,41.23 35.52,52.23 29.02,52.23 29.02,56.12 25.23,56.12 25.23,61.23 0.12,61.23 0.12,0.12 58.12,0.12",
        viewBox: "0 0 58.25 61.65",
        background: "0 0 58.25 61.65",
    },
    {
        id: "PCS306",
        rows: 5,
        racks: 5,
        panels: 6,
        points: "0.33,20.22 3.83,20.22 3.83,34.72 7.63,34.72 7.63,30.33 23.93,30.33 23.93,35.03 33.53,35.03 33.53,39.92 75.73,39.92 75.73,25.22 59.63,25.22 59.63,0.42 53.33,0.42 53.33,20.12 43.83,20.12 43.83,25.53 34.83,25.53 34.83,20.22 24.43,20.22 24.43,0.12 0.13,0.12",
        viewBox: "0 0 75.85 40.05",
        background: "0 0 75.85 40.05",
    },
    {
        id: "PCS307",
        rows: 2,
        racks: 10,
        panels: 11,
        points: "6.43,29.62 0.12,29.62 0.12,40.43 58.93,40.43 58.93,35.23 65.93,35.23 65.93,30.82 71.12,30.82 71.12,20.12 82.22,20.12 82.22,0.12 55.43,0.12 55.43,9.73 54.12,9.73 54.12,20.32 48.93,20.32 48.93,25.62 44.82,25.62 44.82,29.82 31.93,29.82 31.93,25.43 23.72,25.43 23.72,20.32 6.52,20.32",
        viewBox: "0 0 82.35 40.55",
        background: "0 0 82.35 40.55",
    },
    {
        id: "PCS101",
        rows: 5,
        racks: 2,
        panels: 6,
        points: "24.12,0.12 31.03,0.12 31.03,21.53 65.93,21.53 65.93,41.62 62.83,41.62 62.83,61.53 0.12,61.53 0.12,41.42 5.53,41.42 5.53,21.72 15.83,21.72 15.83,5.53 24.12,5.53",
        viewBox: "0 0 66.05 61.65",
        background: "0 0 66.05 61.65",
    },
    {
        id: "PCS102",
        rows: 5,
        racks: 7,
        panels: 19,
        points: "24.12,0.12 31.03,0.12 31.03,21.53 65.93,21.53 65.93,41.62 62.83,41.62 62.83,61.53 0.12,61.53 0.12,41.42 5.53,41.42 5.53,21.72 15.83,21.72 15.83,5.53 24.12,5.53",
        viewBox: "0 0 66.05 61.65",
        background: "0 0 66.05 61.65",
    },
    {
        id: "PCS103",
        rows: 6,
        racks: 6,
        panels: 19,
        points: "6.12,0.13 6.12,9.83 3.02,9.83 3.02,20.03 0.12,20.03 0.12,30.63 7.02,30.63 7.02,34.83 31.02,34.83 31.02,39.83 53.12,39.83 53.12,30.63 54.02,30.63 54.02,20.23 63.12,20.23 63.12,14.73 67.62,14.73 67.62,10.73 68.43,10.73 68.43,0.43",
        viewBox: "0 0 68.55 39.95",
        background: "0 0 68.55 39.95",
    },
    {
        id: "PCS104",
        rows: 5,
        racks: 4,
        panels: 12,
        points: "40.92,56.02 40.92,14.62 38.23,14.62 38.23,0.12 16.42,0.12 16.42,4.23 0.12,4.23 0.12,56.02",
        viewBox: "0 0 41.05 56.15",
        background: "0 0 41.05 56.15",
    },
    {
        id: "PCS105",
        rows: 5,
        racks: 6,
        panels: 9,
        points: "0.12,0.12 0.12,61.72 34.92,61.72 34.92,0.12",
        viewBox: "0 0 35.05 61.85",
        background: "0 0 35.05 61.85",
    },
    {
        id: "PCS201",
        rows: 3,
        racks: 8,
        panels: 12,
        points: "0.12,0.12 50.03,0.12 50.03,61.62 18.32,61.62 18.32,41.93 0.12,41.93",
        viewBox: "0 0 50.15 61.75",
        background: "0 0 50.15 61.75",
    },
    {
        id: "PCS202",
        rows: 6,
        racks: 8,
        panels: 19,
        points: "0.12,0.12 42.72,0.12 42.72,41.93 45.52,41.93 45.52,61.62 0.12,61.62",
        viewBox: "0 0 45.65 61.75",
        background: "0 0 45.65 61.75",
    },
    {
        id: "PCS203",
        rows: 5,
        racks: 4,
        panels: 11,
        points: "50.32,0.12 50.32,75.62 0.12,75.62 0.12,35.73 6.23,35.73 6.23,23.83 13.32,23.83 13.32,19.93 20.53,19.93 20.53,14.12 41.62,14.12 41.62,0.12",
        viewBox: "0 0 50.45 75.75",
        background: "0 0 50.45 75.75",
    },
    {
        id: "PCS205",
        rows: 6,
        racks: 2,
        panels: 16,
        points: "0.12,40.73 5.23,40.73 5.23,30.02 7.53,30.02 7.53,25.62 12.43,25.62 12.43,20.02 31.12,20.02 31.12,10.02 38.43,10.02 38.43,5.52 48.73,5.52 48.73,0.12 57.62,0.12 57.62,41.02 63.32,41.02 63.32,61.52 0.12,61.52",
        viewBox: "0 0 63.45 61.65",
        background: "0 0 63.45 61.65",
    },
    {
        id: "PCS206",
        rows: 4,
        racks: 10,
        panels: 13,
        points: "0.12,41.62 77.03,41.62 77.03,10.42 86.32,10.42 86.32,0.12 0.12,0.12",
        viewBox: "0 0 86.45 41.75",
        background: "0 0 86.45 41.75",
    },
    {
        id: "PCS204",
        rows: 5,
        racks: 4,
        panels: 12,
        points: "73.23,40.33 76.53,40.33 76.53,61.12 53.12,61.12 53.12,31.12 23.12,31.12 23.12,20.73 0.12,20.73 0.12,0.12 73.12,0.12",
        viewBox: "0 0 76.65 61.25",
        background: "0 0 76.65 61.25",
    },
    {
        id: "PCS107",
        rows: 6,
        racks: 6,
        panels: 19,
        points: "66.52,0.12 66.52,51.23 61.42,51.23 61.42,55.42 26.92,55.42 26.92,40.62 30.23,40.62 30.23,26.12 33.02,26.12 33.02,20.73 44.83,20.73 44.83,6.12 45.23,6.12 45.23,1.82 22.33,1.82 22.33,11.62 20.33,11.62 20.33,15.62 16.02,15.62 16.02,20.73 0.12,20.73 0.12,0.12",
        viewBox: "0 0 66.65 55.55",
        background: "0 0 66.65 55.55",
    },
    {
        id: "PCS106",
        rows: 5,
        racks: 6,
        panels: 8,
        points: "15.43,0.12 15.43,6.32 5.22,6.32 5.22,10.23 3.12,10.23 3.12,20.73 0.12,20.73 0.12,40.82 3.72,40.82 3.72,51.52 6.32,51.52 6.32,55.73 9.32,55.73 9.32,60.82 36.32,60.82 36.32,55.42 59.32,55.42 59.32,31.52 64.62,31.52 64.62,20.73 54.82,20.73 54.82,0.12",
        viewBox: "0 0 64.75 60.95",
        background: "0 0 64.75 60.95",
    },
    {
        id: "PCS305",
        rows: 2,
        racks: 6,
        panels: 7,
        points: "0.12,61.12 0.12,0.12 52.73,0.12 52.73,10.62 40.62,10.62 40.62,14.62 35.53,14.62 35.53,19.82 35.12,19.82 35.12,40.92 38.23,40.92 38.23,46.72 53.03,46.72 53.03,40.72 55.83,40.72 55.83,61.12",
        viewBox: "0 0 55.95 61.25",
        background: "0 0 55.95 61.25",
    },
];

export default data;
