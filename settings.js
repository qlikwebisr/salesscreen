//settings file
export const config = {
    period: 60, //in seconds
    tenant: "spdataisreal.eu.qlikcloud.com",
    webIntegrationId: "_5d4e5o5y9SyCP-0kUrr7oyZyLpKylvA",
    sheets: [
        // //New Q4 screen
        // {
          //  "appId": "97b6233b-2ce6-43c1-9705-fce4897232a1",
          //  "sheetId": "gYUVs",
        // },
        //Move To Cloud
        {
            "appId": "984431d1-390d-4339-bd2b-831a5f1c553b",
            "sheetId": "53c943ed-65d9-4090-8618-675ff85ef1de",
        },
        //New Data screen
        {
            "appId": "97b6233b-2ce6-43c1-9705-fce4897232a1",
            "sheetId": "35ea9b0b-79f8-4012-b7c4-c7ae35ab40a0",
        },
        //New Y/Q-TD screen
        {
            "appId": "97b6233b-2ce6-43c1-9705-fce4897232a1",
            "sheetId": "8f6e1511-bf17-4e00-a846-cb457b909352",
        }, 
        //New AM screen
        {
            "appId": "feaf2f99-bfde-4f1d-80f8-7aa7e9b9e938",
            "sheetId": "QaNThq",
        },
        //New BDR screen
        {
            "appId": "feaf2f99-bfde-4f1d-80f8-7aa7e9b9e938",
            "sheetId": "vjC",
        },
    ]
}
