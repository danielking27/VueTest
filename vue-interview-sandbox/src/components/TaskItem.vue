<template>
  <li class="task-item" :class="{ completed: task.completed }">
    
  </li>
</template>

<script setup lang="ts">
import type { InterviewTask } from "@/data/tasks";

defineProps<{
  task: InterviewTask;
}>();

const emit = defineEmits<{
  "complete-task": [taskId: number];
}>();
</script>

<style scoped>
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  padding: 0.875rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.task-details {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.status {
  font-weight: bold;
  width: 1.25rem;
  text-align: center;
}

.title {
  font-weight: 500;
}

.completed .title {
  text-decoration: line-through;
  color: #666;
}

button {
  cursor: pointer;
  padding: 0.5rem 0.75rem;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>