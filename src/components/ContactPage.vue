<template>
  <section class="py-5">
    <b-container>
      <h1 class="mb-4 text-success">Contact Us</h1>

      <!-- Contact Information -->
      <div class="mb-5">
        <p><strong>Email:</strong> contact@goalglory.com</p>
        <p><strong>Phone:</strong> +31 6 12345678</p>
        <p><strong>Address:</strong> Stadionweg 100, 1077 XX Amsterdam, Netherlands</p>
      </div>

      <!-- Contact Form -->
      <b-form @submit.prevent="handleSubmit">
        <b-row>
          <b-col md="6" class="mb-3">
            <b-form-group label="Name" label-for="nameInput">
              <b-form-input
                  id="nameInput"
                  v-model="form.name"
                  required
                  placeholder="Enter your name"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6" class="mb-3">
            <b-form-group label="Email" label-for="emailInput">
              <b-form-input
                  id="emailInput"
                  type="email"
                  v-model="form.email"
                  required
                  placeholder="Enter your email"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-form-group label="Subject" label-for="subjectInput" class="mb-3">
          <b-form-input
              id="subjectInput"
              v-model="form.subject"
              required
              placeholder="Subject"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Message" label-for="messageTextarea" class="mb-4">
          <b-form-textarea
              id="messageTextarea"
              v-model="form.message"
              rows="5"
              required
              placeholder="Write your message here..."
          ></b-form-textarea>
        </b-form-group>

        <div class="d-flex gap-2">
          <b-button type="submit" variant="success" :disabled="isLoading">
            {{ isLoading ? 'Sending...' : 'Send Message' }}
          </b-button>
          <b-button type="button" variant="outline-secondary" @click="resetForm">
            Reset
          </b-button>
        </div>
      </b-form>

      <b-alert
          v-if="successMessage"
          variant="success"
          class="mt-4"
          dismissible
          @dismissed="successMessage = ''"
      >
        {{ successMessage }}
      </b-alert>
    </b-container>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import {
  BContainer,
  BRow,
  BCol,
  BForm,
  BFormGroup,
  BFormInput,
  BFormTextarea,
  BButton,
  BAlert,
} from 'bootstrap-vue-next';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const successMessage = ref('');
const isLoading = ref(false);

function handleSubmit() {
  isLoading.value = true;

  setTimeout(() => {
    successMessage.value = 'Your message has been sent. Thank you!';
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
    isLoading.value = false;
  }, 1000);
}

function resetForm() {
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  successMessage.value = '';
}
</script>

<style scoped>
.form-control,
.form-select {
  border: 2px solid #198754;
}

.form-control:focus,
.form-select:focus {
  border-color: #146c43;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}
</style>