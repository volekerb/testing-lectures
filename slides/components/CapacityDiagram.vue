<script setup>
import { computed } from 'vue';
const props = defineProps({ registered: { type: Number, default: 9 }, lang: { type: String, default: 'en' } });
const ru = computed(() => props.lang === 'ru');
const description = computed(() => `${props.registered}/10 ${ru.value ? 'участников' : 'registered'}`);
</script>

<template>
  <div class="capacity-diagram" role="img" :aria-label="description">
    <div class="slide-seats" aria-hidden="true">
      <span v-for="seat in 10" :key="seat" :class="{ filled: seat <= registered }">{{ String(seat).padStart(2, '0') }}</span>
    </div>
    <div class="diagram-caption"><strong>{{ registered }}<span>/10</span></strong><span>{{ ru ? 'уже зарегистрировано' : 'already registered' }}</span></div>
    <p v-if="registered > 10" class="over-capacity">{{ ru ? 'Вместимость уже превышена' : 'Already above capacity' }}</p>
  </div>
</template>
