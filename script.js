//1
let items = document.querySelectorAll('li');
let arr = []
for (let item of items) {
	arr.push(item.textContent)

}
let js = JSON.stringify(arr);

console.log(js);
//2
let user = '["user1", "user2", "user3", "user4", "user5"]';
user = JSON.parse(users);
user.push('user6');
user = JSON.stringify(user);
console.log(user);
//3
let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

let user4 = {
	"name": "user4",
	"age": 28,
	"salary": 4000
}
info = JSON.parse(info);
info.push(user4);
info = JSON.stringify(info);
console.log(info);