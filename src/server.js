"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = require("fastify");
var app = (0, fastify_1.default)();
app.get('/hello', function () {
    return "Hello World";
});
app.listen({
    port: 3001,
}).then(function () {
    console.log("HTTP server is running on port 3333");
});
