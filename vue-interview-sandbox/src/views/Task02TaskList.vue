<template>
  <section>
    <h2>Task 2: Parent / Child Task List</h2>

    <CandidateInstructions>
      Create a child component called <code>TaskItem</code>. The parent should own the
      task list. Each child should display one task and emit an event when the user
      clicks "Mark Complete".
    </CandidateInstructions>

    <div class="task-layout">
      <div class="task-panel">
        <h3>Candidate Work Area</h3>

        <p class="hint">
          Goal: render each task using <code>TaskItem</code> and update the task in
          the parent when the child emits an event.
        </p>

      </div>

      <aside class="requirements-panel">
        <h3>Requirements</h3>

        <ul>
          <li>Parent component owns the task state.</li>
          <li>Child component receives a task using props.</li>
          <li>Child component emits an event when the button is clicked.</li>
          <li>Completed tasks should show as completed.</li>
          <li>The child should not directly mutate the parent state.</li>
        </ul>

        <h3>Follow-up Questions</h3>

        <ol>
          <li>Why should the child emit an event instead of modifying the task directly?</li>
          <li>Where should the state live in this example?</li>
          <li>How would this change if tasks were loaded from an API?</li>
          <li>When would you move this logic into a composable or store?</li>
        </ol>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CandidateInstructions from "@/components/CandidateInstructions.vue";

</script>

<style scoped>
.task-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 1.5rem;
  align-items: start;
}

.task-panel,
.requirements-panel {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.hint {
  color: #555;
  margin-bottom: 1rem;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.requirements-panel ul,
.requirements-panel ol {
  padding-left: 1.25rem;
}

.requirements-panel li {
  margin-bottom: 0.5rem;
}

@media (max-width: 900px) {
  .task-layout {
    grid-template-columns: 1fr;
  }
}
</style>