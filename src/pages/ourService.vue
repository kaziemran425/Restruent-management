<template>
  <div class="q-pa-md">
    <!-- Title -->
    <q-card flat bordered class="q-pa-md text-center bg-green-6 text-white">
      <div class="text-h4">🍴 Sylhet Style Food Menu</div>
    </q-card>

    <div class="row q-col-gutter-md q-mt-md">
      <!-- Breakfast -->
      <div class="col-12 col-md-4">
        <q-card class="my-card bg-blue-1 text-dark shadow-3">
          <q-card-section>
            <div class="text-h6 text-primary">🥐 Breakfast</div>
            <q-separator spaced />
            <q-option-group
              v-model="selectedBreakfast"
              :options="breakfastOptions"
              color="blue"
              type="checkbox"
            />
          </q-card-section>
        </q-card>
      </div>

      <!-- Lunch -->
      <div class="col-12 col-md-4">
        <q-card class="my-card bg-orange-1 text-dark shadow-3">
          <q-card-section>
            <div class="text-h6 text-primary">🍛 Lunch</div>
            <q-separator spaced />
            <q-option-group
              v-model="selectedLunch"
              :options="lunchOptions"
              color="orange"
              type="checkbox"
            />
          </q-card-section>
        </q-card>
      </div>

      <!-- Dinner -->
      <div class="col-12 col-md-4">
        <q-card class="my-card bg-purple-1 text-dark shadow-3">
          <q-card-section>
            <div class="text-h6 text-primary">🍲 Dinner</div>
            <q-separator spaced />
            <q-option-group
              v-model="selectedDinner"
              :options="dinnerOptions"
              color="purple"
              type="checkbox"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Package Selection -->
    <div class="q-mt-lg">
      <q-card class="my-card bg-green-1 text-dark shadow-3">
        <q-card-section>
          <div class="text-h6 text-primary">📦 Sylhet Packages</div>
          <q-separator spaced />
          <q-option-group
            v-model="selectedPackage"
            :options="packages"
            color="green"
            type="radio"
            inline
          />
        </q-card-section>
      </q-card>
    </div>

    <!-- Display Selected Items -->
    <div class="q-mt-lg">
      <q-card class="my-card shadow-2">
        <q-card-section>
          <div class="text-h6">📝 Your Selected Items</div>
          <q-separator spaced />
          <q-table
            flat
            :rows="tableRows"
            :columns="tableColumns"
            row-key="id"
            dense
            bordered
          />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Breakfast Options
const breakfastOptions = [
  { label: "Pitha (চিতই/ভাপা)", value: "Pitha" },
  { label: "Paratha with Dim Bhuna", value: "Paratha & Dim" },
  { label: "Cha (Sylheti Tea)", value: "Cha" },
];
const selectedBreakfast = ref([]);

// Lunch Options
const lunchOptions = [
  { label: "Shutki Maas Curry", value: "Shutki Curry" },
  { label: "Beef Rezala", value: "Beef Rezala" },
  { label: "Vegetable Mix Bharta", value: "Bharta" },
];
const selectedLunch = ref([]);

// Dinner Options
const dinnerOptions = [
  { label: "Murgi Curry (Sylheti Style)", value: "Murgi Curry" },
  { label: "Shidol Shutki Bhuna", value: "Shidol" },
  { label: "Daal & Vegetable Tarkari", value: "Daal" },
];
const selectedDinner = ref([]);

// Packages
const packages = [
  { label: "7 Days Package - ৳2500", value: "7 Days" },
  { label: "15 Days Package - ৳5000", value: "15 Days" },
  { label: "30 Days Package - ৳9500", value: "30 Days" },
];
const selectedPackage = ref(null);

// Table Columns
const tableColumns = [
  { name: "meal", label: "Meal Type", align: "left", field: "meal" },
  { name: "item", label: "Selected Items", align: "left", field: "item" },
];

// Table Rows
const tableRows = computed(() => [
  { id: 1, meal: "Breakfast", item: selectedBreakfast.value.join(", ") || "None" },
  { id: 2, meal: "Lunch", item: selectedLunch.value.join(", ") || "None" },
  { id: 3, meal: "Dinner", item: selectedDinner.value.join(", ") || "None" },
  { id: 4, meal: "Package", item: selectedPackage.value || "None" },
]);
</script>

<style scoped>
.my-card {
  border-radius: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.my-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
</style>
