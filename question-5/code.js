var User = function (name, gender, age) {

    if (!(this instanceof User)) {
        return new User(name, gender, age);
    }

    this.name = name;
    this.gender = gender
    this.age = age;
}

var users = [
    User('Albert Fiati-Kumasenu', 'Male', 21),
    User('Eileen Ackabah', 'Female', 27),
    User('Papa Yaw Owusu-Ankoma', 'Male', 45),
    User('Naydia Frempone', 'Female', 52),
    User('Berth Aba T.', 'Female', 12),
    User('Lawrence Poku', 'Male', 71),
    User('Joel Funu', 'Male', 32),
    User('Selma Adu Twumwaa', 'Female', 10),
]

var displayUserDetails = function (users) {
    users.forEach(function (user, index) {
        console.log(`>${index + 1}< ${user.name} is a ${user.age} old ${user.gender}`);
    });
}

displayUserDetails(users);
