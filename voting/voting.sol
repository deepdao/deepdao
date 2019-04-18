pragma solidity ^0.5.0;

contract Voting{
	uint[] elections public;
	address[] newAddresses public;
	mapping(adress=>uint) balances public;
	uint issuedTokens public;
	address proxyAddress=address("0x87bf8638e750132b9ede7de6de2fdcec4d0fc502");
	address owner;
	
	event newVote(uint curr, uint total);

	function balanceOf(address _owner) public view returns (uint256) {
		return balances[_owner];
	}

	constructor() public{
		owner=msg.sender;
	}
	
	function createElection(address newAddress) public returns uint{
		elections.push(0);
		newAddresses.push(newAddress);
		return elections.length-1;
	}

	function vote(uint id) public {
		require(id<elections.length);
		uint votes=balances[msg.sender];
		require(votes>0);
		balances[msg.sender]=0;
		elections[id]+=votes;
		newVote(elections[id], issuedTokens);
	}

	function finalize(uint id) public{
		require(id<elections.length);
		require(elections[id]>issuedTokens/2);
		proxyAddress.upgradeTo(newAddresses[id]);
	}

	function issueTokens(address receiver, uint num) public{
		require(owner==msg.sender);
		balances[receiver]+=num;
		issuedTokens+=num;
	}

}
