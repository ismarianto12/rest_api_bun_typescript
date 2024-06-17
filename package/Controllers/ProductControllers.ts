export class Production {
    public request: Request;
    constructor(request: Request) {
        this.request = request; // Store the request object for potential future use
    }
    async listdata(): Promise<Response> {
        const dataList = [];
        return Response.json({ success: true, data: this.request.body });
    }
    async updatedata(request: Request): Promise<Response> {
        const data: any = await request.json();
        const { string: nama_product, string: kode } = data;
        // console.log("Received JSON:", nama_product, kode);
        // action service.product.create(data)
        // example payload  
        // {
        //     "nama_product":"adasd","kode":"SABUN BUNDA BUNDA RAHMA"
        // }
        return Response.json({ success: true, data: "Data updated successfully", items: data });
    }
    async delete(id: BigInteger): Promise<Response> {
        return Response.json({ success: true, data: "Data deleted successfully" });
    }
}
