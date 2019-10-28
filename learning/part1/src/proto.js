function Person(n ,a){
    this.name = n;
    this.age = a;
}

Person.prototype.setOlder = function () {
    this.age += 1;
};
Person.prototype.getAge = function () {
    return this.age;
}

var gomu = new Person('gomu', 30);

Person.prototype.age = 100;
gomu.__proto__.setOlder();
gomu.__proto__.getAge();

gomu.setOlder();
gomu.getAge();

