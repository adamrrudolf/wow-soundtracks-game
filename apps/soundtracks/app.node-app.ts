import { NodeAppOptions, DeployContext } from "@teambit/node";
/** 
    const deployFunction = async (deployContext: DeployContext) => {
    const { entry } = deployContext;
    // bundle the entry file with webpack
    // upload the the file to server
    };
*/
export const SoundtracksApp: NodeAppOptions = {
  name: "server",
  entry: require.resolve("./server.app-root"),
  // deploy: deployFunction,
};

export default SoundtracksApp;
