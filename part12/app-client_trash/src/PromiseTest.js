class PizzaHut {
    order(orderSheet) {
        // return {
        //     name: orderSheet.name,
        //     ingredients: ['치즈', '햄', '피망']
        // };
        const pizza = {
            name: orderSheet.name,
            ngredients: ['치즈', '햄', '피망']
        }
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(pizza);
                //reject('죄송!!!')
            },5000);
        });
    }
}

class Person {
    eat(food) {
        console.log(`${food}을/를 냠냠`);
    }
}
// class 문법 과 동일 한 방법이다.
// function Person() {
//
// }
// Person.prototype.eat = function (food) {
//
// }

const person = new Person();
const pizzaHut = new PizzaHut();
pizzaHut.order({name:'페페로니'}).then((pizza)=>{
    person.eat(pizza);
}).catch(err => {
    console.log(err)
})
console.log('주문완료')
// person.eat(pizza);