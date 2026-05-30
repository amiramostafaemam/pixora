import ImageKit , {toFile} from "@imagekit/nodejs";

// _client is written in that way because it's a private variable and should not be accessed outside of this module
let _client:InstanceType<typeof ImageKit> | null = null;

//this is the singleton pattern to create a single instance of the ImageKit client and reuse it across the application so that we don't accidentally create multiple instances of the client and cause memory leaks or other issues.
function getClient() {
    if (!_client) {
        _client = new ImageKit({    
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "", 
        });
    }
    return _client;
}
  

export async function uploadBufferToImageKit(params: { buffer: Buffer, fileName: string, folder: string, mimetype: string }) {
    const client = getClient();
    const file = await toFile(params.buffer, params.fileName,{type: params.mimetype});
    const result = await client.files.upload({file,fileName: params.fileName, folder: params.folder, useUniqueFileName: true});
    return {url: result.url!, fileId: result.fileId!};
}
  