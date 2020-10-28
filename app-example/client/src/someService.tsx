export class SomeService {

    static getAll() {
        fetch("localhost:9000/users")
            .then(res => console.log(res))
            .then(err => console.log(err))
    }
}

export default SomeService;