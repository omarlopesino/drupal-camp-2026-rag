<!--
  DCS 06 / 07 · Section - Photo / Photo navy
  Content: # Title; the image goes in the ::imagen:: slot.
  Frontmatter:
    seccion: '03'   big number above the title (optional)
    oscuro:  true   navy card (07) instead of white (06)
-->
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ seccion?: string | number, oscuro?: boolean }>()
const numero = computed(() =>
  props.seccion === undefined ? '' : String(props.seccion).padStart(2, '0'),
)
</script>

<template>
  <div class="slidev-layout dcs-seccion-foto dcs-fondo-bruma" :class="{ oscuro }">
    <div class="tarjeta">
      <DcsLogo :variante="oscuro ? 'blanco' : 'color'" class="logo" />
      <span v-if="numero" class="numero">{{ numero }}</span>
      <div class="contenido">
        <slot />
      </div>
    </div>
    <div class="hueco">
      <slot name="imagen" />
    </div>
  </div>
</template>

<style scoped>
.dcs-seccion-foto {
  position: relative;
  height: 100%;
  padding: 0;
}
/* Positions from the PPTX (slideLayout6 and slideLayout7), in px */
.tarjeta {
  position: absolute;
  left: 58px;
  top: 58px;
  width: 403px;
  height: 605px;
  border-radius: 12px;
  background: #fff;
}
.oscuro .tarjeta { background: var(--dcs-navy); }
.dcs-seccion-foto .logo {
  top: 48px;
  left: 43px;
  right: auto;
  width: 288px;
}
.numero {
  position: absolute;
  left: 43px;
  top: 249px;
  height: 96px;
  display: flex;
  align-items: flex-end;
  font-size: 80px; /* 60 pt */
  font-weight: 700;
  line-height: 1;
  color: var(--dcs-azul);
}
.oscuro .numero { color: var(--dcs-cielo); }
.contenido {
  position: absolute;
  left: 43px;
  top: 355px;
  width: 322px;
}
.contenido :deep(h1) {
  margin: 0;
  font-size: 37px; /* 28 pt */
  line-height: 1.2;
}
.oscuro .contenido :deep(h1) { color: #fff; }
/* Screenshots are shown whole inside the slot, never cropped */
.hueco {
  position: absolute;
  left: 490px;
  top: 58px;
  width: 733px;
  height: 605px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.hueco :deep(p) { margin: 0; }
/* Optional caption under the image */
.hueco :deep(p:not(:first-child)) {
  align-self: flex-end;
  font-size: 16px; /* 12 pt */
  color: var(--dcs-azul);
}
.hueco :deep(img) {
  display: block;
  max-width: 733px;
  max-height: 560px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgb(18 40 95 / 0.15);
}
</style>
