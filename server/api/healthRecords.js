const Web3 = require('web3');
const contract = require('@truffle/contract');
const HealthRecordArtifact = require('../../blockchain/build/contracts/HealthRecord.json');

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
const HealthRecord = contract(HealthRecordArtifact);
HealthRecord.setProvider(web3.currentProvider);

async function healthRecords(req, res) {
    const { patientName, data } = req.body;

    const accounts = await web3.eth.getAccounts();
    const instance = await HealthRecord.deployed();

    await instance.addRecord(patientName, data, { from: accounts[0] });
    
    res.send({ message: "Record added successfully" });
}

module.exports = healthRecords;