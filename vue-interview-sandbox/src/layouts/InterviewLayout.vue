<!-- src/layouts/InterviewLayout.vue -->
<template>
  <div class="layout">
    <aside class="sidebar">
      <h1>Vue Interview Sandbox</h1>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/task-01-search-filter">1. Search Filter</RouterLink>
        <RouterLink to="/task-02-task-list">2. Task List</RouterLink>
        <RouterLink to="/task-03-api-loading">3. API Loading</RouterLink>
        <RouterLink to="/task-04-bug-fix">4. Bug Fix</RouterLink>
        <RouterLink to="/task-05-cart-summary">5. Cart Summary</RouterLink>
        <RouterLink to="/task-06-login-form">6. Login Form</RouterLink>
        <RouterLink to="/task-07-refactor">7. Refactor</RouterLink>
      </nav>
    </aside>

    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
}

.sidebar {
  padding: 1.5rem;
  border-right: 1px solid #ddd;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.content {
  padding: 2rem;
}
</style>