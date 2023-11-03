// destructuring

{
    const user = {
        id: 12,
        name: {
            firstName: 'md',
            middleName: 'tufael',
            lastName: 'khan'
        },
        contactNo: '0150000000',
        address: 'Kasem Bazar'
    }
    const {contactNo, name: {middleName}} = user;

    // array destructuring
    const myFriends = ['habib', 'labib', 'hasan', 'sujoy', 'sonjoy', 'mehedi', 'lokman', 'sadi']
    const [a, b, c, d, ...rest] = myFriends;

}