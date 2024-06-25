# E-Commmerce de libros - App React

Una aplicación web donde se pueden comprar libros. Desrrollada con React + Vite

## Funcionalidades principales
- Lista los productos traidos desde la base de datos Firebase
- Con un selector se puede seleccionar la categoria a filtrar
- Al hacer click en el botón "Ver más" se navega a la pantalla de detalles del producto.
- Dentro de la pantalla de detalles del producto se puede seleccionar la cantidad y agregarlo al carrito.
- Al agregarlo al carrito, te redirige al carrito para poder finalizar la compra o eliminar el producto del carrito.
- Al momento de proceder a la compra saldra un cartel consultando si de verdad desea realizar la compra y redirige a la pantalla del formulario.
- Al momento de completar el formulario, al costado tiene listado los productos que se estan comprando.
- Al realizar de manera exitosa la compra, saldrá un cartel con el id de la venta y le redirige a la pagina donde se lista los id de las ventas.


### Captura de pantalla de la app

<img src="./screenshot/gif-app.gif" width="800"> 


### Tecnologías Utilizadas
- **React Router DOM:** Gestiona la navegación entre pantallas.
- **React:** Framework para construcción de interfaces.
- **Firebase:** Realiza operaciones de lectura/escritura en la base de datos.
- **Bootstrap React:** Utilizado para aspectos visuales y que sea responsive.
- **SweetAlert2:** Utilizado para que salgan alertas luego de apretar ciertos botones. 
- **Fontawesome:** Utilizado para iconos.

### Instalación

1. Clonar el repositorio : `git clone https://github.com/NicolasSMoralesRomero/entrega--react--js`
2. Instale las dependencias: `npm install`
3. Ejecute la aplicación: `npm run dev`