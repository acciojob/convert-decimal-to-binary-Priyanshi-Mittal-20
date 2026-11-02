function decimalToBinary(num) {
  // your code here
	if(num==0)
	{
		return 0
	}
	num=Number(num)
	let binary=""
	while(num>0){
		let rem=num%2
		binary=rem+binary
		num=parseInt(num/2)
	}
	return binary
}
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));
