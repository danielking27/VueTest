<template>
  <section>
    <h2>Task 7: Refactor Discussion</h2>

    <CandidateInstructions>
      Review the intentionally messy component below. Ask the candidate to explain
      what problems they see, how they would refactor it, and what pieces they
      would extract into child components, composables, or services.
    </CandidateInstructions>

    <div class="refactor-layout">
      <div class="task-panel">
        <h3>Discussion Area</h3>

        <p class="hint">
          Goal: evaluate architecture thinking, component boundaries, state
          ownership, naming, testability, and async handling.
        </p>

        <div class="mock-app">
          <div class="toolbar">
            <input
              v-model="searchText"
              type="text"
              placeholder="Search users..."
            />

            <select v-model="selectedRole">
              <option value="">All Roles</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>

            <button type="button" @click="loadUsers">
              Reload
            </button>
          </div>

          <div v-if="isLoading" class="state-message">
            Loading users...
          </div>

          <div v-else-if="errorMessage" class="error-message">
            <p>{{ errorMessage }}</p>

            <button type="button" @click="loadUsers">
              Retry
            </button>
          </div>

          <table v-else class="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th class="action-column">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="user in filteredUsers" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.active ? "Active" : "Inactive" }}</td>
                <td class="action-column">
                  <button type="button" @click="toggleUserStatus(user.id)">
                    {{ user.active ? "Deactivate" : "Activate" }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <p v-if="!isLoading && !errorMessage && filteredUsers.length === 0">
            No users match the current filters.
          </p>
        </div>
      </div>

      <aside class="requirements-panel">
        <h3>Messy Code to Review</h3>

        <pre><code>{{ messyCode }}</code></pre>

        <h3>Discussion Prompts</h3>

        <ol>
          <li>What responsibilities are mixed together in this component?</li>
          <li>What child components would you create?</li>
          <li>What logic would you move into a composable?</li>
          <li>Where should API logic live?</li>
          <li>How would you make this easier to test?</li>
          <li>What naming or readability improvements would you make?</li>
          <li>When would you move this state into Pinia?</li>
        </ol>

        <h3>Expected Refactor Direction</h3>

        <ul>
          <li><code>UserSearchFilters.vue</code></li>
          <li><code>UserTable.vue</code></li>
          <li><code>UserTableRow.vue</code></li>
          <li><code>useUsers.ts</code></li>
          <li><code>userApi.ts</code></li>
          <li>Unit tests for filtering and status changes</li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import CandidateInstructions from "@/components/CandidateInstructions.vue";

type UserRole = "admin" | "editor" | "viewer";

type User = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  active: boolean;
};

const users = ref<User[]>([]);
const searchText = ref("");
const selectedRole = ref<UserRole | "">("");
const isLoading = ref(false);
const errorMessage = ref("");

const filteredUsers = computed(() => {
  const search = searchText.value.toLowerCase().trim();

  return users.value.filter((user) => {
    const matchesSearch =
      !search ||
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search);

    const matchesRole = !selectedRole.value || user.role === selectedRole.value;

    return matchesSearch && matchesRole;
  });
});

async function loadUsers(): Promise<void> {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    users.value = await fakeFetchUsers();
  } catch (error) {
    users.value = [];
    errorMessage.value =
      error instanceof Error ? error.message : "Unable to load users.";
  } finally {
    isLoading.value = false;
  }
}

function toggleUserStatus(userId: number): void {
  const user = users.value.find((user) => user.id === userId);

  if (!user) {
    return;
  }

  user.active = !user.active;
}

function fakeFetchUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Alice Johnson",
          email: "alice@example.com",
          role: "admin",
          active: true
        },
        {
          id: 2,
          name: "Bob Smith",
          email: "bob@example.com",
          role: "editor",
          active: true
        },
        {
          id: 3,
          name: "Carlos Rivera",
          email: "carlos@example.com",
          role: "viewer",
          active: false
        },
        {
          id: 4,
          name: "Dana Lee",
          email: "dana@example.com",
          role: "viewer",
          active: true
        }
      ]);
    }, 700);
  });
}

onMounted(() => {
  loadUsers();
});

const messyCode = `<template>
  <div>
    <input v-model="searchText" placeholder="Search users..." />

    <select v-model="selectedRole">
      <option value="">All Roles</option>
      <option value="admin">Admin</option>
      <option value="editor">Editor</option>
      <option value="viewer">Viewer</option>
    </select>

    <button @click="loadUsers">Reload</button>

    <p v-if="isLoading">Loading users...</p>

    <p v-if="errorMessage">{{ errorMessage }}</p>

    <table>
      <tr v-for="user in filteredUsers" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.role }}</td>
        <td>{{ user.active ? "Active" : "Inactive" }}</td>
        <td>
          <button @click="toggleUserStatus(user.id)">
            Toggle Status
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const users = ref([]);
const searchText = ref("");
const selectedRole = ref("");
const isLoading = ref(false);
const errorMessage = ref("");

const filteredUsers = computed(() => {
  return users.value.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchText.value.toLowerCase()) &&
      (!selectedRole.value || user.role === selectedRole.value)
    );
  });
});

async function loadUsers() {
  isLoading.value = true;

  try {
    const response = await fetch("/api/users");
    users.value = await response.json();
  } catch (error) {
    errorMessage.value = "Unable to load users.";
  }

  isLoading.value = false;
}

function toggleUserStatus(userId) {
  const user = users.value.find((user) => user.id === userId);
  user.active = !user.active;
}

onMounted(loadUsers);
`
</script>

<style scoped>
.refactor-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 460px;
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

.mock-app {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

input,
select {
  padding: 0.5rem 0.75rem;
  border: 1px solid #bbb;
  border-radius: 6px;
}

button {
  cursor: pointer;
  padding: 0.5rem 0.75rem;
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

.user-table {
  width: 100%;
  border-collapse: collapse;
}

.user-table th,
.user-table td {
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
  text-align: left;
}

.action-column {
  text-align: right;
}

.requirements-panel ol,
.requirements-panel ul {
  padding-left: 1.25rem;
}

.requirements-panel li {
  margin-bottom: 0.5rem;
}

pre {
  max-height: 420px;
  overflow: auto;
  padding: 1rem;
  background: #f7f7f7;
  border-radius: 8px;
  font-size: 0.85rem;
}

code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

@media (max-width: 1100px) {
  .refactor-layout {
    grid-template-columns: 1fr;
  }
}
</style>