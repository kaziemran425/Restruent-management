<template>
  <div class="q-pa-md bg-green-4" style="min-height: 100vh;">
    <div class="text-center text-h4 q-mb-lg">Dashboard</div>

    <div class="row q-gutter-md">
      <!-- Today's Customers -->
      <div class="col-12 col-md-3">
        <q-card class="q-pa-md bg-primary text-white text-center">
          <div class="text-h6">Today's Customers</div>
          <div class="text-h4 q-mt-md">{{ todaysCustomers }}</div>
        </q-card>
      </div>

      <!-- Active Packages -->
      <div class="col-12 col-md-3">
        <q-card class="q-pa-md bg-primary text-white text-center">
          <div class="text-h6">Active Packages</div>
          <div class="text-h4 q-mt-md">{{ activePackages }}</div>
        </q-card>
      </div>

      <!-- Total Income - Expense -->
      <div class="col-12 col-md-3">
        <q-card class="q-pa-md bg-primary text-white text-center">
          <div class="text-h6">Total Income - Expense</div>
          <div class="text-h4 q-mt-md">${{ totalIncome - totalExpense }}</div>
        </q-card>
      </div>

      <!-- Quick Add Booking Button -->
      <div class="col-12 col-md-3 bg-primary">
        <q-card class="q-pa-md  text-white text-center">
          <q-btn
            color="white"
            text-color="green"
            label="Quick Add Booking"
            icon="add_box"
            class="full-width"
            @click="openBookingPopup"
          />
        </q-card>
      </div>
    </div>

    <!-- Booking Popup -->
    <q-dialog v-model="showBookingPopup">
      <q-card class="q-pa-md" style="min-width: 400px;">
        <h5 class="q-mb-md">Quick Booking</h5>

        <q-input v-model="booking.name" label="Customer Name" outlined class="q-mb-sm" />
        <q-input v-model="booking.phone" label="Phone Number" outlined class="q-mb-sm" />
        <q-select
          v-model="booking.package"
          :options="packages"
          label="Select Package"
          outlined
          class="q-mb-sm"
        />
        <q-btn color="primary" label="Add Booking" class="full-width q-mt-md" @click="addBooking" />

        <div class="flex justify-end q-mt-md">
          <q-btn flat label="Close" color="grey" v-close-popup />
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Dashboard data
const todaysCustomers = ref(12);
const activePackages = ref(8);
const totalIncome = ref(5000);
const totalExpense = ref(2000);

// Booking Popup
const showBookingPopup = ref(false);
const booking = ref({ name: "", phone: "", package: "" });

// Sample packages
const packages = [
  { label: "7-Day Package", value: "7-day" },
  { label: "15-Day Package", value: "15-day" },
  { label: "30-Day Package", value: "30-day" },
];

// Functions
function openBookingPopup() {
  showBookingPopup.value = true;
}

function addBooking() {
  if (!booking.value.name || !booking.value.phone || !booking.value.package) {
    alert("Please fill all fields");
    return;
  }
  // Example: increase today's customers count
  todaysCustomers.value += 1;
  activePackages.value += 1; // for simplicity
  // Reset booking form
  booking.value = { name: "", phone: "", package: "" };
  showBookingPopup.value = false;
  alert("Booking added successfully!");
}
</script>

<style scoped>
.q-card {
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
</style>
