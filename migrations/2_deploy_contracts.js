//var SimpleStorage = artifacts.require("./SimpleStorage");
var MarketPlace = artifacts.require("./MarketPlace.sol");

module.exports = function(deployer) {
  //deployer.deploy(SimpleStorage);
  deployer.deploy(MarketPlace);
};
