function executeTransaction(){
	window.web3.eth.contract(ABI).at("0x0").reviewController
            .submit(hash, {
                from: web3.eth.accounts[0],
                value: web3.toWei(0.02)
            }, (res) => {
                console.log('res', res)
            });
	return 1;
}
