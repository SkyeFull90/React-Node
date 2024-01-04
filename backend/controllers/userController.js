const getUsers = (req, res) => {
    res.send([{
        id: 1,
        name: 'John',
        age: 22
    },
    {
        id: 2,
        name: 'Jane',
        age: 23
    }]);
};
module.exports = {
    getUsers
};