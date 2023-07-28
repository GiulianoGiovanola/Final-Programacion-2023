# Examen Prog Multimedial 3ro ( y 4to por excepción ) (Julio 2023)

El objetivo de este examen es que el alumno pueda demostrar conocimientos sobre: ES6 (template literals, arrow functions, destructuring, map, etc), ReactJs, NextJs (next/router, next/link, next/image), useState, useEffect, async/await, axios.
Se valora el uso de buenas prácticas, sugar syntax, eficiencia en el código, reutilización de código, captura de errores, UX/UI, legibilidad y - USO DE PADDINGS/MARGINS! XD - 

Ejemplo de búsqueda de show: ```https://api.tvmaze.com/search/shows?q=batman```

## Tiempo máximo de resolución
3 hrs.

## Objetivos

1. ### AppContext
- Dentro de AppContext completar las funciones: 
- - handleGetShows ( async (query: string)=> void; ). Axios GET a: ```https://api.tvmaze.com/search/shows?q=[query]```
- - handleGetSingleShow ( async (id: string)=> void; ). Axios GET a: ```https://api.tvmaze.com/shows/[id]```
- Se deben completar los valores correspondientes del state y manejar los loadings. Utilizar try/catch en las llamadas.
- Los valores almacenados en el state del context y sus funciones se deben utilizar en los demás componentes mediante el hook useAppContext(). Ej: Import { useAppContext } from '../../contexts/AppContext'


2. ### Component Search
- Utilizar el formulario dado para realizar requests a handleGetShows pasando como parametro el valor del query en el metodo onSubmit.
- Desplegar este componente a modo de section en homeContainer, bajo el titulo de "Search your show"


3. ### Component Results
- Crear un functional component llamado Featured Shows, el cual contenga una grilla (pueden utilizar .grid y .col_4 incluidas en grid.css) de 3 columnas, la cual muestre 3 Shows por fila. (Utilizar el componente Show del punto siguiente)
- Incluir el title (h2) "Search results"
- Desplegar este componente a modo de section en homeContainer debajo de Search.


4. ### Component Show
- Crear un functional component llamado Show que reciba como props los datos necesarios a desplegar (no olvidar el id). Usar destructuring.
- El mismo funcionará a modo de card, mostrando: image?.original, name, genres, rating?.average, + un dato a elección. 
- Los estilos para el maquetado del compoenente deben estar en un archivo llamado ```Show.module.css``` en la carpeta del componente.
- Incluir un Link (next/link) a modo de botón que lleve a /shows/[id].


5. ### Page /shows/[id] y ShowContainer
- Crear una página ```/shows/[id].js``` que obtenga mediante Next Router (useRouter, router.query) el id correspondiente al show y al montarse, llame a la funcion handleGetSingleShow. Esta vez la información a mostrar del show será: name, language, status, ended (se puede formatear la fecha utilizando day.js), rating, image?.original, summary.
- Utilizar el useEffect dado (no remover la linea ```//eslint-disable-next-line react-hooks/exhaustive-deps```)


6. ### Navbar
- Crear un Next link a /about. Crear la página About dentro de /pages. Crear AboutContainer.js
- Completar esa página con los datos del alumno.


7. ### Styles
- Estilar los componentes y paginas creadas utilizando breakpoints en 768 y 480 px.


8. ### Deploy
- Pushear a Github y crear el proyecto en Vercel. Se tomará como entrega el link publico y el link de Github.

## Observaciones
- Utilizar todos los métodos y variables entregadas
- Para las imágenes utilizar ```<Image src={} width={} height={} alt={} />``` de next/image. Para el source utilizar showData.show.image?.original. El ? sirve para evitar error al acceder a un subcampo que puede ser undefined.
- Para los links internos utilizar ```<Link href={} />``` de next/link.
- Todos los maps() deben tener el key={index} correspondiente.
- No se aceptarán errores o warnings en la consola.
- Utilizar buenas prácticas y sugar syntax / destructuring donde sea posible.

## Getting Started

First, run the development server:

```bash
yarn 
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.