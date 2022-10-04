import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x57f9D64EFBf34A2ECDBf3411c3d860aF48067DA6"
);

export default instance;
