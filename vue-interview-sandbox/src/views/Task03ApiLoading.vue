<template>
  <section>
    <h2>Task 3: API Loading and Error State</h2>

    <CandidateInstructions>
      Load posts from a fake API (api/fakeApi.ts) when the component mounts. Show a loading message
      while waiting, an error message if the request fails, and the list of posts
      when the request succeeds. Add a retry button for failed requests.
    </CandidateInstructions>

    <div class="api-layout">
      <div class="task-panel">
        <h3>Candidate Work Area</h3>

        <div class="toolbar">
          <button type="button" @click="loadPosts(false)">
            Load Posts
          </button>

          <button type="button" @click="loadPosts(true)">
            Simulate Error
          </button>
        </div>

        
      </div>

      <aside class="requirements-panel">
        <h3>Requirements</h3>

        <ul>
          <li>Call the fake API when the component mounts.</li>
          <li>Show a loading state while the request is pending.</li>
          <li>Show an error state when the request fails.</li>
          <li>Show the posts when the request succeeds.</li>
          <li>Add a retry button after failure.</li>
          <li>Clear old errors before retrying.</li>
        </ul>

        <h3>Follow-up Questions</h3>

        <ol>
          <li>What happens if the component unmounts before the API call finishes?</li>
          <li>How would you prevent stale API responses from updating the screen?</li>
          <li>How would you add pagination?</li>
          <li>Where would you move this logic if multiple pages needed it?</li>
          <li>Would you use a composable, Pinia store, or keep the logic in the component?</li>
        </ol>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import CandidateInstructions from "@/components/CandidateInstructions.vue";


const posts = ref<Post[]>([]);
const isLoading = ref(false);
const errorMessage = ref("");

async function loadPosts(shouldFail = false): Promise<void> {

}

onMounted(() => {
  loadPosts(false);
});
</script>

<style scoped>
.api-layout {
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

.toolbar {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.state-message,
.error-message {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.error-message {
  border-color: #b00020;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.post-card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.post-card h4 {
  margin: 0 0 0.5rem;
}

.post-card p {
  margin: 0;
}

button {
  cursor: pointer;
  padding: 0.5rem 0.75rem;
}

@media (max-width: 900px) {
  .api-layout {
    grid-template-columns: 1fr;
  }
}
</style>