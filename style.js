// Login Button Event Handler
const loginBtn = document.getElementById('login');
		loginBtn.addEventListener('click',function(){
			// console.log('click marse');
			const loginArea = document.getElementById('login-area');
			loginArea.style.display = 'none';
			const transactionArea = document.getElementById('transaction-area');
			transactionArea.style.display = 'block';
		});

// Deposit Button Event Handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click',function(){
	const depositNumber = getInputNumber('depositAmount');
	
	if (depositNumber < 0){
		alert('Deposit ammout cannot be negative!');
	}else if(!depositNumber){
		alert('Deposit amount cannot be empty!');
	} else{
		const check = confirm("Are you sure deposit this amount?"  + "\n" + '$'+depositNumber);
		if (check) {
			updateSpanText('currentDeposit',depositNumber);
			updateSpanText('currentBalance',depositNumber);
			document.getElementById('depositAmount').value = "";
		}
	}
	
})
// withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click',function(){
	const withdrawNumber = getInputNumber('withdrawAmount');
	// console.log(withdrawtAmount);
	if (withdrawNumber < 0){
		alert('Withdraw ammout cannot be negative!');
	}else if(!withdrawNumber){
		alert('Withdraw amount cannot be empty!');
	} else{
		const check = confirm("Are you sure withdraw this amount?"  + "\n" + '$'+withdrawNumber);
		if (check) {
			updateSpanText('currentWithdraw',withdrawNumber);
			updateSpanText('currentBalance', -1 * withdrawNumber);
			document.getElementById('withdrawAmount').value = "";
		}
	}
})
function getInputNumber(id){
	const amount = document.getElementById(id).value;
	const amountNumber = parseFloat(amount);
	return amountNumber;
}
function updateSpanText(id,depositNumber){
	const current = document.getElementById(id).innerText;
	const currentNumber = parseFloat(current);
	const totalBalance = depositNumber + currentNumber;
	document.getElementById(id).innerText = totalBalance;
}






// Withdraw Button Event Handler
// const withdrawButton = document.getElementById('addWithdraw');
// withdrawButton.addEventListener('click',function(){
// 	const withdrawAmount = document.getElementById('withdraAmount').value;
// 	const withdraNumber = parseFloat(withdrawAmount);

// 	const currentWithdraw = document.getElementById('currentWithdraw').innerText;
// 	const currentWithdrawtNumber = parseFloat(currentWithdraw);
// 	const totalWithdraw = withdraNumber + currentWithdrawtNumber;
// 	document.getElementById('currentWithdraw').innerText = totalWithdraw;
// 	// document.getElementById('withdrawAmount').value = "";

// 	const currentBalance = document.getElementById('currentBalance').innerText;
// 	const currentBalanceNumber = parseFloat(currentBalance);
// 	const newBalance = currentBalanceNumber - withdraNumber;
// 	document.getElementById('currentBalance').innerText = newBalance;

	// document.getElementById('withdrawAmount').value = "";
// });