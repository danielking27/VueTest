<template>
  <section>
    <h2>Task 6: Login Form Validation</h2>

    <CandidateInstructions>
      Build a login form with email and password fields. The submit button should
      be disabled until the email is valid and the password is at least 8
      characters. Show validation messages after each field has been touched.
    </CandidateInstructions>

    <div class="login-layout">
      <div class="task-panel">
        <h3>Candidate Work Area</h3>

        <p class="hint">
          Goal: practice form state, validation, computed properties, and
          conditional rendering.
        </p>

        <form class="login-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="email">Email</label>

            <input
              id="email"
              v-model.trim="email"
              type="email"
              placeholder="candidate@example.com"
              autocomplete="email"
              @blur="emailTouched = true"
            />

            <p v-if="emailTouched && emailError" class="validation-message">
              {{ emailError }}
            </p>
          </div>

          <div class="form-group">
            <label for="password">Password</label>

            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="At least 8 characters"
              autocomplete="current-password"
              @blur="passwordTouched = true"
            />

            <p
              v-if="passwordTouched && passwordError"
              class="validation-message"
            >
              {{ passwordError }}
            </p>
          </div>

          <button type="submit" :disabled="!isFormValid">
            Sign In
          </button>

          <p v-if="submittedMessage" class="success-message">
            {{ submittedMessage }}
          </p>
        </form>
      </div>

      <aside class="requirements-panel">
        <h3>Requirements</h3>

        <ul>
          <li>Create email and password fields.</li>
          <li>Use <code>v-model</code> for form state.</li>
          <li>Validate that the email has a basic email format.</li>
          <li>Validate that the password is at least 8 characters.</li>
          <li>Disable the submit button until the form is valid.</li>
          <li>Show validation messages only after a field has been touched.</li>
          <li>Prevent the default form submit behavior.</li>
        </ul>

        <h3>Follow-up Questions</h3>

        <ol>
          <li>Why is <code>isFormValid</code> a good use case for <code>computed</code>?</li>
          <li>When would you extract validation logic into reusable functions?</li>
          <li>When would you use a form library like VeeValidate?</li>
          <li>How would you show server-side login errors?</li>
          <li>How would you prevent duplicate submissions?</li>
        </ol>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import CandidateInstructions from "@/components/CandidateInstructions.vue";

const email = ref("");
const password = ref("");

const emailTouched = ref(false);
const passwordTouched = ref(false);

const submittedMessage = ref("");

const emailError = computed(() => {
  if (!email.value) {
    return "Email is required.";
  }

  if (!isValidEmail(email.value)) {
    return "Enter a valid email address.";
  }

  return "";
});

const passwordError = computed(() => {
  if (!password.value) {
    return "Password is required.";
  }

  if (password.value.length < 8) {
    return "Password must be at least 8 characters.";
  }

  return "";
});

const isFormValid = computed(() => {
  return !emailError.value && !passwordError.value;
});

function submitForm(): void {
  emailTouched.value = true;
  passwordTouched.value = true;
  submittedMessage.value = "";

  if (!isFormValid.value) {
    return;
  }

  submittedMessage.value = `Login form submitted for ${email.value}.`;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
</script>

<style scoped>
.login-layout {
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

.login-form {
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

label {
  font-weight: 600;
}

input {
  padding: 0.625rem 0.75rem;
  border: 1px solid #bbb;
  border-radius: 6px;
}

button {
  width: fit-content;
  cursor: pointer;
  padding: 0.625rem 1rem;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.validation-message {
  color: #b00020;
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
}

.success-message {
  color: #146c2e;
  margin: 0.25rem 0 0;
  font-weight: 600;
}

.requirements-panel ul,
.requirements-panel ol {
  padding-left: 1.25rem;
}

.requirements-panel li {
  margin-bottom: 0.5rem;
}

@media (max-width: 900px) {
  .login-layout {
    grid-template-columns: 1fr;
  }
}
</style>