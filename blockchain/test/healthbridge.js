const HealthBridge = artifacts.require("HealthBridge");

contract("HealthBridge", (accounts) => {
  it("should register a patient", async () => {
    const healthBridgeInstance = await HealthBridge.deployed();

    // Register a patient
    await healthBridgeInstance.registerPatient("John Doe", 30, "No medical history", { from: accounts[0] });

    // Get the patient data
    const patient = await healthBridgeInstance.getPatient(accounts[0]);

    assert.equal(patient[0], "John Doe", "The name of the patient does not match");
    assert.equal(patient[1].toNumber(), 30, "The age of the patient does not match");
    assert.equal(patient[2], "No medical history", "The medical history of the patient does not match");
  });
});