# ConsoleImage

Muestra imágenes directamente en la consola del navegador usando `console.log` y estilos en línea. Perfecto para easter eggs, branding o simplemente impresionar en las DevTools.

## ✨ Características

- Compatible con navegadores modernos
- Evita errores comunes como límites de tamaño en Firefox
- Personalización de tamaño y color de fondo
- Escrito en TypeScript y fácil de mantener

## 📦 Instalación

Si vas a usarlo como módulo independiente:

```bash
npm install console-image
````

O si lo usas directamente en tu proyecto (sin empaquetador):

```html
<script type="module" src="ConsoleImage.js"></script>
```

## 🧠 Uso básico

```ts
import ConsoleImage from 'console-image';

// Muestra la imagen en consola con tamaño por defecto (320px)
ConsoleImage.load('https://example.com/logo.png');
```

## ⚙️ Personalización

### Cambiar tamaño

```ts
ConsoleImage.load('https://example.com/logo.png', { size: 500 });
```

### Cambiar color de fondo

```ts
ConsoleImage.load('https://example.com/logo.png', { color: '#f0f0f0' });
```

### Cambiar ambos

```ts
ConsoleImage.load('https://example.com/logo.png', {
  size: 400,
  color: 'black'
});
```

## ⚠️ Consideraciones

* Firefox limita el tamaño máximo del recurso a \~8KB. El módulo detecta y advierte si la imagen no se puede mostrar por ese motivo.
* Asegúrate de que la URL sea accesible y sirva una imagen válida (`image/png`, `image/jpeg`, etc.).

## 🛠️ Desarrollo

Si estás desarrollando localmente:

```bash
tsc # o usa tu bundler favorito
```
