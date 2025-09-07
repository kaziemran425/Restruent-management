<template>
  <div class="q-pa-md flex justify-center bg-green-4" style="min-height: 100vh;">
    <q-card class="q-pa-lg" style="width: 600px; background: white;">
      <div class="text-h5 text-center q-mb-lg">Reports Page</div>

      <!-- 1. Daily Income -->
      <q-card class="q-pa-md q-mb-md bg-green-1">
        <div class="text-h6">Daily Income</div>
        <q-input
          filled
          v-model.number="dailyIncome"
          label="Enter Daily Income"
          type="number"
        />
      </q-card>

      <!-- 2. Discount and Monthly Income -->
      <q-card class="q-pa-md q-mb-md bg-green-2">
        <div class="text-h6">Discount & Monthly Income</div>
        <q-input
          filled
          v-model.number="discount"
          label="Discount (%)"
          type="number"
          @input="calculateMonthlyIncome"
          class="q-mb-md"
        />
        <q-input
          filled
          v-model="monthlyIncome"
          label="Monthly Income (after discount)"
          readonly
        />
      </q-card>

      <!-- 3. Most Popular Package -->
      <q-card class="q-pa-md bg-green-3">
        <div class="text-h6">Most Popular Package</div>
        <q-select
          filled
          v-model="popularPackage"
          :options="packages"
          label="Select Most Popular Package"
        />
      </q-card>
    </q-card>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

// Sample packages
const packages = [
  { label: "7-Day Package", value: "7-day" },
  { label: "15-Day Package", value: "15-day" },
  { label: "30-Day Package", value: "30-day" },
];

const dailyIncome = ref(0);
const discount = ref(0);
const monthlyIncome = ref(0);
const popularPackage = ref(null);

// Calculate Monthly Income after discount
function calculateMonthlyIncome() {
  const total = dailyIncome.value * 30; // assuming 30 days
  const discountAmount = (total * discount.value) / 100;
  monthlyIncome.value = total - discountAmount;
}

// Recalculate monthly income if dailyIncome changes
watch(dailyIncome, calculateMonthlyIncome);
</script>

<style scoped>
.q-card {
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}
</style>
