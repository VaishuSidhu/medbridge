// contracts/HealthBridge.sol
pragma solidity ^0.8.0;

contract HealthBridge {
    struct MedicalRecord {
        string patientName;
        string doctorName;
        string diagnosis;
        string treatment;
        string date;
    }

    mapping(address => MedicalRecord[]) private records;

    function addRecord(
        string memory _patientName,
        string memory _doctorName,
        string memory _diagnosis,
        string memory _treatment,
        string memory _date
    ) public {
        records[msg.sender].push(
            MedicalRecord(_patientName, _doctorName, _diagnosis, _treatment, _date)
        );
    }

    function getRecords() public view returns (MedicalRecord[] memory) {
        return records[msg.sender];
    }
}
