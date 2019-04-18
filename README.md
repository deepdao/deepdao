# deepDAO

## Instructions
1. Deploy the smart contracts (voting.sol is currently deployed on Rinkeby at 0xa1e3c1b3070d4a86dd9fc8bd3480d5f6140a23b8)
2. Initialize the smart contracts
	1. Distribute the voting tokens by calling `issueTokens(address receiver, uint num)` where `receiver` is the address that will be given the tokens and `num` is the amount of tokens that will be minted for that address. You will need to be the contract owner (own the adress that deployed the contract) to perform this action, if you're not just deploy a new instance of the contract and use that contract instead (you'll be the owner of the new contract). 
	2. Create an election by calling `createElection(address newAddress)` where `newAddress` is the address of a smart contract that deepDAO will be upgraded to (replaced by) if the election is won (>51% of all the distributed tokens vote for it). Other elections can be created by calling the same function again.
3. Spin up a web server to serve static files from the web directory (`cd web && python -m SimpleHTTPServer`)
4. Open the voting app on your browser ([localhost:8000](http://localhost:8000))
5. Use the app
	- You can check your voting token balance in Metamask by adding a new ERC20 token with the address where voting.sol has been deployed. The contract behaves like an ERC20 that has transfers disabled so any product that can interact with ERC20 tokens should work too. It is also possible to just obtain the token balance of an address by just calling `balanceOf(address owner)`, per the ERC20 standard.
	- You can vote on a proposal by just entering the election id in the textbox (id that you get after creating an election) and clicking on the Vote button. You will need to be logged in Metamask
	- If 51% of all the tokens distributed have voted for an upgrade, anyone can enforce the decision (upgrade the contract) by calling `finalize(uint id)` where `id` is the id of the election to enforce
