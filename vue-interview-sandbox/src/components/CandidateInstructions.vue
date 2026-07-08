<!-- src/components/CandidateInstructions.vue -->
<template>
  <div class="instructions">
    <strong>Instructions</strong>
    <p>
      <slot />
    </p>
  </div>
</template>

<style scoped>
.instructions {
  padding: 1rem;
  border-left: 4px solid #555;
  background: #f7f7f7;
  margin-bottom: 1rem;
}
</style>