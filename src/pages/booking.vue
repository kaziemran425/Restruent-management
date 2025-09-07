<template>
  <div class="q-pa-md">
    <div
      class="q-pa-md flex justify-center bg-green-4"
      style="min-height: 100vh"
    >
      <q-card class="q-pa-lg" style="width: 500px; background: white">
        <div class="text-h5 text-center q-mb-lg">Booking Confirmation</div>

        <q-form @submit.prevent="confirmBooking">
          <!-- 1. Customer Info -->
          <div class="text-subtitle1 q-mb-sm">Customer Information</div>
          <q-input
            filled
            v-model="booking.customerName"
            label="Full Name"
            required
            class="q-mb-md"
          />
          <q-input
            filled
            v-model="booking.phone"
            label="Phone Number"
            type="tel"
            required
            class="q-mb-md"
          />
          <q-input
            filled
            v-model="booking.email"
            label="Email"
            type="email"
            required
            class="q-mb-md"
          />

          <!-- 2. Package Selection -->
          <div class="text-subtitle1 q-mb-sm">Select Package</div>
          <q-select
            filled
            v-model="booking.package"
            :options="packages"
            label="Package"
            required
            class="q-mb-md"
          />

          <!-- 3. Check-in and Check-out -->
          <div class="text-subtitle1 q-mb-sm">Booking Dates</div>
          <q-input
            filled
            v-model="booking.checkIn"
            type="date"
            label="Check-in Date"
            class="q-mb-md"
          />
          <q-input
            filled
            v-model="booking.checkOut"
            type="date"
            label="Check-out Date"
            class="q-mb-md"
          />

          <!-- 4. Payment Option -->
          <div class="text-subtitle1 q-mb-sm">Payment Option</div>
          <q-select
            filled
            v-model="booking.paymentOption"
            :options="paymentOptions"
            label="Payment Type"
            required
            class="q-mb-md"
          />

          <!-- 5. Confirm Booking Button -->
          <q-btn
            label="Confirm Booking"
            type="submit"
            color="primary"
            class="full-width q-mt-md"
          />
        </q-form>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Booking Data
const booking = ref({
  customerName: "",
  phone: "",
  email: "",
  package: null,
  checkIn: "",
  checkOut: "",
  paymentOption: null,
});

// Package Options
const packages = [
  { label: "7-Day Package", value: "7-day" },
  { label: "15-Day Package", value: "15-day" },
  { label: "30-Day Package", value: "30-day" },
];

// Payment Options
const paymentOptions = [
  { label: "Advance Payment", value: "advance" },
  { label: "Full Payment", value: "full" },
];

// Confirm Booking
function confirmBooking() {
  console.log("Booking Details:", booking.value);
  alert(`Booking confirmed for ${booking.value.customerName}!`);
  resetForm();
}

// Reset Form
function resetForm() {
  booking.value = {
    customerName: "",
    phone: "",
    email: "",
    package: null,
    checkIn: "",
    checkOut: "",
    paymentOption: null,
  };
}
</script>

<style scoped>
.q-card {
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}
</style>
