<template>
  <div class="q-pa-md flex justify-center bg-green-4" style="min-height: 100vh;">
    <q-card class="q-pa-lg" style="width: 500px; background: white;">
      <div class="text-h5 text-bold  text-center q-mb-lg">Billing Page</div>

      <q-form @submit.prevent="generateInvoice">
        <!-- 1. Package Selection -->
        <q-select
          filled
          v-model="billing.package"
          :options="packages"
          label="Select Package"
          emit-value
          map-options
          @update:model-value="calculateCost"
          class="q-mb-md"
        />

        <!-- 2. Stay + Meal Cost (Auto) -->
        <q-input
          filled
          v-model="billing.totalCost"
          label="Total Cost (Stay + Meal)"
          readonly
          class="q-mb-md"
        />

        <!-- 3. Discount -->
        <q-input
          filled
          v-model.number="billing.discount"
          label="Discount (%)"
          type="number"
          @input="applyDiscount"
          class="q-mb-md"
        />

        <!-- 4. Final Amount -->
        <q-input
          filled
          v-model="billing.finalAmount"
          label="Final Amount"
          readonly
          class="q-mb-md"
        />

        <!-- 5. Generate Invoice -->
        <q-btn
          label="Generate Invoice"
          color="primary"
          class="full-width q-mt-md"
          @click="generateInvoice"
        />
      </q-form>
    </q-card>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

// Package Data with stay & meal cost
const packages = [
  { label: "7-Day Package", value: "7-day", stay: 5000, meal: 1500 },
  { label: "15-Day Package", value: "15-day", stay: 9000, meal: 3500 },
  { label: "30-Day Package", value: "30-day", stay: 15000, meal: 7000 },
];

const billing = ref({
  package: null,
  totalCost: 0,
  discount: 0,
  finalAmount: 0,
});

// Auto calculate stay + meal cost
function calculateCost(selectedPackage) {
  if (!selectedPackage) return;
  const pkg = packages.find((p) => p.value === selectedPackage);
  billing.value.totalCost = pkg.stay + pkg.meal;
  applyDiscount();
}

// Apply discount
function applyDiscount() {
  const discountAmount = (billing.value.totalCost * billing.value.discount) / 100;
  billing.value.finalAmount = billing.value.totalCost - discountAmount;
}

// Generate Invoice (Print)
function generateInvoice() {
  if (!billing.value.package) {
    alert("Please select a package first!");
    return;
  }
  const pkg = packages.find((p) => p.value === billing.value.package);
  const invoice = `
    Package: ${pkg.label}
    Stay Cost: ${pkg.stay}
    Meal Cost: ${pkg.meal}
    Total Cost: ${billing.value.totalCost}
    Discount: ${billing.value.discount}%
    Final Amount: ${billing.value.finalAmount}
  `;
  console.log(invoice);
  alert("Invoice Generated! Check console.");
  window.print(); // Simple print functionality
}
</script>

<style scoped>
.q-card {
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}
</style>
