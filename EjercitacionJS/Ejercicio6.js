const carrito = {
    productos: [
        {
            nombre: 'papel higienico',
            unidades: 4,
            precio: 5
        },
        {
            nombre: 'chocolate',
            unidades: 2,
            precio: 1.5
        }
        ],
    }

    get precioTotal() {
        let precioAcumulado = 0;
         
        for (producto of this.productos){
            precioAcumulado += producto.precio
        };
        
        return precioAcumulado;
    }

    console.log(carrito.precioTotal);