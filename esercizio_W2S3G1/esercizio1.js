class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.location = location
  }

  compareAge(otherUser) {
    if (this.age < otherUser.age) {
      return `${otherUser.firstName} è più vecchio di ${this.firstName}.`
    } else if (this.age > otherUser.age) {
      return `${otherUser.firstName} è più giovane di ${this.firstName}.`
    } else {
      return `${otherUser.firstName} è della stessa età di ${this.firstName}.`
    }
  }
}

x = new User('Carlos', 'Sainz', 29, 'Madrid')
y = new User('Charles', 'Leclerc', 26, 'Monte Carlo')
z = new User('Max', 'Verstappen', 26, 'Hasselt')
console.log(x.compareAge(y))
console.log(y.compareAge(z))
console.log(z.compareAge(x))
