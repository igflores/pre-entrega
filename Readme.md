## Acerca de la entrega
```
En la pre-entrega van a poner en practica lo aprendido durante las primeras 6 clases del curso. Su objetivo es que inicien el proyecto que será luego la entrega final del curso.
```

## Requisitos
```
- Deberá ser un proyecto nuevo y único
- Deberá contar con una baseURL
- Deberá poder iniciarse colocando "npm test"
- Deberán utilizar fixtures
- Deberán utilizar before para los fixtures
- Deberán utilizar una clase diferente para cada pagina que utilicen
- Deberán utilizar cssSelectors y xpaths
- La clase 'productsPage' debe tener un único método que agregue los productos e indicar el producto a agregar como parámetro.
- La clase 'shoppingCartPage' debe tener un único método para verificar los productos y otro unico metodo para verificar el precio y debe relacionar el precio al producto. Lo mismo con el quantity y con totalPrice

```

## Tests
```
- Ingresar en la pagina de pushing IT.
- Ingresar al sistema con datos validos.
- Dirigirse al modulo "Online Shop".
- Elegir 1 productos a eleccion y agregarlo 2 veces
- Elegir otro producto a eleccion y agregarlo 1 vez
- Verificar el nombre y precio, precio total y cantidad de los dos productos.
- Hacer click en "Show total price" y verificar el precio acumulado de los 2 productos
```

## Información importante
- Todo deberá ser realizado en un único archivo en una única instancia de test (un único it)
- En un archivo fixture deberán colocar el producto que quieren elegir con su precio unitario
, cantidad y su nombre para luego utilizarlo para comprobar nombre, cantidad, precio
unitario y precio total en el carrito de compras
- Colocar usuario y contraseña como variable de entorno