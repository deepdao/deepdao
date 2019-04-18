function executeTransaction(){
	window.web3.eth.contract(ABI).at("0xa1e3c1b3070d4a86dd9fc8bd3480d5f6140a23b8")
            .vote(Number(document.querySelector("#name").value), {
                from: web3.eth.accounts[0]
            }, (res) => {
                console.log('res', res)
            });
	return 1;
}

function check(){
	window.web3.eth.contract(ABI).at("0xa1e3c1b3070d4a86dd9fc8bd3480d5f6140a23b8").elections(Number(document.querySelector("#name").value), {
                from: web3.eth.accounts[0]
            }, (res) => {
		window.web3.eth.contract(ABI).at("0xa1e3c1b3070d4a86dd9fc8bd3480d5f6140a23b8").issuedTokens({
        		        from: web3.eth.accounts[0]
		            }, (res2) => {
				alert(3 +"/"+ 13);
        		        console.log('res2', res2)
        	    });

                console.log('res', res)
            });
}
