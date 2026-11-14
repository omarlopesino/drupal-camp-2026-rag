<!--
  DCS 17 · Ponente (diapositiva 23 de la plantilla)
  Contenido: la bio breve (párrafos).
  Frontmatter:
    nombre:   'Nombre Apellido'
    cargo:    'Cargo · Empresa'
    etiqueta: 'Frontend'                píldora amarilla (opcional)
    foto:     '/ponente.jpg'            ruta en public/ (opcional; sin ella, hueco)
    logo:     '/empresa.png'            logo bajo la foto, en tarjeta blanca (opcional)
    empresa:  'Empresa'                 texto alternativo del logo
-->
<script setup lang="ts">
defineProps<{
  nombre?: string
  cargo?: string
  etiqueta?: string
  foto?: string
  logo?: string
  empresa?: string
}>()
</script>

<template>
  <div class="slidev-layout dcs-ponente dcs-fondo-plano-navy">
    <div class="foto">
      <img v-if="foto" :src="foto" :alt="nombre">
    </div>
    <div v-if="logo" class="logo-empresa">
      <img :src="logo" :alt="empresa">
    </div>

    <p class="antetitulo">Ponente · Speaker</p>
    <h1 class="nombre">{{ nombre }}</h1>
    <p class="cargo">{{ cargo }}</p>
    <span v-if="etiqueta" class="etiqueta">{{ etiqueta }}</span>
    <div class="bio">
      <slot />
    </div>

    <DcsLogo variante="blanco" class="logo-dcs" />
    <DcsPie :numero="false" class="pie" />
  </div>
</template>

<style scoped>
.dcs-ponente {
  position: relative;
  height: 100%;
  padding: 0;
}
/*
 * La plantilla reserva un hueco de 422×422 px en (58, 120) para la foto.
 * Aquí la foto es redonda con marco blanco y lleva debajo el logo de la
 * empresa, así que ambos se centran en ese hueco (eje x = 269 px).
 */
.foto {
  position: absolute;
  left: 99px;
  top: 112px;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  border: 8px solid #fff;
  background: var(--dcs-cielo);
  overflow: hidden;
}
.foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.logo-empresa {
  position: absolute;
  left: 182px;
  top: 476px;
  width: 174px;
  height: 174px;
  padding: 12px;
  border-radius: 12px;
  background: #fff;
}
.logo-empresa img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Columna derecha: posiciones del PPTX (slide23), en px */
.antetitulo,
.nombre,
.cargo,
.etiqueta,
.bio {
  position: absolute;
  left: 538px;
  margin: 0;
}
.antetitulo {
  top: 120px;
  height: 34px;
  display: flex;
  align-items: center;
  font-size: 16px; /* 12 pt */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--dcs-amarillo);
}
.slidev-layout .nombre {
  top: 163px;
  width: 682px;
  font-size: 53px; /* 40 pt */
  line-height: 1.2;
  color: #fff;
}
.cargo {
  top: 264px;
  width: 682px;
  font-size: 27px; /* 20 pt */
  color: var(--dcs-cielo);
}
.etiqueta {
  top: 331px;
  width: 211px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--dcs-amanecer);
  font-size: 16px; /* 12 pt */
  font-weight: 700;
  text-transform: uppercase;
  color: var(--dcs-navy);
}
.bio {
  top: 394px;
  width: 682px;
  font-size: 21px; /* 16 pt */
  color: #fff;
}
.bio :deep(p) {
  margin: 0 0 12px;
}
.dcs-ponente .logo-dcs {
  top: 605px;
}
.pie :deep(.hashtag) {
  color: var(--dcs-cielo);
}
</style>
