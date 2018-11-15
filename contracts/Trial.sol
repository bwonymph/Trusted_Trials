 pragma solidity ^0.4.24;

//*******INFO**********

//Trial contract indicates data sent in from the creator to database
//People can peer review and indicate review of drug data/deem if replicable
//This data can be stored and derived straight from IOT Machines


contract Trial_Data {
    struct LegiFile {
        string trial;
        string data;
        string hashCode;
        string creator;
        string peer;
        uint   timeStamp;
        bool   replicated;
    }

    mapping (address => Ledger_Data) public Ledger_Data;

    modifier notReplicated() {
        require(!Ledger_Data[msg.sender].replicated,
                "Data has been Replicated"); //Let's know if data has been replicated
        _;
    }

    event dataCreated(address indexed creator, string trial, string hashCode, uint256 timeStamp);

    event peerReviewed(address indexed reviewer, string trial, string hashCode, string peer, uint256 timeStamp);
    
    function peerReview(string trial, string hashCode, string peer)
        public notReplciated {
        require(bytes(trial).length > 0);
        require(bytes(hashCode).length > 0);
        require(bytes(peer).length > 0);

        Ledger_Data[msg.sender] = Ledger_Data(trial, hashCode, peer, now, true);
        emit peerReviewed(msg.sender, trial, hashCode, peer, now);
    }
}
