module.exports = {
    openapi: "3.0.0",
    info: {
        title: "Booking System Express API with Swagger",
        version: "0.1.0",
        description:
            "This is a simple joint booking system",
        license: {
            name: "MIT",
            url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
            name: "David Sampaio",
            email: "dms.120@hotmail.com",
        },
    },
    servers: [
        {
            url: "http://localhost:8083/",
        },
    ],
}