require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const networks = {
  // polygonMumbai: {
  //   url: process.env.POLYGON_MUMBAI_RPC_URL || "UNSET",
  //   gasPrice: undefined,
  //   accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
  //   verifyApiKey: process.env.POLYGONSCAN_API_KEY || "UNSET",
  //   chainId: 80001,
  //   nativeCurrencySymbol: "MATIC",
  // },
  goerli: {
    url: process.env.GOERLI_RPC_URL || "UNSET",
    gasPrice: undefined,
    accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    verifyApiKey: process.env.ETHERSCAN_API_KEY || "UNSET",
    chainId: 5,
    nativeCurrencySymbol: "ETH",
    ZORA_NFT_CREATOR_V1: "0xb4d319458E489825Cea8e25b5e43742BCdAFc6dd",
    ZORA_NFT_CREATOR_PROXY: "0xb9583D05Ba9ba8f7F14CCEe3Da10D2bc0A72f519",
    ZORA_ERC721_TRANSFER_HELPER: "0xd1adAF05575295710dE1145c3c9427c364A70a7f",
    ZORA_FEE_MANAGER: "0xCf5E957CA7b77EC16611992d79f4E179132ad98C",
    EDITION_METADATA_RENDERER: "0x2f5C21EF9DdFf9A1FE76a1c55dd5112fcf2EfD39",
    DROP_METADATA_RENDERER: "0x5956Fd16c4d8c4b4711F2551971aBB7c2F4aF677",
    ERC721_DROP: "0x2093eFB737C07324D8b6c5807910EFF45045D987",
    FACTORY_UPGRADE_GATE: "0x942C03C7afE5c8118BDB728Aa06d1b894B1cD9A8",
    ZORA_NFT_CREATOR_PROXY: "0xb9583D05Ba9ba8f7F14CCEe3Da10D2bc0A72f519",
    ZORA_NFT_CREATOR_V1_IMPL: "0x4328cbDAD668E81B475766520E1004e6688D2949",
    WAIT_BLOCK_CONFIRMATIONS: 3,
    SAFE_IMPLEMENTATION: "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552",
  },
  polygonMumbai: {
    url: process.env.POLYGON_MUMBAI_RPC_URL || "UNSET",
    gasPrice: undefined,
    accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    verifyApiKey: process.env.POLYGONSCAN_API_KEY || "UNSET",
    chainId: 80001,
    nativeCurrencySymbol: "MATIC",
    SAFE_IMPLEMENTATION: "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552",
    WAIT_BLOCK_CONFIRMATIONS: 5,
  },
  optimisticGoerli: {
    url: process.env.OPTIMISM_GOERLI_RPC_URL || "UNSET",
    gasPrice: undefined,
    accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    verifyApiKey: process.env.OPTIMISTIC_API_KEY || "UNSET",
    chainId: 420,
    SAFE_IMPLEMENTATION: "0x69f4D1788e39c87893C980c06EdF4b7f686e2938",
    DROP_METADATA_RENDERER: "0xCe6B190956D73dA045bA348743E4C1cb6652f37f",
    EDITION_METADATA_RENDERER: "0x169007EF8fF4d2a225f361654e4B8280910fD8FC",
    ERC721DROP_IMPL: "0x61Cb091f8EC70029E393D31BA8F6D533c1308408",
    FACTORY_UPGRADE_GATE: "0x9B414A3F7872bdd2E6513689214BD2Debbe48340",
    ZORA_NFT_CREATOR_PROXY: "0x3C1ebcF36Ca9DD9371c9aA99c274e4988906c6E3",
    ZORA_NFT_CREATOR_V1_IMPL: "0xbe83E15eED1FD666C241960f50549bE9D639743c",
    WAIT_BLOCK_CONFIRMATIONS: 5,
  },
};

module.exports = {
  networks,
};
