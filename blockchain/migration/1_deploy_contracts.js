const HealthBridge = artifacts.require("HealthBridge");

module.exports = function (deployer) {
  deployer.deploy(HealthBridge);
};