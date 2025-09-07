<template>
  <div class="q-pa-md flex justify-center bg-green-4">
    <q-card class="q-pa-lg" style="width: 400px">
      <div class="text-h5 text-center q-mb-lg">Customer Registration</div>

      <q-form @submit.prevent="registerCustomer">
        <!-- Name -->
        <q-input
          filled
          v-model="customer.firstName"
          label="First Name"
          required
          class="q-mb-md"
        />
        <q-input
          filled
          v-model="customer.lastName"
          label="Last Name"
          required
          class="q-mb-md"
        />

        <!-- Contact -->
        <q-input
          filled
          v-model="customer.phone"
          label="Phone Number"
          type="tel"
          required
          class="q-mb-md"
        />
        <q-input
          filled
          v-model="customer.email"
          label="Email"
          type="email"
          required
          class="q-mb-md"
        />

        <!-- Address -->
        <q-input
          filled
          v-model="customer.address"
          label="Address"
          type="textarea"
          required
          class="q-mb-md"
        />

        <!-- Password -->
        <q-input
          filled
          v-model="customer.password"
          label="Password"
          type="password"
          required
          class="q-mb-md"
        />

        <!-- Submit Button -->
        <q-btn
          label="Register"
          type="submit"
          color="primary"
          class="full-width q-mb-md"
        />

        <!-- Reset Button -->
        <q-btn
          label="Reset"
          color="secondary"
          flat
          class="full-width"
          @click="resetForm"
        />
      </q-form>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const customer = ref({
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  address: "",
  password: "",
});

// Register Customer Function
function registerCustomer() {
  console.log("Customer Data:", customer.value);
  alert(`Customer ${customer.value.firstName} registered successfully!`);
  resetForm();
}

// Reset Form
function resetForm() {
  customer.value = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    password: "",
  };
}
</script>

<style scoped>
.q-card {
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}
</style>
