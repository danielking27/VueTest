<template>
  <section>
    <h2>Task 5: Cart Summary</h2>

    <CandidateInstructions>
      Build a cart summary that displays cart items, allows quantity changes,
      and calculates the subtotal using a computed property.
    </CandidateInstructions>

    <div class="cart-layout">
      <div class="task-panel">
        <h3>Candidate Work Area</h3>

        <p class="hint">
          Goal: update item quantities and automatically recalculate the subtotal.
          The subtotal should be derived state, so it should use a computed property.
        </p>

        <table class="cart-table">
          <thead>
            <tr>
              <th>Item</th>
              <th class="number-column">Price</th>
              <th class="quantity-column">Quantity</th>
              <th class="number-column">Total</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>
                {{ item.name }}
              </td>

              <td class="number-column">
                {{ formatCurrency(item.price) }}
              </td>

              <td class="quantity-column">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  @click="decreaseQuantity(item.id)"
                >
                  -
                </button>

                <input
                  v-model.number="item.quantity"
                  type="number"
                  min="0"
                  aria-label="Quantity"
                  @change="normalizeQuantity(item.id)"
                />

                <button
                  type="button"
                  aria-label="Increase quantity"
                  @click="increaseQuantity(item.id)"
                >
                  +
                </button>
              </td>

              <td class="number-column">
                {{ formatCurrency(item.price * item.quantity) }}
              </td>
            </tr>
          </tbody>
        </table>

        <div class="summary-card">
          <div class="summary-row">
            <span>Subtotal</span>
            <strong>{{ formatCurrency(subtotal) }}</strong>
          </div>

          <div class="summary-row">
            <span>Item Count</span>
            <strong>{{ totalQuantity }}</strong>
          </div>
        </div>
      </div>

      <aside class="requirements-panel">
        <h3>Requirements</h3>

        <ul>
          <li>Display each cart item.</li>
          <li>Show price, quantity, and line total.</li>
          <li>Allow quantity to be increased and decreased.</li>
          <li>Prevent negative quantities.</li>
          <li>Calculate subtotal using a computed property.</li>
          <li>Format currency for display.</li>
        </ul>

        <h3>Follow-up Questions</h3>

        <ol>
          <li>Why is subtotal a good use case for <code>computed</code>?</li>
          <li>When would you use <code>watch</code> instead?</li>
          <li>How would this change if cart data came from an API?</li>
          <li>How would you persist cart changes to local storage?</li>
          <li>When would you move this state into Pinia?</li>
        </ol>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import CandidateInstructions from "@/components/CandidateInstructions.vue";
import { cartItems, type CartItem } from "@/data/cartItems";

const items = ref<CartItem[]>(structuredClone(cartItems));

const subtotal = computed(() => {
  return 0;
});

const totalQuantity = computed(() => {
  return 0;
});

function increaseQuantity(itemId: number): void {

}

function decreaseQuantity(itemId: number): void {

}

function normalizeQuantity(itemId: number): void {

}

function findItem(itemId: number): CartItem | undefined {
  return items.value.find((item) => item.id === itemId);
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value);
}
</script>

<style scoped>
.cart-layout {
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

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.cart-table th,
.cart-table td {
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
  text-align: left;
}

.number-column {
  text-align: right;
}

.quantity-column {
  width: 180px;
  text-align: center;
}

.quantity-column button {
  width: 2rem;
  height: 2rem;
}

.quantity-column input {
  width: 4rem;
  margin: 0 0.375rem;
  padding: 0.375rem;
  text-align: center;
}

.summary-card {
  max-width: 320px;
  margin-left: auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.summary-row + .summary-row {
  margin-top: 0.75rem;
}

.requirements-panel ul,
.requirements-panel ol {
  padding-left: 1.25rem;
}

.requirements-panel li {
  margin-bottom: 0.5rem;
}

button {
  cursor: pointer;
}

@media (max-width: 900px) {
  .cart-layout {
    grid-template-columns: 1fr;
  }

  .summary-card {
    max-width: none;
    margin-left: 0;
  }
}
</style>