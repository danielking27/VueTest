<!-- src/views/Task01SearchFilter.vue -->
<template>
  <section>
    <h2>Task 1: Reactive Search Filter</h2>

    <CandidateInstructions>
      Build a search box that filters users by name or email as the user types.
      Use a computed property for the filtered list.
    </CandidateInstructions>

    <div class="work-area">
      <!-- Candidate works here -->
      <input placeholder="Search users..." />

      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }} — {{ user.email }}
        </li> 
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import CandidateInstructions from "@/components/CandidateInstructions.vue";
import { users } from "@/data/users";
</script>

<style scoped>
.work-area {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
}
</style>