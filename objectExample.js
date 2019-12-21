const firstObject = {
  name: 'first',
  type: 'object',
  operation: (x) => {
    console.log(x);
    return 12;
  }
}

operationValue = firstObject.operation('Sample operation')
console.log(operationValue)
/*
while(n > 0) {
		int lastDigit = n % 10;
//		System.out.print(lastDigit);
		 
		 sum = (sum*10 )+ lastDigit;
		 n = n / 10;
		
	}
*/