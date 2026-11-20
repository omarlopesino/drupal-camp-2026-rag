# Cómo hacer aplicaciones robustas de IA gracias a los RAG

Diapositivas de la charla de la DrupalCamp Spain 2026, hechas con [Slidev](https://sli.dev).

## Uso

```bash
npm install
npm run dev      # servidor en http://localhost:3030
npm run build    # sitio estático
npm run export   # PDF
```

## Si un cambio no aparece en el navegador

El servidor de desarrollo a veces no recarga `slides.md` cuando recibe dos cambios muy
seguidos: el fichero está bien en disco, pero la diapositiva sigue mostrando el contenido
anterior. Para que lo vuelva a leer, sin reiniciar el servidor:

```bash
touch slides.md
```
