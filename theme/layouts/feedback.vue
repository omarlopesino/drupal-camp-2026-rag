<!--
  DCS 19 · Feedback (rate the session)
  Content: # Title, a subtitle paragraph and, optionally, body paragraphs.
  Frontmatter:
    antetitulo: 'Feedback'   kicker above the title (optional)
-->
<script setup lang="ts">
withDefaults(defineProps<{ antetitulo?: string }>(), { antetitulo: 'Feedback' })
</script>

<template>
  <div class="slidev-layout dcs-feedback dcs-fondo-cielo">
    <DcsLogo class="logo" />
    <p class="antetitulo">{{ antetitulo }}</p>
    <div class="contenido">
      <slot />
    </div>
    <DcsPie :numero="false" />
  </div>
</template>

<style scoped>
.dcs-feedback {
  position: relative;
  height: 100%;
  padding: 0;
}
/* Positions from the PPTX (slideLayout19), in px */
.dcs-feedback .logo {
  top: 53px;
  left: var(--dcs-margen-x);
  right: auto;
  width: 265px;
}
.antetitulo {
  position: absolute;
  left: var(--dcs-margen-x);
  top: 211px;
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
.contenido {
  position: absolute;
  left: var(--dcs-margen-x);
  top: 250px;
  width: 653px;
}
.contenido :deep(h1) {
  height: 96px;
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 59px; /* 44 pt */
}
.contenido :deep(h1 + p) {
  height: 53px;
  margin: 4px 0 29px;
  display: flex;
  align-items: center;
  font-size: 32px; /* 24 pt */
  color: var(--dcs-azul);
}
.contenido :deep(h1 + p ~ p) {
  width: 605px;
  font-size: 24px; /* 18 pt */
}
</style>
