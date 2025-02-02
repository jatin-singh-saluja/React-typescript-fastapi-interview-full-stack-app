// You can use these functions instead of the backend API in case the backend API isn't ready to be queried

import { Station, TrainMovement } from "../types"


export const request_mock_stations = async (): Promise<Station[]> => {
    return [
        {
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "station_name": "Munich Central Station",
            "latitude": 40.417358,
            "longitude": 117.500558
        },
        {
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "station_name": "Munich East",
            "latitude": -34.0257608,
            "longitude": 18.4230789
        },
        {
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "station_name": "Harras",
            "latitude": 7.8853608,
            "longitude": 80.6523081
        },
        {
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "station_name": "Pasing",
            "latitude": 48.316667,
            "longitude": 106.25
        },
        {
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "station_name": "Freising",
            "latitude": 21.2811908,
            "longitude": -89.6651628
        },
        {
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "station_name": "Augsburg",
            "latitude": -6.81482,
            "longitude": 106.40417
        },
        {
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "station_name": "Westpark",
            "latitude": 55.4747442,
            "longitude": 40.4084556
        },
        {
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "station_name": "Messestadt West",
            "latitude": 31.680023,
            "longitude": 114.576901
        },
        {
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "station_name": "Mittersendling",
            "latitude": 41.2875744,
            "longitude": -8.447078
        },
        {
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "station_name": "Munich Airport",
            "latitude": 29.985295,
            "longitude": 122.207215
        },
        {
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "station_name": "Sendlinger Tor",
            "latitude": 0.6488335,
            "longitude": 99.745565
        },
        {
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "station_name": "Hallbergmoos",
            "latitude": 47.3842312,
            "longitude": 8.5324101
        },
        {
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "station_name": "Aying",
            "latitude": 25.19786,
            "longitude": 99.233929
        },
        {
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "station_name": "Neu Aubing",
            "latitude": 48.9481767,
            "longitude": 38.4878774
        },
        {
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "station_name": "Am Hart",
            "latitude": -10.07722,
            "longitude": -76.21194
        },
        {
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "station_name": "Alte Heide",
            "latitude": 52.145887,
            "longitude": 25.5329454
        },
        {
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "station_name": "Garching",
            "latitude": 41.3398084,
            "longitude": -8.1462729
        },
        {
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "station_name": "University",
            "latitude": 44.691336,
            "longitude": 129.696957
        },
        {
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "station_name": "Stachus",
            "latitude": 34.363184,
            "longitude": 107.237743
        },
        {
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "station_name": "Odeonsplatz",
            "latitude": 41.3307129,
            "longitude": -8.5444494
        }
    ]
}


export const request_mock_train_movements = async (): Promise<TrainMovement[]> => {
    return [
        {
            "journey_id": "5ccc0585c1122179195cb25d4caafa1e",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708745995708,
            "actual_timestamp": 1708746080249,
            "event_type": "Arrival",
            "delay": 84541
        },
        {
            "journey_id": "5ccc0585c1122179195cb25d4caafa1e",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708746152435,
            "actual_timestamp": 1708746356043,
            "event_type": "Departure",
            "delay": 203608
        },
        {
            "journey_id": "5ccc0585c1122179195cb25d4caafa1e",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708746295708,
            "actual_timestamp": 1708746455296,
            "event_type": "Arrival",
            "delay": 244129
        },
        {
            "journey_id": "5ccc0585c1122179195cb25d4caafa1e",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708746381508,
            "actual_timestamp": 1708746699433,
            "event_type": "Departure",
            "delay": 402466
        },
        {
            "journey_id": "5ccc0585c1122179195cb25d4caafa1e",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708746595708,
            "actual_timestamp": 1708746840399,
            "event_type": "Arrival",
            "delay": 488820
        },
        {
            "journey_id": "5ccc0585c1122179195cb25d4caafa1e",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708746753793,
            "actual_timestamp": 1708747268343,
            "event_type": "Departure",
            "delay": 758679
        },
        {
            "journey_id": "5ccc0585c1122179195cb25d4caafa1e",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708746895708,
            "actual_timestamp": 1708747033809,
            "event_type": "Arrival",
            "delay": 626921
        },
        {
            "journey_id": "5ccc0585c1122179195cb25d4caafa1e",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708747032906,
            "actual_timestamp": 1708747378500,
            "event_type": "Departure",
            "delay": 834414
        },
        {
            "journey_id": "5ccc0585c1122179195cb25d4caafa1e",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708747195708,
            "actual_timestamp": 1708747297151,
            "event_type": "Arrival",
            "delay": 728364
        },
        {
            "journey_id": "5ccc0585c1122179195cb25d4caafa1e",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708747317206,
            "actual_timestamp": 1708747581597,
            "event_type": "Departure",
            "delay": 891312
        },
        {
            "journey_id": "5ccc0585c1122179195cb25d4caafa1e",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708747495708,
            "actual_timestamp": 1708747601672,
            "event_type": "Arrival",
            "delay": 834328
        },
        {
            "journey_id": "5ccc0585c1122179195cb25d4caafa1e",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708747639975,
            "actual_timestamp": 1708747770854,
            "event_type": "Departure",
            "delay": 859243
        },
        {
            "journey_id": "5ccc0585c1122179195cb25d4caafa1e",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708747795708,
            "actual_timestamp": 1708747946344,
            "event_type": "Arrival",
            "delay": 984964
        },
        {
            "journey_id": "5ccc0585c1122179195cb25d4caafa1e",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708747892927,
            "actual_timestamp": 1708748059403,
            "event_type": "Departure",
            "delay": 1000804
        },
        {
            "journey_id": "5ccc0585c1122179195cb25d4caafa1e",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708748095708,
            "actual_timestamp": 1708748159097,
            "event_type": "Arrival",
            "delay": 1048353
        },
        {
            "journey_id": "5ccc0585c1122179195cb25d4caafa1e",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708748267082,
            "actual_timestamp": 1708748360342,
            "event_type": "Departure",
            "delay": 1078224
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708709201445,
            "actual_timestamp": 1708709379807,
            "event_type": "Arrival",
            "delay": 178362
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708709266616,
            "actual_timestamp": 1708709617101,
            "event_type": "Departure",
            "delay": 350485
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708709501445,
            "actual_timestamp": 1708709764345,
            "event_type": "Arrival",
            "delay": 441262
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708709564779,
            "actual_timestamp": 1708710013798,
            "event_type": "Departure",
            "delay": 627381
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708709801445,
            "actual_timestamp": 1708709877887,
            "event_type": "Arrival",
            "delay": 517704
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708709968100,
            "actual_timestamp": 1708710176621,
            "event_type": "Departure",
            "delay": 649783
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708710101445,
            "actual_timestamp": 1708710357007,
            "event_type": "Arrival",
            "delay": 773266
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708710208547,
            "actual_timestamp": 1708710465125,
            "event_type": "Departure",
            "delay": 774282
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708710401445,
            "actual_timestamp": 1708710491638,
            "event_type": "Arrival",
            "delay": 863459
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708710540964,
            "actual_timestamp": 1708710860347,
            "event_type": "Departure",
            "delay": 1092649
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708710701445,
            "actual_timestamp": 1708710989564,
            "event_type": "Arrival",
            "delay": 1151578
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708710807842,
            "actual_timestamp": 1708711258077,
            "event_type": "Departure",
            "delay": 1313694
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708711001445,
            "actual_timestamp": 1708711164959,
            "event_type": "Arrival",
            "delay": 1315092
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708711140234,
            "actual_timestamp": 1708711537083,
            "event_type": "Departure",
            "delay": 1548427
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708711301445,
            "actual_timestamp": 1708711501792,
            "event_type": "Arrival",
            "delay": 1515439
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708711443673,
            "actual_timestamp": 1708711786374,
            "event_type": "Departure",
            "delay": 1657793
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708711601445,
            "actual_timestamp": 1708711624753,
            "event_type": "Arrival",
            "delay": 1538747
        },
        {
            "journey_id": "8d3a057382fbe9066a17f274d88dde38",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708711716195,
            "actual_timestamp": 1708711824638,
            "event_type": "Departure",
            "delay": 1623882
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708764509225,
            "actual_timestamp": 1708764635042,
            "event_type": "Arrival",
            "delay": 125817
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708764618319,
            "actual_timestamp": 1708764801885,
            "event_type": "Departure",
            "delay": 183566
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708764809225,
            "actual_timestamp": 1708765026857,
            "event_type": "Arrival",
            "delay": 343449
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708764901916,
            "actual_timestamp": 1708765384896,
            "event_type": "Departure",
            "delay": 608797
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708765109225,
            "actual_timestamp": 1708765244041,
            "event_type": "Arrival",
            "delay": 478265
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708765266108,
            "actual_timestamp": 1708765657298,
            "event_type": "Departure",
            "delay": 734639
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708765409225,
            "actual_timestamp": 1708765538749,
            "event_type": "Arrival",
            "delay": 607789
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708765493264,
            "actual_timestamp": 1708765628406,
            "event_type": "Departure",
            "delay": 613407
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708765709225,
            "actual_timestamp": 1708765769424,
            "event_type": "Arrival",
            "delay": 667988
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708765797316,
            "actual_timestamp": 1708765981989,
            "event_type": "Departure",
            "delay": 792462
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708766009225,
            "actual_timestamp": 1708766245373,
            "event_type": "Arrival",
            "delay": 904136
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708766113797,
            "actual_timestamp": 1708766624422,
            "event_type": "Departure",
            "delay": 1178613
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708766309225,
            "actual_timestamp": 1708766581406,
            "event_type": "Arrival",
            "delay": 1176317
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708766387552,
            "actual_timestamp": 1708766713096,
            "event_type": "Departure",
            "delay": 1229680
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708766609225,
            "actual_timestamp": 1708766667575,
            "event_type": "Arrival",
            "delay": 1234667
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708766762105,
            "actual_timestamp": 1708766823732,
            "event_type": "Departure",
            "delay": 1237944
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708766909225,
            "actual_timestamp": 1708767002185,
            "event_type": "Arrival",
            "delay": 1327627
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708767021582,
            "actual_timestamp": 1708767343886,
            "event_type": "Departure",
            "delay": 1556971
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708767209225,
            "actual_timestamp": 1708767259980,
            "event_type": "Arrival",
            "delay": 1378382
        },
        {
            "journey_id": "7ae9abe788145a7f471e5d4a74fb07cc",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708767305576,
            "actual_timestamp": 1708767570549,
            "event_type": "Departure",
            "delay": 1592600
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708712431032,
            "actual_timestamp": 1708712678535,
            "event_type": "Arrival",
            "delay": 247503
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708712500624,
            "actual_timestamp": 1708712815299,
            "event_type": "Departure",
            "delay": 314675
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708712731032,
            "actual_timestamp": 1708712996101,
            "event_type": "Arrival",
            "delay": 512572
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708712909611,
            "actual_timestamp": 1708713452369,
            "event_type": "Departure",
            "delay": 790261
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708713031032,
            "actual_timestamp": 1708713252451,
            "event_type": "Arrival",
            "delay": 733991
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708713177811,
            "actual_timestamp": 1708713581794,
            "event_type": "Departure",
            "delay": 916555
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708713331032,
            "actual_timestamp": 1708713568497,
            "event_type": "Arrival",
            "delay": 971456
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708713460592,
            "actual_timestamp": 1708713834347,
            "event_type": "Departure",
            "delay": 1107746
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708713631032,
            "actual_timestamp": 1708713752699,
            "event_type": "Arrival",
            "delay": 1093123
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708713724028,
            "actual_timestamp": 1708713911507,
            "event_type": "Departure",
            "delay": 1158935
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708713931032,
            "actual_timestamp": 1708714147696,
            "event_type": "Arrival",
            "delay": 1309787
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708714063582,
            "actual_timestamp": 1708714570561,
            "event_type": "Departure",
            "delay": 1600102
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708714231032,
            "actual_timestamp": 1708714254751,
            "event_type": "Arrival",
            "delay": 1333506
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708714300616,
            "actual_timestamp": 1708714464091,
            "event_type": "Departure",
            "delay": 1473262
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708714531032,
            "actual_timestamp": 1708714573095,
            "event_type": "Arrival",
            "delay": 1375569
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708714602889,
            "actual_timestamp": 1708714934729,
            "event_type": "Departure",
            "delay": 1665346
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708714831032,
            "actual_timestamp": 1708715039919,
            "event_type": "Arrival",
            "delay": 1584456
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708714983052,
            "actual_timestamp": 1708715393732,
            "event_type": "Departure",
            "delay": 1786249
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708715131032,
            "actual_timestamp": 1708715412463,
            "event_type": "Arrival",
            "delay": 1865887
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708715307261,
            "actual_timestamp": 1708715594147,
            "event_type": "Departure",
            "delay": 1871342
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708715431032,
            "actual_timestamp": 1708715660434,
            "event_type": "Arrival",
            "delay": 2095289
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708715530475,
            "actual_timestamp": 1708715873954,
            "event_type": "Departure",
            "delay": 2209366
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708715731032,
            "actual_timestamp": 1708715770413,
            "event_type": "Arrival",
            "delay": 2134670
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708715841189,
            "actual_timestamp": 1708715999145,
            "event_type": "Departure",
            "delay": 2253245
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708716031032,
            "actual_timestamp": 1708716256621,
            "event_type": "Arrival",
            "delay": 2360259
        },
        {
            "journey_id": "2b9d0ca0d9031552534a5900e72f5658",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708716165760,
            "actual_timestamp": 1708716490398,
            "event_type": "Departure",
            "delay": 2459308
        },
        {
            "journey_id": "e3c86a2404e645ed160f50f1c15ce876",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708779942172,
            "actual_timestamp": 1708780187116,
            "event_type": "Arrival",
            "delay": 244944
        },
        {
            "journey_id": "e3c86a2404e645ed160f50f1c15ce876",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708780068940,
            "actual_timestamp": 1708780425920,
            "event_type": "Departure",
            "delay": 356980
        },
        {
            "journey_id": "e3c86a2404e645ed160f50f1c15ce876",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708780242172,
            "actual_timestamp": 1708780311475,
            "event_type": "Arrival",
            "delay": 314247
        },
        {
            "journey_id": "e3c86a2404e645ed160f50f1c15ce876",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708780364127,
            "actual_timestamp": 1708780477756,
            "event_type": "Departure",
            "delay": 358573
        },
        {
            "journey_id": "e3c86a2404e645ed160f50f1c15ce876",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708780542172,
            "actual_timestamp": 1708780663649,
            "event_type": "Arrival",
            "delay": 435724
        },
        {
            "journey_id": "e3c86a2404e645ed160f50f1c15ce876",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708780632433,
            "actual_timestamp": 1708780792894,
            "event_type": "Departure",
            "delay": 474708
        },
        {
            "journey_id": "e3c86a2404e645ed160f50f1c15ce876",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708780842172,
            "actual_timestamp": 1708780935688,
            "event_type": "Arrival",
            "delay": 529240
        },
        {
            "journey_id": "e3c86a2404e645ed160f50f1c15ce876",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708780962484,
            "actual_timestamp": 1708781192702,
            "event_type": "Departure",
            "delay": 665942
        },
        {
            "journey_id": "e3c86a2404e645ed160f50f1c15ce876",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708781142172,
            "actual_timestamp": 1708781415728,
            "event_type": "Arrival",
            "delay": 802796
        },
        {
            "journey_id": "e3c86a2404e645ed160f50f1c15ce876",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708781252247,
            "actual_timestamp": 1708781620155,
            "event_type": "Departure",
            "delay": 897148
        },
        {
            "journey_id": "e3c86a2404e645ed160f50f1c15ce876",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708781442172,
            "actual_timestamp": 1708781472335,
            "event_type": "Arrival",
            "delay": 832959
        },
        {
            "journey_id": "e3c86a2404e645ed160f50f1c15ce876",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708781567681,
            "actual_timestamp": 1708781849890,
            "event_type": "Departure",
            "delay": 1085005
        },
        {
            "journey_id": "e3c86a2404e645ed160f50f1c15ce876",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708781742172,
            "actual_timestamp": 1708782036245,
            "event_type": "Arrival",
            "delay": 1127032
        },
        {
            "journey_id": "e3c86a2404e645ed160f50f1c15ce876",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708781883994,
            "actual_timestamp": 1708782219878,
            "event_type": "Departure",
            "delay": 1168843
        },
        {
            "journey_id": "e3c86a2404e645ed160f50f1c15ce876",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708782042172,
            "actual_timestamp": 1708782164289,
            "event_type": "Arrival",
            "delay": 1249149
        },
        {
            "journey_id": "e3c86a2404e645ed160f50f1c15ce876",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708782217566,
            "actual_timestamp": 1708782447730,
            "event_type": "Departure",
            "delay": 1357196
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708752819632,
            "actual_timestamp": 1708752950170,
            "event_type": "Arrival",
            "delay": 130538
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708752992594,
            "actual_timestamp": 1708753370646,
            "event_type": "Departure",
            "delay": 378052
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708753119632,
            "actual_timestamp": 1708753264035,
            "event_type": "Arrival",
            "delay": 274941
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708753278598,
            "actual_timestamp": 1708753519300,
            "event_type": "Departure",
            "delay": 371240
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708753419632,
            "actual_timestamp": 1708753691274,
            "event_type": "Arrival",
            "delay": 546583
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708753545067,
            "actual_timestamp": 1708754076918,
            "event_type": "Departure",
            "delay": 806792
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708753719632,
            "actual_timestamp": 1708753824043,
            "event_type": "Arrival",
            "delay": 650994
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708753884035,
            "actual_timestamp": 1708754003447,
            "event_type": "Departure",
            "delay": 665995
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708754019632,
            "actual_timestamp": 1708754065964,
            "event_type": "Arrival",
            "delay": 697326
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708754133948,
            "actual_timestamp": 1708754395234,
            "event_type": "Departure",
            "delay": 912280
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708754319632,
            "actual_timestamp": 1708754415158,
            "event_type": "Arrival",
            "delay": 792852
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708754411592,
            "actual_timestamp": 1708754521728,
            "event_type": "Departure",
            "delay": 807462
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708754619632,
            "actual_timestamp": 1708754876391,
            "event_type": "Arrival",
            "delay": 1049611
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708754743692,
            "actual_timestamp": 1708755235033,
            "event_type": "Departure",
            "delay": 1284193
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708754919632,
            "actual_timestamp": 1708755077469,
            "event_type": "Arrival",
            "delay": 1207448
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708755020616,
            "actual_timestamp": 1708755286054,
            "event_type": "Departure",
            "delay": 1315049
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708755219632,
            "actual_timestamp": 1708755349069,
            "event_type": "Arrival",
            "delay": 1336885
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708755353082,
            "actual_timestamp": 1708755543458,
            "event_type": "Departure",
            "delay": 1397824
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708755519632,
            "actual_timestamp": 1708755813282,
            "event_type": "Arrival",
            "delay": 1630535
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708755579950,
            "actual_timestamp": 1708755945890,
            "event_type": "Departure",
            "delay": 1702825
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708755819632,
            "actual_timestamp": 1708755989826,
            "event_type": "Arrival",
            "delay": 1800729
        },
        {
            "journey_id": "3b14ea45b2dc2a160f78229874c42ed7",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708755951170,
            "actual_timestamp": 1708756365816,
            "event_type": "Departure",
            "delay": 2045181
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708760999740,
            "actual_timestamp": 1708761247867,
            "event_type": "Arrival",
            "delay": 248127
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708761136315,
            "actual_timestamp": 1708761395743,
            "event_type": "Departure",
            "delay": 259428
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708761299740,
            "actual_timestamp": 1708761407804,
            "event_type": "Arrival",
            "delay": 356191
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708761442846,
            "actual_timestamp": 1708761559926,
            "event_type": "Departure",
            "delay": 365207
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708761599740,
            "actual_timestamp": 1708761600280,
            "event_type": "Arrival",
            "delay": 356731
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708761713404,
            "actual_timestamp": 1708761876592,
            "event_type": "Departure",
            "delay": 519379
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708761899740,
            "actual_timestamp": 1708762004355,
            "event_type": "Arrival",
            "delay": 461346
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708762069510,
            "actual_timestamp": 1708762228758,
            "event_type": "Departure",
            "delay": 515979
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708762199740,
            "actual_timestamp": 1708762284047,
            "event_type": "Arrival",
            "delay": 545653
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708762320066,
            "actual_timestamp": 1708762632001,
            "event_type": "Departure",
            "delay": 773281
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708762499740,
            "actual_timestamp": 1708762750687,
            "event_type": "Arrival",
            "delay": 796600
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708762585153,
            "actual_timestamp": 1708762874903,
            "event_type": "Departure",
            "delay": 835403
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708762799740,
            "actual_timestamp": 1708762888351,
            "event_type": "Arrival",
            "delay": 885211
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708762885995,
            "actual_timestamp": 1708763047503,
            "event_type": "Departure",
            "delay": 958108
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708763099740,
            "actual_timestamp": 1708763323945,
            "event_type": "Arrival",
            "delay": 1109416
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708763173377,
            "actual_timestamp": 1708763644076,
            "event_type": "Departure",
            "delay": 1355910
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708763399740,
            "actual_timestamp": 1708763621926,
            "event_type": "Arrival",
            "delay": 1331602
        },
        {
            "journey_id": "569248f42521eeba53647cbddce115a4",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708763490114,
            "actual_timestamp": 1708763871158,
            "event_type": "Departure",
            "delay": 1490460
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708719978423,
            "actual_timestamp": 1708720238857,
            "event_type": "Arrival",
            "delay": 260434
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708720044376,
            "actual_timestamp": 1708720431448,
            "event_type": "Departure",
            "delay": 387072
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708720278423,
            "actual_timestamp": 1708720341101,
            "event_type": "Arrival",
            "delay": 323112
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708720419318,
            "actual_timestamp": 1708720513813,
            "event_type": "Departure",
            "delay": 354929
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708720578423,
            "actual_timestamp": 1708720646924,
            "event_type": "Arrival",
            "delay": 391613
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708720714115,
            "actual_timestamp": 1708720825093,
            "event_type": "Departure",
            "delay": 434090
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708720878423,
            "actual_timestamp": 1708721089776,
            "event_type": "Arrival",
            "delay": 602966
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708720980873,
            "actual_timestamp": 1708721368163,
            "event_type": "Departure",
            "delay": 778903
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708721178423,
            "actual_timestamp": 1708721450393,
            "event_type": "Arrival",
            "delay": 874936
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708721357177,
            "actual_timestamp": 1708721895603,
            "event_type": "Departure",
            "delay": 1141392
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708721478423,
            "actual_timestamp": 1708721683696,
            "event_type": "Arrival",
            "delay": 1080209
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708721647097,
            "actual_timestamp": 1708722038032,
            "event_type": "Departure",
            "delay": 1265871
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708721778423,
            "actual_timestamp": 1708721926380,
            "event_type": "Arrival",
            "delay": 1228166
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708721845455,
            "actual_timestamp": 1708722151664,
            "event_type": "Departure",
            "delay": 1386418
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708722078423,
            "actual_timestamp": 1708722179979,
            "event_type": "Arrival",
            "delay": 1329722
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708722246491,
            "actual_timestamp": 1708722638868,
            "event_type": "Departure",
            "delay": 1620543
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708722378423,
            "actual_timestamp": 1708722419147,
            "event_type": "Arrival",
            "delay": 1370446
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708722555921,
            "actual_timestamp": 1708722612775,
            "event_type": "Departure",
            "delay": 1386576
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708722678423,
            "actual_timestamp": 1708722970755,
            "event_type": "Arrival",
            "delay": 1662778
        },
        {
            "journey_id": "e1b6d59ff3ce867f454ed2d8643356d7",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708722815261,
            "actual_timestamp": 1708723331677,
            "event_type": "Departure",
            "delay": 1886862
        },
        {
            "journey_id": "c6be3540de542d2442da4ffe19b72d3b",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708725666769,
            "actual_timestamp": 1708725705680,
            "event_type": "Arrival",
            "delay": 38911
        },
        {
            "journey_id": "c6be3540de542d2442da4ffe19b72d3b",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708725841026,
            "actual_timestamp": 1708726093466,
            "event_type": "Departure",
            "delay": 252440
        },
        {
            "journey_id": "c6be3540de542d2442da4ffe19b72d3b",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708725966769,
            "actual_timestamp": 1708726074930,
            "event_type": "Arrival",
            "delay": 147072
        },
        {
            "journey_id": "c6be3540de542d2442da4ffe19b72d3b",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708726087309,
            "actual_timestamp": 1708726267955,
            "event_type": "Departure",
            "delay": 219557
        },
        {
            "journey_id": "c6be3540de542d2442da4ffe19b72d3b",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708726266769,
            "actual_timestamp": 1708726463460,
            "event_type": "Arrival",
            "delay": 343763
        },
        {
            "journey_id": "c6be3540de542d2442da4ffe19b72d3b",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708726327242,
            "actual_timestamp": 1708726663634,
            "event_type": "Departure",
            "delay": 483464
        },
        {
            "journey_id": "c6be3540de542d2442da4ffe19b72d3b",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708726566769,
            "actual_timestamp": 1708726744499,
            "event_type": "Arrival",
            "delay": 521493
        },
        {
            "journey_id": "c6be3540de542d2442da4ffe19b72d3b",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708726706153,
            "actual_timestamp": 1708727146870,
            "event_type": "Departure",
            "delay": 784480
        },
        {
            "journey_id": "c6be3540de542d2442da4ffe19b72d3b",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708726866769,
            "actual_timestamp": 1708727135394,
            "event_type": "Arrival",
            "delay": 790118
        },
        {
            "journey_id": "c6be3540de542d2442da4ffe19b72d3b",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708726963190,
            "actual_timestamp": 1708727372268,
            "event_type": "Departure",
            "delay": 930571
        },
        {
            "journey_id": "c6be3540de542d2442da4ffe19b72d3b",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708727166769,
            "actual_timestamp": 1708727376155,
            "event_type": "Arrival",
            "delay": 999504
        },
        {
            "journey_id": "c6be3540de542d2442da4ffe19b72d3b",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708727321549,
            "actual_timestamp": 1708727727187,
            "event_type": "Departure",
            "delay": 1195756
        },
        {
            "journey_id": "c6be3540de542d2442da4ffe19b72d3b",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708727466769,
            "actual_timestamp": 1708727555920,
            "event_type": "Arrival",
            "delay": 1088655
        },
        {
            "journey_id": "c6be3540de542d2442da4ffe19b72d3b",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708727582867,
            "actual_timestamp": 1708727703377,
            "event_type": "Departure",
            "delay": 1120014
        },
        {
            "journey_id": "c6be3540de542d2442da4ffe19b72d3b",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708727766769,
            "actual_timestamp": 1708727970627,
            "event_type": "Arrival",
            "delay": 1292513
        },
        {
            "journey_id": "c6be3540de542d2442da4ffe19b72d3b",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708727847384,
            "actual_timestamp": 1708728247602,
            "event_type": "Departure",
            "delay": 1488873
        },
        {
            "journey_id": "1a936711a264d5bc6031146300881605",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708743812325,
            "actual_timestamp": 1708743877521,
            "event_type": "Arrival",
            "delay": 65196
        },
        {
            "journey_id": "1a936711a264d5bc6031146300881605",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708743962220,
            "actual_timestamp": 1708744117121,
            "event_type": "Departure",
            "delay": 154901
        },
        {
            "journey_id": "1a936711a264d5bc6031146300881605",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708744112325,
            "actual_timestamp": 1708744242705,
            "event_type": "Arrival",
            "delay": 195576
        },
        {
            "journey_id": "1a936711a264d5bc6031146300881605",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708744222199,
            "actual_timestamp": 1708744545915,
            "event_type": "Departure",
            "delay": 388912
        },
        {
            "journey_id": "1a936711a264d5bc6031146300881605",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708744412325,
            "actual_timestamp": 1708744607444,
            "event_type": "Arrival",
            "delay": 390695
        },
        {
            "journey_id": "1a936711a264d5bc6031146300881605",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708744542787,
            "actual_timestamp": 1708745001526,
            "event_type": "Departure",
            "delay": 654315
        },
        {
            "journey_id": "1a936711a264d5bc6031146300881605",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708744712325,
            "actual_timestamp": 1708744713178,
            "event_type": "Arrival",
            "delay": 391548
        },
        {
            "journey_id": "1a936711a264d5bc6031146300881605",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708744850635,
            "actual_timestamp": 1708744868658,
            "event_type": "Departure",
            "delay": 408718
        },
        {
            "journey_id": "1a936711a264d5bc6031146300881605",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708745012325,
            "actual_timestamp": 1708745023318,
            "event_type": "Arrival",
            "delay": 402541
        },
        {
            "journey_id": "1a936711a264d5bc6031146300881605",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708745162067,
            "actual_timestamp": 1708745311327,
            "event_type": "Departure",
            "delay": 540808
        },
        {
            "journey_id": "1a936711a264d5bc6031146300881605",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708745312325,
            "actual_timestamp": 1708745554935,
            "event_type": "Arrival",
            "delay": 645151
        },
        {
            "journey_id": "1a936711a264d5bc6031146300881605",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708745379533,
            "actual_timestamp": 1708745880664,
            "event_type": "Departure",
            "delay": 903672
        },
        {
            "journey_id": "1a936711a264d5bc6031146300881605",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708745612325,
            "actual_timestamp": 1708745883568,
            "event_type": "Arrival",
            "delay": 916394
        },
        {
            "journey_id": "1a936711a264d5bc6031146300881605",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708745709822,
            "actual_timestamp": 1708746168818,
            "event_type": "Departure",
            "delay": 1104147
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708769478736,
            "actual_timestamp": 1708769584200,
            "event_type": "Arrival",
            "delay": 105464
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708769613994,
            "actual_timestamp": 1708769871488,
            "event_type": "Departure",
            "delay": 257494
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708769778736,
            "actual_timestamp": 1708769933171,
            "event_type": "Arrival",
            "delay": 259899
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708769947949,
            "actual_timestamp": 1708770245584,
            "event_type": "Departure",
            "delay": 403099
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708770078736,
            "actual_timestamp": 1708770336123,
            "event_type": "Arrival",
            "delay": 517286
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708770187215,
            "actual_timestamp": 1708770615841,
            "event_type": "Departure",
            "delay": 688525
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708770378736,
            "actual_timestamp": 1708770427619,
            "event_type": "Arrival",
            "delay": 566169
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708770483145,
            "actual_timestamp": 1708770650533,
            "event_type": "Departure",
            "delay": 684674
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708770678736,
            "actual_timestamp": 1708770912334,
            "event_type": "Arrival",
            "delay": 799767
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708770839222,
            "actual_timestamp": 1708771113868,
            "event_type": "Departure",
            "delay": 840815
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708770978736,
            "actual_timestamp": 1708771047247,
            "event_type": "Arrival",
            "delay": 868278
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708771144101,
            "actual_timestamp": 1708771355588,
            "event_type": "Departure",
            "delay": 1011254
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708771278736,
            "actual_timestamp": 1708771564958,
            "event_type": "Arrival",
            "delay": 1154500
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708771353090,
            "actual_timestamp": 1708771669334,
            "event_type": "Departure",
            "delay": 1184522
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708771578736,
            "actual_timestamp": 1708771728993,
            "event_type": "Arrival",
            "delay": 1304757
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708771655471,
            "actual_timestamp": 1708771896829,
            "event_type": "Departure",
            "delay": 1395858
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708771878736,
            "actual_timestamp": 1708771935487,
            "event_type": "Arrival",
            "delay": 1361508
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708772032109,
            "actual_timestamp": 1708772212642,
            "event_type": "Departure",
            "delay": 1485290
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708772178736,
            "actual_timestamp": 1708772317062,
            "event_type": "Arrival",
            "delay": 1499834
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708772345063,
            "actual_timestamp": 1708772753652,
            "event_type": "Departure",
            "delay": 1770097
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708772478736,
            "actual_timestamp": 1708772600188,
            "event_type": "Arrival",
            "delay": 1621286
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708772609518,
            "actual_timestamp": 1708772787870,
            "event_type": "Departure",
            "delay": 1678186
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708772778736,
            "actual_timestamp": 1708773059113,
            "event_type": "Arrival",
            "delay": 1901663
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708772852053,
            "actual_timestamp": 1708773294045,
            "event_type": "Departure",
            "delay": 2063278
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708773078736,
            "actual_timestamp": 1708773243844,
            "event_type": "Arrival",
            "delay": 2066771
        },
        {
            "journey_id": "cc120d6c998f8158cf2b7df876f857b5",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708773224115,
            "actual_timestamp": 1708773450442,
            "event_type": "Departure",
            "delay": 2127990
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708764086783,
            "actual_timestamp": 1708764103022,
            "event_type": "Arrival",
            "delay": 16239
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708764178255,
            "actual_timestamp": 1708764464913,
            "event_type": "Departure",
            "delay": 286658
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708764386783,
            "actual_timestamp": 1708764498896,
            "event_type": "Arrival",
            "delay": 128352
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708764459882,
            "actual_timestamp": 1708764606526,
            "event_type": "Departure",
            "delay": 162883
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708764686783,
            "actual_timestamp": 1708764773128,
            "event_type": "Arrival",
            "delay": 214697
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708764826052,
            "actual_timestamp": 1708764928220,
            "event_type": "Departure",
            "delay": 230520
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708764986783,
            "actual_timestamp": 1708765220109,
            "event_type": "Arrival",
            "delay": 448023
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708765057113,
            "actual_timestamp": 1708765450586,
            "event_type": "Departure",
            "delay": 608170
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708765286783,
            "actual_timestamp": 1708765524439,
            "event_type": "Arrival",
            "delay": 685679
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708765400678,
            "actual_timestamp": 1708765920208,
            "event_type": "Departure",
            "delay": 967553
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708765586783,
            "actual_timestamp": 1708765841309,
            "event_type": "Arrival",
            "delay": 940205
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708765749908,
            "actual_timestamp": 1708766295664,
            "event_type": "Departure",
            "delay": 1231435
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708765886783,
            "actual_timestamp": 1708765956397,
            "event_type": "Arrival",
            "delay": 1009819
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708765963508,
            "actual_timestamp": 1708766312265,
            "event_type": "Departure",
            "delay": 1288962
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708766186783,
            "actual_timestamp": 1708766394848,
            "event_type": "Arrival",
            "delay": 1217884
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708766256035,
            "actual_timestamp": 1708766624504,
            "event_type": "Departure",
            "delay": 1378288
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708766486783,
            "actual_timestamp": 1708766519372,
            "event_type": "Arrival",
            "delay": 1250473
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708766600834,
            "actual_timestamp": 1708766923068,
            "event_type": "Departure",
            "delay": 1540118
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708766786783,
            "actual_timestamp": 1708767085082,
            "event_type": "Arrival",
            "delay": 1548772
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708766879317,
            "actual_timestamp": 1708767203063,
            "event_type": "Departure",
            "delay": 1574219
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708767086783,
            "actual_timestamp": 1708767095475,
            "event_type": "Arrival",
            "delay": 1557464
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708767234527,
            "actual_timestamp": 1708767291233,
            "event_type": "Departure",
            "delay": 1605478
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708767386783,
            "actual_timestamp": 1708767418620,
            "event_type": "Arrival",
            "delay": 1589301
        },
        {
            "journey_id": "68930b0baf9ace372086be8e55993cd2",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708767552074,
            "actual_timestamp": 1708767879470,
            "event_type": "Departure",
            "delay": 1884860
        },
        {
            "journey_id": "0009cae3946fd6f497bfce816cd2aefb",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708757264881,
            "actual_timestamp": 1708757409455,
            "event_type": "Arrival",
            "delay": 144574
        },
        {
            "journey_id": "0009cae3946fd6f497bfce816cd2aefb",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708757420319,
            "actual_timestamp": 1708757794592,
            "event_type": "Departure",
            "delay": 374273
        },
        {
            "journey_id": "0009cae3946fd6f497bfce816cd2aefb",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708757564881,
            "actual_timestamp": 1708757575676,
            "event_type": "Arrival",
            "delay": 155369
        },
        {
            "journey_id": "0009cae3946fd6f497bfce816cd2aefb",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708757631203,
            "actual_timestamp": 1708757807679,
            "event_type": "Departure",
            "delay": 321050
        },
        {
            "journey_id": "0009cae3946fd6f497bfce816cd2aefb",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708757864881,
            "actual_timestamp": 1708758157910,
            "event_type": "Arrival",
            "delay": 448398
        },
        {
            "journey_id": "0009cae3946fd6f497bfce816cd2aefb",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708757994289,
            "actual_timestamp": 1708758386876,
            "event_type": "Departure",
            "delay": 547956
        },
        {
            "journey_id": "0009cae3946fd6f497bfce816cd2aefb",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708758164881,
            "actual_timestamp": 1708758167943,
            "event_type": "Arrival",
            "delay": 451460
        },
        {
            "journey_id": "0009cae3946fd6f497bfce816cd2aefb",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708758234224,
            "actual_timestamp": 1708758494323,
            "event_type": "Departure",
            "delay": 708497
        },
        {
            "journey_id": "0009cae3946fd6f497bfce816cd2aefb",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708758464881,
            "actual_timestamp": 1708758494198,
            "event_type": "Arrival",
            "delay": 480777
        },
        {
            "journey_id": "0009cae3946fd6f497bfce816cd2aefb",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708758602853,
            "actual_timestamp": 1708758655239,
            "event_type": "Departure",
            "delay": 503846
        },
        {
            "journey_id": "0009cae3946fd6f497bfce816cd2aefb",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708758764881,
            "actual_timestamp": 1708758954161,
            "event_type": "Arrival",
            "delay": 670057
        },
        {
            "journey_id": "0009cae3946fd6f497bfce816cd2aefb",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708758898904,
            "actual_timestamp": 1708759089689,
            "event_type": "Departure",
            "delay": 671562
        },
        {
            "journey_id": "0009cae3946fd6f497bfce816cd2aefb",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708759064881,
            "actual_timestamp": 1708759350387,
            "event_type": "Arrival",
            "delay": 955563
        },
        {
            "journey_id": "0009cae3946fd6f497bfce816cd2aefb",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708759133898,
            "actual_timestamp": 1708759711964,
            "event_type": "Departure",
            "delay": 1248123
        },
        {
            "journey_id": "0009cae3946fd6f497bfce816cd2aefb",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708759364881,
            "actual_timestamp": 1708759562290,
            "event_type": "Arrival",
            "delay": 1152972
        },
        {
            "journey_id": "0009cae3946fd6f497bfce816cd2aefb",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708759507668,
            "actual_timestamp": 1708759996205,
            "event_type": "Departure",
            "delay": 1444100
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708765112697,
            "actual_timestamp": 1708765303218,
            "event_type": "Arrival",
            "delay": 190521
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708765229462,
            "actual_timestamp": 1708765523251,
            "event_type": "Departure",
            "delay": 293789
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708765412697,
            "actual_timestamp": 1708765661268,
            "event_type": "Arrival",
            "delay": 439092
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708765530257,
            "actual_timestamp": 1708765935787,
            "event_type": "Departure",
            "delay": 596051
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708765712697,
            "actual_timestamp": 1708765920091,
            "event_type": "Arrival",
            "delay": 646486
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708765814722,
            "actual_timestamp": 1708766179450,
            "event_type": "Departure",
            "delay": 803820
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708766012697,
            "actual_timestamp": 1708766032602,
            "event_type": "Arrival",
            "delay": 666391
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708766104931,
            "actual_timestamp": 1708766176172,
            "event_type": "Departure",
            "delay": 717727
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708766312697,
            "actual_timestamp": 1708766404569,
            "event_type": "Arrival",
            "delay": 758263
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708766397360,
            "actual_timestamp": 1708766516633,
            "event_type": "Departure",
            "delay": 785664
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708766612697,
            "actual_timestamp": 1708766828882,
            "event_type": "Arrival",
            "delay": 974448
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708766715087,
            "actual_timestamp": 1708767111714,
            "event_type": "Departure",
            "delay": 1154890
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708766912697,
            "actual_timestamp": 1708767161066,
            "event_type": "Arrival",
            "delay": 1222817
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708767009399,
            "actual_timestamp": 1708767531783,
            "event_type": "Departure",
            "delay": 1496832
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708767212697,
            "actual_timestamp": 1708767263065,
            "event_type": "Arrival",
            "delay": 1273185
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708767391484,
            "actual_timestamp": 1708767457913,
            "event_type": "Departure",
            "delay": 1289246
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708767512697,
            "actual_timestamp": 1708767711039,
            "event_type": "Arrival",
            "delay": 1471527
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708767692603,
            "actual_timestamp": 1708767989610,
            "event_type": "Departure",
            "delay": 1570192
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708767812697,
            "actual_timestamp": 1708768021638,
            "event_type": "Arrival",
            "delay": 1680468
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708767875273,
            "actual_timestamp": 1708768176484,
            "event_type": "Departure",
            "delay": 1772738
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708768112697,
            "actual_timestamp": 1708768288310,
            "event_type": "Arrival",
            "delay": 1856081
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708768220432,
            "actual_timestamp": 1708768525795,
            "event_type": "Departure",
            "delay": 1985831
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708768412697,
            "actual_timestamp": 1708768418260,
            "event_type": "Arrival",
            "delay": 1861644
        },
        {
            "journey_id": "806a1b810a4d254467bd88509648e069",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708768494367,
            "actual_timestamp": 1708768545284,
            "event_type": "Departure",
            "delay": 1906998
        },
        {
            "journey_id": "3858b043adf8e6fff35f1eaeb063559b",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708722569980,
            "actual_timestamp": 1708722641408,
            "event_type": "Arrival",
            "delay": 71428
        },
        {
            "journey_id": "3858b043adf8e6fff35f1eaeb063559b",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708722709115,
            "actual_timestamp": 1708723060666,
            "event_type": "Departure",
            "delay": 351551
        },
        {
            "journey_id": "3858b043adf8e6fff35f1eaeb063559b",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708722869980,
            "actual_timestamp": 1708723043940,
            "event_type": "Arrival",
            "delay": 245388
        },
        {
            "journey_id": "3858b043adf8e6fff35f1eaeb063559b",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708722992051,
            "actual_timestamp": 1708723239540,
            "event_type": "Departure",
            "delay": 318917
        },
        {
            "journey_id": "3858b043adf8e6fff35f1eaeb063559b",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708723169980,
            "actual_timestamp": 1708723210596,
            "event_type": "Arrival",
            "delay": 286004
        },
        {
            "journey_id": "3858b043adf8e6fff35f1eaeb063559b",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708723260515,
            "actual_timestamp": 1708723341100,
            "event_type": "Departure",
            "delay": 325973
        },
        {
            "journey_id": "3858b043adf8e6fff35f1eaeb063559b",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708723469980,
            "actual_timestamp": 1708723477861,
            "event_type": "Arrival",
            "delay": 293885
        },
        {
            "journey_id": "3858b043adf8e6fff35f1eaeb063559b",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708723560311,
            "actual_timestamp": 1708723854362,
            "event_type": "Departure",
            "delay": 580055
        },
        {
            "journey_id": "3858b043adf8e6fff35f1eaeb063559b",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708723769980,
            "actual_timestamp": 1708724057496,
            "event_type": "Arrival",
            "delay": 581401
        },
        {
            "journey_id": "3858b043adf8e6fff35f1eaeb063559b",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708723910508,
            "actual_timestamp": 1708724276433,
            "event_type": "Departure",
            "delay": 659810
        },
        {
            "journey_id": "3858b043adf8e6fff35f1eaeb063559b",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708724069980,
            "actual_timestamp": 1708724211656,
            "event_type": "Arrival",
            "delay": 723077
        },
        {
            "journey_id": "3858b043adf8e6fff35f1eaeb063559b",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708724226448,
            "actual_timestamp": 1708724445425,
            "event_type": "Departure",
            "delay": 800378
        },
        {
            "journey_id": "3858b043adf8e6fff35f1eaeb063559b",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708724369980,
            "actual_timestamp": 1708724476111,
            "event_type": "Arrival",
            "delay": 829208
        },
        {
            "journey_id": "3858b043adf8e6fff35f1eaeb063559b",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708724438039,
            "actual_timestamp": 1708724624487,
            "event_type": "Departure",
            "delay": 909525
        },
        {
            "journey_id": "3858b043adf8e6fff35f1eaeb063559b",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708724669980,
            "actual_timestamp": 1708724914900,
            "event_type": "Arrival",
            "delay": 1074128
        },
        {
            "journey_id": "3858b043adf8e6fff35f1eaeb063559b",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708724761884,
            "actual_timestamp": 1708725125395,
            "event_type": "Departure",
            "delay": 1192719
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708768253408,
            "actual_timestamp": 1708768266214,
            "event_type": "Arrival",
            "delay": 12806
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708768429598,
            "actual_timestamp": 1708768727771,
            "event_type": "Departure",
            "delay": 298173
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708768553408,
            "actual_timestamp": 1708768830011,
            "event_type": "Arrival",
            "delay": 289409
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708768628407,
            "actual_timestamp": 1708769188886,
            "event_type": "Departure",
            "delay": 573285
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708768853408,
            "actual_timestamp": 1708769099272,
            "event_type": "Arrival",
            "delay": 535273
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708768935901,
            "actual_timestamp": 1708769393304,
            "event_type": "Departure",
            "delay": 746812
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708769153408,
            "actual_timestamp": 1708769399956,
            "event_type": "Arrival",
            "delay": 781821
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708769250290,
            "actual_timestamp": 1708769508265,
            "event_type": "Departure",
            "delay": 793248
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708769453408,
            "actual_timestamp": 1708769745195,
            "event_type": "Arrival",
            "delay": 1073608
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708769549180,
            "actual_timestamp": 1708770107430,
            "event_type": "Departure",
            "delay": 1340071
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708769753408,
            "actual_timestamp": 1708770029418,
            "event_type": "Arrival",
            "delay": 1349618
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708769844820,
            "actual_timestamp": 1708770143530,
            "event_type": "Departure",
            "delay": 1372318
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708770053408,
            "actual_timestamp": 1708770143161,
            "event_type": "Arrival",
            "delay": 1439371
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708770220511,
            "actual_timestamp": 1708770609216,
            "event_type": "Departure",
            "delay": 1738323
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708770353408,
            "actual_timestamp": 1708770353901,
            "event_type": "Arrival",
            "delay": 1439864
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708770467227,
            "actual_timestamp": 1708770494502,
            "event_type": "Departure",
            "delay": 1466646
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708770653408,
            "actual_timestamp": 1708770738530,
            "event_type": "Arrival",
            "delay": 1524986
        },
        {
            "journey_id": "2050d69dda0047e6ef147dae41e37117",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708770783967,
            "actual_timestamp": 1708771142754,
            "event_type": "Departure",
            "delay": 1798651
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708762806978,
            "actual_timestamp": 1708762986188,
            "event_type": "Arrival",
            "delay": 179210
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708762914962,
            "actual_timestamp": 1708763222706,
            "event_type": "Departure",
            "delay": 307744
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708763106978,
            "actual_timestamp": 1708763186154,
            "event_type": "Arrival",
            "delay": 258386
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708763206951,
            "actual_timestamp": 1708763337523,
            "event_type": "Departure",
            "delay": 309782
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708763406978,
            "actual_timestamp": 1708763646425,
            "event_type": "Arrival",
            "delay": 497833
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708763569925,
            "actual_timestamp": 1708763975133,
            "event_type": "Departure",
            "delay": 663594
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708763706978,
            "actual_timestamp": 1708763737362,
            "event_type": "Arrival",
            "delay": 528217
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708763821254,
            "actual_timestamp": 1708763912452,
            "event_type": "Departure",
            "delay": 589031
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708764006978,
            "actual_timestamp": 1708764091641,
            "event_type": "Arrival",
            "delay": 612880
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708764139651,
            "actual_timestamp": 1708764501730,
            "event_type": "Departure",
            "delay": 890296
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708764306978,
            "actual_timestamp": 1708764492924,
            "event_type": "Arrival",
            "delay": 798826
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708764435468,
            "actual_timestamp": 1708764651218,
            "event_type": "Departure",
            "delay": 828630
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708764606978,
            "actual_timestamp": 1708764613768,
            "event_type": "Arrival",
            "delay": 805616
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708764739374,
            "actual_timestamp": 1708764984487,
            "event_type": "Departure",
            "delay": 1043939
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708764906978,
            "actual_timestamp": 1708765126290,
            "event_type": "Arrival",
            "delay": 1024928
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708764967727,
            "actual_timestamp": 1708765324731,
            "event_type": "Departure",
            "delay": 1162620
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708765206978,
            "actual_timestamp": 1708765457608,
            "event_type": "Arrival",
            "delay": 1275558
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708765271084,
            "actual_timestamp": 1708765727863,
            "event_type": "Departure",
            "delay": 1481707
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708765506978,
            "actual_timestamp": 1708765663542,
            "event_type": "Arrival",
            "delay": 1432122
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708765579114,
            "actual_timestamp": 1708765739884,
            "event_type": "Departure",
            "delay": 1436328
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708765806978,
            "actual_timestamp": 1708765981087,
            "event_type": "Arrival",
            "delay": 1606231
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708765891485,
            "actual_timestamp": 1708766310102,
            "event_type": "Departure",
            "delay": 1850739
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708766106978,
            "actual_timestamp": 1708766236625,
            "event_type": "Arrival",
            "delay": 1735878
        },
        {
            "journey_id": "dffc50fe4783a0eb80b77cc080478a08",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708766237382,
            "actual_timestamp": 1708766502633,
            "event_type": "Departure",
            "delay": 1871482
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708743292873,
            "actual_timestamp": 1708743517234,
            "event_type": "Arrival",
            "delay": 224361
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708743426783,
            "actual_timestamp": 1708743886887,
            "event_type": "Departure",
            "delay": 460104
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708743592873,
            "actual_timestamp": 1708743623444,
            "event_type": "Arrival",
            "delay": 254932
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708743659677,
            "actual_timestamp": 1708743932022,
            "event_type": "Departure",
            "delay": 496706
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708743892873,
            "actual_timestamp": 1708744073295,
            "event_type": "Arrival",
            "delay": 435354
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708743998577,
            "actual_timestamp": 1708744473826,
            "event_type": "Departure",
            "delay": 730181
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708744192873,
            "actual_timestamp": 1708744295958,
            "event_type": "Arrival",
            "delay": 538439
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708744362407,
            "actual_timestamp": 1708744753987,
            "event_type": "Departure",
            "delay": 826934
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708744492873,
            "actual_timestamp": 1708744513612,
            "event_type": "Arrival",
            "delay": 559178
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708744614738,
            "actual_timestamp": 1708744697212,
            "event_type": "Departure",
            "delay": 620913
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708744792873,
            "actual_timestamp": 1708744937274,
            "event_type": "Arrival",
            "delay": 703579
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708744918491,
            "actual_timestamp": 1708745315921,
            "event_type": "Departure",
            "delay": 956608
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708745092873,
            "actual_timestamp": 1708745250702,
            "event_type": "Arrival",
            "delay": 861408
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708745272635,
            "actual_timestamp": 1708745663505,
            "event_type": "Departure",
            "delay": 1094449
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708745392873,
            "actual_timestamp": 1708745498986,
            "event_type": "Arrival",
            "delay": 967521
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708745534753,
            "actual_timestamp": 1708745674558,
            "event_type": "Departure",
            "delay": 1001213
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708745692873,
            "actual_timestamp": 1708745952985,
            "event_type": "Arrival",
            "delay": 1227633
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708745774012,
            "actual_timestamp": 1708746074065,
            "event_type": "Departure",
            "delay": 1267574
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708745992873,
            "actual_timestamp": 1708746058117,
            "event_type": "Arrival",
            "delay": 1292877
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708746146136,
            "actual_timestamp": 1708746456427,
            "event_type": "Departure",
            "delay": 1537924
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708746292873,
            "actual_timestamp": 1708746459350,
            "event_type": "Arrival",
            "delay": 1459354
        },
        {
            "journey_id": "6d8d9e73354f931e91ca18da47dc8b4b",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708746433832,
            "actual_timestamp": 1708746823548,
            "event_type": "Departure",
            "delay": 1682593
        },
        {
            "journey_id": "a07c2e557dfc89d401d51a69f8c6af94",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708730942862,
            "actual_timestamp": 1708730987615,
            "event_type": "Arrival",
            "delay": 44753
        },
        {
            "journey_id": "a07c2e557dfc89d401d51a69f8c6af94",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708731085020,
            "actual_timestamp": 1708731234864,
            "event_type": "Departure",
            "delay": 149844
        },
        {
            "journey_id": "a07c2e557dfc89d401d51a69f8c6af94",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708731242862,
            "actual_timestamp": 1708731436237,
            "event_type": "Arrival",
            "delay": 238128
        },
        {
            "journey_id": "a07c2e557dfc89d401d51a69f8c6af94",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708731339256,
            "actual_timestamp": 1708731749470,
            "event_type": "Departure",
            "delay": 454967
        },
        {
            "journey_id": "a07c2e557dfc89d401d51a69f8c6af94",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708731542862,
            "actual_timestamp": 1708731669222,
            "event_type": "Arrival",
            "delay": 364488
        },
        {
            "journey_id": "a07c2e557dfc89d401d51a69f8c6af94",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708731684582,
            "actual_timestamp": 1708731953586,
            "event_type": "Departure",
            "delay": 507132
        },
        {
            "journey_id": "a07c2e557dfc89d401d51a69f8c6af94",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708731842862,
            "actual_timestamp": 1708731848129,
            "event_type": "Arrival",
            "delay": 369755
        },
        {
            "journey_id": "a07c2e557dfc89d401d51a69f8c6af94",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708731914717,
            "actual_timestamp": 1708732176274,
            "event_type": "Departure",
            "delay": 626045
        },
        {
            "journey_id": "a07c2e557dfc89d401d51a69f8c6af94",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708732142862,
            "actual_timestamp": 1708732298337,
            "event_type": "Arrival",
            "delay": 525230
        },
        {
            "journey_id": "a07c2e557dfc89d401d51a69f8c6af94",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708732247698,
            "actual_timestamp": 1708732675370,
            "event_type": "Departure",
            "delay": 797427
        },
        {
            "journey_id": "a07c2e557dfc89d401d51a69f8c6af94",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708732442862,
            "actual_timestamp": 1708732656228,
            "event_type": "Arrival",
            "delay": 738596
        },
        {
            "journey_id": "a07c2e557dfc89d401d51a69f8c6af94",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708732614308,
            "actual_timestamp": 1708732910962,
            "event_type": "Departure",
            "delay": 821884
        },
        {
            "journey_id": "a07c2e557dfc89d401d51a69f8c6af94",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708732742862,
            "actual_timestamp": 1708732836753,
            "event_type": "Arrival",
            "delay": 832487
        },
        {
            "journey_id": "a07c2e557dfc89d401d51a69f8c6af94",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708732859472,
            "actual_timestamp": 1708733058725,
            "event_type": "Departure",
            "delay": 937849
        },
        {
            "journey_id": "a07c2e557dfc89d401d51a69f8c6af94",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708733042862,
            "actual_timestamp": 1708733057372,
            "event_type": "Arrival",
            "delay": 846997
        },
        {
            "journey_id": "a07c2e557dfc89d401d51a69f8c6af94",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708733191867,
            "actual_timestamp": 1708733458253,
            "event_type": "Departure",
            "delay": 1098873
        },
        {
            "journey_id": "68b919d08d197041a61a454cc4d7334c",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708708322474,
            "actual_timestamp": 1708708605269,
            "event_type": "Arrival",
            "delay": 282795
        },
        {
            "journey_id": "68b919d08d197041a61a454cc4d7334c",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708708479179,
            "actual_timestamp": 1708708908884,
            "event_type": "Departure",
            "delay": 429705
        },
        {
            "journey_id": "68b919d08d197041a61a454cc4d7334c",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708708622474,
            "actual_timestamp": 1708708908061,
            "event_type": "Arrival",
            "delay": 568382
        },
        {
            "journey_id": "68b919d08d197041a61a454cc4d7334c",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708708768280,
            "actual_timestamp": 1708709130401,
            "event_type": "Departure",
            "delay": 644916
        },
        {
            "journey_id": "68b919d08d197041a61a454cc4d7334c",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708708922474,
            "actual_timestamp": 1708709218799,
            "event_type": "Arrival",
            "delay": 864707
        },
        {
            "journey_id": "68b919d08d197041a61a454cc4d7334c",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708709076912,
            "actual_timestamp": 1708709458458,
            "event_type": "Departure",
            "delay": 949928
        },
        {
            "journey_id": "68b919d08d197041a61a454cc4d7334c",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708709222474,
            "actual_timestamp": 1708709481794,
            "event_type": "Arrival",
            "delay": 1124027
        },
        {
            "journey_id": "68b919d08d197041a61a454cc4d7334c",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708709296517,
            "actual_timestamp": 1708709741788,
            "event_type": "Departure",
            "delay": 1309978
        },
        {
            "journey_id": "68b919d08d197041a61a454cc4d7334c",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708709522474,
            "actual_timestamp": 1708709685612,
            "event_type": "Arrival",
            "delay": 1287165
        },
        {
            "journey_id": "68b919d08d197041a61a454cc4d7334c",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708709645043,
            "actual_timestamp": 1708709889961,
            "event_type": "Departure",
            "delay": 1368945
        },
        {
            "journey_id": "2ea7b27e006755d32f43ba31a14870fd",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708723880254,
            "actual_timestamp": 1708724096848,
            "event_type": "Arrival",
            "delay": 216594
        },
        {
            "journey_id": "2ea7b27e006755d32f43ba31a14870fd",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708723991658,
            "actual_timestamp": 1708724328347,
            "event_type": "Departure",
            "delay": 336689
        },
        {
            "journey_id": "2ea7b27e006755d32f43ba31a14870fd",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708724180254,
            "actual_timestamp": 1708724339748,
            "event_type": "Arrival",
            "delay": 376088
        },
        {
            "journey_id": "2ea7b27e006755d32f43ba31a14870fd",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708724283509,
            "actual_timestamp": 1708724718160,
            "event_type": "Departure",
            "delay": 651245
        },
        {
            "journey_id": "2ea7b27e006755d32f43ba31a14870fd",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708724480254,
            "actual_timestamp": 1708724633974,
            "event_type": "Arrival",
            "delay": 529808
        },
        {
            "journey_id": "2ea7b27e006755d32f43ba31a14870fd",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708724593081,
            "actual_timestamp": 1708724858248,
            "event_type": "Departure",
            "delay": 641255
        },
        {
            "journey_id": "2ea7b27e006755d32f43ba31a14870fd",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708724780254,
            "actual_timestamp": 1708724970865,
            "event_type": "Arrival",
            "delay": 720419
        },
        {
            "journey_id": "2ea7b27e006755d32f43ba31a14870fd",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708724960250,
            "actual_timestamp": 1708725359036,
            "event_type": "Departure",
            "delay": 928594
        },
        {
            "journey_id": "2ea7b27e006755d32f43ba31a14870fd",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708725080254,
            "actual_timestamp": 1708725144680,
            "event_type": "Arrival",
            "delay": 784845
        },
        {
            "journey_id": "2ea7b27e006755d32f43ba31a14870fd",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708725208267,
            "actual_timestamp": 1708725352243,
            "event_type": "Departure",
            "delay": 864395
        },
        {
            "journey_id": "aa0e6ed52b2079f25b5da06224ae1e39",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708712063592,
            "actual_timestamp": 1708712160912,
            "event_type": "Arrival",
            "delay": 97320
        },
        {
            "journey_id": "aa0e6ed52b2079f25b5da06224ae1e39",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708712146291,
            "actual_timestamp": 1708712254577,
            "event_type": "Departure",
            "delay": 108286
        },
        {
            "journey_id": "aa0e6ed52b2079f25b5da06224ae1e39",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708712363592,
            "actual_timestamp": 1708712663156,
            "event_type": "Arrival",
            "delay": 396884
        },
        {
            "journey_id": "aa0e6ed52b2079f25b5da06224ae1e39",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708712533694,
            "actual_timestamp": 1708712877817,
            "event_type": "Departure",
            "delay": 441443
        },
        {
            "journey_id": "aa0e6ed52b2079f25b5da06224ae1e39",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708712663592,
            "actual_timestamp": 1708712856732,
            "event_type": "Arrival",
            "delay": 590024
        },
        {
            "journey_id": "aa0e6ed52b2079f25b5da06224ae1e39",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708712821482,
            "actual_timestamp": 1708713102968,
            "event_type": "Departure",
            "delay": 678370
        },
        {
            "journey_id": "aa0e6ed52b2079f25b5da06224ae1e39",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708712963592,
            "actual_timestamp": 1708713176030,
            "event_type": "Arrival",
            "delay": 802462
        },
        {
            "journey_id": "aa0e6ed52b2079f25b5da06224ae1e39",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708713044753,
            "actual_timestamp": 1708713465425,
            "event_type": "Departure",
            "delay": 1010696
        },
        {
            "journey_id": "aa0e6ed52b2079f25b5da06224ae1e39",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708713263592,
            "actual_timestamp": 1708713330920,
            "event_type": "Arrival",
            "delay": 869790
        },
        {
            "journey_id": "aa0e6ed52b2079f25b5da06224ae1e39",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708713395367,
            "actual_timestamp": 1708713576579,
            "event_type": "Departure",
            "delay": 983674
        },
        {
            "journey_id": "437a315dc18d13b851e1df4c0f8cf907",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708791015588,
            "actual_timestamp": 1708791097008,
            "event_type": "Arrival",
            "delay": 81420
        },
        {
            "journey_id": "437a315dc18d13b851e1df4c0f8cf907",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708791139173,
            "actual_timestamp": 1708791258627,
            "event_type": "Departure",
            "delay": 119454
        },
        {
            "journey_id": "437a315dc18d13b851e1df4c0f8cf907",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708791315588,
            "actual_timestamp": 1708791383067,
            "event_type": "Arrival",
            "delay": 148899
        },
        {
            "journey_id": "437a315dc18d13b851e1df4c0f8cf907",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708791397979,
            "actual_timestamp": 1708791688067,
            "event_type": "Departure",
            "delay": 371508
        },
        {
            "journey_id": "437a315dc18d13b851e1df4c0f8cf907",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708791615588,
            "actual_timestamp": 1708791670985,
            "event_type": "Arrival",
            "delay": 204296
        },
        {
            "journey_id": "437a315dc18d13b851e1df4c0f8cf907",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708791780088,
            "actual_timestamp": 1708791846906,
            "event_type": "Departure",
            "delay": 215717
        },
        {
            "journey_id": "437a315dc18d13b851e1df4c0f8cf907",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708791915588,
            "actual_timestamp": 1708791954503,
            "event_type": "Arrival",
            "delay": 243211
        },
        {
            "journey_id": "437a315dc18d13b851e1df4c0f8cf907",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708792047177,
            "actual_timestamp": 1708792184918,
            "event_type": "Departure",
            "delay": 342037
        },
        {
            "journey_id": "437a315dc18d13b851e1df4c0f8cf907",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708792215588,
            "actual_timestamp": 1708792222753,
            "event_type": "Arrival",
            "delay": 250376
        },
        {
            "journey_id": "437a315dc18d13b851e1df4c0f8cf907",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708792351043,
            "actual_timestamp": 1708792392115,
            "event_type": "Departure",
            "delay": 284283
        },
        {
            "journey_id": "437a315dc18d13b851e1df4c0f8cf907",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708792515588,
            "actual_timestamp": 1708792626445,
            "event_type": "Arrival",
            "delay": 361233
        },
        {
            "journey_id": "437a315dc18d13b851e1df4c0f8cf907",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708792654074,
            "actual_timestamp": 1708792922254,
            "event_type": "Departure",
            "delay": 518556
        },
        {
            "journey_id": "437a315dc18d13b851e1df4c0f8cf907",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708792815588,
            "actual_timestamp": 1708792854059,
            "event_type": "Arrival",
            "delay": 399704
        },
        {
            "journey_id": "437a315dc18d13b851e1df4c0f8cf907",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708792991929,
            "actual_timestamp": 1708793227467,
            "event_type": "Departure",
            "delay": 596771
        },
        {
            "journey_id": "1e918461858dcb40f519c837c824bf4a",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708782346134,
            "actual_timestamp": 1708782544741,
            "event_type": "Arrival",
            "delay": 198607
        },
        {
            "journey_id": "1e918461858dcb40f519c837c824bf4a",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708782522040,
            "actual_timestamp": 1708782728144,
            "event_type": "Departure",
            "delay": 206104
        },
        {
            "journey_id": "1e918461858dcb40f519c837c824bf4a",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708782646134,
            "actual_timestamp": 1708782744327,
            "event_type": "Arrival",
            "delay": 296800
        },
        {
            "journey_id": "1e918461858dcb40f519c837c824bf4a",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708782771528,
            "actual_timestamp": 1708783010638,
            "event_type": "Departure",
            "delay": 437717
        },
        {
            "journey_id": "1e918461858dcb40f519c837c824bf4a",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708782946134,
            "actual_timestamp": 1708783209295,
            "event_type": "Arrival",
            "delay": 559961
        },
        {
            "journey_id": "1e918461858dcb40f519c837c824bf4a",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708783019831,
            "actual_timestamp": 1708783407277,
            "event_type": "Departure",
            "delay": 684246
        },
        {
            "journey_id": "1e918461858dcb40f519c837c824bf4a",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708783246134,
            "actual_timestamp": 1708783468603,
            "event_type": "Arrival",
            "delay": 782430
        },
        {
            "journey_id": "1e918461858dcb40f519c837c824bf4a",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708783338996,
            "actual_timestamp": 1708783789486,
            "event_type": "Departure",
            "delay": 1010451
        },
        {
            "journey_id": "1e918461858dcb40f519c837c824bf4a",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708783546134,
            "actual_timestamp": 1708783748399,
            "event_type": "Arrival",
            "delay": 984695
        },
        {
            "journey_id": "1e918461858dcb40f519c837c824bf4a",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708783655913,
            "actual_timestamp": 1708784153611,
            "event_type": "Departure",
            "delay": 1280128
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708709044813,
            "actual_timestamp": 1708709265293,
            "event_type": "Arrival",
            "delay": 220480
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708709202564,
            "actual_timestamp": 1708709495196,
            "event_type": "Departure",
            "delay": 292632
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708709344813,
            "actual_timestamp": 1708709482268,
            "event_type": "Arrival",
            "delay": 357935
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708709464463,
            "actual_timestamp": 1708709782067,
            "event_type": "Departure",
            "delay": 538084
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708709644813,
            "actual_timestamp": 1708709934138,
            "event_type": "Arrival",
            "delay": 647260
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708709756531,
            "actual_timestamp": 1708710152609,
            "event_type": "Departure",
            "delay": 754013
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708709944813,
            "actual_timestamp": 1708710022257,
            "event_type": "Arrival",
            "delay": 724704
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708710039532,
            "actual_timestamp": 1708710273544,
            "event_type": "Departure",
            "delay": 881272
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708710244813,
            "actual_timestamp": 1708710520998,
            "event_type": "Arrival",
            "delay": 1000889
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708710313159,
            "actual_timestamp": 1708710719649,
            "event_type": "Departure",
            "delay": 1131194
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708710544813,
            "actual_timestamp": 1708710804801,
            "event_type": "Arrival",
            "delay": 1260877
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708710689581,
            "actual_timestamp": 1708711247482,
            "event_type": "Departure",
            "delay": 1558790
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708710844813,
            "actual_timestamp": 1708711027544,
            "event_type": "Arrival",
            "delay": 1443608
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708710958518,
            "actual_timestamp": 1708711355741,
            "event_type": "Departure",
            "delay": 1658100
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708711144813,
            "actual_timestamp": 1708711286714,
            "event_type": "Arrival",
            "delay": 1585509
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708711272138,
            "actual_timestamp": 1708711623312,
            "event_type": "Departure",
            "delay": 1794782
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708711444813,
            "actual_timestamp": 1708711669364,
            "event_type": "Arrival",
            "delay": 1810060
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708711557678,
            "actual_timestamp": 1708711980189,
            "event_type": "Departure",
            "delay": 2008020
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708711744813,
            "actual_timestamp": 1708711773297,
            "event_type": "Arrival",
            "delay": 1838544
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708711825424,
            "actual_timestamp": 1708712019431,
            "event_type": "Departure",
            "delay": 2004067
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708712044813,
            "actual_timestamp": 1708712259227,
            "event_type": "Arrival",
            "delay": 2052958
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708712107054,
            "actual_timestamp": 1708712368389,
            "event_type": "Departure",
            "delay": 2099879
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708712344813,
            "actual_timestamp": 1708712619048,
            "event_type": "Arrival",
            "delay": 2327193
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708712468562,
            "actual_timestamp": 1708712749262,
            "event_type": "Departure",
            "delay": 2333658
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708712644813,
            "actual_timestamp": 1708712647725,
            "event_type": "Arrival",
            "delay": 2330105
        },
        {
            "journey_id": "4421567af1f0c12143670c0622d25fd3",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708712768269,
            "actual_timestamp": 1708713047558,
            "event_type": "Departure",
            "delay": 2606482
        },
        {
            "journey_id": "38d5ce53e949b58373f381a03b19f0a9",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708729335102,
            "actual_timestamp": 1708729506217,
            "event_type": "Arrival",
            "delay": 171115
        },
        {
            "journey_id": "38d5ce53e949b58373f381a03b19f0a9",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708729446740,
            "actual_timestamp": 1708729757712,
            "event_type": "Departure",
            "delay": 310972
        },
        {
            "journey_id": "38d5ce53e949b58373f381a03b19f0a9",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708729635102,
            "actual_timestamp": 1708729755063,
            "event_type": "Arrival",
            "delay": 291076
        },
        {
            "journey_id": "38d5ce53e949b58373f381a03b19f0a9",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708729797044,
            "actual_timestamp": 1708729965959,
            "event_type": "Departure",
            "delay": 340030
        },
        {
            "journey_id": "38d5ce53e949b58373f381a03b19f0a9",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708729935102,
            "actual_timestamp": 1708729952916,
            "event_type": "Arrival",
            "delay": 308890
        },
        {
            "journey_id": "38d5ce53e949b58373f381a03b19f0a9",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708730062107,
            "actual_timestamp": 1708730183927,
            "event_type": "Departure",
            "delay": 412896
        },
        {
            "journey_id": "38d5ce53e949b58373f381a03b19f0a9",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708730235102,
            "actual_timestamp": 1708730297242,
            "event_type": "Arrival",
            "delay": 371030
        },
        {
            "journey_id": "38d5ce53e949b58373f381a03b19f0a9",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708730410563,
            "actual_timestamp": 1708730554039,
            "event_type": "Departure",
            "delay": 452366
        },
        {
            "journey_id": "38d5ce53e949b58373f381a03b19f0a9",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708730535102,
            "actual_timestamp": 1708730826040,
            "event_type": "Arrival",
            "delay": 661968
        },
        {
            "journey_id": "38d5ce53e949b58373f381a03b19f0a9",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708730694801,
            "actual_timestamp": 1708731221017,
            "event_type": "Departure",
            "delay": 897246
        },
        {
            "journey_id": "38d5ce53e949b58373f381a03b19f0a9",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708730835102,
            "actual_timestamp": 1708731087155,
            "event_type": "Arrival",
            "delay": 914021
        },
        {
            "journey_id": "38d5ce53e949b58373f381a03b19f0a9",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708730905540,
            "actual_timestamp": 1708731213967,
            "event_type": "Departure",
            "delay": 970395
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708713058248,
            "actual_timestamp": 1708713335757,
            "event_type": "Arrival",
            "delay": 277509
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708713215287,
            "actual_timestamp": 1708713611852,
            "event_type": "Departure",
            "delay": 396565
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708713358248,
            "actual_timestamp": 1708713624915,
            "event_type": "Arrival",
            "delay": 544176
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708713526345,
            "actual_timestamp": 1708713887705,
            "event_type": "Departure",
            "delay": 638869
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708713658248,
            "actual_timestamp": 1708713840631,
            "event_type": "Arrival",
            "delay": 726559
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708713792904,
            "actual_timestamp": 1708714050620,
            "event_type": "Departure",
            "delay": 801892
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708713958248,
            "actual_timestamp": 1708713969727,
            "event_type": "Arrival",
            "delay": 738038
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708714107767,
            "actual_timestamp": 1708714127095,
            "event_type": "Departure",
            "delay": 745887
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708714258248,
            "actual_timestamp": 1708714493986,
            "event_type": "Arrival",
            "delay": 973776
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708714424736,
            "actual_timestamp": 1708714910852,
            "event_type": "Departure",
            "delay": 1224154
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708714558248,
            "actual_timestamp": 1708714582727,
            "event_type": "Arrival",
            "delay": 998255
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708714735541,
            "actual_timestamp": 1708714978672,
            "event_type": "Departure",
            "delay": 1216907
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708714858248,
            "actual_timestamp": 1708714977004,
            "event_type": "Arrival",
            "delay": 1117011
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708714994518,
            "actual_timestamp": 1708715253177,
            "event_type": "Departure",
            "delay": 1256914
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708715158248,
            "actual_timestamp": 1708715233186,
            "event_type": "Arrival",
            "delay": 1191949
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708715289821,
            "actual_timestamp": 1708715424584,
            "event_type": "Departure",
            "delay": 1251774
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708715458248,
            "actual_timestamp": 1708715664499,
            "event_type": "Arrival",
            "delay": 1398200
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708715565792,
            "actual_timestamp": 1708715847272,
            "event_type": "Departure",
            "delay": 1473429
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708715758248,
            "actual_timestamp": 1708715909428,
            "event_type": "Arrival",
            "delay": 1549380
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708715821197,
            "actual_timestamp": 1708716227922,
            "event_type": "Departure",
            "delay": 1804925
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708716058248,
            "actual_timestamp": 1708716199291,
            "event_type": "Arrival",
            "delay": 1690423
        },
        {
            "journey_id": "29eff23a7d4280693094ed18d487806e",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708716167498,
            "actual_timestamp": 1708716388329,
            "event_type": "Departure",
            "delay": 1770211
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708782668707,
            "actual_timestamp": 1708782857515,
            "event_type": "Arrival",
            "delay": 188808
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708782794967,
            "actual_timestamp": 1708783048946,
            "event_type": "Departure",
            "delay": 253979
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708782968707,
            "actual_timestamp": 1708782986335,
            "event_type": "Arrival",
            "delay": 206436
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708783135495,
            "actual_timestamp": 1708783338115,
            "event_type": "Departure",
            "delay": 391428
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708783268707,
            "actual_timestamp": 1708783557808,
            "event_type": "Arrival",
            "delay": 495537
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708783351136,
            "actual_timestamp": 1708783782638,
            "event_type": "Departure",
            "delay": 637938
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708783568707,
            "actual_timestamp": 1708783755617,
            "event_type": "Arrival",
            "delay": 682447
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708783711321,
            "actual_timestamp": 1708784155668,
            "event_type": "Departure",
            "delay": 939884
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708783868707,
            "actual_timestamp": 1708784124972,
            "event_type": "Arrival",
            "delay": 938712
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708784026822,
            "actual_timestamp": 1708784539036,
            "event_type": "Departure",
            "delay": 1194661
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708784168707,
            "actual_timestamp": 1708784298576,
            "event_type": "Arrival",
            "delay": 1068581
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708784317645,
            "actual_timestamp": 1708784615410,
            "event_type": "Departure",
            "delay": 1236477
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708784468707,
            "actual_timestamp": 1708784591759,
            "event_type": "Arrival",
            "delay": 1191633
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708784572679,
            "actual_timestamp": 1708784761568,
            "event_type": "Departure",
            "delay": 1257470
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708784768707,
            "actual_timestamp": 1708785015473,
            "event_type": "Arrival",
            "delay": 1438399
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708784868450,
            "actual_timestamp": 1708785215227,
            "event_type": "Departure",
            "delay": 1538410
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708785068707,
            "actual_timestamp": 1708785076886,
            "event_type": "Arrival",
            "delay": 1446578
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708785140988,
            "actual_timestamp": 1708785155070,
            "event_type": "Departure",
            "delay": 1452481
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708785368707,
            "actual_timestamp": 1708785523058,
            "event_type": "Arrival",
            "delay": 1600929
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708785459896,
            "actual_timestamp": 1708785706028,
            "event_type": "Departure",
            "delay": 1692710
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708785668707,
            "actual_timestamp": 1708785901406,
            "event_type": "Arrival",
            "delay": 1833628
        },
        {
            "journey_id": "17b0f2701f406730aa47888d8487014c",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708785838046,
            "actual_timestamp": 1708786259819,
            "event_type": "Departure",
            "delay": 2022702
        },
        {
            "journey_id": "3f704a32111bf0224b45f542316ed855",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708752633596,
            "actual_timestamp": 1708752686145,
            "event_type": "Arrival",
            "delay": 52549
        },
        {
            "journey_id": "3f704a32111bf0224b45f542316ed855",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708752722894,
            "actual_timestamp": 1708753026178,
            "event_type": "Departure",
            "delay": 303284
        },
        {
            "journey_id": "3f704a32111bf0224b45f542316ed855",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708752933596,
            "actual_timestamp": 1708753141087,
            "event_type": "Arrival",
            "delay": 260040
        },
        {
            "journey_id": "3f704a32111bf0224b45f542316ed855",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708753079061,
            "actual_timestamp": 1708753567338,
            "event_type": "Departure",
            "delay": 540826
        },
        {
            "journey_id": "3f704a32111bf0224b45f542316ed855",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708753233596,
            "actual_timestamp": 1708753339497,
            "event_type": "Arrival",
            "delay": 365941
        },
        {
            "journey_id": "3f704a32111bf0224b45f542316ed855",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708753337456,
            "actual_timestamp": 1708753583755,
            "event_type": "Departure",
            "delay": 506339
        },
        {
            "journey_id": "3f704a32111bf0224b45f542316ed855",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708753533596,
            "actual_timestamp": 1708753705296,
            "event_type": "Arrival",
            "delay": 537641
        },
        {
            "journey_id": "3f704a32111bf0224b45f542316ed855",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708753609685,
            "actual_timestamp": 1708753971046,
            "event_type": "Departure",
            "delay": 727302
        },
        {
            "journey_id": "3f704a32111bf0224b45f542316ed855",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708753833596,
            "actual_timestamp": 1708754024572,
            "event_type": "Arrival",
            "delay": 728617
        },
        {
            "journey_id": "3f704a32111bf0224b45f542316ed855",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708753944111,
            "actual_timestamp": 1708754156964,
            "event_type": "Departure",
            "delay": 750494
        },
        {
            "journey_id": "3f704a32111bf0224b45f542316ed855",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708754133596,
            "actual_timestamp": 1708754187834,
            "event_type": "Arrival",
            "delay": 782855
        },
        {
            "journey_id": "3f704a32111bf0224b45f542316ed855",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708754273218,
            "actual_timestamp": 1708754429697,
            "event_type": "Departure",
            "delay": 885096
        },
        {
            "journey_id": "3f704a32111bf0224b45f542316ed855",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708754433596,
            "actual_timestamp": 1708754565350,
            "event_type": "Arrival",
            "delay": 914609
        },
        {
            "journey_id": "3f704a32111bf0224b45f542316ed855",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708754593337,
            "actual_timestamp": 1708754939685,
            "event_type": "Departure",
            "delay": 1129203
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708706487796,
            "actual_timestamp": 1708706708564,
            "event_type": "Arrival",
            "delay": 220768
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708706595370,
            "actual_timestamp": 1708706850311,
            "event_type": "Departure",
            "delay": 254941
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708706787796,
            "actual_timestamp": 1708706840611,
            "event_type": "Arrival",
            "delay": 273583
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708706869363,
            "actual_timestamp": 1708706962227,
            "event_type": "Departure",
            "delay": 313632
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708707087796,
            "actual_timestamp": 1708707132436,
            "event_type": "Arrival",
            "delay": 318223
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708707213407,
            "actual_timestamp": 1708707446687,
            "event_type": "Departure",
            "delay": 506863
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708707387796,
            "actual_timestamp": 1708707684547,
            "event_type": "Arrival",
            "delay": 614974
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708707482510,
            "actual_timestamp": 1708708026640,
            "event_type": "Departure",
            "delay": 862353
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708707687796,
            "actual_timestamp": 1708707778147,
            "event_type": "Arrival",
            "delay": 705325
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708707755520,
            "actual_timestamp": 1708708096360,
            "event_type": "Departure",
            "delay": 955814
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708707987796,
            "actual_timestamp": 1708708227181,
            "event_type": "Arrival",
            "delay": 944710
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708708049070,
            "actual_timestamp": 1708708315942,
            "event_type": "Departure",
            "delay": 972197
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708708287796,
            "actual_timestamp": 1708708473079,
            "event_type": "Arrival",
            "delay": 1129993
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708708423357,
            "actual_timestamp": 1708708852358,
            "event_type": "Departure",
            "delay": 1373711
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708708587796,
            "actual_timestamp": 1708708882282,
            "event_type": "Arrival",
            "delay": 1424479
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708708747320,
            "actual_timestamp": 1708709228132,
            "event_type": "Departure",
            "delay": 1610805
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708708887796,
            "actual_timestamp": 1708709100436,
            "event_type": "Arrival",
            "delay": 1637119
        },
        {
            "journey_id": "917d0954594e71bd84e4df6ad393c528",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708708993928,
            "actual_timestamp": 1708709321390,
            "event_type": "Departure",
            "delay": 1751941
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708757148301,
            "actual_timestamp": 1708757152619,
            "event_type": "Arrival",
            "delay": 4318
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708757326791,
            "actual_timestamp": 1708757486470,
            "event_type": "Departure",
            "delay": 159679
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708757448301,
            "actual_timestamp": 1708757565644,
            "event_type": "Arrival",
            "delay": 121661
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708757586729,
            "actual_timestamp": 1708757811201,
            "event_type": "Departure",
            "delay": 228790
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708757748301,
            "actual_timestamp": 1708757778226,
            "event_type": "Arrival",
            "delay": 151586
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708757910527,
            "actual_timestamp": 1708758001005,
            "event_type": "Departure",
            "delay": 212139
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708758048301,
            "actual_timestamp": 1708758221065,
            "event_type": "Arrival",
            "delay": 324350
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708758166632,
            "actual_timestamp": 1708758415498,
            "event_type": "Departure",
            "delay": 400452
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708758348301,
            "actual_timestamp": 1708758479270,
            "event_type": "Arrival",
            "delay": 455319
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708758416166,
            "actual_timestamp": 1708758685619,
            "event_type": "Departure",
            "delay": 593803
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708758648301,
            "actual_timestamp": 1708758828682,
            "event_type": "Arrival",
            "delay": 635700
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708758751533,
            "actual_timestamp": 1708758964245,
            "event_type": "Departure",
            "delay": 668031
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708758948301,
            "actual_timestamp": 1708759178443,
            "event_type": "Arrival",
            "delay": 865842
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708759055687,
            "actual_timestamp": 1708759331374,
            "event_type": "Departure",
            "delay": 911387
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708759248301,
            "actual_timestamp": 1708759500172,
            "event_type": "Arrival",
            "delay": 1117713
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708759331937,
            "actual_timestamp": 1708759774605,
            "event_type": "Departure",
            "delay": 1308510
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708759548301,
            "actual_timestamp": 1708759654654,
            "event_type": "Arrival",
            "delay": 1224066
        },
        {
            "journey_id": "566f9f01d61f93c136039daf3f3fdf6c",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708759672861,
            "actual_timestamp": 1708759999562,
            "event_type": "Departure",
            "delay": 1444414
        },
        {
            "journey_id": "84be375a3c55f103c915f34706417ff9",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708741110956,
            "actual_timestamp": 1708741120111,
            "event_type": "Arrival",
            "delay": 9155
        },
        {
            "journey_id": "84be375a3c55f103c915f34706417ff9",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708741173454,
            "actual_timestamp": 1708741205887,
            "event_type": "Departure",
            "delay": 32433
        },
        {
            "journey_id": "84be375a3c55f103c915f34706417ff9",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708741410956,
            "actual_timestamp": 1708741699966,
            "event_type": "Arrival",
            "delay": 298165
        },
        {
            "journey_id": "84be375a3c55f103c915f34706417ff9",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708741533874,
            "actual_timestamp": 1708742089646,
            "event_type": "Departure",
            "delay": 564927
        },
        {
            "journey_id": "84be375a3c55f103c915f34706417ff9",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708741710956,
            "actual_timestamp": 1708741772343,
            "event_type": "Arrival",
            "delay": 359552
        },
        {
            "journey_id": "84be375a3c55f103c915f34706417ff9",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708741830315,
            "actual_timestamp": 1708742173377,
            "event_type": "Departure",
            "delay": 641227
        },
        {
            "journey_id": "84be375a3c55f103c915f34706417ff9",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708742010956,
            "actual_timestamp": 1708742159940,
            "event_type": "Arrival",
            "delay": 508536
        },
        {
            "journey_id": "84be375a3c55f103c915f34706417ff9",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708742174558,
            "actual_timestamp": 1708742489483,
            "event_type": "Departure",
            "delay": 674477
        },
        {
            "journey_id": "84be375a3c55f103c915f34706417ff9",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708742310956,
            "actual_timestamp": 1708742481859,
            "event_type": "Arrival",
            "delay": 679439
        },
        {
            "journey_id": "84be375a3c55f103c915f34706417ff9",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708742411007,
            "actual_timestamp": 1708742868195,
            "event_type": "Departure",
            "delay": 965724
        },
        {
            "journey_id": "84be375a3c55f103c915f34706417ff9",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708742610956,
            "actual_timestamp": 1708742875334,
            "event_type": "Arrival",
            "delay": 943817
        },
        {
            "journey_id": "84be375a3c55f103c915f34706417ff9",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708742733303,
            "actual_timestamp": 1708743108820,
            "event_type": "Departure",
            "delay": 1054956
        },
        {
            "journey_id": "84be375a3c55f103c915f34706417ff9",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708742910956,
            "actual_timestamp": 1708743154989,
            "event_type": "Arrival",
            "delay": 1187850
        },
        {
            "journey_id": "84be375a3c55f103c915f34706417ff9",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708743014552,
            "actual_timestamp": 1708743369119,
            "event_type": "Departure",
            "delay": 1298384
        },
        {
            "journey_id": "84be375a3c55f103c915f34706417ff9",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708743210956,
            "actual_timestamp": 1708743214369,
            "event_type": "Arrival",
            "delay": 1191263
        },
        {
            "journey_id": "84be375a3c55f103c915f34706417ff9",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708743285416,
            "actual_timestamp": 1708743387514,
            "event_type": "Departure",
            "delay": 1289948
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708716996000,
            "actual_timestamp": 1708717081302,
            "event_type": "Arrival",
            "delay": 85302
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708717129688,
            "actual_timestamp": 1708717493029,
            "event_type": "Departure",
            "delay": 363341
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708717296000,
            "actual_timestamp": 1708717372992,
            "event_type": "Arrival",
            "delay": 162294
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708717441997,
            "actual_timestamp": 1708717664391,
            "event_type": "Departure",
            "delay": 307696
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708717596000,
            "actual_timestamp": 1708717855157,
            "event_type": "Arrival",
            "delay": 421451
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708717696351,
            "actual_timestamp": 1708718224693,
            "event_type": "Departure",
            "delay": 690636
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708717896000,
            "actual_timestamp": 1708718162953,
            "event_type": "Arrival",
            "delay": 688404
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708718023259,
            "actual_timestamp": 1708718429998,
            "event_type": "Departure",
            "delay": 828190
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708718196000,
            "actual_timestamp": 1708718206687,
            "event_type": "Arrival",
            "delay": 699091
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708718303949,
            "actual_timestamp": 1708718543089,
            "event_type": "Departure",
            "delay": 927544
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708718496000,
            "actual_timestamp": 1708718736408,
            "event_type": "Arrival",
            "delay": 939499
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708718620866,
            "actual_timestamp": 1708719101384,
            "event_type": "Departure",
            "delay": 1179609
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708718796000,
            "actual_timestamp": 1708718946636,
            "event_type": "Arrival",
            "delay": 1090135
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708718919423,
            "actual_timestamp": 1708719114420,
            "event_type": "Departure",
            "delay": 1134496
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708719096000,
            "actual_timestamp": 1708719110747,
            "event_type": "Arrival",
            "delay": 1104882
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708719228272,
            "actual_timestamp": 1708719340118,
            "event_type": "Departure",
            "delay": 1201981
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708719396000,
            "actual_timestamp": 1708719493392,
            "event_type": "Arrival",
            "delay": 1202274
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708719564065,
            "actual_timestamp": 1708719866056,
            "event_type": "Departure",
            "delay": 1406873
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708719696000,
            "actual_timestamp": 1708719945014,
            "event_type": "Arrival",
            "delay": 1451288
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708719811361,
            "actual_timestamp": 1708720118609,
            "event_type": "Departure",
            "delay": 1509522
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708719996000,
            "actual_timestamp": 1708720142679,
            "event_type": "Arrival",
            "delay": 1597967
        },
        {
            "journey_id": "20296ccd3c17e638481b20778fe808be",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708720164103,
            "actual_timestamp": 1708720577860,
            "event_type": "Departure",
            "delay": 1865045
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708770060923,
            "actual_timestamp": 1708770111172,
            "event_type": "Arrival",
            "delay": 50249
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708770206269,
            "actual_timestamp": 1708770330164,
            "event_type": "Departure",
            "delay": 123895
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708770360923,
            "actual_timestamp": 1708770402971,
            "event_type": "Arrival",
            "delay": 92297
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708770456761,
            "actual_timestamp": 1708770553808,
            "event_type": "Departure",
            "delay": 147296
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708770660923,
            "actual_timestamp": 1708770718356,
            "event_type": "Arrival",
            "delay": 149730
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708770798456,
            "actual_timestamp": 1708770969636,
            "event_type": "Departure",
            "delay": 263477
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708770960923,
            "actual_timestamp": 1708771123061,
            "event_type": "Arrival",
            "delay": 311868
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708771115224,
            "actual_timestamp": 1708771493542,
            "event_type": "Departure",
            "delay": 528048
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708771260923,
            "actual_timestamp": 1708771446103,
            "event_type": "Arrival",
            "delay": 497048
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708771379844,
            "actual_timestamp": 1708771643923,
            "event_type": "Departure",
            "delay": 575947
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708771560923,
            "actual_timestamp": 1708771744690,
            "event_type": "Arrival",
            "delay": 680815
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708771675013,
            "actual_timestamp": 1708771952168,
            "event_type": "Departure",
            "delay": 774203
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708771860923,
            "actual_timestamp": 1708772096328,
            "event_type": "Arrival",
            "delay": 916220
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708771951833,
            "actual_timestamp": 1708772462819,
            "event_type": "Departure",
            "delay": 1191801
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708772160923,
            "actual_timestamp": 1708772322126,
            "event_type": "Arrival",
            "delay": 1077423
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708772272675,
            "actual_timestamp": 1708772679482,
            "event_type": "Departure",
            "delay": 1323027
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708772460923,
            "actual_timestamp": 1708772680442,
            "event_type": "Arrival",
            "delay": 1296942
        },
        {
            "journey_id": "bd439d211f58ac2eba00593bf1cd77e3",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708772580168,
            "actual_timestamp": 1708772922321,
            "event_type": "Departure",
            "delay": 1419576
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708728769721,
            "actual_timestamp": 1708728898057,
            "event_type": "Arrival",
            "delay": 128336
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708728877688,
            "actual_timestamp": 1708729248702,
            "event_type": "Departure",
            "delay": 371014
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708729069721,
            "actual_timestamp": 1708729318651,
            "event_type": "Arrival",
            "delay": 377266
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708729222985,
            "actual_timestamp": 1708729711284,
            "event_type": "Departure",
            "delay": 616635
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708729369721,
            "actual_timestamp": 1708729584774,
            "event_type": "Arrival",
            "delay": 592319
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708729488491,
            "actual_timestamp": 1708729820325,
            "event_type": "Departure",
            "delay": 709100
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708729669721,
            "actual_timestamp": 1708729707745,
            "event_type": "Arrival",
            "delay": 630343
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708729779493,
            "actual_timestamp": 1708730114615,
            "event_type": "Departure",
            "delay": 927441
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708729969721,
            "actual_timestamp": 1708730075411,
            "event_type": "Arrival",
            "delay": 736033
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708730033146,
            "actual_timestamp": 1708730177986,
            "event_type": "Departure",
            "delay": 775183
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708730269721,
            "actual_timestamp": 1708730556339,
            "event_type": "Arrival",
            "delay": 1022651
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708730386674,
            "actual_timestamp": 1708730760284,
            "event_type": "Departure",
            "delay": 1109643
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708730569721,
            "actual_timestamp": 1708730663054,
            "event_type": "Arrival",
            "delay": 1115984
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708730640572,
            "actual_timestamp": 1708730985375,
            "event_type": "Departure",
            "delay": 1367454
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708730869721,
            "actual_timestamp": 1708731104125,
            "event_type": "Arrival",
            "delay": 1350388
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708730993815,
            "actual_timestamp": 1708731241364,
            "event_type": "Departure",
            "delay": 1363533
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708731169721,
            "actual_timestamp": 1708731330603,
            "event_type": "Arrival",
            "delay": 1511270
        },
        {
            "journey_id": "bd4c95d4687994f62a13fba16948f77b",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708731239628,
            "actual_timestamp": 1708731552955,
            "event_type": "Departure",
            "delay": 1663715
        },
        {
            "journey_id": "6a02096beb7ac8c58ad460b68634a1c8",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708771098902,
            "actual_timestamp": 1708771332426,
            "event_type": "Arrival",
            "delay": 233524
        },
        {
            "journey_id": "6a02096beb7ac8c58ad460b68634a1c8",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708771212307,
            "actual_timestamp": 1708771717781,
            "event_type": "Departure",
            "delay": 505474
        },
        {
            "journey_id": "6a02096beb7ac8c58ad460b68634a1c8",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708771398902,
            "actual_timestamp": 1708771560716,
            "event_type": "Arrival",
            "delay": 395338
        },
        {
            "journey_id": "6a02096beb7ac8c58ad460b68634a1c8",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708771473937,
            "actual_timestamp": 1708771668493,
            "event_type": "Departure",
            "delay": 428080
        },
        {
            "journey_id": "6a02096beb7ac8c58ad460b68634a1c8",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708771698902,
            "actual_timestamp": 1708771918228,
            "event_type": "Arrival",
            "delay": 614664
        },
        {
            "journey_id": "6a02096beb7ac8c58ad460b68634a1c8",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708771797527,
            "actual_timestamp": 1708772107329,
            "event_type": "Departure",
            "delay": 705140
        },
        {
            "journey_id": "6a02096beb7ac8c58ad460b68634a1c8",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708771998902,
            "actual_timestamp": 1708772280047,
            "event_type": "Arrival",
            "delay": 895809
        },
        {
            "journey_id": "6a02096beb7ac8c58ad460b68634a1c8",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708772059047,
            "actual_timestamp": 1708772484716,
            "event_type": "Departure",
            "delay": 1040333
        },
        {
            "journey_id": "6a02096beb7ac8c58ad460b68634a1c8",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708772298902,
            "actual_timestamp": 1708772589301,
            "event_type": "Arrival",
            "delay": 1186208
        },
        {
            "journey_id": "6a02096beb7ac8c58ad460b68634a1c8",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708772447369,
            "actual_timestamp": 1708773011841,
            "event_type": "Departure",
            "delay": 1460281
        },
        {
            "journey_id": "6a02096beb7ac8c58ad460b68634a1c8",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708772598902,
            "actual_timestamp": 1708772639227,
            "event_type": "Arrival",
            "delay": 1226533
        },
        {
            "journey_id": "6a02096beb7ac8c58ad460b68634a1c8",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708772739792,
            "actual_timestamp": 1708772939978,
            "event_type": "Departure",
            "delay": 1386394
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708725721135,
            "actual_timestamp": 1708725879680,
            "event_type": "Arrival",
            "delay": 158545
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708725829497,
            "actual_timestamp": 1708726062669,
            "event_type": "Departure",
            "delay": 233172
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708726021135,
            "actual_timestamp": 1708726142936,
            "event_type": "Arrival",
            "delay": 280346
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708726097702,
            "actual_timestamp": 1708726514288,
            "event_type": "Departure",
            "delay": 575131
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708726321135,
            "actual_timestamp": 1708726342513,
            "event_type": "Arrival",
            "delay": 301724
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708726398953,
            "actual_timestamp": 1708726710553,
            "event_type": "Departure",
            "delay": 591946
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708726621135,
            "actual_timestamp": 1708726641593,
            "event_type": "Arrival",
            "delay": 322182
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708726692232,
            "actual_timestamp": 1708726852975,
            "event_type": "Departure",
            "delay": 462467
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708726921135,
            "actual_timestamp": 1708726960328,
            "event_type": "Arrival",
            "delay": 361375
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708727087267,
            "actual_timestamp": 1708727250686,
            "event_type": "Departure",
            "delay": 485601
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708727221135,
            "actual_timestamp": 1708727276010,
            "event_type": "Arrival",
            "delay": 416250
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708727335502,
            "actual_timestamp": 1708727617207,
            "event_type": "Departure",
            "delay": 643080
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708727521135,
            "actual_timestamp": 1708727599550,
            "event_type": "Arrival",
            "delay": 494665
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708727616399,
            "actual_timestamp": 1708727750319,
            "event_type": "Departure",
            "delay": 550170
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708727821135,
            "actual_timestamp": 1708727872755,
            "event_type": "Arrival",
            "delay": 546285
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708727926055,
            "actual_timestamp": 1708728135786,
            "event_type": "Departure",
            "delay": 704396
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708728121135,
            "actual_timestamp": 1708728360994,
            "event_type": "Arrival",
            "delay": 786144
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708728288194,
            "actual_timestamp": 1708728621564,
            "event_type": "Departure",
            "delay": 879655
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708728421135,
            "actual_timestamp": 1708728650392,
            "event_type": "Arrival",
            "delay": 1015401
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708728535823,
            "actual_timestamp": 1708728886175,
            "event_type": "Departure",
            "delay": 1136496
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708728721135,
            "actual_timestamp": 1708728876933,
            "event_type": "Arrival",
            "delay": 1171199
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708728829567,
            "actual_timestamp": 1708729126970,
            "event_type": "Departure",
            "delay": 1312804
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708729021135,
            "actual_timestamp": 1708729063818,
            "event_type": "Arrival",
            "delay": 1213882
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708729197180,
            "actual_timestamp": 1708729450145,
            "event_type": "Departure",
            "delay": 1424164
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708729321135,
            "actual_timestamp": 1708729494955,
            "event_type": "Arrival",
            "delay": 1387702
        },
        {
            "journey_id": "48e88ec012e5ebf34a5946854fa368ba",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708729451552,
            "actual_timestamp": 1708729875815,
            "event_type": "Departure",
            "delay": 1638145
        },
        {
            "journey_id": "09c21167cc852f01a339be9b430f4b77",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708774325016,
            "actual_timestamp": 1708774382805,
            "event_type": "Arrival",
            "delay": 57789
        },
        {
            "journey_id": "09c21167cc852f01a339be9b430f4b77",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708774422486,
            "actual_timestamp": 1708774740358,
            "event_type": "Departure",
            "delay": 317872
        },
        {
            "journey_id": "09c21167cc852f01a339be9b430f4b77",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708774625016,
            "actual_timestamp": 1708774770204,
            "event_type": "Arrival",
            "delay": 202977
        },
        {
            "journey_id": "09c21167cc852f01a339be9b430f4b77",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708774790147,
            "actual_timestamp": 1708775099488,
            "event_type": "Departure",
            "delay": 367130
        },
        {
            "journey_id": "09c21167cc852f01a339be9b430f4b77",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708774925016,
            "actual_timestamp": 1708775111594,
            "event_type": "Arrival",
            "delay": 389555
        },
        {
            "journey_id": "09c21167cc852f01a339be9b430f4b77",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708775057968,
            "actual_timestamp": 1708775444674,
            "event_type": "Departure",
            "delay": 589683
        },
        {
            "journey_id": "09c21167cc852f01a339be9b430f4b77",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708775225016,
            "actual_timestamp": 1708775473357,
            "event_type": "Arrival",
            "delay": 637896
        },
        {
            "journey_id": "09c21167cc852f01a339be9b430f4b77",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708775357626,
            "actual_timestamp": 1708775808371,
            "event_type": "Departure",
            "delay": 840300
        },
        {
            "journey_id": "09c21167cc852f01a339be9b430f4b77",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708775525016,
            "actual_timestamp": 1708775529923,
            "event_type": "Arrival",
            "delay": 642803
        },
        {
            "journey_id": "09c21167cc852f01a339be9b430f4b77",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708775611893,
            "actual_timestamp": 1708775698841,
            "event_type": "Departure",
            "delay": 724844
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708771309897,
            "actual_timestamp": 1708771464745,
            "event_type": "Arrival",
            "delay": 154848
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708771394841,
            "actual_timestamp": 1708771549897,
            "event_type": "Departure",
            "delay": 155056
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708771609897,
            "actual_timestamp": 1708771649658,
            "event_type": "Arrival",
            "delay": 194609
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708771773706,
            "actual_timestamp": 1708771859158,
            "event_type": "Departure",
            "delay": 240300
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708771909897,
            "actual_timestamp": 1708772160745,
            "event_type": "Arrival",
            "delay": 445457
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708772043814,
            "actual_timestamp": 1708772566448,
            "event_type": "Departure",
            "delay": 717243
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708772209897,
            "actual_timestamp": 1708772260708,
            "event_type": "Arrival",
            "delay": 496268
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708772274232,
            "actual_timestamp": 1708772408831,
            "event_type": "Departure",
            "delay": 580056
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708772509897,
            "actual_timestamp": 1708772633885,
            "event_type": "Arrival",
            "delay": 620256
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708772609690,
            "actual_timestamp": 1708772738299,
            "event_type": "Departure",
            "delay": 624877
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708772809897,
            "actual_timestamp": 1708772868524,
            "event_type": "Arrival",
            "delay": 678883
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708772954612,
            "actual_timestamp": 1708773042250,
            "event_type": "Departure",
            "delay": 707894
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708773109897,
            "actual_timestamp": 1708773310884,
            "event_type": "Arrival",
            "delay": 879870
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708773250207,
            "actual_timestamp": 1708773630074,
            "event_type": "Departure",
            "delay": 1058750
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708773409897,
            "actual_timestamp": 1708773617227,
            "event_type": "Arrival",
            "delay": 1087200
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708773523202,
            "actual_timestamp": 1708773837893,
            "event_type": "Departure",
            "delay": 1194561
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708773709897,
            "actual_timestamp": 1708773943304,
            "event_type": "Arrival",
            "delay": 1320607
        },
        {
            "journey_id": "4000ce7c63a5771be1e5d5c88564f78e",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708773788695,
            "actual_timestamp": 1708774026185,
            "event_type": "Departure",
            "delay": 1324690
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708773279283,
            "actual_timestamp": 1708773360755,
            "event_type": "Arrival",
            "delay": 81472
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708773427476,
            "actual_timestamp": 1708773584947,
            "event_type": "Departure",
            "delay": 157471
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708773579283,
            "actual_timestamp": 1708773845261,
            "event_type": "Arrival",
            "delay": 347450
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708773727251,
            "actual_timestamp": 1708774083443,
            "event_type": "Departure",
            "delay": 437664
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708773879283,
            "actual_timestamp": 1708773961258,
            "event_type": "Arrival",
            "delay": 429425
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708773941262,
            "actual_timestamp": 1708774222638,
            "event_type": "Departure",
            "delay": 628826
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708774179283,
            "actual_timestamp": 1708774243446,
            "event_type": "Arrival",
            "delay": 493588
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708774327512,
            "actual_timestamp": 1708774571491,
            "event_type": "Departure",
            "delay": 673404
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708774479283,
            "actual_timestamp": 1708774660844,
            "event_type": "Arrival",
            "delay": 675149
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708774572865,
            "actual_timestamp": 1708774862211,
            "event_type": "Departure",
            "delay": 782934
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708774779283,
            "actual_timestamp": 1708774808371,
            "event_type": "Arrival",
            "delay": 704237
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708774855454,
            "actual_timestamp": 1708775163557,
            "event_type": "Departure",
            "delay": 983252
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708775079283,
            "actual_timestamp": 1708775156718,
            "event_type": "Arrival",
            "delay": 781672
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708775148050,
            "actual_timestamp": 1708775272119,
            "event_type": "Departure",
            "delay": 828306
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708775379283,
            "actual_timestamp": 1708775639815,
            "event_type": "Arrival",
            "delay": 1042204
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708775556872,
            "actual_timestamp": 1708776053480,
            "event_type": "Departure",
            "delay": 1278280
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708775679283,
            "actual_timestamp": 1708775918693,
            "event_type": "Arrival",
            "delay": 1281614
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708775808599,
            "actual_timestamp": 1708776139185,
            "event_type": "Departure",
            "delay": 1372790
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708775979283,
            "actual_timestamp": 1708776028239,
            "event_type": "Arrival",
            "delay": 1330570
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708776063321,
            "actual_timestamp": 1708776114089,
            "event_type": "Departure",
            "delay": 1332382
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708776279283,
            "actual_timestamp": 1708776367222,
            "event_type": "Arrival",
            "delay": 1418509
        },
        {
            "journey_id": "c988f98cf5e97e0c4237dcc941a4eb53",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708776383304,
            "actual_timestamp": 1708776718981,
            "event_type": "Departure",
            "delay": 1666247
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708786989491,
            "actual_timestamp": 1708787274654,
            "event_type": "Arrival",
            "delay": 285163
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708787146559,
            "actual_timestamp": 1708787561509,
            "event_type": "Departure",
            "delay": 414950
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708787289491,
            "actual_timestamp": 1708787515281,
            "event_type": "Arrival",
            "delay": 510953
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708787368640,
            "actual_timestamp": 1708787865669,
            "event_type": "Departure",
            "delay": 782192
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708787589491,
            "actual_timestamp": 1708787629420,
            "event_type": "Arrival",
            "delay": 550882
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708787749745,
            "actual_timestamp": 1708787835651,
            "event_type": "Departure",
            "delay": 596859
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708787889491,
            "actual_timestamp": 1708788045646,
            "event_type": "Arrival",
            "delay": 707037
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708787972756,
            "actual_timestamp": 1708788186009,
            "event_type": "Departure",
            "delay": 764135
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708788189491,
            "actual_timestamp": 1708788384598,
            "event_type": "Arrival",
            "delay": 902144
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708788309580,
            "actual_timestamp": 1708788667666,
            "event_type": "Departure",
            "delay": 1065123
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708788489491,
            "actual_timestamp": 1708788699332,
            "event_type": "Arrival",
            "delay": 1111985
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708788635627,
            "actual_timestamp": 1708788904299,
            "event_type": "Departure",
            "delay": 1170816
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708788789491,
            "actual_timestamp": 1708788840096,
            "event_type": "Arrival",
            "delay": 1162590
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708788955917,
            "actual_timestamp": 1708789298455,
            "event_type": "Departure",
            "delay": 1454523
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708789089491,
            "actual_timestamp": 1708789124025,
            "event_type": "Arrival",
            "delay": 1197124
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708789154448,
            "actual_timestamp": 1708789279183,
            "event_type": "Departure",
            "delay": 1287325
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708789389491,
            "actual_timestamp": 1708789521664,
            "event_type": "Arrival",
            "delay": 1329297
        },
        {
            "journey_id": "18e355dd98aff1237fb75f231c7b6733",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708789533245,
            "actual_timestamp": 1708789932743,
            "event_type": "Departure",
            "delay": 1596622
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708722920094,
            "actual_timestamp": 1708723123771,
            "event_type": "Arrival",
            "delay": 203677
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708723047377,
            "actual_timestamp": 1708723343315,
            "event_type": "Departure",
            "delay": 295938
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708723220094,
            "actual_timestamp": 1708723504053,
            "event_type": "Arrival",
            "delay": 487636
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708723284135,
            "actual_timestamp": 1708723817914,
            "event_type": "Departure",
            "delay": 737456
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708723520094,
            "actual_timestamp": 1708723651733,
            "event_type": "Arrival",
            "delay": 619275
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708723592875,
            "actual_timestamp": 1708723933833,
            "event_type": "Departure",
            "delay": 828594
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708723820094,
            "actual_timestamp": 1708723903161,
            "event_type": "Arrival",
            "delay": 702342
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708723892192,
            "actual_timestamp": 1708724239089,
            "event_type": "Departure",
            "delay": 966172
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708724120094,
            "actual_timestamp": 1708724149554,
            "event_type": "Arrival",
            "delay": 731802
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708724197441,
            "actual_timestamp": 1708724477561,
            "event_type": "Departure",
            "delay": 982462
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708724420094,
            "actual_timestamp": 1708724624079,
            "event_type": "Arrival",
            "delay": 935787
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708724512270,
            "actual_timestamp": 1708724985933,
            "event_type": "Departure",
            "delay": 1205465
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708724720094,
            "actual_timestamp": 1708724744517,
            "event_type": "Arrival",
            "delay": 960210
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708724830913,
            "actual_timestamp": 1708724957738,
            "event_type": "Departure",
            "delay": 1062612
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708725020094,
            "actual_timestamp": 1708725171386,
            "event_type": "Arrival",
            "delay": 1111502
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708725133514,
            "actual_timestamp": 1708725379099,
            "event_type": "Departure",
            "delay": 1205795
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708725320094,
            "actual_timestamp": 1708725456626,
            "event_type": "Arrival",
            "delay": 1248034
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708725469649,
            "actual_timestamp": 1708725714403,
            "event_type": "Departure",
            "delay": 1356256
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708725620094,
            "actual_timestamp": 1708725920008,
            "event_type": "Arrival",
            "delay": 1547948
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708725772575,
            "actual_timestamp": 1708726348186,
            "event_type": "Departure",
            "delay": 1823645
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708725920094,
            "actual_timestamp": 1708726154883,
            "event_type": "Arrival",
            "delay": 1782737
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708726076292,
            "actual_timestamp": 1708726325469,
            "event_type": "Departure",
            "delay": 1797125
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708726220094,
            "actual_timestamp": 1708726269919,
            "event_type": "Arrival",
            "delay": 1832562
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708726302830,
            "actual_timestamp": 1708726450906,
            "event_type": "Departure",
            "delay": 1930813
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708726520094,
            "actual_timestamp": 1708726752720,
            "event_type": "Arrival",
            "delay": 2065188
        },
        {
            "journey_id": "230c3557236c9a883824e35587207bcb",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708726596499,
            "actual_timestamp": 1708726953741,
            "event_type": "Departure",
            "delay": 2189804
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708749008016,
            "actual_timestamp": 1708749008629,
            "event_type": "Arrival",
            "delay": 613
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708749187863,
            "actual_timestamp": 1708749276987,
            "event_type": "Departure",
            "delay": 89124
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708749308016,
            "actual_timestamp": 1708749478856,
            "event_type": "Arrival",
            "delay": 171453
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708749473362,
            "actual_timestamp": 1708749647424,
            "event_type": "Departure",
            "delay": 174675
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708749608016,
            "actual_timestamp": 1708749763865,
            "event_type": "Arrival",
            "delay": 327302
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708749723794,
            "actual_timestamp": 1708750137605,
            "event_type": "Departure",
            "delay": 585264
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708749908016,
            "actual_timestamp": 1708749951619,
            "event_type": "Arrival",
            "delay": 370905
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708750001993,
            "actual_timestamp": 1708750105989,
            "event_type": "Departure",
            "delay": 431298
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708750208016,
            "actual_timestamp": 1708750265507,
            "event_type": "Arrival",
            "delay": 428396
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708750297529,
            "actual_timestamp": 1708750393554,
            "event_type": "Departure",
            "delay": 466930
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708750508016,
            "actual_timestamp": 1708750641315,
            "event_type": "Arrival",
            "delay": 561695
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708750687976,
            "actual_timestamp": 1708750893310,
            "event_type": "Departure",
            "delay": 633730
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708750808016,
            "actual_timestamp": 1708751023489,
            "event_type": "Arrival",
            "delay": 777168
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708750914776,
            "actual_timestamp": 1708751416265,
            "event_type": "Departure",
            "delay": 1063184
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708751108016,
            "actual_timestamp": 1708751330847,
            "event_type": "Arrival",
            "delay": 999999
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708751217748,
            "actual_timestamp": 1708751671566,
            "event_type": "Departure",
            "delay": 1230986
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708751408016,
            "actual_timestamp": 1708751499676,
            "event_type": "Arrival",
            "delay": 1091659
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708751494663,
            "actual_timestamp": 1708751860358,
            "event_type": "Departure",
            "delay": 1365694
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708751708016,
            "actual_timestamp": 1708751853689,
            "event_type": "Arrival",
            "delay": 1237332
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708751878460,
            "actual_timestamp": 1708752055937,
            "event_type": "Departure",
            "delay": 1269136
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708752008016,
            "actual_timestamp": 1708752076465,
            "event_type": "Arrival",
            "delay": 1305781
        },
        {
            "journey_id": "5966dc9524c4331f854d1f327969d183",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708752074161,
            "actual_timestamp": 1708752437733,
            "event_type": "Departure",
            "delay": 1600904
        },
        {
            "journey_id": "e4deaa9b7e529839aa192d2b35431835",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708749470308,
            "actual_timestamp": 1708749627308,
            "event_type": "Arrival",
            "delay": 157000
        },
        {
            "journey_id": "e4deaa9b7e529839aa192d2b35431835",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708749602806,
            "actual_timestamp": 1708749799117,
            "event_type": "Departure",
            "delay": 196311
        },
        {
            "journey_id": "e4deaa9b7e529839aa192d2b35431835",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708749770308,
            "actual_timestamp": 1708750034618,
            "event_type": "Arrival",
            "delay": 421310
        },
        {
            "journey_id": "e4deaa9b7e529839aa192d2b35431835",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708749895405,
            "actual_timestamp": 1708750216326,
            "event_type": "Departure",
            "delay": 477921
        },
        {
            "journey_id": "e4deaa9b7e529839aa192d2b35431835",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708750070308,
            "actual_timestamp": 1708750260299,
            "event_type": "Arrival",
            "delay": 611301
        },
        {
            "journey_id": "e4deaa9b7e529839aa192d2b35431835",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708750242370,
            "actual_timestamp": 1708750646594,
            "event_type": "Departure",
            "delay": 825534
        },
        {
            "journey_id": "e4deaa9b7e529839aa192d2b35431835",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708750370308,
            "actual_timestamp": 1708750385896,
            "event_type": "Arrival",
            "delay": 626889
        },
        {
            "journey_id": "e4deaa9b7e529839aa192d2b35431835",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708750528491,
            "actual_timestamp": 1708750621546,
            "event_type": "Departure",
            "delay": 704356
        },
        {
            "journey_id": "e4deaa9b7e529839aa192d2b35431835",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708750670308,
            "actual_timestamp": 1708750967044,
            "event_type": "Arrival",
            "delay": 923625
        },
        {
            "journey_id": "e4deaa9b7e529839aa192d2b35431835",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708750785555,
            "actual_timestamp": 1708751211211,
            "event_type": "Departure",
            "delay": 1052545
        },
        {
            "journey_id": "e4deaa9b7e529839aa192d2b35431835",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708750970308,
            "actual_timestamp": 1708751212113,
            "event_type": "Arrival",
            "delay": 1165430
        },
        {
            "journey_id": "e4deaa9b7e529839aa192d2b35431835",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708751068833,
            "actual_timestamp": 1708751529555,
            "event_type": "Departure",
            "delay": 1384347
        },
        {
            "journey_id": "e4deaa9b7e529839aa192d2b35431835",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708751270308,
            "actual_timestamp": 1708751544387,
            "event_type": "Arrival",
            "delay": 1439509
        },
        {
            "journey_id": "e4deaa9b7e529839aa192d2b35431835",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708751363991,
            "actual_timestamp": 1708751776880,
            "event_type": "Departure",
            "delay": 1578319
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708741364597,
            "actual_timestamp": 1708741403413,
            "event_type": "Arrival",
            "delay": 38816
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708741482438,
            "actual_timestamp": 1708741652387,
            "event_type": "Departure",
            "delay": 169949
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708741664597,
            "actual_timestamp": 1708741910741,
            "event_type": "Arrival",
            "delay": 284960
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708741759933,
            "actual_timestamp": 1708742130253,
            "event_type": "Departure",
            "delay": 409136
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708741964597,
            "actual_timestamp": 1708742238435,
            "event_type": "Arrival",
            "delay": 558798
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708742125803,
            "actual_timestamp": 1708742505125,
            "event_type": "Departure",
            "delay": 664282
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708742264597,
            "actual_timestamp": 1708742497179,
            "event_type": "Arrival",
            "delay": 791380
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708742348797,
            "actual_timestamp": 1708742673633,
            "event_type": "Departure",
            "delay": 883634
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708742564597,
            "actual_timestamp": 1708742686399,
            "event_type": "Arrival",
            "delay": 913182
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708742645534,
            "actual_timestamp": 1708743063360,
            "event_type": "Departure",
            "delay": 1209206
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708742864597,
            "actual_timestamp": 1708743141307,
            "event_type": "Arrival",
            "delay": 1189892
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708742942687,
            "actual_timestamp": 1708743511086,
            "event_type": "Departure",
            "delay": 1481581
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708743164597,
            "actual_timestamp": 1708743219911,
            "event_type": "Arrival",
            "delay": 1245206
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708743271591,
            "actual_timestamp": 1708743549730,
            "event_type": "Departure",
            "delay": 1468031
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708743464597,
            "actual_timestamp": 1708743636336,
            "event_type": "Arrival",
            "delay": 1416945
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708743547278,
            "actual_timestamp": 1708743874111,
            "event_type": "Departure",
            "delay": 1572039
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708743764597,
            "actual_timestamp": 1708743982104,
            "event_type": "Arrival",
            "delay": 1634452
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708743912060,
            "actual_timestamp": 1708744378237,
            "event_type": "Departure",
            "delay": 1883122
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708744064597,
            "actual_timestamp": 1708744079514,
            "event_type": "Arrival",
            "delay": 1649369
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708744212192,
            "actual_timestamp": 1708744474749,
            "event_type": "Departure",
            "delay": 1897009
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708744364597,
            "actual_timestamp": 1708744421517,
            "event_type": "Arrival",
            "delay": 1706289
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708744426601,
            "actual_timestamp": 1708744574526,
            "event_type": "Departure",
            "delay": 1797294
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708744664597,
            "actual_timestamp": 1708744810813,
            "event_type": "Arrival",
            "delay": 1852505
        },
        {
            "journey_id": "15936be959a34a8ca24dafa7de4b1bdb",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708744843472,
            "actual_timestamp": 1708745184909,
            "event_type": "Departure",
            "delay": 2047726
        },
        {
            "journey_id": "6248ead8c2dd8aadbec66b32c425379b",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708721663458,
            "actual_timestamp": 1708721807664,
            "event_type": "Arrival",
            "delay": 144206
        },
        {
            "journey_id": "6248ead8c2dd8aadbec66b32c425379b",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708721825571,
            "actual_timestamp": 1708722089613,
            "event_type": "Departure",
            "delay": 264042
        },
        {
            "journey_id": "6248ead8c2dd8aadbec66b32c425379b",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708721963458,
            "actual_timestamp": 1708722188328,
            "event_type": "Arrival",
            "delay": 369076
        },
        {
            "journey_id": "6248ead8c2dd8aadbec66b32c425379b",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708722069345,
            "actual_timestamp": 1708722439268,
            "event_type": "Departure",
            "delay": 514129
        },
        {
            "journey_id": "6248ead8c2dd8aadbec66b32c425379b",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708722263458,
            "actual_timestamp": 1708722560231,
            "event_type": "Arrival",
            "delay": 665849
        },
        {
            "journey_id": "6248ead8c2dd8aadbec66b32c425379b",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708722367886,
            "actual_timestamp": 1708722670273,
            "event_type": "Departure",
            "delay": 671463
        },
        {
            "journey_id": "6248ead8c2dd8aadbec66b32c425379b",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708722563458,
            "actual_timestamp": 1708722615100,
            "event_type": "Arrival",
            "delay": 717491
        },
        {
            "journey_id": "6248ead8c2dd8aadbec66b32c425379b",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708722696363,
            "actual_timestamp": 1708722761229,
            "event_type": "Departure",
            "delay": 730715
        },
        {
            "journey_id": "6248ead8c2dd8aadbec66b32c425379b",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708722863458,
            "actual_timestamp": 1708723020666,
            "event_type": "Arrival",
            "delay": 874699
        },
        {
            "journey_id": "6248ead8c2dd8aadbec66b32c425379b",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708722974309,
            "actual_timestamp": 1708723314833,
            "event_type": "Departure",
            "delay": 1058015
        },
        {
            "journey_id": "6248ead8c2dd8aadbec66b32c425379b",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708723163458,
            "actual_timestamp": 1708723397115,
            "event_type": "Arrival",
            "delay": 1108356
        },
        {
            "journey_id": "6248ead8c2dd8aadbec66b32c425379b",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708723302857,
            "actual_timestamp": 1708723706499,
            "event_type": "Departure",
            "delay": 1278341
        },
        {
            "journey_id": "6248ead8c2dd8aadbec66b32c425379b",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708723463458,
            "actual_timestamp": 1708723473056,
            "event_type": "Arrival",
            "delay": 1117954
        },
        {
            "journey_id": "6248ead8c2dd8aadbec66b32c425379b",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708723602365,
            "actual_timestamp": 1708723818214,
            "event_type": "Departure",
            "delay": 1324205
        },
        {
            "journey_id": "237925d0a6acdcdae5469f47613f44c7",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708748357322,
            "actual_timestamp": 1708748523193,
            "event_type": "Arrival",
            "delay": 165871
        },
        {
            "journey_id": "237925d0a6acdcdae5469f47613f44c7",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708748529512,
            "actual_timestamp": 1708748794553,
            "event_type": "Departure",
            "delay": 265041
        },
        {
            "journey_id": "237925d0a6acdcdae5469f47613f44c7",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708748657322,
            "actual_timestamp": 1708748779403,
            "event_type": "Arrival",
            "delay": 287952
        },
        {
            "journey_id": "237925d0a6acdcdae5469f47613f44c7",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708748827960,
            "actual_timestamp": 1708748982197,
            "event_type": "Departure",
            "delay": 320108
        },
        {
            "journey_id": "237925d0a6acdcdae5469f47613f44c7",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708748957322,
            "actual_timestamp": 1708749043947,
            "event_type": "Arrival",
            "delay": 374577
        },
        {
            "journey_id": "237925d0a6acdcdae5469f47613f44c7",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708749066257,
            "actual_timestamp": 1708749248173,
            "event_type": "Departure",
            "delay": 469868
        },
        {
            "journey_id": "237925d0a6acdcdae5469f47613f44c7",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708749257322,
            "actual_timestamp": 1708749405711,
            "event_type": "Arrival",
            "delay": 522966
        },
        {
            "journey_id": "237925d0a6acdcdae5469f47613f44c7",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708749369917,
            "actual_timestamp": 1708749689203,
            "event_type": "Departure",
            "delay": 693863
        },
        {
            "journey_id": "237925d0a6acdcdae5469f47613f44c7",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708749557322,
            "actual_timestamp": 1708749837164,
            "event_type": "Arrival",
            "delay": 802808
        },
        {
            "journey_id": "237925d0a6acdcdae5469f47613f44c7",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708749702545,
            "actual_timestamp": 1708750253366,
            "event_type": "Departure",
            "delay": 1073787
        },
        {
            "journey_id": "237925d0a6acdcdae5469f47613f44c7",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708749857322,
            "actual_timestamp": 1708750009452,
            "event_type": "Arrival",
            "delay": 954938
        },
        {
            "journey_id": "237925d0a6acdcdae5469f47613f44c7",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708749930653,
            "actual_timestamp": 1708750150596,
            "event_type": "Departure",
            "delay": 1022751
        },
        {
            "journey_id": "1bd39bc6ea4b3db373c2784e6087a467",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708718902558,
            "actual_timestamp": 1708719124747,
            "event_type": "Arrival",
            "delay": 222189
        },
        {
            "journey_id": "1bd39bc6ea4b3db373c2784e6087a467",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708719030048,
            "actual_timestamp": 1708719503876,
            "event_type": "Departure",
            "delay": 473828
        },
        {
            "journey_id": "1bd39bc6ea4b3db373c2784e6087a467",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708719202558,
            "actual_timestamp": 1708719473926,
            "event_type": "Arrival",
            "delay": 493557
        },
        {
            "journey_id": "1bd39bc6ea4b3db373c2784e6087a467",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708719298710,
            "actual_timestamp": 1708719823288,
            "event_type": "Departure",
            "delay": 746767
        },
        {
            "journey_id": "1bd39bc6ea4b3db373c2784e6087a467",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708719502558,
            "actual_timestamp": 1708719733930,
            "event_type": "Arrival",
            "delay": 724929
        },
        {
            "journey_id": "1bd39bc6ea4b3db373c2784e6087a467",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708719582739,
            "actual_timestamp": 1708720025306,
            "event_type": "Departure",
            "delay": 936124
        },
        {
            "journey_id": "1bd39bc6ea4b3db373c2784e6087a467",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708719802558,
            "actual_timestamp": 1708719803353,
            "event_type": "Arrival",
            "delay": 725724
        },
        {
            "journey_id": "1bd39bc6ea4b3db373c2784e6087a467",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708719911806,
            "actual_timestamp": 1708719967055,
            "event_type": "Departure",
            "delay": 780178
        },
        {
            "journey_id": "1bd39bc6ea4b3db373c2784e6087a467",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708720102558,
            "actual_timestamp": 1708720227279,
            "event_type": "Arrival",
            "delay": 850445
        },
        {
            "journey_id": "1bd39bc6ea4b3db373c2784e6087a467",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708720167441,
            "actual_timestamp": 1708720351224,
            "event_type": "Departure",
            "delay": 909507
        },
        {
            "journey_id": "0ea93bb83b2cd6c2e3db98e443d912ff",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708715967701,
            "actual_timestamp": 1708716004552,
            "event_type": "Arrival",
            "delay": 36851
        },
        {
            "journey_id": "0ea93bb83b2cd6c2e3db98e443d912ff",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708716047157,
            "actual_timestamp": 1708716241871,
            "event_type": "Departure",
            "delay": 194714
        },
        {
            "journey_id": "0ea93bb83b2cd6c2e3db98e443d912ff",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708716267701,
            "actual_timestamp": 1708716409614,
            "event_type": "Arrival",
            "delay": 178764
        },
        {
            "journey_id": "0ea93bb83b2cd6c2e3db98e443d912ff",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708716333737,
            "actual_timestamp": 1708716485888,
            "event_type": "Departure",
            "delay": 189002
        },
        {
            "journey_id": "0ea93bb83b2cd6c2e3db98e443d912ff",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708716567701,
            "actual_timestamp": 1708716805731,
            "event_type": "Arrival",
            "delay": 416794
        },
        {
            "journey_id": "0ea93bb83b2cd6c2e3db98e443d912ff",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708716656101,
            "actual_timestamp": 1708717001771,
            "event_type": "Departure",
            "delay": 524434
        },
        {
            "journey_id": "0ea93bb83b2cd6c2e3db98e443d912ff",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708716867701,
            "actual_timestamp": 1708716936957,
            "event_type": "Arrival",
            "delay": 486050
        },
        {
            "journey_id": "0ea93bb83b2cd6c2e3db98e443d912ff",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708716937123,
            "actual_timestamp": 1708717010491,
            "event_type": "Departure",
            "delay": 490162
        },
        {
            "journey_id": "0ea93bb83b2cd6c2e3db98e443d912ff",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708717167701,
            "actual_timestamp": 1708717197629,
            "event_type": "Arrival",
            "delay": 515978
        },
        {
            "journey_id": "0ea93bb83b2cd6c2e3db98e443d912ff",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708717344527,
            "actual_timestamp": 1708717654323,
            "event_type": "Departure",
            "delay": 795846
        },
        {
            "journey_id": "0ea93bb83b2cd6c2e3db98e443d912ff",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708717467701,
            "actual_timestamp": 1708717563694,
            "event_type": "Arrival",
            "delay": 611971
        },
        {
            "journey_id": "0ea93bb83b2cd6c2e3db98e443d912ff",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708717554105,
            "actual_timestamp": 1708717655295,
            "event_type": "Departure",
            "delay": 617168
        },
        {
            "journey_id": "0ea93bb83b2cd6c2e3db98e443d912ff",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708717767701,
            "actual_timestamp": 1708718016454,
            "event_type": "Arrival",
            "delay": 860724
        },
        {
            "journey_id": "0ea93bb83b2cd6c2e3db98e443d912ff",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708717884572,
            "actual_timestamp": 1708718288345,
            "event_type": "Departure",
            "delay": 1015744
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708753760838,
            "actual_timestamp": 1708753791265,
            "event_type": "Arrival",
            "delay": 30427
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708753868022,
            "actual_timestamp": 1708753904827,
            "event_type": "Departure",
            "delay": 36805
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708754060838,
            "actual_timestamp": 1708754230561,
            "event_type": "Arrival",
            "delay": 200150
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708754183816,
            "actual_timestamp": 1708754504383,
            "event_type": "Departure",
            "delay": 350994
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708754360838,
            "actual_timestamp": 1708754511346,
            "event_type": "Arrival",
            "delay": 350658
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708754433841,
            "actual_timestamp": 1708754707101,
            "event_type": "Departure",
            "delay": 473410
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708754660838,
            "actual_timestamp": 1708754823020,
            "event_type": "Arrival",
            "delay": 512840
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708754819593,
            "actual_timestamp": 1708755052570,
            "event_type": "Departure",
            "delay": 583635
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708754960838,
            "actual_timestamp": 1708755048211,
            "event_type": "Arrival",
            "delay": 600213
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708755039450,
            "actual_timestamp": 1708755230211,
            "event_type": "Departure",
            "delay": 703601
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708755260838,
            "actual_timestamp": 1708755494555,
            "event_type": "Arrival",
            "delay": 833930
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708755383701,
            "actual_timestamp": 1708755780649,
            "event_type": "Departure",
            "delay": 997161
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708755560838,
            "actual_timestamp": 1708755750506,
            "event_type": "Arrival",
            "delay": 1023598
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708755663465,
            "actual_timestamp": 1708755935123,
            "event_type": "Departure",
            "delay": 1105588
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708755860838,
            "actual_timestamp": 1708756100788,
            "event_type": "Arrival",
            "delay": 1263548
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708756020391,
            "actual_timestamp": 1708756402791,
            "event_type": "Departure",
            "delay": 1405998
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708756160838,
            "actual_timestamp": 1708756276427,
            "event_type": "Arrival",
            "delay": 1379137
        },
        {
            "journey_id": "579ab534ab833793ca835bfb22ee8ec3",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708756302120,
            "actual_timestamp": 1708756562557,
            "event_type": "Departure",
            "delay": 1523985
        },
        {
            "journey_id": "9e2f7ef695ef20da32b8c5e3eae376d2",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708749126862,
            "actual_timestamp": 1708749234854,
            "event_type": "Arrival",
            "delay": 107992
        },
        {
            "journey_id": "9e2f7ef695ef20da32b8c5e3eae376d2",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708749275739,
            "actual_timestamp": 1708749666925,
            "event_type": "Departure",
            "delay": 391186
        },
        {
            "journey_id": "9e2f7ef695ef20da32b8c5e3eae376d2",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708749426862,
            "actual_timestamp": 1708749503158,
            "event_type": "Arrival",
            "delay": 184288
        },
        {
            "journey_id": "9e2f7ef695ef20da32b8c5e3eae376d2",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708749564959,
            "actual_timestamp": 1708749675220,
            "event_type": "Departure",
            "delay": 218253
        },
        {
            "journey_id": "9e2f7ef695ef20da32b8c5e3eae376d2",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708749726862,
            "actual_timestamp": 1708749785380,
            "event_type": "Arrival",
            "delay": 242806
        },
        {
            "journey_id": "9e2f7ef695ef20da32b8c5e3eae376d2",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708749830666,
            "actual_timestamp": 1708750086408,
            "event_type": "Departure",
            "delay": 440030
        },
        {
            "journey_id": "9e2f7ef695ef20da32b8c5e3eae376d2",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708750026862,
            "actual_timestamp": 1708750289038,
            "event_type": "Arrival",
            "delay": 504982
        },
        {
            "journey_id": "9e2f7ef695ef20da32b8c5e3eae376d2",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708750194086,
            "actual_timestamp": 1708750495519,
            "event_type": "Departure",
            "delay": 544239
        },
        {
            "journey_id": "9e2f7ef695ef20da32b8c5e3eae376d2",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708750326862,
            "actual_timestamp": 1708750526677,
            "event_type": "Arrival",
            "delay": 704797
        },
        {
            "journey_id": "9e2f7ef695ef20da32b8c5e3eae376d2",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708750448078,
            "actual_timestamp": 1708750947173,
            "event_type": "Departure",
            "delay": 1004077
        },
        {
            "journey_id": "40befbc77621d2c2e280784c29f8cad3",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708712599149,
            "actual_timestamp": 1708712734216,
            "event_type": "Arrival",
            "delay": 135067
        },
        {
            "journey_id": "40befbc77621d2c2e280784c29f8cad3",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708712718087,
            "actual_timestamp": 1708712887721,
            "event_type": "Departure",
            "delay": 169634
        },
        {
            "journey_id": "40befbc77621d2c2e280784c29f8cad3",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708712899149,
            "actual_timestamp": 1708712933526,
            "event_type": "Arrival",
            "delay": 169444
        },
        {
            "journey_id": "40befbc77621d2c2e280784c29f8cad3",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708713027932,
            "actual_timestamp": 1708713135193,
            "event_type": "Departure",
            "delay": 242328
        },
        {
            "journey_id": "40befbc77621d2c2e280784c29f8cad3",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708713199149,
            "actual_timestamp": 1708713299658,
            "event_type": "Arrival",
            "delay": 269953
        },
        {
            "journey_id": "40befbc77621d2c2e280784c29f8cad3",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708713364612,
            "actual_timestamp": 1708713519349,
            "event_type": "Departure",
            "delay": 324181
        },
        {
            "journey_id": "40befbc77621d2c2e280784c29f8cad3",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708713499149,
            "actual_timestamp": 1708713782077,
            "event_type": "Arrival",
            "delay": 552881
        },
        {
            "journey_id": "40befbc77621d2c2e280784c29f8cad3",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708713624251,
            "actual_timestamp": 1708714186252,
            "event_type": "Departure",
            "delay": 831954
        },
        {
            "journey_id": "40befbc77621d2c2e280784c29f8cad3",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708713799149,
            "actual_timestamp": 1708714050972,
            "event_type": "Arrival",
            "delay": 804704
        },
        {
            "journey_id": "40befbc77621d2c2e280784c29f8cad3",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708713962917,
            "actual_timestamp": 1708714403626,
            "event_type": "Departure",
            "delay": 993590
        },
        {
            "journey_id": "40befbc77621d2c2e280784c29f8cad3",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708714099149,
            "actual_timestamp": 1708714115407,
            "event_type": "Arrival",
            "delay": 820962
        },
        {
            "journey_id": "40befbc77621d2c2e280784c29f8cad3",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708714173205,
            "actual_timestamp": 1708714458694,
            "event_type": "Departure",
            "delay": 1090193
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708713965914,
            "actual_timestamp": 1708713998075,
            "event_type": "Arrival",
            "delay": 32161
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708714103323,
            "actual_timestamp": 1708714195226,
            "event_type": "Departure",
            "delay": 91903
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708714265914,
            "actual_timestamp": 1708714294852,
            "event_type": "Arrival",
            "delay": 61099
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708714403471,
            "actual_timestamp": 1708714705732,
            "event_type": "Departure",
            "delay": 334422
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708714565914,
            "actual_timestamp": 1708714580356,
            "event_type": "Arrival",
            "delay": 75541
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708714722759,
            "actual_timestamp": 1708714787262,
            "event_type": "Departure",
            "delay": 125602
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708714865914,
            "actual_timestamp": 1708714948695,
            "event_type": "Arrival",
            "delay": 158322
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708715022489,
            "actual_timestamp": 1708715374937,
            "event_type": "Departure",
            "delay": 427989
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708715165914,
            "actual_timestamp": 1708715226340,
            "event_type": "Arrival",
            "delay": 218748
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708715315254,
            "actual_timestamp": 1708715598536,
            "event_type": "Departure",
            "delay": 441604
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708715465914,
            "actual_timestamp": 1708715676575,
            "event_type": "Arrival",
            "delay": 429409
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708715635528,
            "actual_timestamp": 1708715925931,
            "event_type": "Departure",
            "delay": 509151
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708715765914,
            "actual_timestamp": 1708715834901,
            "event_type": "Arrival",
            "delay": 498396
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708715909409,
            "actual_timestamp": 1708716237400,
            "event_type": "Departure",
            "delay": 757400
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708716065914,
            "actual_timestamp": 1708716224136,
            "event_type": "Arrival",
            "delay": 656618
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708716212123,
            "actual_timestamp": 1708716558608,
            "event_type": "Departure",
            "delay": 844881
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708716365914,
            "actual_timestamp": 1708716523083,
            "event_type": "Arrival",
            "delay": 813787
        },
        {
            "journey_id": "da00c64897948015668b221721c4ac86",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708716517114,
            "actual_timestamp": 1708716886977,
            "event_type": "Departure",
            "delay": 1026481
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708741534741,
            "actual_timestamp": 1708741546935,
            "event_type": "Arrival",
            "delay": 12194
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708741641333,
            "actual_timestamp": 1708741792668,
            "event_type": "Departure",
            "delay": 151335
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708741834741,
            "actual_timestamp": 1708742084070,
            "event_type": "Arrival",
            "delay": 261523
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708741902370,
            "actual_timestamp": 1708742154371,
            "event_type": "Departure",
            "delay": 264195
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708742134741,
            "actual_timestamp": 1708742250800,
            "event_type": "Arrival",
            "delay": 377582
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708742301242,
            "actual_timestamp": 1708742527120,
            "event_type": "Departure",
            "delay": 487401
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708742434741,
            "actual_timestamp": 1708742724059,
            "event_type": "Arrival",
            "delay": 666900
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708742610708,
            "actual_timestamp": 1708742980659,
            "event_type": "Departure",
            "delay": 747533
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708742734741,
            "actual_timestamp": 1708742862671,
            "event_type": "Arrival",
            "delay": 794830
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708742826175,
            "actual_timestamp": 1708742985635,
            "event_type": "Departure",
            "delay": 826360
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708743034741,
            "actual_timestamp": 1708743156773,
            "event_type": "Arrival",
            "delay": 916862
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708743192726,
            "actual_timestamp": 1708743359075,
            "event_type": "Departure",
            "delay": 961179
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708743334741,
            "actual_timestamp": 1708743463148,
            "event_type": "Arrival",
            "delay": 1045269
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708743470158,
            "actual_timestamp": 1708743650298,
            "event_type": "Departure",
            "delay": 1097002
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708743634741,
            "actual_timestamp": 1708743906619,
            "event_type": "Arrival",
            "delay": 1317147
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708743710201,
            "actual_timestamp": 1708744131468,
            "event_type": "Departure",
            "delay": 1466536
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708743934741,
            "actual_timestamp": 1708744020299,
            "event_type": "Arrival",
            "delay": 1402705
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708744042422,
            "actual_timestamp": 1708744350743,
            "event_type": "Departure",
            "delay": 1625468
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708744234741,
            "actual_timestamp": 1708744364153,
            "event_type": "Arrival",
            "delay": 1532117
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708744365717,
            "actual_timestamp": 1708744760532,
            "event_type": "Departure",
            "delay": 1797520
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708744534741,
            "actual_timestamp": 1708744585034,
            "event_type": "Arrival",
            "delay": 1582410
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708744596273,
            "actual_timestamp": 1708744702175,
            "event_type": "Departure",
            "delay": 1638019
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708744834741,
            "actual_timestamp": 1708744854389,
            "event_type": "Arrival",
            "delay": 1602058
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708745005440,
            "actual_timestamp": 1708745110015,
            "event_type": "Departure",
            "delay": 1686985
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708745134741,
            "actual_timestamp": 1708745375543,
            "event_type": "Arrival",
            "delay": 1842860
        },
        {
            "journey_id": "09b89c71fa345aabec2abc6a5704321a",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708745206689,
            "actual_timestamp": 1708745716176,
            "event_type": "Departure",
            "delay": 2111545
        },
        {
            "journey_id": "a9954876fe560cf843fe4f25954ab705",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708781557340,
            "actual_timestamp": 1708781644787,
            "event_type": "Arrival",
            "delay": 87447
        },
        {
            "journey_id": "a9954876fe560cf843fe4f25954ab705",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708781650459,
            "actual_timestamp": 1708781980571,
            "event_type": "Departure",
            "delay": 330112
        },
        {
            "journey_id": "a9954876fe560cf843fe4f25954ab705",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708781857340,
            "actual_timestamp": 1708781956455,
            "event_type": "Arrival",
            "delay": 186562
        },
        {
            "journey_id": "a9954876fe560cf843fe4f25954ab705",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708781957543,
            "actual_timestamp": 1708782249521,
            "event_type": "Departure",
            "delay": 379425
        },
        {
            "journey_id": "a9954876fe560cf843fe4f25954ab705",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708782157340,
            "actual_timestamp": 1708782420280,
            "event_type": "Arrival",
            "delay": 449502
        },
        {
            "journey_id": "a9954876fe560cf843fe4f25954ab705",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708782228403,
            "actual_timestamp": 1708782722513,
            "event_type": "Departure",
            "delay": 680672
        },
        {
            "journey_id": "a9954876fe560cf843fe4f25954ab705",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708782457340,
            "actual_timestamp": 1708782559127,
            "event_type": "Arrival",
            "delay": 551289
        },
        {
            "journey_id": "a9954876fe560cf843fe4f25954ab705",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708782599591,
            "actual_timestamp": 1708782734526,
            "event_type": "Departure",
            "delay": 584437
        },
        {
            "journey_id": "a9954876fe560cf843fe4f25954ab705",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708782757340,
            "actual_timestamp": 1708782801249,
            "event_type": "Arrival",
            "delay": 595198
        },
        {
            "journey_id": "a9954876fe560cf843fe4f25954ab705",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708782866810,
            "actual_timestamp": 1708783180697,
            "event_type": "Departure",
            "delay": 865176
        },
        {
            "journey_id": "a9954876fe560cf843fe4f25954ab705",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708783057340,
            "actual_timestamp": 1708783227013,
            "event_type": "Arrival",
            "delay": 764871
        },
        {
            "journey_id": "a9954876fe560cf843fe4f25954ab705",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708783155839,
            "actual_timestamp": 1708783478598,
            "event_type": "Departure",
            "delay": 917957
        },
        {
            "journey_id": "b14c4a379c39a80ff3eca185797d6620",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708730710968,
            "actual_timestamp": 1708730983302,
            "event_type": "Arrival",
            "delay": 272334
        },
        {
            "journey_id": "b14c4a379c39a80ff3eca185797d6620",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708730877489,
            "actual_timestamp": 1708731245878,
            "event_type": "Departure",
            "delay": 368389
        },
        {
            "journey_id": "b14c4a379c39a80ff3eca185797d6620",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708731010968,
            "actual_timestamp": 1708731182964,
            "event_type": "Arrival",
            "delay": 444330
        },
        {
            "journey_id": "b14c4a379c39a80ff3eca185797d6620",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708731105104,
            "actual_timestamp": 1708731398413,
            "event_type": "Departure",
            "delay": 565643
        },
        {
            "journey_id": "b14c4a379c39a80ff3eca185797d6620",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708731310968,
            "actual_timestamp": 1708731329892,
            "event_type": "Arrival",
            "delay": 463254
        },
        {
            "journey_id": "b14c4a379c39a80ff3eca185797d6620",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708731475262,
            "actual_timestamp": 1708731566011,
            "event_type": "Departure",
            "delay": 535079
        },
        {
            "journey_id": "b14c4a379c39a80ff3eca185797d6620",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708731610968,
            "actual_timestamp": 1708731823285,
            "event_type": "Arrival",
            "delay": 675571
        },
        {
            "journey_id": "b14c4a379c39a80ff3eca185797d6620",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708731773157,
            "actual_timestamp": 1708732221484,
            "event_type": "Departure",
            "delay": 911581
        },
        {
            "journey_id": "b14c4a379c39a80ff3eca185797d6620",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708731910968,
            "actual_timestamp": 1708732020820,
            "event_type": "Arrival",
            "delay": 785423
        },
        {
            "journey_id": "b14c4a379c39a80ff3eca185797d6620",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708732032760,
            "actual_timestamp": 1708732279819,
            "event_type": "Departure",
            "delay": 922630
        },
        {
            "journey_id": "b14c4a379c39a80ff3eca185797d6620",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708732210968,
            "actual_timestamp": 1708732248843,
            "event_type": "Arrival",
            "delay": 823298
        },
        {
            "journey_id": "b14c4a379c39a80ff3eca185797d6620",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708732385218,
            "actual_timestamp": 1708732634123,
            "event_type": "Departure",
            "delay": 1034328
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708764613462,
            "actual_timestamp": 1708764626254,
            "event_type": "Arrival",
            "delay": 12792
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708764723065,
            "actual_timestamp": 1708764895288,
            "event_type": "Departure",
            "delay": 172223
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708764913462,
            "actual_timestamp": 1708765067533,
            "event_type": "Arrival",
            "delay": 166863
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708765008036,
            "actual_timestamp": 1708765410910,
            "event_type": "Departure",
            "delay": 415666
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708765213462,
            "actual_timestamp": 1708765263497,
            "event_type": "Arrival",
            "delay": 216898
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708765282050,
            "actual_timestamp": 1708765413891,
            "event_type": "Departure",
            "delay": 298704
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708765513462,
            "actual_timestamp": 1708765774361,
            "event_type": "Arrival",
            "delay": 477797
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708765589068,
            "actual_timestamp": 1708766093922,
            "event_type": "Departure",
            "delay": 721752
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708765813462,
            "actual_timestamp": 1708766101780,
            "event_type": "Arrival",
            "delay": 766115
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708765918170,
            "actual_timestamp": 1708766305962,
            "event_type": "Departure",
            "delay": 865589
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708766113462,
            "actual_timestamp": 1708766411219,
            "event_type": "Arrival",
            "delay": 1063872
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708766224496,
            "actual_timestamp": 1708766536947,
            "event_type": "Departure",
            "delay": 1078566
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708766413462,
            "actual_timestamp": 1708766557136,
            "event_type": "Arrival",
            "delay": 1207546
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708766538657,
            "actual_timestamp": 1708766959695,
            "event_type": "Departure",
            "delay": 1484910
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708766713462,
            "actual_timestamp": 1708766817178,
            "event_type": "Arrival",
            "delay": 1311262
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708766804457,
            "actual_timestamp": 1708767057750,
            "event_type": "Departure",
            "delay": 1460839
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708767013462,
            "actual_timestamp": 1708767089257,
            "event_type": "Arrival",
            "delay": 1387057
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708767137297,
            "actual_timestamp": 1708767468276,
            "event_type": "Departure",
            "delay": 1642241
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708767313462,
            "actual_timestamp": 1708767326201,
            "event_type": "Arrival",
            "delay": 1399796
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708767475463,
            "actual_timestamp": 1708767737925,
            "event_type": "Departure",
            "delay": 1649519
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708767613462,
            "actual_timestamp": 1708767799760,
            "event_type": "Arrival",
            "delay": 1586094
        },
        {
            "journey_id": "045eb2e17c6ffecc6c6b81f0cea9f124",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708767781517,
            "actual_timestamp": 1708768185766,
            "event_type": "Departure",
            "delay": 1804045
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708743917265,
            "actual_timestamp": 1708744023677,
            "event_type": "Arrival",
            "delay": 106412
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708744013449,
            "actual_timestamp": 1708744244049,
            "event_type": "Departure",
            "delay": 230600
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708744217265,
            "actual_timestamp": 1708744261459,
            "event_type": "Arrival",
            "delay": 150606
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708744396537,
            "actual_timestamp": 1708744688860,
            "event_type": "Departure",
            "delay": 398735
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708744517265,
            "actual_timestamp": 1708744705881,
            "event_type": "Arrival",
            "delay": 339222
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708744590213,
            "actual_timestamp": 1708745031077,
            "event_type": "Departure",
            "delay": 591470
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708744817265,
            "actual_timestamp": 1708744962505,
            "event_type": "Arrival",
            "delay": 484462
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708744918101,
            "actual_timestamp": 1708745297398,
            "event_type": "Departure",
            "delay": 718519
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708745117265,
            "actual_timestamp": 1708745321228,
            "event_type": "Arrival",
            "delay": 688425
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708745245882,
            "actual_timestamp": 1708745529803,
            "event_type": "Departure",
            "delay": 768383
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708745417265,
            "actual_timestamp": 1708745681955,
            "event_type": "Arrival",
            "delay": 953115
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708745524055,
            "actual_timestamp": 1708745976736,
            "event_type": "Departure",
            "delay": 1141106
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708745717265,
            "actual_timestamp": 1708745980443,
            "event_type": "Arrival",
            "delay": 1216293
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708745891828,
            "actual_timestamp": 1708746313437,
            "event_type": "Departure",
            "delay": 1374724
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708746017265,
            "actual_timestamp": 1708746183728,
            "event_type": "Arrival",
            "delay": 1382756
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708746109020,
            "actual_timestamp": 1708746455755,
            "event_type": "Departure",
            "delay": 1563028
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708746317265,
            "actual_timestamp": 1708746465296,
            "event_type": "Arrival",
            "delay": 1530787
        },
        {
            "journey_id": "316b2b1e2889ad73e98f01f7005c58fb",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708746424692,
            "actual_timestamp": 1708746738250,
            "event_type": "Departure",
            "delay": 1696314
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708746726669,
            "actual_timestamp": 1708746955885,
            "event_type": "Arrival",
            "delay": 229216
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708746840365,
            "actual_timestamp": 1708747129386,
            "event_type": "Departure",
            "delay": 289021
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708747026669,
            "actual_timestamp": 1708747047081,
            "event_type": "Arrival",
            "delay": 249628
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708747201042,
            "actual_timestamp": 1708747269781,
            "event_type": "Departure",
            "delay": 297955
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708747326669,
            "actual_timestamp": 1708747339608,
            "event_type": "Arrival",
            "delay": 262567
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708747475171,
            "actual_timestamp": 1708747553790,
            "event_type": "Departure",
            "delay": 328247
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708747626669,
            "actual_timestamp": 1708747651641,
            "event_type": "Arrival",
            "delay": 287539
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708747719773,
            "actual_timestamp": 1708747760172,
            "event_type": "Departure",
            "delay": 302966
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708747926669,
            "actual_timestamp": 1708747948139,
            "event_type": "Arrival",
            "delay": 309009
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708747994241,
            "actual_timestamp": 1708748149022,
            "event_type": "Departure",
            "delay": 442320
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708748226669,
            "actual_timestamp": 1708748468441,
            "event_type": "Arrival",
            "delay": 550781
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708748390403,
            "actual_timestamp": 1708748796048,
            "event_type": "Departure",
            "delay": 714654
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708748526669,
            "actual_timestamp": 1708748773524,
            "event_type": "Arrival",
            "delay": 797636
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708748705487,
            "actual_timestamp": 1708749013977,
            "event_type": "Departure",
            "delay": 859271
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708748826669,
            "actual_timestamp": 1708748861241,
            "event_type": "Arrival",
            "delay": 832208
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708748925333,
            "actual_timestamp": 1708749073140,
            "event_type": "Departure",
            "delay": 945443
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708749126669,
            "actual_timestamp": 1708749340930,
            "event_type": "Arrival",
            "delay": 1046469
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708749194522,
            "actual_timestamp": 1708749568293,
            "event_type": "Departure",
            "delay": 1205979
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708749426669,
            "actual_timestamp": 1708749629759,
            "event_type": "Arrival",
            "delay": 1249559
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708749537473,
            "actual_timestamp": 1708750023566,
            "event_type": "Departure",
            "delay": 1532562
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708749726669,
            "actual_timestamp": 1708749877625,
            "event_type": "Arrival",
            "delay": 1400515
        },
        {
            "journey_id": "c6e472b54c16074098bf7683ef4fd63d",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708749844965,
            "actual_timestamp": 1708750027317,
            "event_type": "Departure",
            "delay": 1431911
        },
        {
            "journey_id": "120c778835cab52708ee1182aa225e59",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708706187325,
            "actual_timestamp": 1708706451942,
            "event_type": "Arrival",
            "delay": 264617
        },
        {
            "journey_id": "120c778835cab52708ee1182aa225e59",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708706286483,
            "actual_timestamp": 1708706815304,
            "event_type": "Departure",
            "delay": 528821
        },
        {
            "journey_id": "120c778835cab52708ee1182aa225e59",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708706487325,
            "actual_timestamp": 1708706521505,
            "event_type": "Arrival",
            "delay": 298797
        },
        {
            "journey_id": "120c778835cab52708ee1182aa225e59",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708706552818,
            "actual_timestamp": 1708706871508,
            "event_type": "Departure",
            "delay": 583307
        },
        {
            "journey_id": "120c778835cab52708ee1182aa225e59",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708706787325,
            "actual_timestamp": 1708707075893,
            "event_type": "Arrival",
            "delay": 587365
        },
        {
            "journey_id": "120c778835cab52708ee1182aa225e59",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708706855795,
            "actual_timestamp": 1708707343345,
            "event_type": "Departure",
            "delay": 786347
        },
        {
            "journey_id": "120c778835cab52708ee1182aa225e59",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708707087325,
            "actual_timestamp": 1708707281991,
            "event_type": "Arrival",
            "delay": 782031
        },
        {
            "journey_id": "120c778835cab52708ee1182aa225e59",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708707266983,
            "actual_timestamp": 1708707637302,
            "event_type": "Departure",
            "delay": 957684
        },
        {
            "journey_id": "120c778835cab52708ee1182aa225e59",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708707387325,
            "actual_timestamp": 1708707460292,
            "event_type": "Arrival",
            "delay": 854998
        },
        {
            "journey_id": "120c778835cab52708ee1182aa225e59",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708707538103,
            "actual_timestamp": 1708707646067,
            "event_type": "Departure",
            "delay": 889995
        },
        {
            "journey_id": "120c778835cab52708ee1182aa225e59",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708707687325,
            "actual_timestamp": 1708707908028,
            "event_type": "Arrival",
            "delay": 1075701
        },
        {
            "journey_id": "120c778835cab52708ee1182aa225e59",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708707819463,
            "actual_timestamp": 1708708102973,
            "event_type": "Departure",
            "delay": 1138508
        },
        {
            "journey_id": "120c778835cab52708ee1182aa225e59",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708707987325,
            "actual_timestamp": 1708708241103,
            "event_type": "Arrival",
            "delay": 1329479
        },
        {
            "journey_id": "120c778835cab52708ee1182aa225e59",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708708167317,
            "actual_timestamp": 1708708549125,
            "event_type": "Departure",
            "delay": 1457509
        },
        {
            "journey_id": "120c778835cab52708ee1182aa225e59",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708708287325,
            "actual_timestamp": 1708708295959,
            "event_type": "Arrival",
            "delay": 1338113
        },
        {
            "journey_id": "120c778835cab52708ee1182aa225e59",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708708397403,
            "actual_timestamp": 1708708563530,
            "event_type": "Departure",
            "delay": 1495606
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708782429217,
            "actual_timestamp": 1708782627708,
            "event_type": "Arrival",
            "delay": 198491
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708782520274,
            "actual_timestamp": 1708782869372,
            "event_type": "Departure",
            "delay": 349098
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708782729217,
            "actual_timestamp": 1708782910341,
            "event_type": "Arrival",
            "delay": 379615
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708782901255,
            "actual_timestamp": 1708783333665,
            "event_type": "Departure",
            "delay": 630901
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708783029217,
            "actual_timestamp": 1708783248059,
            "event_type": "Arrival",
            "delay": 598457
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708783194146,
            "actual_timestamp": 1708783464881,
            "event_type": "Departure",
            "delay": 650350
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708783329217,
            "actual_timestamp": 1708783552729,
            "event_type": "Arrival",
            "delay": 821969
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708783472181,
            "actual_timestamp": 1708783917557,
            "event_type": "Departure",
            "delay": 1043833
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708783629217,
            "actual_timestamp": 1708783641674,
            "event_type": "Arrival",
            "delay": 834426
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708783742178,
            "actual_timestamp": 1708783870185,
            "event_type": "Departure",
            "delay": 949976
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708783929217,
            "actual_timestamp": 1708783996221,
            "event_type": "Arrival",
            "delay": 901430
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708784015504,
            "actual_timestamp": 1708784369785,
            "event_type": "Departure",
            "delay": 1188707
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708784229217,
            "actual_timestamp": 1708784352194,
            "event_type": "Arrival",
            "delay": 1024407
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708784360216,
            "actual_timestamp": 1708784551640,
            "event_type": "Departure",
            "delay": 1092854
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708784529217,
            "actual_timestamp": 1708784725837,
            "event_type": "Arrival",
            "delay": 1221027
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708784630447,
            "actual_timestamp": 1708784865338,
            "event_type": "Departure",
            "delay": 1259298
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708784829217,
            "actual_timestamp": 1708784835619,
            "event_type": "Arrival",
            "delay": 1227429
        },
        {
            "journey_id": "36072b334a4b5adeec6f0ca87181bf05",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708784948096,
            "actual_timestamp": 1708785242345,
            "event_type": "Departure",
            "delay": 1515276
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708762373897,
            "actual_timestamp": 1708762465528,
            "event_type": "Arrival",
            "delay": 91631
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708762488976,
            "actual_timestamp": 1708762835202,
            "event_type": "Departure",
            "delay": 346226
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708762673897,
            "actual_timestamp": 1708762864178,
            "event_type": "Arrival",
            "delay": 281912
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708762739754,
            "actual_timestamp": 1708762959183,
            "event_type": "Departure",
            "delay": 311060
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708762973897,
            "actual_timestamp": 1708763268814,
            "event_type": "Arrival",
            "delay": 576829
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708763098185,
            "actual_timestamp": 1708763557747,
            "event_type": "Departure",
            "delay": 741474
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708763273897,
            "actual_timestamp": 1708763354149,
            "event_type": "Arrival",
            "delay": 657081
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708763387527,
            "actual_timestamp": 1708763696771,
            "event_type": "Departure",
            "delay": 886073
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708763573897,
            "actual_timestamp": 1708763773756,
            "event_type": "Arrival",
            "delay": 856940
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708763663632,
            "actual_timestamp": 1708763877004,
            "event_type": "Departure",
            "delay": 870453
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708763873897,
            "actual_timestamp": 1708764083797,
            "event_type": "Arrival",
            "delay": 1066840
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708763995602,
            "actual_timestamp": 1708764417981,
            "event_type": "Departure",
            "delay": 1279319
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708764173897,
            "actual_timestamp": 1708764274117,
            "event_type": "Arrival",
            "delay": 1167060
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708764237032,
            "actual_timestamp": 1708764388522,
            "event_type": "Departure",
            "delay": 1218330
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708764473897,
            "actual_timestamp": 1708764561213,
            "event_type": "Arrival",
            "delay": 1254376
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708764648021,
            "actual_timestamp": 1708764796215,
            "event_type": "Departure",
            "delay": 1315254
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708764773897,
            "actual_timestamp": 1708764875635,
            "event_type": "Arrival",
            "delay": 1356114
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708764879163,
            "actual_timestamp": 1708765081648,
            "event_type": "Departure",
            "delay": 1456861
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708765073897,
            "actual_timestamp": 1708765269041,
            "event_type": "Arrival",
            "delay": 1551258
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708765233540,
            "actual_timestamp": 1708765527683,
            "event_type": "Departure",
            "delay": 1650257
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708765373897,
            "actual_timestamp": 1708765550317,
            "event_type": "Arrival",
            "delay": 1727678
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708765484573,
            "actual_timestamp": 1708765937620,
            "event_type": "Departure",
            "delay": 2004305
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708765673897,
            "actual_timestamp": 1708765762030,
            "event_type": "Arrival",
            "delay": 1815811
        },
        {
            "journey_id": "66b0fd31313ac76ddc157e1bd6e9a18f",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708765738926,
            "actual_timestamp": 1708765992088,
            "event_type": "Departure",
            "delay": 1980840
        },
        {
            "journey_id": "357b33c4f15258d87d85b81952bb0bdd",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708781272092,
            "actual_timestamp": 1708781275877,
            "event_type": "Arrival",
            "delay": 3785
        },
        {
            "journey_id": "357b33c4f15258d87d85b81952bb0bdd",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708781360457,
            "actual_timestamp": 1708781487965,
            "event_type": "Departure",
            "delay": 127508
        },
        {
            "journey_id": "357b33c4f15258d87d85b81952bb0bdd",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708781572092,
            "actual_timestamp": 1708781782289,
            "event_type": "Arrival",
            "delay": 213982
        },
        {
            "journey_id": "357b33c4f15258d87d85b81952bb0bdd",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708781640010,
            "actual_timestamp": 1708781998523,
            "event_type": "Departure",
            "delay": 362298
        },
        {
            "journey_id": "357b33c4f15258d87d85b81952bb0bdd",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708781872092,
            "actual_timestamp": 1708782019708,
            "event_type": "Arrival",
            "delay": 361598
        },
        {
            "journey_id": "357b33c4f15258d87d85b81952bb0bdd",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708781966891,
            "actual_timestamp": 1708782294598,
            "event_type": "Departure",
            "delay": 541689
        },
        {
            "journey_id": "357b33c4f15258d87d85b81952bb0bdd",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708782172092,
            "actual_timestamp": 1708782281837,
            "event_type": "Arrival",
            "delay": 471343
        },
        {
            "journey_id": "357b33c4f15258d87d85b81952bb0bdd",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708782297147,
            "actual_timestamp": 1708782543575,
            "event_type": "Departure",
            "delay": 608026
        },
        {
            "journey_id": "357b33c4f15258d87d85b81952bb0bdd",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708782472092,
            "actual_timestamp": 1708782551030,
            "event_type": "Arrival",
            "delay": 550281
        },
        {
            "journey_id": "357b33c4f15258d87d85b81952bb0bdd",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708782612782,
            "actual_timestamp": 1708782815912,
            "event_type": "Departure",
            "delay": 674473
        },
        {
            "journey_id": "357b33c4f15258d87d85b81952bb0bdd",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708782772092,
            "actual_timestamp": 1708783004704,
            "event_type": "Arrival",
            "delay": 782893
        },
        {
            "journey_id": "357b33c4f15258d87d85b81952bb0bdd",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708782877234,
            "actual_timestamp": 1708783336990,
            "event_type": "Departure",
            "delay": 1010037
        },
        {
            "journey_id": "357b33c4f15258d87d85b81952bb0bdd",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708783072092,
            "actual_timestamp": 1708783236671,
            "event_type": "Arrival",
            "delay": 947472
        },
        {
            "journey_id": "357b33c4f15258d87d85b81952bb0bdd",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708783139888,
            "actual_timestamp": 1708783391770,
            "event_type": "Departure",
            "delay": 1034775
        },
        {
            "journey_id": "24c3e4b9b2455eba7a5212afbfc498db",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708718957179,
            "actual_timestamp": 1708718965407,
            "event_type": "Arrival",
            "delay": 8228
        },
        {
            "journey_id": "24c3e4b9b2455eba7a5212afbfc498db",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708719088043,
            "actual_timestamp": 1708719123121,
            "event_type": "Departure",
            "delay": 35078
        },
        {
            "journey_id": "24c3e4b9b2455eba7a5212afbfc498db",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708719257179,
            "actual_timestamp": 1708719278195,
            "event_type": "Arrival",
            "delay": 29244
        },
        {
            "journey_id": "24c3e4b9b2455eba7a5212afbfc498db",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708719346933,
            "actual_timestamp": 1708719563818,
            "event_type": "Departure",
            "delay": 225113
        },
        {
            "journey_id": "24c3e4b9b2455eba7a5212afbfc498db",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708719557179,
            "actual_timestamp": 1708719604966,
            "event_type": "Arrival",
            "delay": 77031
        },
        {
            "journey_id": "24c3e4b9b2455eba7a5212afbfc498db",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708719729821,
            "actual_timestamp": 1708719810456,
            "event_type": "Departure",
            "delay": 109879
        },
        {
            "journey_id": "24c3e4b9b2455eba7a5212afbfc498db",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708719857179,
            "actual_timestamp": 1708720093893,
            "event_type": "Arrival",
            "delay": 313745
        },
        {
            "journey_id": "24c3e4b9b2455eba7a5212afbfc498db",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708719941008,
            "actual_timestamp": 1708720324752,
            "event_type": "Departure",
            "delay": 460775
        },
        {
            "journey_id": "24c3e4b9b2455eba7a5212afbfc498db",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708720157179,
            "actual_timestamp": 1708720255249,
            "event_type": "Arrival",
            "delay": 411815
        },
        {
            "journey_id": "24c3e4b9b2455eba7a5212afbfc498db",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708720256712,
            "actual_timestamp": 1708720372578,
            "event_type": "Departure",
            "delay": 429611
        },
        {
            "journey_id": "24c3e4b9b2455eba7a5212afbfc498db",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708720457179,
            "actual_timestamp": 1708720660435,
            "event_type": "Arrival",
            "delay": 615071
        },
        {
            "journey_id": "24c3e4b9b2455eba7a5212afbfc498db",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708720532038,
            "actual_timestamp": 1708720968409,
            "event_type": "Departure",
            "delay": 848186
        },
        {
            "journey_id": "c72f379dddd3e076c57ec299d12935e7",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708778516914,
            "actual_timestamp": 1708778575216,
            "event_type": "Arrival",
            "delay": 58302
        },
        {
            "journey_id": "c72f379dddd3e076c57ec299d12935e7",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708778637601,
            "actual_timestamp": 1708778805046,
            "event_type": "Departure",
            "delay": 167445
        },
        {
            "journey_id": "c72f379dddd3e076c57ec299d12935e7",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708778816914,
            "actual_timestamp": 1708778962670,
            "event_type": "Arrival",
            "delay": 204058
        },
        {
            "journey_id": "c72f379dddd3e076c57ec299d12935e7",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708778987822,
            "actual_timestamp": 1708779312495,
            "event_type": "Departure",
            "delay": 382975
        },
        {
            "journey_id": "c72f379dddd3e076c57ec299d12935e7",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708779116914,
            "actual_timestamp": 1708779402836,
            "event_type": "Arrival",
            "delay": 489980
        },
        {
            "journey_id": "c72f379dddd3e076c57ec299d12935e7",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708779204360,
            "actual_timestamp": 1708779730631,
            "event_type": "Departure",
            "delay": 730329
        },
        {
            "journey_id": "c72f379dddd3e076c57ec299d12935e7",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708779416914,
            "actual_timestamp": 1708779637248,
            "event_type": "Arrival",
            "delay": 710314
        },
        {
            "journey_id": "c72f379dddd3e076c57ec299d12935e7",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708779534641,
            "actual_timestamp": 1708779965175,
            "event_type": "Departure",
            "delay": 920514
        },
        {
            "journey_id": "c72f379dddd3e076c57ec299d12935e7",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708779716914,
            "actual_timestamp": 1708779898680,
            "event_type": "Arrival",
            "delay": 892080
        },
        {
            "journey_id": "c72f379dddd3e076c57ec299d12935e7",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708779883887,
            "actual_timestamp": 1708780082713,
            "event_type": "Departure",
            "delay": 909140
        },
        {
            "journey_id": "c72f379dddd3e076c57ec299d12935e7",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708780016914,
            "actual_timestamp": 1708780019594,
            "event_type": "Arrival",
            "delay": 894760
        },
        {
            "journey_id": "c72f379dddd3e076c57ec299d12935e7",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708780166513,
            "actual_timestamp": 1708780330994,
            "event_type": "Departure",
            "delay": 1056561
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708733652304,
            "actual_timestamp": 1708733848645,
            "event_type": "Arrival",
            "delay": 196341
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708733769263,
            "actual_timestamp": 1708734260958,
            "event_type": "Departure",
            "delay": 491695
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708733952304,
            "actual_timestamp": 1708733970740,
            "event_type": "Arrival",
            "delay": 214777
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708734082058,
            "actual_timestamp": 1708734277343,
            "event_type": "Departure",
            "delay": 391626
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708734252304,
            "actual_timestamp": 1708734264222,
            "event_type": "Arrival",
            "delay": 226695
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708734427611,
            "actual_timestamp": 1708734624559,
            "event_type": "Departure",
            "delay": 411725
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708734552304,
            "actual_timestamp": 1708734816043,
            "event_type": "Arrival",
            "delay": 490434
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708734665027,
            "actual_timestamp": 1708735051106,
            "event_type": "Departure",
            "delay": 612774
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708734852304,
            "actual_timestamp": 1708734923489,
            "event_type": "Arrival",
            "delay": 561619
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708734935612,
            "actual_timestamp": 1708735106755,
            "event_type": "Departure",
            "delay": 661577
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708735152304,
            "actual_timestamp": 1708735361290,
            "event_type": "Arrival",
            "delay": 770605
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708735255233,
            "actual_timestamp": 1708735617143,
            "event_type": "Departure",
            "delay": 923529
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708735452304,
            "actual_timestamp": 1708735655158,
            "event_type": "Arrival",
            "delay": 973459
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708735616682,
            "actual_timestamp": 1708735883388,
            "event_type": "Departure",
            "delay": 1037311
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708735752304,
            "actual_timestamp": 1708735768877,
            "event_type": "Arrival",
            "delay": 990032
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708735859571,
            "actual_timestamp": 1708735894119,
            "event_type": "Departure",
            "delay": 1008007
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708736052304,
            "actual_timestamp": 1708736268394,
            "event_type": "Arrival",
            "delay": 1206122
        },
        {
            "journey_id": "b07a8c74600e8a3f6d343ea5d2ebea22",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708736184689,
            "actual_timestamp": 1708736629941,
            "event_type": "Departure",
            "delay": 1435284
        },
        {
            "journey_id": "fe4d95e34d383af4ab6da070e33e65da",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708753255285,
            "actual_timestamp": 1708753363713,
            "event_type": "Arrival",
            "delay": 108428
        },
        {
            "journey_id": "fe4d95e34d383af4ab6da070e33e65da",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708753414996,
            "actual_timestamp": 1708753553587,
            "event_type": "Departure",
            "delay": 138591
        },
        {
            "journey_id": "fe4d95e34d383af4ab6da070e33e65da",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708753555285,
            "actual_timestamp": 1708753694822,
            "event_type": "Arrival",
            "delay": 247965
        },
        {
            "journey_id": "fe4d95e34d383af4ab6da070e33e65da",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708753617704,
            "actual_timestamp": 1708753997685,
            "event_type": "Departure",
            "delay": 488409
        },
        {
            "journey_id": "fe4d95e34d383af4ab6da070e33e65da",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708753855285,
            "actual_timestamp": 1708753919793,
            "event_type": "Arrival",
            "delay": 312473
        },
        {
            "journey_id": "fe4d95e34d383af4ab6da070e33e65da",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708753957305,
            "actual_timestamp": 1708754165388,
            "event_type": "Departure",
            "delay": 456048
        },
        {
            "journey_id": "fe4d95e34d383af4ab6da070e33e65da",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708754155285,
            "actual_timestamp": 1708754361709,
            "event_type": "Arrival",
            "delay": 518897
        },
        {
            "journey_id": "fe4d95e34d383af4ab6da070e33e65da",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708754252452,
            "actual_timestamp": 1708754698554,
            "event_type": "Departure",
            "delay": 758575
        },
        {
            "journey_id": "fe4d95e34d383af4ab6da070e33e65da",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708754455285,
            "actual_timestamp": 1708754537326,
            "event_type": "Arrival",
            "delay": 600938
        },
        {
            "journey_id": "fe4d95e34d383af4ab6da070e33e65da",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708754539748,
            "actual_timestamp": 1708754913959,
            "event_type": "Departure",
            "delay": 893108
        },
        {
            "journey_id": "fe4d95e34d383af4ab6da070e33e65da",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708754755285,
            "actual_timestamp": 1708754898561,
            "event_type": "Arrival",
            "delay": 744214
        },
        {
            "journey_id": "fe4d95e34d383af4ab6da070e33e65da",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708754925283,
            "actual_timestamp": 1708755191342,
            "event_type": "Departure",
            "delay": 866997
        },
        {
            "journey_id": "fe4d95e34d383af4ab6da070e33e65da",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708755055285,
            "actual_timestamp": 1708755277932,
            "event_type": "Arrival",
            "delay": 966861
        },
        {
            "journey_id": "fe4d95e34d383af4ab6da070e33e65da",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708755193696,
            "actual_timestamp": 1708755478663,
            "event_type": "Departure",
            "delay": 1029181
        },
        {
            "journey_id": "fe4d95e34d383af4ab6da070e33e65da",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708755355285,
            "actual_timestamp": 1708755568849,
            "event_type": "Arrival",
            "delay": 1180425
        },
        {
            "journey_id": "fe4d95e34d383af4ab6da070e33e65da",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708755512335,
            "actual_timestamp": 1708755979858,
            "event_type": "Departure",
            "delay": 1434384
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708765760498,
            "actual_timestamp": 1708766050527,
            "event_type": "Arrival",
            "delay": 290029
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708765905208,
            "actual_timestamp": 1708766372300,
            "event_type": "Departure",
            "delay": 467092
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708766060498,
            "actual_timestamp": 1708766356616,
            "event_type": "Arrival",
            "delay": 586147
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708766207221,
            "actual_timestamp": 1708766771372,
            "event_type": "Departure",
            "delay": 854180
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708766360498,
            "actual_timestamp": 1708766474137,
            "event_type": "Arrival",
            "delay": 699786
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708766496097,
            "actual_timestamp": 1708766846249,
            "event_type": "Departure",
            "delay": 936299
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708766660498,
            "actual_timestamp": 1708766751212,
            "event_type": "Arrival",
            "delay": 790500
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708766731900,
            "actual_timestamp": 1708767112840,
            "event_type": "Departure",
            "delay": 1080726
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708766960498,
            "actual_timestamp": 1708767039822,
            "event_type": "Arrival",
            "delay": 869824
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708767095571,
            "actual_timestamp": 1708767225192,
            "event_type": "Departure",
            "delay": 920121
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708767260498,
            "actual_timestamp": 1708767410160,
            "event_type": "Arrival",
            "delay": 1019486
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708767338077,
            "actual_timestamp": 1708767757385,
            "event_type": "Departure",
            "delay": 1289132
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708767560498,
            "actual_timestamp": 1708767578601,
            "event_type": "Arrival",
            "delay": 1037589
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708767712198,
            "actual_timestamp": 1708767911852,
            "event_type": "Departure",
            "delay": 1219140
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708767860498,
            "actual_timestamp": 1708767904283,
            "event_type": "Arrival",
            "delay": 1081374
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708767953776,
            "actual_timestamp": 1708768248115,
            "event_type": "Departure",
            "delay": 1331928
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708768160498,
            "actual_timestamp": 1708768335933,
            "event_type": "Arrival",
            "delay": 1256809
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708768272559,
            "actual_timestamp": 1708768660257,
            "event_type": "Departure",
            "delay": 1469072
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708768460498,
            "actual_timestamp": 1708768722165,
            "event_type": "Arrival",
            "delay": 1518476
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708768522400,
            "actual_timestamp": 1708769026609,
            "event_type": "Departure",
            "delay": 1761018
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708768760498,
            "actual_timestamp": 1708768857911,
            "event_type": "Arrival",
            "delay": 1615889
        },
        {
            "journey_id": "0fcd11b361510c6336ee5315de1be71c",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708768879941,
            "actual_timestamp": 1708769218278,
            "event_type": "Departure",
            "delay": 1856813
        },
        {
            "journey_id": "6d9eaef1c586eb4ba309a0bd285c2f73",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708755149658,
            "actual_timestamp": 1708755332391,
            "event_type": "Arrival",
            "delay": 182733
        },
        {
            "journey_id": "6d9eaef1c586eb4ba309a0bd285c2f73",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708755272550,
            "actual_timestamp": 1708755610373,
            "event_type": "Departure",
            "delay": 337823
        },
        {
            "journey_id": "6d9eaef1c586eb4ba309a0bd285c2f73",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708755449658,
            "actual_timestamp": 1708755576002,
            "event_type": "Arrival",
            "delay": 309077
        },
        {
            "journey_id": "6d9eaef1c586eb4ba309a0bd285c2f73",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708755604690,
            "actual_timestamp": 1708755847892,
            "event_type": "Departure",
            "delay": 425935
        },
        {
            "journey_id": "6d9eaef1c586eb4ba309a0bd285c2f73",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708755749658,
            "actual_timestamp": 1708755958418,
            "event_type": "Arrival",
            "delay": 517837
        },
        {
            "journey_id": "6d9eaef1c586eb4ba309a0bd285c2f73",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708755817948,
            "actual_timestamp": 1708756057018,
            "event_type": "Departure",
            "delay": 548147
        },
        {
            "journey_id": "6d9eaef1c586eb4ba309a0bd285c2f73",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708756049658,
            "actual_timestamp": 1708756239570,
            "event_type": "Arrival",
            "delay": 707749
        },
        {
            "journey_id": "6d9eaef1c586eb4ba309a0bd285c2f73",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708756114000,
            "actual_timestamp": 1708756438277,
            "event_type": "Departure",
            "delay": 842114
        },
        {
            "journey_id": "6d9eaef1c586eb4ba309a0bd285c2f73",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708756349658,
            "actual_timestamp": 1708756593970,
            "event_type": "Arrival",
            "delay": 952061
        },
        {
            "journey_id": "6d9eaef1c586eb4ba309a0bd285c2f73",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708756443962,
            "actual_timestamp": 1708756840515,
            "event_type": "Departure",
            "delay": 1104302
        },
        {
            "journey_id": "6d9eaef1c586eb4ba309a0bd285c2f73",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708756649658,
            "actual_timestamp": 1708756872181,
            "event_type": "Arrival",
            "delay": 1174584
        },
        {
            "journey_id": "6d9eaef1c586eb4ba309a0bd285c2f73",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708756770708,
            "actual_timestamp": 1708757011722,
            "event_type": "Departure",
            "delay": 1193075
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708713223093,
            "actual_timestamp": 1708713233982,
            "event_type": "Arrival",
            "delay": 10889
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708713395649,
            "actual_timestamp": 1708713416232,
            "event_type": "Departure",
            "delay": 20583
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708713523093,
            "actual_timestamp": 1708713540893,
            "event_type": "Arrival",
            "delay": 28689
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708713686023,
            "actual_timestamp": 1708713859319,
            "event_type": "Departure",
            "delay": 184185
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708713823093,
            "actual_timestamp": 1708713832231,
            "event_type": "Arrival",
            "delay": 37827
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708713886022,
            "actual_timestamp": 1708714075108,
            "event_type": "Departure",
            "delay": 217775
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708714123093,
            "actual_timestamp": 1708714410712,
            "event_type": "Arrival",
            "delay": 325446
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708714247870,
            "actual_timestamp": 1708714588317,
            "event_type": "Departure",
            "delay": 378274
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708714423093,
            "actual_timestamp": 1708714511370,
            "event_type": "Arrival",
            "delay": 413723
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708714521916,
            "actual_timestamp": 1708714624221,
            "event_type": "Departure",
            "delay": 427751
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708714723093,
            "actual_timestamp": 1708714940210,
            "event_type": "Arrival",
            "delay": 630840
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708714812435,
            "actual_timestamp": 1708715258602,
            "event_type": "Departure",
            "delay": 859890
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708715023093,
            "actual_timestamp": 1708715095229,
            "event_type": "Arrival",
            "delay": 702976
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708715108828,
            "actual_timestamp": 1708715458328,
            "event_type": "Departure",
            "delay": 980340
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708715323093,
            "actual_timestamp": 1708715390688,
            "event_type": "Arrival",
            "delay": 770571
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708715457236,
            "actual_timestamp": 1708715801551,
            "event_type": "Departure",
            "delay": 1047291
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708715623093,
            "actual_timestamp": 1708715734624,
            "event_type": "Arrival",
            "delay": 882102
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708715697722,
            "actual_timestamp": 1708715883980,
            "event_type": "Departure",
            "delay": 956829
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708715923093,
            "actual_timestamp": 1708716111421,
            "event_type": "Arrival",
            "delay": 1070430
        },
        {
            "journey_id": "57d02546cea503dd8643b5b5cc203f03",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708716068998,
            "actual_timestamp": 1708716366595,
            "event_type": "Departure",
            "delay": 1179699
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708733689282,
            "actual_timestamp": 1708733718041,
            "event_type": "Arrival",
            "delay": 28759
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708733862194,
            "actual_timestamp": 1708734060741,
            "event_type": "Departure",
            "delay": 198547
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708733989282,
            "actual_timestamp": 1708734204800,
            "event_type": "Arrival",
            "delay": 244277
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708734161856,
            "actual_timestamp": 1708734645117,
            "event_type": "Departure",
            "delay": 512020
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708734289282,
            "actual_timestamp": 1708734296337,
            "event_type": "Arrival",
            "delay": 251332
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708734448942,
            "actual_timestamp": 1708734631501,
            "event_type": "Departure",
            "delay": 426836
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708734589282,
            "actual_timestamp": 1708734860334,
            "event_type": "Arrival",
            "delay": 522384
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708734674596,
            "actual_timestamp": 1708734955740,
            "event_type": "Departure",
            "delay": 532476
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708734889282,
            "actual_timestamp": 1708735075329,
            "event_type": "Arrival",
            "delay": 708431
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708735028759,
            "actual_timestamp": 1708735435572,
            "event_type": "Departure",
            "delay": 929197
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708735189282,
            "actual_timestamp": 1708735449998,
            "event_type": "Arrival",
            "delay": 969147
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708735321694,
            "actual_timestamp": 1708735710759,
            "event_type": "Departure",
            "delay": 1097496
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708735489282,
            "actual_timestamp": 1708735702706,
            "event_type": "Arrival",
            "delay": 1182571
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708735557277,
            "actual_timestamp": 1708736069865,
            "event_type": "Departure",
            "delay": 1481735
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708735789282,
            "actual_timestamp": 1708735999974,
            "event_type": "Arrival",
            "delay": 1393263
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708735907583,
            "actual_timestamp": 1708736222352,
            "event_type": "Departure",
            "delay": 1497340
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708736089282,
            "actual_timestamp": 1708736229681,
            "event_type": "Arrival",
            "delay": 1533662
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708736235923,
            "actual_timestamp": 1708736381142,
            "event_type": "Departure",
            "delay": 1538482
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708736389282,
            "actual_timestamp": 1708736533970,
            "event_type": "Arrival",
            "delay": 1678350
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708736513578,
            "actual_timestamp": 1708736814933,
            "event_type": "Departure",
            "delay": 1835017
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708736689282,
            "actual_timestamp": 1708736860456,
            "event_type": "Arrival",
            "delay": 1849524
        },
        {
            "journey_id": "3c259f004ac25eeb77025694eee25d70",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708736860576,
            "actual_timestamp": 1708737255938,
            "event_type": "Departure",
            "delay": 2073712
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708788002560,
            "actual_timestamp": 1708788076904,
            "event_type": "Arrival",
            "delay": 74344
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708788114699,
            "actual_timestamp": 1708788313140,
            "event_type": "Departure",
            "delay": 198441
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708788302560,
            "actual_timestamp": 1708788473048,
            "event_type": "Arrival",
            "delay": 244832
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708788479280,
            "actual_timestamp": 1708788921003,
            "event_type": "Departure",
            "delay": 516067
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708788602560,
            "actual_timestamp": 1708788857357,
            "event_type": "Arrival",
            "delay": 499629
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708788689480,
            "actual_timestamp": 1708789222170,
            "event_type": "Departure",
            "delay": 777522
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708788902560,
            "actual_timestamp": 1708789084110,
            "event_type": "Arrival",
            "delay": 681179
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708788976456,
            "actual_timestamp": 1708789362947,
            "event_type": "Departure",
            "delay": 886120
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708789202560,
            "actual_timestamp": 1708789314774,
            "event_type": "Arrival",
            "delay": 793393
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708789358105,
            "actual_timestamp": 1708789761136,
            "event_type": "Departure",
            "delay": 1084210
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708789502560,
            "actual_timestamp": 1708789549124,
            "event_type": "Arrival",
            "delay": 839957
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708789673381,
            "actual_timestamp": 1708789772805,
            "event_type": "Departure",
            "delay": 892817
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708789802560,
            "actual_timestamp": 1708789972248,
            "event_type": "Arrival",
            "delay": 1009645
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708789924032,
            "actual_timestamp": 1708790099791,
            "event_type": "Departure",
            "delay": 1015716
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708790102560,
            "actual_timestamp": 1708790132387,
            "event_type": "Arrival",
            "delay": 1039472
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708790203290,
            "actual_timestamp": 1708790292484,
            "event_type": "Departure",
            "delay": 1098839
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708790402560,
            "actual_timestamp": 1708790426563,
            "event_type": "Arrival",
            "delay": 1063475
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708790575045,
            "actual_timestamp": 1708790840460,
            "event_type": "Departure",
            "delay": 1304887
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708790702560,
            "actual_timestamp": 1708790875285,
            "event_type": "Arrival",
            "delay": 1236200
        },
        {
            "journey_id": "5cdc1bac7664495724ec0da01756c7b5",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708790831584,
            "actual_timestamp": 1708791043877,
            "event_type": "Departure",
            "delay": 1275768
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708715975003,
            "actual_timestamp": 1708716017606,
            "event_type": "Arrival",
            "delay": 42603
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708716097053,
            "actual_timestamp": 1708716267208,
            "event_type": "Departure",
            "delay": 170155
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708716275003,
            "actual_timestamp": 1708716418447,
            "event_type": "Arrival",
            "delay": 186047
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708716384178,
            "actual_timestamp": 1708716554190,
            "event_type": "Departure",
            "delay": 212615
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708716575003,
            "actual_timestamp": 1708716666295,
            "event_type": "Arrival",
            "delay": 277339
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708716737244,
            "actual_timestamp": 1708716850465,
            "event_type": "Departure",
            "delay": 299268
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708716875003,
            "actual_timestamp": 1708717060566,
            "event_type": "Arrival",
            "delay": 462902
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708716944712,
            "actual_timestamp": 1708717156786,
            "event_type": "Departure",
            "delay": 489413
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708717175003,
            "actual_timestamp": 1708717357395,
            "event_type": "Arrival",
            "delay": 645294
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708717308719,
            "actual_timestamp": 1708717543204,
            "event_type": "Departure",
            "delay": 697387
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708717475003,
            "actual_timestamp": 1708717682476,
            "event_type": "Arrival",
            "delay": 852767
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708717559118,
            "actual_timestamp": 1708717948880,
            "event_type": "Departure",
            "delay": 1035056
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708717775003,
            "actual_timestamp": 1708718051885,
            "event_type": "Arrival",
            "delay": 1129649
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708717952201,
            "actual_timestamp": 1708718514347,
            "event_type": "Departure",
            "delay": 1414913
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708718075003,
            "actual_timestamp": 1708718243676,
            "event_type": "Arrival",
            "delay": 1298322
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708718198262,
            "actual_timestamp": 1708718619673,
            "event_type": "Departure",
            "delay": 1551060
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708718375003,
            "actual_timestamp": 1708718607271,
            "event_type": "Arrival",
            "delay": 1530590
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708718464661,
            "actual_timestamp": 1708718803433,
            "event_type": "Departure",
            "delay": 1637094
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708718675003,
            "actual_timestamp": 1708718793422,
            "event_type": "Arrival",
            "delay": 1649009
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708718799090,
            "actual_timestamp": 1708719024371,
            "event_type": "Departure",
            "delay": 1755871
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708718975003,
            "actual_timestamp": 1708719180676,
            "event_type": "Arrival",
            "delay": 1854682
        },
        {
            "journey_id": "370a8098691e80f4056c2eec99c7cdfc",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708719083479,
            "actual_timestamp": 1708719491572,
            "event_type": "Departure",
            "delay": 2057102
        },
        {
            "journey_id": "540b40c66ca7d98fbfae741bf9a31aac",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708779436049,
            "actual_timestamp": 1708779460428,
            "event_type": "Arrival",
            "delay": 24379
        },
        {
            "journey_id": "540b40c66ca7d98fbfae741bf9a31aac",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708779605522,
            "actual_timestamp": 1708779647850,
            "event_type": "Departure",
            "delay": 42328
        },
        {
            "journey_id": "540b40c66ca7d98fbfae741bf9a31aac",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708779736049,
            "actual_timestamp": 1708779973684,
            "event_type": "Arrival",
            "delay": 262014
        },
        {
            "journey_id": "540b40c66ca7d98fbfae741bf9a31aac",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708779820572,
            "actual_timestamp": 1708780239254,
            "event_type": "Departure",
            "delay": 443061
        },
        {
            "journey_id": "540b40c66ca7d98fbfae741bf9a31aac",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708780036049,
            "actual_timestamp": 1708780332875,
            "event_type": "Arrival",
            "delay": 558840
        },
        {
            "journey_id": "540b40c66ca7d98fbfae741bf9a31aac",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708780213808,
            "actual_timestamp": 1708780608225,
            "event_type": "Departure",
            "delay": 656431
        },
        {
            "journey_id": "540b40c66ca7d98fbfae741bf9a31aac",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708780336049,
            "actual_timestamp": 1708780619296,
            "event_type": "Arrival",
            "delay": 842087
        },
        {
            "journey_id": "540b40c66ca7d98fbfae741bf9a31aac",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708780473614,
            "actual_timestamp": 1708780846775,
            "event_type": "Departure",
            "delay": 932001
        },
        {
            "journey_id": "540b40c66ca7d98fbfae741bf9a31aac",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708780636049,
            "actual_timestamp": 1708780809144,
            "event_type": "Arrival",
            "delay": 1015182
        },
        {
            "journey_id": "540b40c66ca7d98fbfae741bf9a31aac",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708780764987,
            "actual_timestamp": 1708780989674,
            "event_type": "Departure",
            "delay": 1066774
        },
        {
            "journey_id": "540b40c66ca7d98fbfae741bf9a31aac",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708780936049,
            "actual_timestamp": 1708781020428,
            "event_type": "Arrival",
            "delay": 1099561
        },
        {
            "journey_id": "540b40c66ca7d98fbfae741bf9a31aac",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708781060963,
            "actual_timestamp": 1708781369156,
            "event_type": "Departure",
            "delay": 1323375
        },
        {
            "journey_id": "540b40c66ca7d98fbfae741bf9a31aac",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708781236049,
            "actual_timestamp": 1708781345360,
            "event_type": "Arrival",
            "delay": 1208872
        },
        {
            "journey_id": "540b40c66ca7d98fbfae741bf9a31aac",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708781358034,
            "actual_timestamp": 1708781511061,
            "event_type": "Departure",
            "delay": 1252588
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708783360257,
            "actual_timestamp": 1708783421031,
            "event_type": "Arrival",
            "delay": 60774
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708783539338,
            "actual_timestamp": 1708783880987,
            "event_type": "Departure",
            "delay": 341649
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708783660257,
            "actual_timestamp": 1708783890282,
            "event_type": "Arrival",
            "delay": 290799
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708783779448,
            "actual_timestamp": 1708784104583,
            "event_type": "Departure",
            "delay": 385909
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708783960257,
            "actual_timestamp": 1708784018835,
            "event_type": "Arrival",
            "delay": 349377
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708784062017,
            "actual_timestamp": 1708784217784,
            "event_type": "Departure",
            "delay": 446566
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708784260257,
            "actual_timestamp": 1708784275452,
            "event_type": "Arrival",
            "delay": 364572
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708784326843,
            "actual_timestamp": 1708784583647,
            "event_type": "Departure",
            "delay": 606181
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708784560257,
            "actual_timestamp": 1708784838123,
            "event_type": "Arrival",
            "delay": 642438
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708784710446,
            "actual_timestamp": 1708785024283,
            "event_type": "Departure",
            "delay": 678409
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708784860257,
            "actual_timestamp": 1708784947523,
            "event_type": "Arrival",
            "delay": 729704
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708784971110,
            "actual_timestamp": 1708785145044,
            "event_type": "Departure",
            "delay": 816372
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708785160257,
            "actual_timestamp": 1708785211825,
            "event_type": "Arrival",
            "delay": 781272
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708785254146,
            "actual_timestamp": 1708785363228,
            "event_type": "Departure",
            "delay": 838786
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708785460257,
            "actual_timestamp": 1708785546534,
            "event_type": "Arrival",
            "delay": 867549
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708785595377,
            "actual_timestamp": 1708785856768,
            "event_type": "Departure",
            "delay": 1042663
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708785760257,
            "actual_timestamp": 1708785909708,
            "event_type": "Arrival",
            "delay": 1017000
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708785882421,
            "actual_timestamp": 1708786177648,
            "event_type": "Departure",
            "delay": 1162776
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708786060257,
            "actual_timestamp": 1708786108999,
            "event_type": "Arrival",
            "delay": 1065742
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708786149748,
            "actual_timestamp": 1708786485471,
            "event_type": "Departure",
            "delay": 1352723
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708786360257,
            "actual_timestamp": 1708786390606,
            "event_type": "Arrival",
            "delay": 1096091
        },
        {
            "journey_id": "e14ab08cf334c8307aab910ea19506d0",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708786490481,
            "actual_timestamp": 1708786791115,
            "event_type": "Departure",
            "delay": 1366376
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708763196478,
            "actual_timestamp": 1708763331879,
            "event_type": "Arrival",
            "delay": 135401
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708763295335,
            "actual_timestamp": 1708763715015,
            "event_type": "Departure",
            "delay": 419680
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708763496478,
            "actual_timestamp": 1708763594297,
            "event_type": "Arrival",
            "delay": 233220
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708763621466,
            "actual_timestamp": 1708763921788,
            "event_type": "Departure",
            "delay": 435723
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708763796478,
            "actual_timestamp": 1708763819887,
            "event_type": "Arrival",
            "delay": 256629
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708763919736,
            "actual_timestamp": 1708764022331,
            "event_type": "Departure",
            "delay": 335815
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708764096478,
            "actual_timestamp": 1708764312784,
            "event_type": "Arrival",
            "delay": 472935
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708764225303,
            "actual_timestamp": 1708764513922,
            "event_type": "Departure",
            "delay": 545248
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708764396478,
            "actual_timestamp": 1708764458170,
            "event_type": "Arrival",
            "delay": 534627
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708764460538,
            "actual_timestamp": 1708764584560,
            "event_type": "Departure",
            "delay": 596957
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708764696478,
            "actual_timestamp": 1708764907335,
            "event_type": "Arrival",
            "delay": 745484
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708764820544,
            "actual_timestamp": 1708765117608,
            "event_type": "Departure",
            "delay": 831691
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708764996478,
            "actual_timestamp": 1708765047120,
            "event_type": "Arrival",
            "delay": 796126
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708765120665,
            "actual_timestamp": 1708765448630,
            "event_type": "Departure",
            "delay": 1073449
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708765296478,
            "actual_timestamp": 1708765511556,
            "event_type": "Arrival",
            "delay": 1011204
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708765388000,
            "actual_timestamp": 1708765707847,
            "event_type": "Departure",
            "delay": 1115973
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708765596478,
            "actual_timestamp": 1708765621269,
            "event_type": "Arrival",
            "delay": 1035995
        },
        {
            "journey_id": "112dab7ee02c3a58bc75f0fb3d1a4d54",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708765743916,
            "actual_timestamp": 1708765829162,
            "event_type": "Departure",
            "delay": 1096450
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708768316554,
            "actual_timestamp": 1708768553591,
            "event_type": "Arrival",
            "delay": 237037
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708768485580,
            "actual_timestamp": 1708768750672,
            "event_type": "Departure",
            "delay": 265092
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708768616554,
            "actual_timestamp": 1708768786461,
            "event_type": "Arrival",
            "delay": 406944
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708768712926,
            "actual_timestamp": 1708769172087,
            "event_type": "Departure",
            "delay": 696198
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708768916554,
            "actual_timestamp": 1708768919891,
            "event_type": "Arrival",
            "delay": 410281
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708768987109,
            "actual_timestamp": 1708769149287,
            "event_type": "Departure",
            "delay": 569122
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708769216554,
            "actual_timestamp": 1708769424315,
            "event_type": "Arrival",
            "delay": 618042
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708769325295,
            "actual_timestamp": 1708769791312,
            "event_type": "Departure",
            "delay": 876298
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708769516554,
            "actual_timestamp": 1708769731296,
            "event_type": "Arrival",
            "delay": 832784
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708769620284,
            "actual_timestamp": 1708770066182,
            "event_type": "Departure",
            "delay": 1063940
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708769816554,
            "actual_timestamp": 1708769933536,
            "event_type": "Arrival",
            "delay": 949766
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708769937731,
            "actual_timestamp": 1708770123544,
            "event_type": "Departure",
            "delay": 1018597
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708770116554,
            "actual_timestamp": 1708770263367,
            "event_type": "Arrival",
            "delay": 1096579
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708770218498,
            "actual_timestamp": 1708770574193,
            "event_type": "Departure",
            "delay": 1305461
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708770416554,
            "actual_timestamp": 1708770484852,
            "event_type": "Arrival",
            "delay": 1164877
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708770555969,
            "actual_timestamp": 1708770904798,
            "event_type": "Departure",
            "delay": 1445408
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708770716554,
            "actual_timestamp": 1708770988612,
            "event_type": "Arrival",
            "delay": 1436935
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708770791609,
            "actual_timestamp": 1708771261630,
            "event_type": "Departure",
            "delay": 1634898
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708771016554,
            "actual_timestamp": 1708771153241,
            "event_type": "Arrival",
            "delay": 1573622
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708771173415,
            "actual_timestamp": 1708771327632,
            "event_type": "Departure",
            "delay": 1591152
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708771316554,
            "actual_timestamp": 1708771464923,
            "event_type": "Arrival",
            "delay": 1721991
        },
        {
            "journey_id": "c2f85644f1009c2b4a07d9d9f4b205f7",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708771451034,
            "actual_timestamp": 1708771751198,
            "event_type": "Departure",
            "delay": 1873786
        },
        {
            "journey_id": "8ffe5982950075f3ee52e1e49e7eb51b",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708759697912,
            "actual_timestamp": 1708759862036,
            "event_type": "Arrival",
            "delay": 164124
        },
        {
            "journey_id": "8ffe5982950075f3ee52e1e49e7eb51b",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708759846361,
            "actual_timestamp": 1708760134077,
            "event_type": "Departure",
            "delay": 287716
        },
        {
            "journey_id": "8ffe5982950075f3ee52e1e49e7eb51b",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708759997912,
            "actual_timestamp": 1708760061739,
            "event_type": "Arrival",
            "delay": 227951
        },
        {
            "journey_id": "8ffe5982950075f3ee52e1e49e7eb51b",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708760160845,
            "actual_timestamp": 1708760461644,
            "event_type": "Departure",
            "delay": 464923
        },
        {
            "journey_id": "8ffe5982950075f3ee52e1e49e7eb51b",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708760297912,
            "actual_timestamp": 1708760480091,
            "event_type": "Arrival",
            "delay": 410130
        },
        {
            "journey_id": "8ffe5982950075f3ee52e1e49e7eb51b",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708760413290,
            "actual_timestamp": 1708760822393,
            "event_type": "Departure",
            "delay": 637054
        },
        {
            "journey_id": "8ffe5982950075f3ee52e1e49e7eb51b",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708760597912,
            "actual_timestamp": 1708760661483,
            "event_type": "Arrival",
            "delay": 473701
        },
        {
            "journey_id": "8ffe5982950075f3ee52e1e49e7eb51b",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708760769731,
            "actual_timestamp": 1708760991130,
            "event_type": "Departure",
            "delay": 631529
        },
        {
            "journey_id": "8ffe5982950075f3ee52e1e49e7eb51b",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708760897912,
            "actual_timestamp": 1708760907034,
            "event_type": "Arrival",
            "delay": 482823
        },
        {
            "journey_id": "8ffe5982950075f3ee52e1e49e7eb51b",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708761015023,
            "actual_timestamp": 1708761164066,
            "event_type": "Departure",
            "delay": 622744
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708737266527,
            "actual_timestamp": 1708737488945,
            "event_type": "Arrival",
            "delay": 222418
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708737359725,
            "actual_timestamp": 1708737650868,
            "event_type": "Departure",
            "delay": 291143
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708737566527,
            "actual_timestamp": 1708737801102,
            "event_type": "Arrival",
            "delay": 456993
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708737632755,
            "actual_timestamp": 1708737960100,
            "event_type": "Departure",
            "delay": 549763
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708737866527,
            "actual_timestamp": 1708737960181,
            "event_type": "Arrival",
            "delay": 550647
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708738001415,
            "actual_timestamp": 1708738387130,
            "event_type": "Departure",
            "delay": 842708
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708738166527,
            "actual_timestamp": 1708738195938,
            "event_type": "Arrival",
            "delay": 580058
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708738287721,
            "actual_timestamp": 1708738543642,
            "event_type": "Departure",
            "delay": 806568
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708738466527,
            "actual_timestamp": 1708738588133,
            "event_type": "Arrival",
            "delay": 701664
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708738620856,
            "actual_timestamp": 1708738905681,
            "event_type": "Departure",
            "delay": 864883
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708738766527,
            "actual_timestamp": 1708738836648,
            "event_type": "Arrival",
            "delay": 771785
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708738849691,
            "actual_timestamp": 1708739159512,
            "event_type": "Departure",
            "delay": 1011485
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708739066527,
            "actual_timestamp": 1708739286464,
            "event_type": "Arrival",
            "delay": 991722
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708739127214,
            "actual_timestamp": 1708739393722,
            "event_type": "Departure",
            "delay": 1038293
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708739366527,
            "actual_timestamp": 1708739441106,
            "event_type": "Arrival",
            "delay": 1066301
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708739506937,
            "actual_timestamp": 1708739764861,
            "event_type": "Departure",
            "delay": 1249646
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708739666527,
            "actual_timestamp": 1708739854712,
            "event_type": "Arrival",
            "delay": 1254486
        },
        {
            "journey_id": "f8631a43606b4acec79c1fa121b0129f",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708739791907,
            "actual_timestamp": 1708740274050,
            "event_type": "Departure",
            "delay": 1548444
        },
        {
            "journey_id": "3ca11347698b7ac22b0a75127a0d7584",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708710677930,
            "actual_timestamp": 1708710755130,
            "event_type": "Arrival",
            "delay": 77200
        },
        {
            "journey_id": "3ca11347698b7ac22b0a75127a0d7584",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708710821363,
            "actual_timestamp": 1708710945510,
            "event_type": "Departure",
            "delay": 124147
        },
        {
            "journey_id": "3ca11347698b7ac22b0a75127a0d7584",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708710977930,
            "actual_timestamp": 1708711248389,
            "event_type": "Arrival",
            "delay": 347659
        },
        {
            "journey_id": "3ca11347698b7ac22b0a75127a0d7584",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708711115726,
            "actual_timestamp": 1708711609935,
            "event_type": "Departure",
            "delay": 571409
        },
        {
            "journey_id": "3ca11347698b7ac22b0a75127a0d7584",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708711277930,
            "actual_timestamp": 1708711369041,
            "event_type": "Arrival",
            "delay": 438770
        },
        {
            "journey_id": "3ca11347698b7ac22b0a75127a0d7584",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708711356691,
            "actual_timestamp": 1708711707999,
            "event_type": "Departure",
            "delay": 698967
        },
        {
            "journey_id": "3ca11347698b7ac22b0a75127a0d7584",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708711577930,
            "actual_timestamp": 1708711721205,
            "event_type": "Arrival",
            "delay": 582045
        },
        {
            "journey_id": "3ca11347698b7ac22b0a75127a0d7584",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708711668737,
            "actual_timestamp": 1708711992196,
            "event_type": "Departure",
            "delay": 762229
        },
        {
            "journey_id": "3ca11347698b7ac22b0a75127a0d7584",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708711877930,
            "actual_timestamp": 1708712041987,
            "event_type": "Arrival",
            "delay": 746102
        },
        {
            "journey_id": "3ca11347698b7ac22b0a75127a0d7584",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708712022466,
            "actual_timestamp": 1708712397975,
            "event_type": "Departure",
            "delay": 957554
        },
        {
            "journey_id": "3ca11347698b7ac22b0a75127a0d7584",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708712177930,
            "actual_timestamp": 1708712287603,
            "event_type": "Arrival",
            "delay": 855775
        },
        {
            "journey_id": "3ca11347698b7ac22b0a75127a0d7584",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708712345333,
            "actual_timestamp": 1708712513778,
            "event_type": "Departure",
            "delay": 914547
        },
        {
            "journey_id": "3fe54411e035073de54cfc0e6bcee9ab",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708746670681,
            "actual_timestamp": 1708746687956,
            "event_type": "Arrival",
            "delay": 17275
        },
        {
            "journey_id": "3fe54411e035073de54cfc0e6bcee9ab",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708746801419,
            "actual_timestamp": 1708746938806,
            "event_type": "Departure",
            "delay": 137387
        },
        {
            "journey_id": "3fe54411e035073de54cfc0e6bcee9ab",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708746970681,
            "actual_timestamp": 1708747256817,
            "event_type": "Arrival",
            "delay": 303411
        },
        {
            "journey_id": "3fe54411e035073de54cfc0e6bcee9ab",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708747064484,
            "actual_timestamp": 1708747416652,
            "event_type": "Departure",
            "delay": 369443
        },
        {
            "journey_id": "3fe54411e035073de54cfc0e6bcee9ab",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708747270681,
            "actual_timestamp": 1708747376236,
            "event_type": "Arrival",
            "delay": 408966
        },
        {
            "journey_id": "3fe54411e035073de54cfc0e6bcee9ab",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708747381228,
            "actual_timestamp": 1708747772535,
            "event_type": "Departure",
            "delay": 694718
        },
        {
            "journey_id": "3fe54411e035073de54cfc0e6bcee9ab",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708747570681,
            "actual_timestamp": 1708747571251,
            "event_type": "Arrival",
            "delay": 409536
        },
        {
            "journey_id": "3fe54411e035073de54cfc0e6bcee9ab",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708747740007,
            "actual_timestamp": 1708747994748,
            "event_type": "Departure",
            "delay": 663707
        },
        {
            "journey_id": "3fe54411e035073de54cfc0e6bcee9ab",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708747870681,
            "actual_timestamp": 1708748049670,
            "event_type": "Arrival",
            "delay": 588525
        },
        {
            "journey_id": "3fe54411e035073de54cfc0e6bcee9ab",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708748020098,
            "actual_timestamp": 1708748218283,
            "event_type": "Departure",
            "delay": 607721
        },
        {
            "journey_id": "3fe54411e035073de54cfc0e6bcee9ab",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708748170681,
            "actual_timestamp": 1708748434678,
            "event_type": "Arrival",
            "delay": 852522
        },
        {
            "journey_id": "3fe54411e035073de54cfc0e6bcee9ab",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708748237560,
            "actual_timestamp": 1708748794095,
            "event_type": "Departure",
            "delay": 1145060
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708783482977,
            "actual_timestamp": 1708783662927,
            "event_type": "Arrival",
            "delay": 179950
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708783624228,
            "actual_timestamp": 1708784059705,
            "event_type": "Departure",
            "delay": 435477
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708783782977,
            "actual_timestamp": 1708784049987,
            "event_type": "Arrival",
            "delay": 446960
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708783943344,
            "actual_timestamp": 1708784214100,
            "event_type": "Departure",
            "delay": 450706
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708784082977,
            "actual_timestamp": 1708784208936,
            "event_type": "Arrival",
            "delay": 572919
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708784246345,
            "actual_timestamp": 1708784565546,
            "event_type": "Departure",
            "delay": 766161
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708784382977,
            "actual_timestamp": 1708784668055,
            "event_type": "Arrival",
            "delay": 857997
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708784447166,
            "actual_timestamp": 1708784902973,
            "event_type": "Departure",
            "delay": 1028726
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708784682977,
            "actual_timestamp": 1708784708861,
            "event_type": "Arrival",
            "delay": 883881
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708784842798,
            "actual_timestamp": 1708784994735,
            "event_type": "Departure",
            "delay": 1009934
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708784982977,
            "actual_timestamp": 1708785254225,
            "event_type": "Arrival",
            "delay": 1155129
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708785095491,
            "actual_timestamp": 1708785538387,
            "event_type": "Departure",
            "delay": 1326777
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708785282977,
            "actual_timestamp": 1708785406017,
            "event_type": "Arrival",
            "delay": 1278169
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708785384733,
            "actual_timestamp": 1708785524704,
            "event_type": "Departure",
            "delay": 1295100
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708785582977,
            "actual_timestamp": 1708785612150,
            "event_type": "Arrival",
            "delay": 1307342
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708785648679,
            "actual_timestamp": 1708785905995,
            "event_type": "Departure",
            "delay": 1535485
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708785882977,
            "actual_timestamp": 1708786131942,
            "event_type": "Arrival",
            "delay": 1556307
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708785950981,
            "actual_timestamp": 1708786420409,
            "event_type": "Departure",
            "delay": 1776770
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708786182977,
            "actual_timestamp": 1708786372233,
            "event_type": "Arrival",
            "delay": 1745563
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708786246629,
            "actual_timestamp": 1708786481124,
            "event_type": "Departure",
            "delay": 1790802
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708786482977,
            "actual_timestamp": 1708786527217,
            "event_type": "Arrival",
            "delay": 1789803
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708786659634,
            "actual_timestamp": 1708786745292,
            "event_type": "Departure",
            "delay": 1831221
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708786782977,
            "actual_timestamp": 1708786909994,
            "event_type": "Arrival",
            "delay": 1916820
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708786849898,
            "actual_timestamp": 1708787025560,
            "event_type": "Departure",
            "delay": 1965465
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708787082977,
            "actual_timestamp": 1708787139540,
            "event_type": "Arrival",
            "delay": 1973383
        },
        {
            "journey_id": "6360aa4b5d1b46dee85c016b5237ef47",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708787238353,
            "actual_timestamp": 1708787495857,
            "event_type": "Departure",
            "delay": 2174324
        },
        {
            "journey_id": "878842bab32dd711447aa30c1814423c",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708716936099,
            "actual_timestamp": 1708717043736,
            "event_type": "Arrival",
            "delay": 107637
        },
        {
            "journey_id": "878842bab32dd711447aa30c1814423c",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708717089363,
            "actual_timestamp": 1708717197515,
            "event_type": "Departure",
            "delay": 108152
        },
        {
            "journey_id": "878842bab32dd711447aa30c1814423c",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708717236099,
            "actual_timestamp": 1708717457080,
            "event_type": "Arrival",
            "delay": 328618
        },
        {
            "journey_id": "878842bab32dd711447aa30c1814423c",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708717301022,
            "actual_timestamp": 1708717706144,
            "event_type": "Departure",
            "delay": 512759
        },
        {
            "journey_id": "878842bab32dd711447aa30c1814423c",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708717536099,
            "actual_timestamp": 1708717611432,
            "event_type": "Arrival",
            "delay": 403951
        },
        {
            "journey_id": "878842bab32dd711447aa30c1814423c",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708717653748,
            "actual_timestamp": 1708717829589,
            "event_type": "Departure",
            "delay": 504459
        },
        {
            "journey_id": "878842bab32dd711447aa30c1814423c",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708717836099,
            "actual_timestamp": 1708718003688,
            "event_type": "Arrival",
            "delay": 571540
        },
        {
            "journey_id": "878842bab32dd711447aa30c1814423c",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708717912474,
            "actual_timestamp": 1708718334197,
            "event_type": "Departure",
            "delay": 825674
        },
        {
            "journey_id": "878842bab32dd711447aa30c1814423c",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708718136099,
            "actual_timestamp": 1708718235621,
            "event_type": "Arrival",
            "delay": 671062
        },
        {
            "journey_id": "878842bab32dd711447aa30c1814423c",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708718264469,
            "actual_timestamp": 1708718496624,
            "event_type": "Departure",
            "delay": 803695
        },
        {
            "journey_id": "878842bab32dd711447aa30c1814423c",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708718436099,
            "actual_timestamp": 1708718437409,
            "event_type": "Arrival",
            "delay": 672372
        },
        {
            "journey_id": "878842bab32dd711447aa30c1814423c",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708718498074,
            "actual_timestamp": 1708718671833,
            "event_type": "Departure",
            "delay": 844821
        },
        {
            "journey_id": "878842bab32dd711447aa30c1814423c",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708718736099,
            "actual_timestamp": 1708718788908,
            "event_type": "Arrival",
            "delay": 725181
        },
        {
            "journey_id": "878842bab32dd711447aa30c1814423c",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708718895330,
            "actual_timestamp": 1708719201560,
            "event_type": "Departure",
            "delay": 978602
        },
        {
            "journey_id": "878842bab32dd711447aa30c1814423c",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708719036099,
            "actual_timestamp": 1708719168130,
            "event_type": "Arrival",
            "delay": 857212
        },
        {
            "journey_id": "878842bab32dd711447aa30c1814423c",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708719128704,
            "actual_timestamp": 1708719490718,
            "event_type": "Departure",
            "delay": 1087195
        },
        {
            "journey_id": "388409b5b5b9bce26a470c55cea8b1eb",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708742513236,
            "actual_timestamp": 1708742799315,
            "event_type": "Arrival",
            "delay": 286079
        },
        {
            "journey_id": "388409b5b5b9bce26a470c55cea8b1eb",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708742648157,
            "actual_timestamp": 1708743080162,
            "event_type": "Departure",
            "delay": 432005
        },
        {
            "journey_id": "388409b5b5b9bce26a470c55cea8b1eb",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708742813236,
            "actual_timestamp": 1708743074779,
            "event_type": "Arrival",
            "delay": 547622
        },
        {
            "journey_id": "388409b5b5b9bce26a470c55cea8b1eb",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708742978994,
            "actual_timestamp": 1708743420820,
            "event_type": "Departure",
            "delay": 727905
        },
        {
            "journey_id": "388409b5b5b9bce26a470c55cea8b1eb",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708743113236,
            "actual_timestamp": 1708743137462,
            "event_type": "Arrival",
            "delay": 571848
        },
        {
            "journey_id": "388409b5b5b9bce26a470c55cea8b1eb",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708743194554,
            "actual_timestamp": 1708743486425,
            "event_type": "Departure",
            "delay": 839493
        },
        {
            "journey_id": "388409b5b5b9bce26a470c55cea8b1eb",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708743413236,
            "actual_timestamp": 1708743526079,
            "event_type": "Arrival",
            "delay": 684691
        },
        {
            "journey_id": "388409b5b5b9bce26a470c55cea8b1eb",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708743501807,
            "actual_timestamp": 1708743856029,
            "event_type": "Departure",
            "delay": 926070
        },
        {
            "journey_id": "388409b5b5b9bce26a470c55cea8b1eb",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708743713236,
            "actual_timestamp": 1708744010629,
            "event_type": "Arrival",
            "delay": 982084
        },
        {
            "journey_id": "388409b5b5b9bce26a470c55cea8b1eb",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708743804015,
            "actual_timestamp": 1708744349323,
            "event_type": "Departure",
            "delay": 1229999
        },
        {
            "journey_id": "388409b5b5b9bce26a470c55cea8b1eb",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708744013236,
            "actual_timestamp": 1708744267838,
            "event_type": "Arrival",
            "delay": 1236686
        },
        {
            "journey_id": "388409b5b5b9bce26a470c55cea8b1eb",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708744165642,
            "actual_timestamp": 1708744515954,
            "event_type": "Departure",
            "delay": 1332396
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708769919039,
            "actual_timestamp": 1708769948729,
            "event_type": "Arrival",
            "delay": 29690
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708770017718,
            "actual_timestamp": 1708770210792,
            "event_type": "Departure",
            "delay": 193074
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708770219039,
            "actual_timestamp": 1708770438487,
            "event_type": "Arrival",
            "delay": 249138
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708770379191,
            "actual_timestamp": 1708770847275,
            "event_type": "Departure",
            "delay": 497774
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708770519039,
            "actual_timestamp": 1708770626478,
            "event_type": "Arrival",
            "delay": 356577
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708770582336,
            "actual_timestamp": 1708770793255,
            "event_type": "Departure",
            "delay": 460057
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708770819039,
            "actual_timestamp": 1708770911658,
            "event_type": "Arrival",
            "delay": 449196
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708770961921,
            "actual_timestamp": 1708771211404,
            "event_type": "Departure",
            "delay": 606060
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708771119039,
            "actual_timestamp": 1708771416059,
            "event_type": "Arrival",
            "delay": 746216
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708771208426,
            "actual_timestamp": 1708771640367,
            "event_type": "Departure",
            "delay": 881137
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708771419039,
            "actual_timestamp": 1708771613178,
            "event_type": "Arrival",
            "delay": 940355
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708771492566,
            "actual_timestamp": 1708771889636,
            "event_type": "Departure",
            "delay": 1143286
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708771719039,
            "actual_timestamp": 1708771875483,
            "event_type": "Arrival",
            "delay": 1096799
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708771798634,
            "actual_timestamp": 1708772252774,
            "event_type": "Departure",
            "delay": 1394495
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708772019039,
            "actual_timestamp": 1708772200080,
            "event_type": "Arrival",
            "delay": 1277840
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708772113036,
            "actual_timestamp": 1708772566152,
            "event_type": "Departure",
            "delay": 1549915
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708772319039,
            "actual_timestamp": 1708772342672,
            "event_type": "Arrival",
            "delay": 1301473
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708772411042,
            "actual_timestamp": 1708772620372,
            "event_type": "Departure",
            "delay": 1487170
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708772619039,
            "actual_timestamp": 1708772740426,
            "event_type": "Arrival",
            "delay": 1422860
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708772730939,
            "actual_timestamp": 1708773146988,
            "event_type": "Departure",
            "delay": 1717522
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708772919039,
            "actual_timestamp": 1708773172740,
            "event_type": "Arrival",
            "delay": 1676561
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708773048411,
            "actual_timestamp": 1708773389672,
            "event_type": "Departure",
            "delay": 1764121
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708773219039,
            "actual_timestamp": 1708773450306,
            "event_type": "Arrival",
            "delay": 1907828
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708773377540,
            "actual_timestamp": 1708773816787,
            "event_type": "Departure",
            "delay": 2115808
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708773519039,
            "actual_timestamp": 1708773714476,
            "event_type": "Arrival",
            "delay": 2103265
        },
        {
            "journey_id": "56ab5f0a0ff3118774d75f92decc4b2a",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708773612134,
            "actual_timestamp": 1708774058942,
            "event_type": "Departure",
            "delay": 2354636
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708765487069,
            "actual_timestamp": 1708765567997,
            "event_type": "Arrival",
            "delay": 80928
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708765639671,
            "actual_timestamp": 1708765775563,
            "event_type": "Departure",
            "delay": 135892
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708765787069,
            "actual_timestamp": 1708766075534,
            "event_type": "Arrival",
            "delay": 369393
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708765875312,
            "actual_timestamp": 1708766182952,
            "event_type": "Departure",
            "delay": 388568
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708766087069,
            "actual_timestamp": 1708766122906,
            "event_type": "Arrival",
            "delay": 405230
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708766234908,
            "actual_timestamp": 1708766442931,
            "event_type": "Departure",
            "delay": 577416
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708766387069,
            "actual_timestamp": 1708766498460,
            "event_type": "Arrival",
            "delay": 516621
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708766454457,
            "actual_timestamp": 1708766760993,
            "event_type": "Departure",
            "delay": 711766
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708766687069,
            "actual_timestamp": 1708766714817,
            "event_type": "Arrival",
            "delay": 544369
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708766804377,
            "actual_timestamp": 1708766880879,
            "event_type": "Departure",
            "delay": 593123
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708766987069,
            "actual_timestamp": 1708767032223,
            "event_type": "Arrival",
            "delay": 589523
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708767087038,
            "actual_timestamp": 1708767301505,
            "event_type": "Departure",
            "delay": 758836
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708767287069,
            "actual_timestamp": 1708767561237,
            "event_type": "Arrival",
            "delay": 863691
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708767396479,
            "actual_timestamp": 1708767825401,
            "event_type": "Departure",
            "delay": 1018445
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708767587069,
            "actual_timestamp": 1708767589921,
            "event_type": "Arrival",
            "delay": 866543
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708767744180,
            "actual_timestamp": 1708767986571,
            "event_type": "Departure",
            "delay": 1106082
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708767887069,
            "actual_timestamp": 1708767988331,
            "event_type": "Arrival",
            "delay": 967805
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708768061113,
            "actual_timestamp": 1708768442315,
            "event_type": "Departure",
            "delay": 1247745
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708768187069,
            "actual_timestamp": 1708768195170,
            "event_type": "Arrival",
            "delay": 975906
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708768312952,
            "actual_timestamp": 1708768409834,
            "event_type": "Departure",
            "delay": 1064687
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708768487069,
            "actual_timestamp": 1708768627020,
            "event_type": "Arrival",
            "delay": 1115857
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708768593421,
            "actual_timestamp": 1708768747073,
            "event_type": "Departure",
            "delay": 1129558
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708768787069,
            "actual_timestamp": 1708769059552,
            "event_type": "Arrival",
            "delay": 1388340
        },
        {
            "journey_id": "45c62e79eb7289153aa6b1bf4112da9a",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708768908000,
            "actual_timestamp": 1708769333390,
            "event_type": "Departure",
            "delay": 1541247
        },
        {
            "journey_id": "ce43d17b38bebf7b02b735a777ca2131",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708777651898,
            "actual_timestamp": 1708777776794,
            "event_type": "Arrival",
            "delay": 124896
        },
        {
            "journey_id": "ce43d17b38bebf7b02b735a777ca2131",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708777752030,
            "actual_timestamp": 1708777903322,
            "event_type": "Departure",
            "delay": 151292
        },
        {
            "journey_id": "ce43d17b38bebf7b02b735a777ca2131",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708777951898,
            "actual_timestamp": 1708778036568,
            "event_type": "Arrival",
            "delay": 209566
        },
        {
            "journey_id": "ce43d17b38bebf7b02b735a777ca2131",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708778060050,
            "actual_timestamp": 1708778240083,
            "event_type": "Departure",
            "delay": 304929
        },
        {
            "journey_id": "ce43d17b38bebf7b02b735a777ca2131",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708778251898,
            "actual_timestamp": 1708778315279,
            "event_type": "Arrival",
            "delay": 272947
        },
        {
            "journey_id": "ce43d17b38bebf7b02b735a777ca2131",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708778356614,
            "actual_timestamp": 1708778683557,
            "event_type": "Departure",
            "delay": 536509
        },
        {
            "journey_id": "ce43d17b38bebf7b02b735a777ca2131",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708778551898,
            "actual_timestamp": 1708778662363,
            "event_type": "Arrival",
            "delay": 383412
        },
        {
            "journey_id": "ce43d17b38bebf7b02b735a777ca2131",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708778612203,
            "actual_timestamp": 1708778737468,
            "event_type": "Departure",
            "delay": 398212
        },
        {
            "journey_id": "ce43d17b38bebf7b02b735a777ca2131",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708778851898,
            "actual_timestamp": 1708778926330,
            "event_type": "Arrival",
            "delay": 457844
        },
        {
            "journey_id": "ce43d17b38bebf7b02b735a777ca2131",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708778922575,
            "actual_timestamp": 1708779097722,
            "event_type": "Departure",
            "delay": 558559
        },
        {
            "journey_id": "ce43d17b38bebf7b02b735a777ca2131",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708779151898,
            "actual_timestamp": 1708779382530,
            "event_type": "Arrival",
            "delay": 688476
        },
        {
            "journey_id": "ce43d17b38bebf7b02b735a777ca2131",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708779254529,
            "actual_timestamp": 1708779600313,
            "event_type": "Departure",
            "delay": 803628
        },
        {
            "journey_id": "ce43d17b38bebf7b02b735a777ca2131",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708779451898,
            "actual_timestamp": 1708779734418,
            "event_type": "Arrival",
            "delay": 970996
        },
        {
            "journey_id": "ce43d17b38bebf7b02b735a777ca2131",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708779566723,
            "actual_timestamp": 1708780130709,
            "event_type": "Departure",
            "delay": 1252462
        },
        {
            "journey_id": "ce43d17b38bebf7b02b735a777ca2131",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708779751898,
            "actual_timestamp": 1708779813840,
            "event_type": "Arrival",
            "delay": 1032938
        },
        {
            "journey_id": "ce43d17b38bebf7b02b735a777ca2131",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708779860980,
            "actual_timestamp": 1708780144098,
            "event_type": "Departure",
            "delay": 1254114
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708758924514,
            "actual_timestamp": 1708759110631,
            "event_type": "Arrival",
            "delay": 186117
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708759078520,
            "actual_timestamp": 1708759271173,
            "event_type": "Departure",
            "delay": 192653
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708759224514,
            "actual_timestamp": 1708759350723,
            "event_type": "Arrival",
            "delay": 312326
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708759289315,
            "actual_timestamp": 1708759613727,
            "event_type": "Departure",
            "delay": 510529
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708759524514,
            "actual_timestamp": 1708759744265,
            "event_type": "Arrival",
            "delay": 532077
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708759698659,
            "actual_timestamp": 1708759948835,
            "event_type": "Departure",
            "delay": 562502
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708759824514,
            "actual_timestamp": 1708759864109,
            "event_type": "Arrival",
            "delay": 571672
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708760001671,
            "actual_timestamp": 1708760105453,
            "event_type": "Departure",
            "delay": 635859
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708760124514,
            "actual_timestamp": 1708760262852,
            "event_type": "Arrival",
            "delay": 710010
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708760232632,
            "actual_timestamp": 1708760546572,
            "event_type": "Departure",
            "delay": 885612
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708760424514,
            "actual_timestamp": 1708760533167,
            "event_type": "Arrival",
            "delay": 818663
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708760573487,
            "actual_timestamp": 1708760856380,
            "event_type": "Departure",
            "delay": 992903
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708760724514,
            "actual_timestamp": 1708760846727,
            "event_type": "Arrival",
            "delay": 940876
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708760873017,
            "actual_timestamp": 1708761187765,
            "event_type": "Departure",
            "delay": 1133411
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708761024514,
            "actual_timestamp": 1708761131241,
            "event_type": "Arrival",
            "delay": 1047603
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708761164879,
            "actual_timestamp": 1708761333164,
            "event_type": "Departure",
            "delay": 1109161
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708761324514,
            "actual_timestamp": 1708761473262,
            "event_type": "Arrival",
            "delay": 1196351
        },
        {
            "journey_id": "7f292070205fbb02782a51ffe39fd70e",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708761404388,
            "actual_timestamp": 1708761683913,
            "event_type": "Departure",
            "delay": 1327128
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708756738219,
            "actual_timestamp": 1708756862387,
            "event_type": "Arrival",
            "delay": 124168
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708756889326,
            "actual_timestamp": 1708757113452,
            "event_type": "Departure",
            "delay": 224126
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708757038219,
            "actual_timestamp": 1708757191350,
            "event_type": "Arrival",
            "delay": 277299
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708757159897,
            "actual_timestamp": 1708757562313,
            "event_type": "Departure",
            "delay": 526584
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708757338219,
            "actual_timestamp": 1708757552404,
            "event_type": "Arrival",
            "delay": 491484
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708757439728,
            "actual_timestamp": 1708757692908,
            "event_type": "Departure",
            "delay": 530479
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708757638219,
            "actual_timestamp": 1708757656436,
            "event_type": "Arrival",
            "delay": 509701
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708757735688,
            "actual_timestamp": 1708757951920,
            "event_type": "Departure",
            "delay": 707716
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708757938219,
            "actual_timestamp": 1708758035129,
            "event_type": "Arrival",
            "delay": 606611
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708758020047,
            "actual_timestamp": 1708758230621,
            "event_type": "Departure",
            "delay": 720275
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708758238219,
            "actual_timestamp": 1708758290937,
            "event_type": "Arrival",
            "delay": 659329
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708758305606,
            "actual_timestamp": 1708758497580,
            "event_type": "Departure",
            "delay": 798585
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708758538219,
            "actual_timestamp": 1708758805091,
            "event_type": "Arrival",
            "delay": 926201
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708758691497,
            "actual_timestamp": 1708759221754,
            "event_type": "Departure",
            "delay": 1189586
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708758838219,
            "actual_timestamp": 1708758862911,
            "event_type": "Arrival",
            "delay": 950893
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708758989734,
            "actual_timestamp": 1708759250636,
            "event_type": "Departure",
            "delay": 1187103
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708759138219,
            "actual_timestamp": 1708759155331,
            "event_type": "Arrival",
            "delay": 968005
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708759211506,
            "actual_timestamp": 1708759422145,
            "event_type": "Departure",
            "delay": 1161532
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708759438219,
            "actual_timestamp": 1708759574680,
            "event_type": "Arrival",
            "delay": 1104466
        },
        {
            "journey_id": "b18f530448737bc1f45872d9302b54e3",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708759569576,
            "actual_timestamp": 1708759918075,
            "event_type": "Departure",
            "delay": 1316504
        },
        {
            "journey_id": "2fc6b1f37effaa82651f299f4287eb66",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708705844699,
            "actual_timestamp": 1708705949760,
            "event_type": "Arrival",
            "delay": 105061
        },
        {
            "journey_id": "2fc6b1f37effaa82651f299f4287eb66",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708706022391,
            "actual_timestamp": 1708706225791,
            "event_type": "Departure",
            "delay": 203400
        },
        {
            "journey_id": "2fc6b1f37effaa82651f299f4287eb66",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708706144699,
            "actual_timestamp": 1708706238421,
            "event_type": "Arrival",
            "delay": 198783
        },
        {
            "journey_id": "2fc6b1f37effaa82651f299f4287eb66",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708706251449,
            "actual_timestamp": 1708706347258,
            "event_type": "Departure",
            "delay": 200870
        },
        {
            "journey_id": "2fc6b1f37effaa82651f299f4287eb66",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708706444699,
            "actual_timestamp": 1708706466737,
            "event_type": "Arrival",
            "delay": 220821
        },
        {
            "journey_id": "2fc6b1f37effaa82651f299f4287eb66",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708706559284,
            "actual_timestamp": 1708706692830,
            "event_type": "Departure",
            "delay": 332329
        },
        {
            "journey_id": "2fc6b1f37effaa82651f299f4287eb66",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708706744699,
            "actual_timestamp": 1708706963224,
            "event_type": "Arrival",
            "delay": 439346
        },
        {
            "journey_id": "2fc6b1f37effaa82651f299f4287eb66",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708706908685,
            "actual_timestamp": 1708707159018,
            "event_type": "Departure",
            "delay": 471154
        },
        {
            "journey_id": "2fc6b1f37effaa82651f299f4287eb66",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708707044699,
            "actual_timestamp": 1708707070951,
            "event_type": "Arrival",
            "delay": 465598
        },
        {
            "journey_id": "2fc6b1f37effaa82651f299f4287eb66",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708707133839,
            "actual_timestamp": 1708707193220,
            "event_type": "Departure",
            "delay": 498727
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708755201669,
            "actual_timestamp": 1708755229548,
            "event_type": "Arrival",
            "delay": 27879
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708755378022,
            "actual_timestamp": 1708755601227,
            "event_type": "Departure",
            "delay": 223205
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708755501669,
            "actual_timestamp": 1708755699180,
            "event_type": "Arrival",
            "delay": 225390
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708755637057,
            "actual_timestamp": 1708755958490,
            "event_type": "Departure",
            "delay": 349312
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708755801669,
            "actual_timestamp": 1708756008435,
            "event_type": "Arrival",
            "delay": 432156
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708755884878,
            "actual_timestamp": 1708756193505,
            "event_type": "Departure",
            "delay": 534017
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708756101669,
            "actual_timestamp": 1708756102486,
            "event_type": "Arrival",
            "delay": 432973
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708756271086,
            "actual_timestamp": 1708756517648,
            "event_type": "Departure",
            "delay": 678718
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708756401669,
            "actual_timestamp": 1708756516649,
            "event_type": "Arrival",
            "delay": 547953
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708756493358,
            "actual_timestamp": 1708756637106,
            "event_type": "Departure",
            "delay": 576721
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708756701669,
            "actual_timestamp": 1708756942086,
            "event_type": "Arrival",
            "delay": 788370
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708756828303,
            "actual_timestamp": 1708757235960,
            "event_type": "Departure",
            "delay": 955610
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708757001669,
            "actual_timestamp": 1708757284936,
            "event_type": "Arrival",
            "delay": 1071637
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708757075235,
            "actual_timestamp": 1708757415391,
            "event_type": "Departure",
            "delay": 1128526
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708757301669,
            "actual_timestamp": 1708757562956,
            "event_type": "Arrival",
            "delay": 1332924
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708757396402,
            "actual_timestamp": 1708757701992,
            "event_type": "Departure",
            "delay": 1377227
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708757601669,
            "actual_timestamp": 1708757638801,
            "event_type": "Arrival",
            "delay": 1370056
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708757735169,
            "actual_timestamp": 1708758029101,
            "event_type": "Departure",
            "delay": 1626856
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708757901669,
            "actual_timestamp": 1708758099165,
            "event_type": "Arrival",
            "delay": 1567552
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708757980144,
            "actual_timestamp": 1708758222136,
            "event_type": "Departure",
            "delay": 1612048
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708758201669,
            "actual_timestamp": 1708758246786,
            "event_type": "Arrival",
            "delay": 1612669
        },
        {
            "journey_id": "a6b0c815d874a9c21e2af31943471bd4",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708758367408,
            "actual_timestamp": 1708758426080,
            "event_type": "Departure",
            "delay": 1626224
        },
        {
            "journey_id": "1e3952d2167bf72aca6df2740a0e98b0",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708778940282,
            "actual_timestamp": 1708779054025,
            "event_type": "Arrival",
            "delay": 113743
        },
        {
            "journey_id": "1e3952d2167bf72aca6df2740a0e98b0",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708779021148,
            "actual_timestamp": 1708779280308,
            "event_type": "Departure",
            "delay": 259160
        },
        {
            "journey_id": "1e3952d2167bf72aca6df2740a0e98b0",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708779240282,
            "actual_timestamp": 1708779349175,
            "event_type": "Arrival",
            "delay": 222636
        },
        {
            "journey_id": "1e3952d2167bf72aca6df2740a0e98b0",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708779412364,
            "actual_timestamp": 1708779608625,
            "event_type": "Departure",
            "delay": 310004
        },
        {
            "journey_id": "1e3952d2167bf72aca6df2740a0e98b0",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708779540282,
            "actual_timestamp": 1708779603896,
            "event_type": "Arrival",
            "delay": 286250
        },
        {
            "journey_id": "1e3952d2167bf72aca6df2740a0e98b0",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708779628262,
            "actual_timestamp": 1708779887497,
            "event_type": "Departure",
            "delay": 481871
        },
        {
            "journey_id": "1e3952d2167bf72aca6df2740a0e98b0",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708779840282,
            "actual_timestamp": 1708780107601,
            "event_type": "Arrival",
            "delay": 553569
        },
        {
            "journey_id": "1e3952d2167bf72aca6df2740a0e98b0",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708780013279,
            "actual_timestamp": 1708780378895,
            "event_type": "Departure",
            "delay": 651866
        },
        {
            "journey_id": "1e3952d2167bf72aca6df2740a0e98b0",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708780140282,
            "actual_timestamp": 1708780263708,
            "event_type": "Arrival",
            "delay": 676995
        },
        {
            "journey_id": "1e3952d2167bf72aca6df2740a0e98b0",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708780218220,
            "actual_timestamp": 1708780585481,
            "event_type": "Departure",
            "delay": 920830
        },
        {
            "journey_id": "1e3952d2167bf72aca6df2740a0e98b0",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708780440282,
            "actual_timestamp": 1708780644302,
            "event_type": "Arrival",
            "delay": 881015
        },
        {
            "journey_id": "1e3952d2167bf72aca6df2740a0e98b0",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708780520623,
            "actual_timestamp": 1708780956925,
            "event_type": "Departure",
            "delay": 1113297
        },
        {
            "journey_id": "1e3952d2167bf72aca6df2740a0e98b0",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708780740282,
            "actual_timestamp": 1708780749804,
            "event_type": "Arrival",
            "delay": 890537
        },
        {
            "journey_id": "1e3952d2167bf72aca6df2740a0e98b0",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708780824782,
            "actual_timestamp": 1708780963964,
            "event_type": "Departure",
            "delay": 1020197
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708786198357,
            "actual_timestamp": 1708786495290,
            "event_type": "Arrival",
            "delay": 296933
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708786363191,
            "actual_timestamp": 1708786790083,
            "event_type": "Departure",
            "delay": 426892
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708786498357,
            "actual_timestamp": 1708786668845,
            "event_type": "Arrival",
            "delay": 467421
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708786568487,
            "actual_timestamp": 1708786880941,
            "event_type": "Departure",
            "delay": 609387
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708786798357,
            "actual_timestamp": 1708787081406,
            "event_type": "Arrival",
            "delay": 750470
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708786860422,
            "actual_timestamp": 1708787186676,
            "event_type": "Departure",
            "delay": 793675
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708787098357,
            "actual_timestamp": 1708787112202,
            "event_type": "Arrival",
            "delay": 764315
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708787264618,
            "actual_timestamp": 1708787400076,
            "event_type": "Departure",
            "delay": 885928
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708787398357,
            "actual_timestamp": 1708787502240,
            "event_type": "Arrival",
            "delay": 868198
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708787534932,
            "actual_timestamp": 1708787729493,
            "event_type": "Departure",
            "delay": 958876
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708787698357,
            "actual_timestamp": 1708787902809,
            "event_type": "Arrival",
            "delay": 1072650
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708787797733,
            "actual_timestamp": 1708788165333,
            "event_type": "Departure",
            "delay": 1235798
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708787998357,
            "actual_timestamp": 1708788195015,
            "event_type": "Arrival",
            "delay": 1269308
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708788114891,
            "actual_timestamp": 1708788562710,
            "event_type": "Departure",
            "delay": 1520469
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708788298357,
            "actual_timestamp": 1708788533768,
            "event_type": "Arrival",
            "delay": 1504719
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708788477818,
            "actual_timestamp": 1708788768933,
            "event_type": "Departure",
            "delay": 1560423
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708788598357,
            "actual_timestamp": 1708788656420,
            "event_type": "Arrival",
            "delay": 1562782
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708788771619,
            "actual_timestamp": 1708788832926,
            "event_type": "Departure",
            "delay": 1566026
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708788898357,
            "actual_timestamp": 1708789076992,
            "event_type": "Arrival",
            "delay": 1741417
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708788967238,
            "actual_timestamp": 1708789333655,
            "event_type": "Departure",
            "delay": 1929199
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708789198357,
            "actual_timestamp": 1708789477997,
            "event_type": "Arrival",
            "delay": 2021057
        },
        {
            "journey_id": "fd7681e55f0a01741c973c3c6254bf2a",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708789324031,
            "actual_timestamp": 1708789805055,
            "event_type": "Departure",
            "delay": 2222441
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708748790574,
            "actual_timestamp": 1708748949057,
            "event_type": "Arrival",
            "delay": 158483
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708748926991,
            "actual_timestamp": 1708749322228,
            "event_type": "Departure",
            "delay": 395237
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708749090574,
            "actual_timestamp": 1708749304269,
            "event_type": "Arrival",
            "delay": 372178
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708749167577,
            "actual_timestamp": 1708749624701,
            "event_type": "Departure",
            "delay": 615607
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708749390574,
            "actual_timestamp": 1708749496368,
            "event_type": "Arrival",
            "delay": 477972
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708749560597,
            "actual_timestamp": 1708749880169,
            "event_type": "Departure",
            "delay": 691750
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708749690574,
            "actual_timestamp": 1708749985905,
            "event_type": "Arrival",
            "delay": 773303
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708749814662,
            "actual_timestamp": 1708750388998,
            "event_type": "Departure",
            "delay": 1052308
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708749990574,
            "actual_timestamp": 1708750032976,
            "event_type": "Arrival",
            "delay": 815705
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "27521257-7d00-4b40-8ff0-b523e4edec43",
            "planned_timestamp": 1708750157309,
            "actual_timestamp": 1708750425670,
            "event_type": "Departure",
            "delay": 1041664
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708750290574,
            "actual_timestamp": 1708750520468,
            "event_type": "Arrival",
            "delay": 1045599
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708750469371,
            "actual_timestamp": 1708750764017,
            "event_type": "Departure",
            "delay": 1110351
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708750590574,
            "actual_timestamp": 1708750835880,
            "event_type": "Arrival",
            "delay": 1290905
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708750748352,
            "actual_timestamp": 1708751144468,
            "event_type": "Departure",
            "delay": 1441715
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708750890574,
            "actual_timestamp": 1708751032358,
            "event_type": "Arrival",
            "delay": 1432689
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708750965389,
            "actual_timestamp": 1708751379547,
            "event_type": "Departure",
            "delay": 1705063
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708751190574,
            "actual_timestamp": 1708751407466,
            "event_type": "Arrival",
            "delay": 1649581
        },
        {
            "journey_id": "6c88379fe988dfab502c2ee57f9b1fd5",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708751298590,
            "actual_timestamp": 1708751678963,
            "event_type": "Departure",
            "delay": 1813062
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708791241180,
            "actual_timestamp": 1708791327384,
            "event_type": "Arrival",
            "delay": 86204
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708791381447,
            "actual_timestamp": 1708791549512,
            "event_type": "Departure",
            "delay": 168065
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708791541180,
            "actual_timestamp": 1708791595429,
            "event_type": "Arrival",
            "delay": 140453
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708791619998,
            "actual_timestamp": 1708791697139,
            "event_type": "Departure",
            "delay": 163345
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708791841180,
            "actual_timestamp": 1708791974495,
            "event_type": "Arrival",
            "delay": 273768
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708791965127,
            "actual_timestamp": 1708792123843,
            "event_type": "Departure",
            "delay": 299169
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708792141180,
            "actual_timestamp": 1708792369242,
            "event_type": "Arrival",
            "delay": 501830
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708792210396,
            "actual_timestamp": 1708792678869,
            "event_type": "Departure",
            "delay": 742241
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708792441180,
            "actual_timestamp": 1708792609721,
            "event_type": "Arrival",
            "delay": 670371
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708792575382,
            "actual_timestamp": 1708792931308,
            "event_type": "Departure",
            "delay": 857756
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708792741180,
            "actual_timestamp": 1708792872294,
            "event_type": "Arrival",
            "delay": 801485
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708792818784,
            "actual_timestamp": 1708793065100,
            "event_type": "Departure",
            "delay": 916687
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708793041180,
            "actual_timestamp": 1708793187218,
            "event_type": "Arrival",
            "delay": 947523
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708793103403,
            "actual_timestamp": 1708793417723,
            "event_type": "Departure",
            "delay": 1115805
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708793341180,
            "actual_timestamp": 1708793600550,
            "event_type": "Arrival",
            "delay": 1206893
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708793463757,
            "actual_timestamp": 1708794018629,
            "event_type": "Departure",
            "delay": 1502395
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708793641180,
            "actual_timestamp": 1708793897936,
            "event_type": "Arrival",
            "delay": 1463649
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708793783554,
            "actual_timestamp": 1708794334217,
            "event_type": "Departure",
            "delay": 1757556
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708793941180,
            "actual_timestamp": 1708794188744,
            "event_type": "Arrival",
            "delay": 1711213
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708794020265,
            "actual_timestamp": 1708794332498,
            "event_type": "Departure",
            "delay": 1775882
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708794241180,
            "actual_timestamp": 1708794262719,
            "event_type": "Arrival",
            "delay": 1732752
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708794401736,
            "actual_timestamp": 1708794442317,
            "event_type": "Departure",
            "delay": 1751794
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708794541180,
            "actual_timestamp": 1708794824354,
            "event_type": "Arrival",
            "delay": 2015926
        },
        {
            "journey_id": "483c900319fe6fcc058cb4303a785423",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708794688928,
            "actual_timestamp": 1708795190029,
            "event_type": "Departure",
            "delay": 2233853
        },
        {
            "journey_id": "091ec6950cfe236bbeee20e1c8e3431f",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708788213076,
            "actual_timestamp": 1708788412932,
            "event_type": "Arrival",
            "delay": 199856
        },
        {
            "journey_id": "091ec6950cfe236bbeee20e1c8e3431f",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708788321198,
            "actual_timestamp": 1708788547162,
            "event_type": "Departure",
            "delay": 225964
        },
        {
            "journey_id": "091ec6950cfe236bbeee20e1c8e3431f",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708788513076,
            "actual_timestamp": 1708788567782,
            "event_type": "Arrival",
            "delay": 254562
        },
        {
            "journey_id": "091ec6950cfe236bbeee20e1c8e3431f",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708788602569,
            "actual_timestamp": 1708788932862,
            "event_type": "Departure",
            "delay": 530149
        },
        {
            "journey_id": "091ec6950cfe236bbeee20e1c8e3431f",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708788813076,
            "actual_timestamp": 1708788955289,
            "event_type": "Arrival",
            "delay": 396775
        },
        {
            "journey_id": "091ec6950cfe236bbeee20e1c8e3431f",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708788931663,
            "actual_timestamp": 1708789204518,
            "event_type": "Departure",
            "delay": 527417
        },
        {
            "journey_id": "091ec6950cfe236bbeee20e1c8e3431f",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708789113076,
            "actual_timestamp": 1708789394334,
            "event_type": "Arrival",
            "delay": 678033
        },
        {
            "journey_id": "091ec6950cfe236bbeee20e1c8e3431f",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708789257895,
            "actual_timestamp": 1708789811134,
            "event_type": "Departure",
            "delay": 950014
        },
        {
            "journey_id": "091ec6950cfe236bbeee20e1c8e3431f",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708789413076,
            "actual_timestamp": 1708789611663,
            "event_type": "Arrival",
            "delay": 876620
        },
        {
            "journey_id": "091ec6950cfe236bbeee20e1c8e3431f",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708789481410,
            "actual_timestamp": 1708789744320,
            "event_type": "Departure",
            "delay": 940943
        },
        {
            "journey_id": "091ec6950cfe236bbeee20e1c8e3431f",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708789713076,
            "actual_timestamp": 1708789769791,
            "event_type": "Arrival",
            "delay": 933335
        },
        {
            "journey_id": "091ec6950cfe236bbeee20e1c8e3431f",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708789861020,
            "actual_timestamp": 1708790028415,
            "event_type": "Departure",
            "delay": 1044015
        },
        {
            "journey_id": "091ec6950cfe236bbeee20e1c8e3431f",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708790013076,
            "actual_timestamp": 1708790068317,
            "event_type": "Arrival",
            "delay": 988576
        },
        {
            "journey_id": "091ec6950cfe236bbeee20e1c8e3431f",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708790150672,
            "actual_timestamp": 1708790299600,
            "event_type": "Departure",
            "delay": 1082263
        },
        {
            "journey_id": "8f3834bf6526ca51e62e0118056b3381",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708788030060,
            "actual_timestamp": 1708788154009,
            "event_type": "Arrival",
            "delay": 123949
        },
        {
            "journey_id": "8f3834bf6526ca51e62e0118056b3381",
            "station_id": "797181af-e4c3-440b-9ff8-d2a55a39e743",
            "planned_timestamp": 1708788183592,
            "actual_timestamp": 1708788313897,
            "event_type": "Departure",
            "delay": 130305
        },
        {
            "journey_id": "8f3834bf6526ca51e62e0118056b3381",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708788330060,
            "actual_timestamp": 1708788620412,
            "event_type": "Arrival",
            "delay": 414301
        },
        {
            "journey_id": "8f3834bf6526ca51e62e0118056b3381",
            "station_id": "14363d7a-d59b-4aee-9228-6d485bf882df",
            "planned_timestamp": 1708788458113,
            "actual_timestamp": 1708788929988,
            "event_type": "Departure",
            "delay": 595824
        },
        {
            "journey_id": "8f3834bf6526ca51e62e0118056b3381",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708788630060,
            "actual_timestamp": 1708788738728,
            "event_type": "Arrival",
            "delay": 522969
        },
        {
            "journey_id": "8f3834bf6526ca51e62e0118056b3381",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708788731805,
            "actual_timestamp": 1708789013378,
            "event_type": "Departure",
            "delay": 695874
        },
        {
            "journey_id": "8f3834bf6526ca51e62e0118056b3381",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708788930060,
            "actual_timestamp": 1708788964835,
            "event_type": "Arrival",
            "delay": 557744
        },
        {
            "journey_id": "8f3834bf6526ca51e62e0118056b3381",
            "station_id": "5c62f507-b482-4aaf-9bfb-b4ee2effa272",
            "planned_timestamp": 1708789030699,
            "actual_timestamp": 1708789227499,
            "event_type": "Departure",
            "delay": 719769
        },
        {
            "journey_id": "8f3834bf6526ca51e62e0118056b3381",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708789230060,
            "actual_timestamp": 1708789495201,
            "event_type": "Arrival",
            "delay": 822885
        },
        {
            "journey_id": "8f3834bf6526ca51e62e0118056b3381",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708789310890,
            "actual_timestamp": 1708789611609,
            "event_type": "Departure",
            "delay": 858463
        },
        {
            "journey_id": "8f3834bf6526ca51e62e0118056b3381",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708789530060,
            "actual_timestamp": 1708789649840,
            "event_type": "Arrival",
            "delay": 942665
        },
        {
            "journey_id": "8f3834bf6526ca51e62e0118056b3381",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708789638667,
            "actual_timestamp": 1708789861861,
            "event_type": "Departure",
            "delay": 1046079
        },
        {
            "journey_id": "8f3834bf6526ca51e62e0118056b3381",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708789830060,
            "actual_timestamp": 1708790084755,
            "event_type": "Arrival",
            "delay": 1197360
        },
        {
            "journey_id": "8f3834bf6526ca51e62e0118056b3381",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708789995179,
            "actual_timestamp": 1708790308777,
            "event_type": "Departure",
            "delay": 1256263
        },
        {
            "journey_id": "8f3834bf6526ca51e62e0118056b3381",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708790130060,
            "actual_timestamp": 1708790341543,
            "event_type": "Arrival",
            "delay": 1408843
        },
        {
            "journey_id": "8f3834bf6526ca51e62e0118056b3381",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708790298353,
            "actual_timestamp": 1708790627222,
            "event_type": "Departure",
            "delay": 1526229
        },
        {
            "journey_id": "ba6fde7a6575e2a1cdddfe450129f506",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708709961974,
            "actual_timestamp": 1708710047257,
            "event_type": "Arrival",
            "delay": 85283
        },
        {
            "journey_id": "ba6fde7a6575e2a1cdddfe450129f506",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708710139357,
            "actual_timestamp": 1708710514227,
            "event_type": "Departure",
            "delay": 374870
        },
        {
            "journey_id": "ba6fde7a6575e2a1cdddfe450129f506",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708710261974,
            "actual_timestamp": 1708710349850,
            "event_type": "Arrival",
            "delay": 173159
        },
        {
            "journey_id": "ba6fde7a6575e2a1cdddfe450129f506",
            "station_id": "2d5cf828-d867-4031-863c-263d5ae10738",
            "planned_timestamp": 1708710374051,
            "actual_timestamp": 1708710654007,
            "event_type": "Departure",
            "delay": 365239
        },
        {
            "journey_id": "ba6fde7a6575e2a1cdddfe450129f506",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708710561974,
            "actual_timestamp": 1708710785109,
            "event_type": "Arrival",
            "delay": 396294
        },
        {
            "journey_id": "ba6fde7a6575e2a1cdddfe450129f506",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708710686682,
            "actual_timestamp": 1708711185720,
            "event_type": "Departure",
            "delay": 672197
        },
        {
            "journey_id": "ba6fde7a6575e2a1cdddfe450129f506",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708710861974,
            "actual_timestamp": 1708711015182,
            "event_type": "Arrival",
            "delay": 549502
        },
        {
            "journey_id": "ba6fde7a6575e2a1cdddfe450129f506",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708710929095,
            "actual_timestamp": 1708711273787,
            "event_type": "Departure",
            "delay": 740986
        },
        {
            "journey_id": "ba6fde7a6575e2a1cdddfe450129f506",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708711161974,
            "actual_timestamp": 1708711292587,
            "event_type": "Arrival",
            "delay": 680115
        },
        {
            "journey_id": "ba6fde7a6575e2a1cdddfe450129f506",
            "station_id": "422aaa2d-ed9c-439d-b3f3-745ebf4ec523",
            "planned_timestamp": 1708711244571,
            "actual_timestamp": 1708711389412,
            "event_type": "Departure",
            "delay": 694343
        },
        {
            "journey_id": "5324c0a04adab03947203bf97f4e12fc",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708711214711,
            "actual_timestamp": 1708711461150,
            "event_type": "Arrival",
            "delay": 246439
        },
        {
            "journey_id": "5324c0a04adab03947203bf97f4e12fc",
            "station_id": "c08613b5-6e92-4f78-9117-047dc5eb300d",
            "planned_timestamp": 1708711332286,
            "actual_timestamp": 1708711809806,
            "event_type": "Departure",
            "delay": 477520
        },
        {
            "journey_id": "5324c0a04adab03947203bf97f4e12fc",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708711514711,
            "actual_timestamp": 1708711706825,
            "event_type": "Arrival",
            "delay": 438553
        },
        {
            "journey_id": "5324c0a04adab03947203bf97f4e12fc",
            "station_id": "557d1fcd-a0f7-4124-a769-b058f378def7",
            "planned_timestamp": 1708711607838,
            "actual_timestamp": 1708711937157,
            "event_type": "Departure",
            "delay": 575758
        },
        {
            "journey_id": "5324c0a04adab03947203bf97f4e12fc",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708711814711,
            "actual_timestamp": 1708712068756,
            "event_type": "Arrival",
            "delay": 692598
        },
        {
            "journey_id": "5324c0a04adab03947203bf97f4e12fc",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708711911730,
            "actual_timestamp": 1708712202161,
            "event_type": "Departure",
            "delay": 728984
        },
        {
            "journey_id": "5324c0a04adab03947203bf97f4e12fc",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708712114711,
            "actual_timestamp": 1708712298026,
            "event_type": "Arrival",
            "delay": 875913
        },
        {
            "journey_id": "5324c0a04adab03947203bf97f4e12fc",
            "station_id": "740d7217-ce84-4251-a354-98ed9557f685",
            "planned_timestamp": 1708712261554,
            "actual_timestamp": 1708712739125,
            "event_type": "Departure",
            "delay": 1170169
        },
        {
            "journey_id": "5324c0a04adab03947203bf97f4e12fc",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708712414711,
            "actual_timestamp": 1708712686136,
            "event_type": "Arrival",
            "delay": 1147338
        },
        {
            "journey_id": "5324c0a04adab03947203bf97f4e12fc",
            "station_id": "86ad15d3-e032-4f6f-8cbf-7fd494a569b7",
            "planned_timestamp": 1708712577634,
            "actual_timestamp": 1708713101811,
            "event_type": "Departure",
            "delay": 1400090
        },
        {
            "journey_id": "5324c0a04adab03947203bf97f4e12fc",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708712714711,
            "actual_timestamp": 1708712745637,
            "event_type": "Arrival",
            "delay": 1178264
        },
        {
            "journey_id": "5324c0a04adab03947203bf97f4e12fc",
            "station_id": "6c0c50fc-e82e-409e-95ef-95f7af229a8d",
            "planned_timestamp": 1708712893607,
            "actual_timestamp": 1708713118504,
            "event_type": "Departure",
            "delay": 1372235
        },
        {
            "journey_id": "5324c0a04adab03947203bf97f4e12fc",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708713014711,
            "actual_timestamp": 1708713082189,
            "event_type": "Arrival",
            "delay": 1245742
        },
        {
            "journey_id": "5324c0a04adab03947203bf97f4e12fc",
            "station_id": "7ac83a23-d612-4627-9831-36cc8b533066",
            "planned_timestamp": 1708713154898,
            "actual_timestamp": 1708713471934,
            "event_type": "Departure",
            "delay": 1495300
        },
        {
            "journey_id": "5fefc9522fae67366052d089c4af6dfc",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708767557712,
            "actual_timestamp": 1708767660021,
            "event_type": "Arrival",
            "delay": 102309
        },
        {
            "journey_id": "5fefc9522fae67366052d089c4af6dfc",
            "station_id": "973e561f-5d49-4b92-8784-01ba02564e42",
            "planned_timestamp": 1708767638946,
            "actual_timestamp": 1708768027889,
            "event_type": "Departure",
            "delay": 388943
        },
        {
            "journey_id": "5fefc9522fae67366052d089c4af6dfc",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708767857712,
            "actual_timestamp": 1708767915321,
            "event_type": "Arrival",
            "delay": 159918
        },
        {
            "journey_id": "5fefc9522fae67366052d089c4af6dfc",
            "station_id": "ad6f98ac-d4d2-4fe5-b802-aa9549c81525",
            "planned_timestamp": 1708768000002,
            "actual_timestamp": 1708768127173,
            "event_type": "Departure",
            "delay": 229480
        },
        {
            "journey_id": "5fefc9522fae67366052d089c4af6dfc",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708768157712,
            "actual_timestamp": 1708768427929,
            "event_type": "Arrival",
            "delay": 430135
        },
        {
            "journey_id": "5fefc9522fae67366052d089c4af6dfc",
            "station_id": "09f7fba9-565c-4692-a5f2-4a3dea57d097",
            "planned_timestamp": 1708768241294,
            "actual_timestamp": 1708768660432,
            "event_type": "Departure",
            "delay": 579056
        },
        {
            "journey_id": "5fefc9522fae67366052d089c4af6dfc",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708768457712,
            "actual_timestamp": 1708768516134,
            "event_type": "Arrival",
            "delay": 488557
        },
        {
            "journey_id": "5fefc9522fae67366052d089c4af6dfc",
            "station_id": "6ca71b4f-df88-45c0-a665-22ef879d573b",
            "planned_timestamp": 1708768518737,
            "actual_timestamp": 1708768819341,
            "event_type": "Departure",
            "delay": 730739
        },
        {
            "journey_id": "5fefc9522fae67366052d089c4af6dfc",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708768757712,
            "actual_timestamp": 1708768806572,
            "event_type": "Arrival",
            "delay": 537417
        },
        {
            "journey_id": "5fefc9522fae67366052d089c4af6dfc",
            "station_id": "b584ca84-8385-4597-9848-ef72046a4ce2",
            "planned_timestamp": 1708768904766,
            "actual_timestamp": 1708769246450,
            "event_type": "Departure",
            "delay": 830241
        },
        {
            "journey_id": "5fefc9522fae67366052d089c4af6dfc",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708769057712,
            "actual_timestamp": 1708769077735,
            "event_type": "Arrival",
            "delay": 557440
        },
        {
            "journey_id": "5fefc9522fae67366052d089c4af6dfc",
            "station_id": "61f00068-8f64-4453-90ac-544e023b6d3d",
            "planned_timestamp": 1708769182504,
            "actual_timestamp": 1708769341048,
            "event_type": "Departure",
            "delay": 695961
        },
        {
            "journey_id": "5fefc9522fae67366052d089c4af6dfc",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708769357712,
            "actual_timestamp": 1708769593100,
            "event_type": "Arrival",
            "delay": 792828
        },
        {
            "journey_id": "5fefc9522fae67366052d089c4af6dfc",
            "station_id": "1e4cc1b0-c4c1-4ab1-b2b1-9498893b1349",
            "planned_timestamp": 1708769462903,
            "actual_timestamp": 1708769864351,
            "event_type": "Departure",
            "delay": 958888
        },
        {
            "journey_id": "5fefc9522fae67366052d089c4af6dfc",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708769657712,
            "actual_timestamp": 1708769813151,
            "event_type": "Arrival",
            "delay": 948267
        },
        {
            "journey_id": "5fefc9522fae67366052d089c4af6dfc",
            "station_id": "088c0160-03c3-44a7-b4ef-6e25f52713d8",
            "planned_timestamp": 1708769763631,
            "actual_timestamp": 1708769972151,
            "event_type": "Departure",
            "delay": 1001348
        }
    ]
}