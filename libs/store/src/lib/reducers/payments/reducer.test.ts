import { suma } from './reducer'

describe("Deberia ejecutar el test", () => {
    it("Mi test de prueba", () => {
        let result = suma(3, 4);
        expect(result).toBe(7);

        result = suma(3, 2);
        expect(result).toBe(5);
    })
})