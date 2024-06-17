import { Production } from "./package/Controllers/ProductControllers";
const server = Bun.serve({
    port: 3000,
    async fetch(request: Request) {
        const path = new URL(request.url).pathname;

        //routing for product 
        const productionInstance = new Production(request)
        if (request.method === "GET" && path === "/testing") return productionInstance.listdata(request);
        if (request.method === "POST" && path === "/api/post") return productionInstance.updatedata(request);
        
        return new Response(("{page:'not fuound'}"), { status: 404 });
    }
});
console.log(`Listening on localhost:${server.port}`);