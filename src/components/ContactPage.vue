<template>
  <section class="py-5">
    <b-container>
      <h2 class="mb-4 text-success">Contact Us</h2>

      <!-- Contact Information -->
      <div class="mb-5">
        <p><strong>Email:</strong> contact@goalline.com</p>
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

        <b-button type="submit" variant="success">Send Message</b-button>
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
  BAlert
} from 'bootstrap-vue-next';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const successMessage = ref('');

function handleSubmit() {
  // Normally you'd send this data to a backend API
  console.log('Contact Form Submitted:', form.value);

  // Simulate success
  successMessage.value = 'Your message has been sent. Thank you!';
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
}
</script>
