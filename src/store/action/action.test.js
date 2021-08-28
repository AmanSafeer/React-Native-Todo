const action = require("./action")
// @ponicode
describe("action.add", () => {
    test("0", () => {
        let callFunction = () => {
            action.add("Chief Product Officer")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            action.add("Sales")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            action.add("Data Scientist")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            action.add("Software Engineer")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            action.add("Marketing")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            action.add(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("action.deleteOne", () => {
    test("0", () => {
        let callFunction = () => {
            action.deleteOne("4.0.0-beta1\t", "a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            action.deleteOne("v1.2.4", "a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            action.deleteOne("4.0.0-beta1\t", 987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            action.deleteOne("v4.0.0-rc.4", 12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            action.deleteOne("1.0.0", 987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            action.deleteOne(undefined, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("action.deleteAll", () => {
    test("0", () => {
        let callFunction = () => {
            action.deleteAll()
        }
    
        expect(callFunction).not.toThrow()
    })
})
