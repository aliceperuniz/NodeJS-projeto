import fastify from "fastify";

const app = fastify();

app.get('/hello', () => {
  return "Hello World" 
});

app.listen({
    port: 3001,
}).then(() => {
    console.log("HTTP server is running on port 3333");
})
