const entidadController = require('../controller/EntidadController')

describe("entidadController()",  () => {
    it("lista de entidades deberia retorna estado 0", async () => {
        //Testing a boolean
        let res = await entidadController.obtenerRecurso('people','listarTodos',0);
      
        expect(res.estado).toEqual(0);
        //Another way to test a boolean
        //expect(entidadController.obtenerRecurso()).toEqual(true);
    });
});