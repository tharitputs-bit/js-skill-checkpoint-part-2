// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const nameOver17Letters = users.map(user => user.name).filter(name => name.length > 17)
        console.log(nameOver17Letters)
    } catch(error) {
        console.log('Something went wrong:', error.message);
    }
}
getUsers();