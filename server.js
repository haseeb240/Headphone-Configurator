const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;


/* =====================================================
   CORS
   Allows frontend running on another port
===================================================== */

app.use(cors());


/* =====================================================
   EXPRESS JSON MIDDLEWARE
===================================================== */

app.use(express.json());


/* =====================================================
   CUSTOM MIDDLEWARE
   Logs HTTP METHOD and URL
===================================================== */

app.use(function (req, res, next) {

    console.log(
        `[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`
    );

    next();

});


/* =====================================================
   PREDEFINED PRODUCT DATA
===================================================== */

const product = {

    id: 101,

    name: "SoundX Pro Headphones",

    price: 199.99,

    category: "Wireless Headphones",

    description:
        "Premium wireless headphones with active noise cancellation, immersive bass and all-day comfort.",

    colors: [
        "Midnight Black",
        "Pearl White",
        "Ocean Blue",
        "Ruby Red"
    ],

    variants: [
        "Standard",
        "Pro",
        "Studio"
    ]

};


/* =====================================================
   GET PRODUCT API
===================================================== */

app.get(
    "/api/product",
    function (req, res) {

        console.log(
            "GET /api/product requested"
        );


        res.json({

            success: true,

            product: product

        });

    }
);


/* =====================================================
   POST CONFIGURATION
===================================================== */

app.post(
    "/api/configuration",
    function (req, res) {

        console.log(
            "Received configuration:"
        );

        console.log(req.body);


        const configuration =
            req.body;


        if (!configuration.productName) {

            return res.status(400).json({

                success: false,

                message:
                    "Product name is required."

            });

        }


        console.log(
            "Configuration successfully received by backend."
        );


        res.json({

            success: true,

            message:
                "Configuration received successfully by Express backend.",

            receivedData:
                configuration

        });

    }
);


/* =====================================================
   HEALTH CHECK
===================================================== */

app.get(
    "/api/status",
    function (req, res) {

        res.json({

            server: "SoundX Express Server",

            status: "running",

            port: PORT

        });

    }
);


/* =====================================================
   START SERVER
===================================================== */

app.listen(
    PORT,
    function () {

        console.log(
            "======================================"
        );

        console.log(
            "SoundX Backend Server Started"
        );

        console.log(
            `Server: http://localhost:${PORT}`
        );

        console.log(
            "GET:  /api/product"
        );

        console.log(
            "POST: /api/configuration"
        );

        console.log(
            "======================================"
        );

    }
);