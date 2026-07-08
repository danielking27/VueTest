<template>
  <section>
    <h2>Task 4: Bug Fixing</h2>

    <CandidateInstructions>
      This component has several Vue reactivity and rendering issues. Ask the
      candidate to explain what is wrong first, then fix the component.
    </CandidateInstructions>

    <div class="bugfix-layout">
      <div class="task-panel">
        <h3>Candidate Work Area</h3>

        <p class="hint">
          Goal: make the input reactive, allow new tasks to be added, clear the
          input after adding, prevent empty tasks, and render the list correctly.
        </p>

        <div class="form-row">
          <input
            v-model="newTask"
            type="text"
            placeholder="Enter a new task"
            @keyup.enter="addTask"
          />

          <button type="button" @click="addTask">
            Add
          </button>
        </div>

        <p v-if="validationMessage" class="validation-message">
          {{ validationMessage }}
        </p>

        <ul>
      <li v-for="task in tasks">
        {{ task.title }}
      </li>
    </ul>
      </div>

      <aside class="requirements-panel">
        <h3>Problems to Look For</h3>

        <ul>
          <li><code>tasks</code> is not reactive.</li>
          <li><code>newTask</code> is not reactive.</li>
          <li><code>newTask</code> is declared with <code>const</code> but reassigned.</li>
          <li>The template uses <code>v-for</code> without a <code>:key</code>.</li>
          <li>Empty tasks can be added.</li>
          <li>The candidate should explain the issue before fixing it.</li>
        </ul>

        <h3>Follow-up Questions</h3>

        <ol>
          <li>Why does Vue need <code>ref</code> or <code>reactive</code> here?</li>
          <li>Why does <code>newTask</code> need <code>.value</code> in script but not in the template?</li>
          <li>Why is <code>:key</code> important with <code>v-for</code>?</li>
          <li>Would you use <code>ref([])</code> or <code>reactive([])</code> for this task list?</li>
          <li>How would you test this component?</li>
        </ol>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CandidateInstructions from "@/components/CandidateInstructions.vue";

type Task = {
  id: number;
  title: string;
};

const tasks = [];
const newTask = ref("");
const validationMessage = ref("");

function addTask() {
    tasks.push({
        id: Date.now(),
        title: newTask
    });

    newTask = "";
}


</script>

<style scoped>
.bugfix-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 420px;
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

.form-row {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

input {
  flex: 1;
  padding: 0.5rem 0.75rem;
}

button {
  cursor: pointer;
  padding: 0.5rem 0.75rem;
}

.validation-message {
  color: #b00020;
  margin-bottom: 1rem;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0;
  margin: 1rem 0 0;
  list-style: none;
}

.task-item {
  padding: 0.875rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.requirements-panel ul,
.requirements-panel ol {
  padding-left: 1.25rem;
}

.requirements-panel li {
  margin-bottom: 0.5rem;
}

pre {
  overflow-x: auto;
  padding: 1rem;
  background: #f7f7f7;
  border-radius: 8px;
  font-size: 0.875rem;
}

code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

@media (max-width: 1000px) {
  .bugfix-layout {
    grid-template-columns: 1fr;
  }
}
</style>