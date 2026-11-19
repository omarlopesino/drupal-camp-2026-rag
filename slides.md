---
theme: ./theme
title: Cómo hacer aplicaciones robustas de IA gracias a los RAG
info: |
  En esta charla veremos cómo podemos crear aplicaciones de inteligencia artificial a medida que utilicen nuestros propios datos, garantizando fiabilidad y precisión.
transition: slide-left
mdc: true
layout: cover
---

# Cómo hacer aplicaciones robustas de IA gracias a los RAG

Omar Lopesino · Metadrop

<style>
h1 { font-size: 48px !important; }
</style>

---
layout: ponente
nombre: Omar Lopesino
foto: /omarlopesino.avif
cargo: Desarrollador backend
logo: /metadrop.svg
empresa: Metadrop
---

Soy desarrollador backend desde hace más de 10 años.

La IA me ha dado un mundo de cosas nuevas que aprender.

---

# ¿Quién utiliza inteligencia artificial en su día a día?

<div class="grid grid-cols-3 gap-8">
  <figure v-click class="m-0">
    <img src="./assets/img/gemini-cuadrado.png" class="block h-[300px] rounded-dcs shadow" />
    <figcaption class="mt-4">Gemini</figcaption>
  </figure>
  <figure v-click class="m-0">
    <img src="./assets/img/claude-cuadrado.png" class="block h-[300px] rounded-dcs shadow" />
    <figcaption class="mt-4">Claude</figcaption>
  </figure>
  <figure v-click class="m-0">
    <img src="./assets/img/chatgpt-cuadrado.png" class="block h-[300px] rounded-dcs shadow" />
    <figcaption class="mt-4">ChatGPT</figcaption>
  </figure>
</div>

---
layout: cita
---

En 2025 un estudio del INE reportó que alrededor del 37 % de la población ha utilizado la inteligencia artificial, tanto de forma personal como para trabajar y estudiar.

<p>Fuente: <a href="https://www.ine.es/dyngs/Prensa/TICH2025.htm" target="_blank" class="!text-dcs-cielo">INE</a></p>

---

# ¿Quién confía plenamente en las respuestas de la inteligencia artificial generativa?

<p v-click="1">Los LLM (large language models) a día de hoy:</p>

<v-clicks at="1">

- Para hacer respuestas a medida requieren elaborar prompts a medida
- En ocasiones (muchas), requieren sucesivos prompts para obtener la respuesta deseada
- Pueden no responder a la pregunta exacta del usuario
- Alucinan (cada vez menos)

</v-clicks>

---
hide: true
---

<img src="./assets/img/alucinacion-bulgaro.jpg" class="block mx-auto -mt-[60px] max-h-[535px] max-w-full rounded-dcs shadow" />

---

<img src="./assets/img/alucinacion-deodand.png" class="block mx-auto -mt-[60px] max-h-[535px] max-w-full rounded-dcs shadow" />

<!--
Es un patrón y no algo puntual: pasa especialmente con modelos menos capaces como Flash, Haiku o GPT nano
-->

---
layout: agenda
---

# ¿Qué vamos a ver en esta charla?

1. El objetivo: dar respuestas fiables a los usuarios sobre problemas específicos
2. Un RAG en funcionamiento
3. Retos para desarrollar un RAG
4. Todo lo que debes conocer

---
layout: section
seccion: '01'
---

# El objetivo: dar respuestas fiables a los usuarios sobre problemas específicos

---
layout: seccion-foto
seccion: '01'
---

# ¿Cómo podríamos hacerlo solo con IA generativa?

::imagen::

<img src="./assets/img/gemini-pregunta-pescado-cuadrado.png" />

---
seccion: '01'
---

# ¿Cómo podríamos hacerlo solo con IA generativa?

<img src="./assets/img/gemini-pregunta-pescado-dos-cuadrado.png" class="block mx-auto -mt-[60px] max-h-[535px] max-w-full rounded-dcs shadow" />

---
seccion: '01'
---

# ¿Cómo podríamos hacerlo solo con IA generativa?

<SlidevVideo controls muted poster="/video/gemini-recetas-poster.jpg" class="block mx-auto -mt-[60px] max-h-[495px] max-w-full rounded-dcs shadow">
  <source src="./assets/video/gemini-recetas.mp4" type="video/mp4" />
</SlidevVideo>

<p class="text-[18px] text-center text-dcs-azul !mt-2">Copiamos el prompt y todas nuestras recetas en Gemini para que elija una cena de pescado</p>

---
seccion: '01'
---

# Desventajas de elaborar prompts propios

<div class="grid grid-cols-3 gap-6">
  <div v-click class="dcs-tarjeta-borde">
    <p class="text-[37px] font-bold text-dcs-azul">01</p>
    <p class="font-bold text-dcs-navy">Te debes encargar de coleccionar toda la información y mantenerla al día</p>
  </div>
  <div v-click class="dcs-tarjeta-borde">
    <p class="text-[37px] font-bold text-dcs-azul">02</p>
    <p class="font-bold text-dcs-navy">Debes saber elaborar un buen prompt</p>
  </div>
  <div v-click class="dcs-tarjeta-borde">
    <p class="text-[37px] font-bold text-dcs-azul">03</p>
    <p class="font-bold text-dcs-navy">Es necesario tener disponibles los recursos, o, si no, no podrás usar la herramienta con facilidad</p>
  </div>
</div>

<p v-click="'+0'" class="text-[18px] mt-6">Se pueden reutilizar sesiones, pero entonces se podrían polucionar con el contexto o incluso consumirlo por completo</p>

---
seccion: '01'
---

# ¿Cómo podríamos hacerlo más sencillo?

Con una aplicación que permita:

<div class="grid grid-cols-4 gap-6 mt-6">
  <div v-click class="dcs-tarjeta-cielo">Dar información correcta: real, sin alucinaciones.</div>
  <div v-click class="dcs-tarjeta-atardecer">Dar datos propios.</div>
  <div v-click class="dcs-tarjeta-amanecer">Interfaz que permita al usuario escribir mediante lenguaje natural.</div>
  <div v-click class="dcs-tarjeta-blanca">Mostrar respuestas personalizadas.</div>
</div>

---
layout: seccion-foto
seccion: '02'
oscuro: true
---

# Un RAG en funcionamiento

::imagen::

<img src="./assets/img/notebooklm-pescado-recorte.png" />

NotebookLM

---
layout: imagen-sangre
---

Chatbot con Drupal

# Un RAG en funcionamiento

::imagen::

<img src="./assets/img/chatbot-lentejas.png" />

---
seccion: '02'
---

# Un RAG en funcionamiento

<SlidevVideo controls muted poster="/video/planificador-menu-poster.jpg" class="block mx-auto -mt-[60px] max-h-[465px] max-w-full rounded-dcs shadow">
  <source src="./assets/video/planificador-menu.mp4" type="video/mp4" />
</SlidevVideo>

<p class="text-[18px] text-center text-dcs-azul !mt-2">Pedimos un menú de 3 días con restricciones y lo refinamos con un cambio</p>

<p class="text-[16px] text-right text-dcs-azul !mt-0">Hecho con Drupal</p>

---
seccion: '02'
---

# Cómo funciona un RAG por dentro

Todo esto funciona gracias a un RAG

<div class="grid grid-cols-[2fr_3fr] gap-8 items-center mt-4">
  <div class="dcs-tarjeta-atardecer">
    <p class="text-[27px] font-bold text-dcs-navy">Retrieval augmented generation</p>
    <p class="m-0">Sistema que provee de contexto a la IA a partir de una base de datos externa</p>
  </div>
  <img src="./assets/diagramas/rag-agente.png" class="block mx-auto max-h-[330px] max-w-full rounded-dcs shadow" />
</div>

---
layout: seccion-foto
seccion: '03'
---

# Retos para desarrollar un RAG

::imagen::

<img src="./assets/img/seccion-retos.jpg" />

---
seccion: '03'
---

# Retos para desarrollar un RAG

<div class="grid grid-cols-3 gap-6">

<v-clicks>

  <div class="dcs-tarjeta-borde">
    <p class="text-[37px] font-bold text-dcs-azul">01</p>
    <p class="font-bold text-dcs-navy">¿Cómo conseguimos dotar de información propia a la inteligencia artificial?</p>
  </div>
  <div class="dcs-tarjeta-borde">
    <p class="text-[37px] font-bold text-dcs-azul">02</p>
    <p class="font-bold text-dcs-navy">¿Cómo controlamos que la aplicación responda solo a nuestras preguntas?</p>
  </div>
  <div class="dcs-tarjeta-borde">
    <p class="text-[37px] font-bold text-dcs-azul">03</p>
    <p class="font-bold text-dcs-navy">¿Cómo sabemos si el modelo está respondiendo adecuadamente?</p>
  </div>

</v-clicks>

</div>

---
seccion: '03'
---

# ¿Cómo conseguimos dotar de información propia a la inteligencia artificial?

## Indexado en motor de búsqueda

<div class="grid grid-cols-2 gap-8 items-center text-[21px]">
<div>

- Palabra exacta (BM25)
- Implica limpiar la consulta y procesarla (o configurar el índice) para conseguir mejores resultados
- MySQL, Elasticsearch / Solr

</div>

<img src="./assets/diagramas/bm25.png" class="block mx-auto max-h-[300px] max-w-full rounded-dcs" />

</div>

---
seccion: '03'
---

# ¿Cómo conseguimos dotar de información propia a la inteligencia artificial?

## Indexado en base de datos vectorial

<div class="grid grid-cols-2 gap-8 items-center text-[21px]">
<div>

- Permite una búsqueda semántica
- Es capaz de encontrar resultados relevantes, aunque no coincidan las palabras
- Más apropiado para el lenguaje natural

</div>

<img src="./assets/diagramas/vectorial.png" class="block mx-auto max-h-[300px] max-w-full rounded-dcs" />

</div>

<!--
Más que haber uno mejor, hay que probar cuál funciona mejor en cada caso. Posiblemente lo más sencillo funcione y no se necesite un embedding.

Mencionar que el embedding implica utilizar un modelo que utilice la GPU o la CPU. También se puede generar a través de la API de un proveedor (OpenAI, Mistral, etc.), pagando por uso.
-->

---
seccion: '03'
---

# Bases de datos vectoriales

<div class="grid grid-cols-5 gap-4">
  <div class="dcs-tarjeta-blanca flex flex-col items-center gap-4">
    <div class="w-24 h-24 rounded-full bg-dcs-bruma flex items-center justify-center"><img src="./assets/img/logos/qdrant.svg" class="h-12" /></div>
    <span class="font-bold text-dcs-navy">Qdrant</span>
  </div>
  <div class="dcs-tarjeta-blanca flex flex-col items-center gap-4">
    <div class="w-24 h-24 rounded-full bg-dcs-bruma flex items-center justify-center"><img src="./assets/img/logos/pinecone.png" class="h-12" /></div>
    <span class="font-bold text-dcs-navy">Pinecone</span>
  </div>
  <div class="dcs-tarjeta-blanca flex flex-col items-center gap-4">
    <div class="w-24 h-24 rounded-full bg-dcs-bruma flex items-center justify-center"><img src="./assets/img/logos/sqlite.svg" class="h-12" /></div>
    <span class="font-bold text-dcs-navy">SQLite</span>
  </div>
  <div class="dcs-tarjeta-blanca flex flex-col items-center gap-4">
    <div class="w-24 h-24 rounded-full bg-dcs-bruma flex items-center justify-center"><img src="./assets/img/logos/postgresql.svg" class="h-12" /></div>
    <span class="font-bold text-dcs-navy">Postgres</span>
  </div>
  <div class="dcs-tarjeta-blanca flex flex-col items-center gap-4">
    <div class="w-24 h-24 rounded-full bg-dcs-bruma flex items-center justify-center"><img src="./assets/img/logos/solr.svg" class="h-12" /></div>
    <span class="font-bold text-dcs-navy">Solr</span>
  </div>
</div>

---
seccion: '03'
---

# ¿Vectorial o tradicional?

<div class="grid grid-cols-3 gap-6">
  <div class="dcs-tarjeta-cielo min-h-[240px]">La mejor opción siempre se verá durante las pruebas</div>
  <div class="dcs-tarjeta-atardecer min-h-[240px]">Drupal soporta mejor las bases de datos vectoriales para los RAG</div>
  <div class="dcs-tarjeta-amanecer min-h-[240px]">Se pueden usar ambas opciones perfectamente con búsquedas híbridas</div>
</div>

---
seccion: '03'
---

# ¿Cómo controlamos que la aplicación responda solo a nuestras preguntas?

## Ingeniería del prompt {v-click="1"}

<v-clicks>

- Instrucciones precisas
- Exigir que se ajuste al objetivo de la aplicación
- Requerir un formato específico
- Guardarraíles

</v-clicks>

---
seccion: '03'
---

# ¿Cómo controlamos que la aplicación responda solo a nuestras preguntas?

<div class="grid grid-cols-2 gap-8">
  <figure class="m-0">
    <img src="./assets/img/chatbot-lentejas.png" class="block mx-auto h-[410px] rounded-dcs shadow" />
    <figcaption class="mt-2 text-center">Pregunta correcta: respuesta apropiada</figcaption>
  </figure>
  <figure class="m-0">
    <img src="./assets/img/chatbot-fuera-de-contexto.png" class="block mx-auto h-[410px] rounded-dcs shadow" />
    <figcaption class="mt-2 text-center">Pregunta fuera de contexto: no se responde</figcaption>
  </figure>
</div>

---
seccion: '03'
---

# ¿Cómo sabemos si el modelo está respondiendo adecuadamente?

## Evaluación {v-click="1"}

<v-clicks>

- Pruebas antes de la puesta en producción
- Usa una batería de pruebas planeada con antelación
  - Comprobar con preguntas conocidas que se encuentran los resultados esperados
  - Estadísticas: ratio de aciertos, resultados correctos en las posiciones más altas
  - IA como un juez: que otro modelo evalúe la respuesta

</v-clicks>

---
seccion: '03'
---

# ¿Cómo sabemos si el modelo está respondiendo adecuadamente?

<div class="flex gap-4 -mt-[60px] h-[502px]">
  <div class="w-[220px] flex flex-col gap-3">
    <div class="dcs-tarjeta-blanca shadow !p-4 flex-1 flex flex-col justify-center">
      <p class="text-[16px] !m-0">LAST EVAL RUN</p>
      <p class="text-[37px] font-bold text-dcs-navy !m-0">2 / 2 <span class="text-[20px]">passing</span></p>
      <p class="text-[16px] !m-0">2026-10-20 04:04 · 2 targets · 21 questions · 10m 22s</p>
    </div>
    <div class="dcs-tarjeta-blanca shadow !p-4 flex-1 flex flex-col justify-center">
      <p class="text-[16px] !m-0">WEEK OVER WEEK</p>
      <p class="text-[37px] font-bold text-dcs-navy !m-0">2 / 2</p>
      <p class="text-[16px] !m-0">(last week: 0 / 2)</p>
    </div>
  </div>
  <div class="flex-1 flex flex-col gap-3 items-start">
    <img src="./assets/img/ai-eval-target-health.png" class="w-[880px] rounded-dcs shadow" />
    <img src="./assets/img/ai-eval-recent-runs.png" class="w-[880px] rounded-dcs shadow" />
  </div>
</div>

<p class="text-[18px] text-center text-dcs-azul !mt-2">Evaluación</p>

---
seccion: '03'
---

# ¿Cómo sabemos si el modelo está respondiendo adecuadamente?

## Monitorización {v-click="1"}

<v-clicks>

- Se guarda la actividad del usuario elegida
- Da a conocer el uso real de la aplicación
- Comprobar qué consultas se hacen y qué resultados dan
- Observar el consumo de tokens
- IA como un juez: que otro modelo evalúe la respuesta y puntúe con relevancia

</v-clicks>

---
seccion: '03'
---

# ¿Cómo sabemos si el modelo está respondiendo adecuadamente?

<div class="flex gap-4 -mt-[60px] h-[502px]">
  <div class="w-[220px] flex flex-col gap-3">
    <div class="dcs-tarjeta-blanca shadow !p-4 flex-1 flex flex-col justify-center">
      <p class="text-[16px] !m-0">Interacciones</p>
      <p class="text-[37px] font-bold text-dcs-navy !m-0">311</p>
    </div>
    <div class="dcs-tarjeta-blanca shadow !p-4 flex-1 flex flex-col justify-center">
      <p class="text-[16px] !m-0">Mediana del tiempo de respuesta</p>
      <p class="text-[37px] font-bold text-dcs-navy !m-0">6,8 s</p>
    </div>
    <div class="dcs-tarjeta-blanca shadow !p-4 flex-1 flex flex-col justify-center">
      <p class="text-[16px] !m-0">Gasto</p>
      <p class="text-[37px] font-bold text-dcs-navy !m-0">3,33 €</p>
    </div>
    <div class="dcs-tarjeta-blanca shadow !p-4 flex-1 flex flex-col justify-center">
      <p class="text-[16px] !m-0">👍</p>
      <p class="text-[37px] font-bold text-dcs-navy !m-0">73 %</p>
    </div>
  </div>
  <div class="flex-1 flex flex-col gap-3">
    <div class="flex gap-3 h-[245px]">
    <img src="./assets/img/monitorizacion-tiempo.png" class="h-full rounded-dcs shadow" />
    <img src="./assets/img/monitorizacion-tokens.png" class="h-full rounded-dcs shadow" />
    </div>
    <div class="flex gap-3 h-[245px]">
    <img src="./assets/img/monitorizacion-modelo.png" class="h-full rounded-dcs shadow" />
    <img src="./assets/img/monitorizacion-relevancia.png" class="h-full rounded-dcs shadow" />
    <img src="./assets/img/monitorizacion-valoracion.png" class="h-full rounded-dcs shadow" />
    </div>
  </div>
</div>

<p class="text-[18px] text-center text-dcs-azul !mt-2">Monitorización</p>

---
seccion: '03'
---

# Flujo de desarrollo de un RAG

<img src="./assets/diagramas/ciclo.png" class="block mx-auto -mt-[60px] max-h-[535px] max-w-full rounded-dcs shadow" />

---
layout: seccion-foto
seccion: '04'
oscuro: true
---

# Todo lo que debes conocer

::imagen::

<img src="./assets/img/seccion-conocer.jpg" />

---
seccion: '04'
---

# Modelos de IA generativa

Son necesarios diferentes modelos para:

<div class="grid grid-cols-3 gap-6 mt-6">
  <div class="dcs-tarjeta-cielo min-h-[200px]">Generar respuestas del RAG</div>
  <div class="dcs-tarjeta-atardecer min-h-[200px]">Generar embeddings</div>
  <div class="dcs-tarjeta-amanecer min-h-[200px]">Juez de IA en evaluaciones y monitorizaciones</div>
</div>

---
seccion: '04'
---

# Modelos de IA generativa

<div class="grid grid-cols-3 gap-6 w-3/4 mx-auto">
  <div class="dcs-tarjeta-cielo flex flex-col items-center gap-4 py-10">
    <div class="w-28 h-28 rounded-full bg-white flex items-center justify-center"><img src="./assets/img/logos/openai.svg" class="h-16" /></div>
    <span class="font-bold text-dcs-navy">OpenAI</span>
  </div>
  <div class="dcs-tarjeta-atardecer flex flex-col items-center gap-4 py-10">
    <div class="w-28 h-28 rounded-full bg-white flex items-center justify-center"><img src="./assets/img/logos/deepseek.svg" class="h-16" /></div>
    <span class="font-bold text-dcs-navy">DeepSeek</span>
  </div>
  <div class="dcs-tarjeta-amanecer flex flex-col items-center gap-4 py-10">
    <div class="w-28 h-28 rounded-full bg-white flex items-center justify-center"><img src="./assets/img/logos/claude.svg" class="h-16" /></div>
    <span class="font-bold text-dcs-navy">Claude</span>
  </div>
</div>

---
seccion: '04'
---

# Modelos de embedding

<div class="grid grid-cols-3 gap-6">
  <div class="dcs-tarjeta-cielo flex items-center justify-center text-center min-h-[200px]"><span class="font-bold text-dcs-navy">intfloat/<wbr><span class="whitespace-nowrap">multilingual-e5-small</span></span></div>
  <div class="dcs-tarjeta-atardecer flex items-center justify-center text-center min-h-[200px]"><span class="font-bold text-dcs-navy">BAAI/<wbr>bge-m3</span></div>
  <div class="dcs-tarjeta-blanca flex items-center justify-center text-center min-h-[200px]"><span class="font-bold text-dcs-navy">text-embedding-3-small</span></div>
</div>

---
seccion: '04'
---

# ¿Con qué técnicas podemos perfeccionar un RAG?

<v-clicks>

- Búsqueda híbrida
- Reconstrucción de la consulta del usuario
- Reranking

</v-clicks>

---
seccion: '04'
---

# AI Act: aplicaciones de inteligencia artificial dentro del marco europeo

<v-clicks>

- Regula el uso de las aplicaciones de IA en la UE
- Según el uso de la aplicación, se deben tomar ciertas medidas
- Aplicaciones como chatbots deben informar que el usuario está interactuando con una IA

</v-clicks>

<!--
Posiblemente aquí merezca la pena hablar de cómo nuestros ejemplos llevan el disclaimer de que las respuestas son generadas por IA.
-->

---
seccion: '04'
---

# Módulos recomendados

<div class="grid grid-cols-3 gap-x-10 gap-y-6 text-[19px]">
  <div>
    <p class="m-0 font-bold text-[22px]"><a href="https://www.drupal.org/project/ai">AI</a></p>
    <p class="m-0">Módulo base para integraciones con IA en Drupal</p>
  </div>
  <div>
    <p class="m-0 font-bold text-[22px] text-dcs-navy">AI Chatbot</p>
    <p class="m-0">Integraciones con chatbots</p>
  </div>
  <div>
    <p class="m-0 font-bold text-[22px]"><a href="https://www.drupal.org/project/ai_agents">AI Agents</a></p>
    <p class="m-0">Construcción de agentes de IA en Drupal</p>
  </div>
  <div>
    <p class="m-0 font-bold text-[22px]"><a href="https://www.drupal.org/project/ai_disclosure">AI Disclosure</a></p>
    <p class="m-0">Indicar que estás utilizando IA en funcionalidades de la web</p>
  </div>
  <div>
    <p class="m-0 font-bold text-[22px]"><a href="https://www.drupal.org/project/ai_eval">AI Eval</a></p>
    <p class="m-0">Evaluación de agentes de IA</p>
  </div>
  <div>
    <p class="m-0 font-bold text-[22px] text-dcs-navy">AI providers</p>
    <p class="m-0">Realizan llamadas a los modelos de IA</p>
    <div class="flex flex-wrap gap-x-5 gap-y-1 mt-1 text-[16px]">
      <a href="https://www.drupal.org/project/ai_provider_openai">OpenAI Provider</a>
      <a href="https://www.drupal.org/project/ai_provider_deepseek">DeepSeek Provider</a>
      <a href="https://www.drupal.org/project/ai_provider_openrouter">OpenRouter Provider</a>
    </div>
  </div>
  <div class="col-span-3">
    <p class="m-0 font-bold text-[22px] text-dcs-navy">AI VDB providers</p>
    <p class="m-0">Indexan contenido en bases de datos vectoriales</p>
    <div class="flex flex-wrap gap-x-5 gap-y-1 mt-1 text-[16px]">
      <a href="https://www.drupal.org/project/ai_vdb_provider_postgres">Postgres VDB Provider</a>
      <a href="https://www.drupal.org/project/ai_vdb_provider_pinecone">Pinecone VDB Provider</a>
      <a href="https://www.drupal.org/project/ai_vdb_provider_mariadb">MariaDB VDB Provider</a>
      <a href="https://www.drupal.org/project/ai_vdb_provider_sqlite">SQLite VDB Provider</a>
      <a href="https://www.drupal.org/project/ai_vdb_provider_qdrant">Qdrant VDB Provider</a>
    </div>
  </div>
</div>

---
layout: feedback
---

# ¡Gracias!

¿Preguntas?

Si tienes alguna duda o algo que decir sobre la charla, este es tu momento.

---
class: dcs-fondo-blanco
---

# Patrocinadores

<img src="/patrocinadores.jpg" alt="Patrocinadores de la DrupalCamp Spain 2026" class="absolute left-[170px] top-[-58px] w-[824px] h-[518px]">
