import { Production } from "./package/Controllers/ProductControllers";
const server = Bun.serve({
    port: 3000,
    async fetch(request: Request) {
        const path = new URL(request.url).pathname;
        const productionInstance = new Production(request) 
        if (request.method === "GET" && path === "/api/v1") return Response.json({ some: "buns", for: "you" });
        if (request.method === "GET" && path === "/product") return productionInstance.listdata();
        if (request.method === "POST" && path === "/product/create") return productionInstance.updatedata(request);
        
        return new Response(("{page:'not fuound'}"), { status: 404 });
    }
});
console.log(`Listening on localhost:${server.port}`);