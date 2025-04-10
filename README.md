# 🛍️ Frontend de Ventas de Productos (React + Vite + Redux)

Este proyecto es la interfaz de usuario de un sistema de ventas de productos. Está construido con **React**, **Vite**, **Redux Toolkit**, y estilos personalizados con **Bootstrap** y CSS nativo.

> 📡 Este frontend está diseñado para **consumir los servicios REST** proporcionados por el backend disponible en:  
> 🔗 [`product-sales-backend`](https://github.com/JoseCode-CO/product-sales-backend)

---

## 🚀 Funcionalidades

- Visualización de productos disponibles.
- Agregar productos al carrito.
- Procesar pedidos y generar transacciones.
- Interacción fluida con API REST (NestJS + PostgreSQL).
- Interfaz moderna y responsiva.
- Gestión de estado global con Redux Toolkit.

---

## ⚙️ Tecnologías Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://axios-http.com/) (para peticiones HTTP)
- CSS personalizado

---

## 🗂️ Estructura del Proyecto

🌐 Conexión al Backend
Este frontend está conectado al backend desarrollado en NestJS, que provee endpoints REST para:

Listado de productos

Creación de órdenes

Registro de transacciones

Gestión del stock

🔗 Repositorio del backend: product-sales-backend

Asegúrate de que el backend esté corriendo localmente o en un entorno accesible, y actualiza las URLs base en tus servicios de axios (ejemplo en src/services/productService.ts):

🧠 Personalización
El archivo index.css contiene estilos adaptados para una UI oscura, tarjetas personalizadas y botones destacados. Puedes editarlo libremente para modificar la apariencia.

🧪 Pruebas
 Puedes integrar herramientas como Jest y React Testing Library para pruebas unitarias de componentes.

🖼️ Vista previa 

📜 Licencia
MIT - Libre de usar, modificar y distribuir con atribución.