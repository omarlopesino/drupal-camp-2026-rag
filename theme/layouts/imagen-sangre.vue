<!--
  DCS 11 / 12 · Full-bleed image and text
  Content: a kicker paragraph, # Title and the text; the image goes in the ::imagen:: slot.
  Frontmatter:
    lado: 'izquierda'   'izquierda' (11) or 'derecha' (12)
-->
<script setup lang="ts">
withDefaults(defineProps<{ lado?: 'izquierda' | 'derecha' }>(), { lado: 'izquierda' })
</script>

<template>
  <div class="slidev-layout dcs-imagen-sangre dcs-fondo-bruma" :class="lado">
    <div class="imagen">
      <slot name="imagen" />
    </div>
    <DcsLogo class="logo" />
    <div class="contenido">
      <slot />
    </div>
    <DcsPie :numero="false" class="pie" />
  </div>
</template>

<style scoped>
.dcs-imagen-sangre {
  position: relative;
  height: 100%;
  padding: 0;
}
/* Positions from the PPTX (slideLayout11 and slideLayout12), in px */
.imagen {
  position: absolute;
  top: 0;
  left: 0;
  width: 595px;
  height: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dcs-cielo);
}
.derecha .imagen { left: auto; right: 0; }
/* Contain: screenshots stay readable whole; the sky colour fills the rest */
.imagen :deep(p) { margin: 0; }
.imagen :deep(img),
.imagen :deep(video) {
  display: block;
  max-width: 595px;
  max-height: 720px;
}
.derecha .logo { right: auto; left: 58px; }
.contenido,
.pie {
  left: 653px;
  right: 57px;
}
.derecha .contenido,
.derecha .pie {
  left: 58px;
  right: 652px;
}
.contenido {
  position: absolute;
  top: 149px;
}
.contenido :deep(p:first-child) {
  height: 34px;
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 16px; /* 12 pt */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--dcs-azul);
}
.contenido :deep(h1) {
  margin: 4px 0 24px;
  font-size: 43px; /* 32 pt */
}
.contenido :deep(h1 ~ *) {
  font-size: 21px; /* 16 pt */
}
</style>
