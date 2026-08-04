# Catálogo de Silenciadores y Escapes

Sitio estático tipo catálogo/vitrina. HTML5 + CSS3 + JavaScript puro (Font Awesome solo para íconos).

## Estructura

```
/
├── index.html
├── css/styles.css
├── js/script.js
├── img/
└── README.md
```

## Editar productos

Todo vive en el arreglo `productos` al inicio de `js/script.js`. El campo `categoria` alimenta automáticamente los tabs de filtro ("Sport", "Premium", "OEM", etc.) — no hay que tocar el HTML para agregar una categoría nueva, solo usarla en un producto.

```js
{
  id: 7,
  nombre: "Nombre del producto",
  categoria: "Sport",
  descripcion: "Descripción con \n para saltos de línea.",
  imagen: "img/producto-7.jpg"
}
```

## Personalizar marca y contacto

- **Nombre del negocio:** reemplaza `Nombre Escapes` en `index.html` (aparece en el header y el footer).
- **WhatsApp:** cambia `whatsappNumero` en el objeto `CONFIG` de `js/script.js`.
- **Marcas compatibles:** el carrusel usa los archivos `img/marca-1.svg` a `marca-6.svg` (placeholders de texto). Reemplázalos por los logos reales de las marcas con las que trabaja tu cliente.
- **Sección "Por qué elegirnos" y "Proceso":** edita el texto directamente en `index.html`, son bloques fijos (no vienen de datos).

## Publicar en GitHub Pages

1. Sube esta carpeta a un repositorio de GitHub.
2. Settings → Pages → selecciona la rama y la carpeta `/ (root)`.
3. Espera un par de minutos y tendrás el enlace público.

## Notas de diseño

Este catálogo usa un tema oscuro industrial (fondo grafito, acento naranja/rojo tipo escape) para diferenciarse del catálogo de accesorios anterior (que era claro y cálido). Si prefieres el mismo estilo del otro proyecto, dime y ajusto la paleta.

