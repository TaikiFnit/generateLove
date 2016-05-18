
const unite = (str1, str2) => {
	return String.fromCharCode(str1.charCodeAt(0) & str2.charCodeAt(0));	
}

console.log(unite('生' , '死'));