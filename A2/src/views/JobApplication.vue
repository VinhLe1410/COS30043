<script lang="ts" setup>
import InputGroup from '@/components/common/InputGroup.vue'
import { ref, computed } from 'vue'
import { validators } from '@/utils/validators'

const vFirstName = ref('')
const vLastName = ref('')
const vBirthDate = ref('')
const vUsername = ref('')
const vPassword = ref('')
const vPwConfirm = ref('')
const vEmail = ref('')
const vStreetAddress = ref('')
const vSuburb = ref('')
const vPostcode = ref('')
const vMobile = ref('')
const vJobCategory = ref('null')

// Checkers
const isFirstNameValid = computed(() => validators.isLetterOnly(vFirstName.value))
const isLastNameValid = computed(() => validators.isLetterOnly(vLastName.value))
const isUsernameValid = computed(() => validators.isUsernameValid(vUsername.value))
const isPasswordValid = computed(() => validators.isPasswordValid(vPassword.value))
const isPasswordConfirmationValid = computed(() => validators.isPasswordConfirmationValid(vPwConfirm.value, vPassword.value))
const isAgeValid = computed(() => validators.isAgeValid(vBirthDate.value))
const isEmailValid = computed(() => validators.isEmailValid(vEmail.value))
const isPostcodeValid = computed(() => validators.isPostcodeValid(vPostcode.value))
const isMobileValid = computed(() => validators.isMobileValid(vMobile.value))
const isJobCategoryValid = computed(() => validators.isJobCategoryValid(vJobCategory.value))

// Optional checkers
const isStreetAddressValid = computed(() => validators.isOptionalTextValid(vStreetAddress.value, 40))
const isSuburbValid = computed(() => validators.isOptionalTextValid(vSuburb.value, 20))

// Everything checker
const isEverythingValid = computed(() => {
  return (
    isFirstNameValid.value &&
    isLastNameValid.value &&
    isUsernameValid.value &&
    isPasswordValid.value &&
    isPasswordConfirmationValid.value &&
    isAgeValid.value &&
    isEmailValid.value &&
    isPostcodeValid.value &&
    isMobileValid.value &&
    isJobCategoryValid.value &&
    isStreetAddressValid.value &&
    isSuburbValid.value
  )
})

// Terms and conditions visibility state
const showTerms = ref(false)

const toggleTerms = () => {
  showTerms.value = !showTerms.value
}

</script>

<template>
  <div class="container-xl">
    <h2><strong>Job Application</strong></h2>
    <!-- Personal Information Fieldset -->
    <form method="post" action="http://mercury.swin.edu.au/it000000/formtest.php">
      <fieldset class="row gx-1 pt-2">
        <legend>Personal Information</legend>
        <!-- First Name Input Field -->
        <InputGroup
          id="fFirstName"
          label="First Name"
          v-model="vFirstName"
          :errorMessage="'First name must contain only letters.'"
          :showError="vFirstName && !isFirstNameValid"
        />
        <!-- Last Name Input Field -->
        <InputGroup
          id="fLastName"
          label="Last Name"
          v-model="vLastName"
          :errorMessage="'Last name must contain only letters.'"
          :showError="vLastName && !isLastNameValid"
        />
        <!-- Date of Birth Input Field -->
        <InputGroup
          id="fBirthDate"
          label="Date of Birth"
          type="date"
          v-model="vBirthDate"
          :errorMessage="'You must be at least 16 years old.'"
          :showError="vBirthDate && !isAgeValid"
        />
      </fieldset>
      <!-- Account Details Fieldset -->
      <fieldset class="row gx-1 pt-2">
        <legend>Account Details</legend>
        <!-- Username Input Field -->
        <InputGroup
          id="fUsername"
          label="Username"
          v-model="vUsername"
          :errorMessage="'Must be at least 3 characters long.'"
          :showError="vUsername && !isUsernameValid"
        />
        <!-- Password Input Field -->
        <InputGroup
          id="fPassword"
          label="Password"
          type="password"
          v-model="vPassword"
          :errorMessage="'Must have at least 8 characters with special character(s).'"
          :showError="vPassword && !isPasswordValid"
        />
        <!-- Password Confirmation Input Field -->
        <InputGroup
          id="fPwConfirm"
          label="Confirm Password"
          type="password"
          v-model="vPwConfirm"
          :errorMessage="'Password confirmation must match the password.'"
          :showError="vPwConfirm && !isPasswordConfirmationValid"
        />
        <!-- Email Input Field -->
        <InputGroup
          id="fEmail"
          label="Email"
          v-model="vEmail"
          :errorMessage="'Email is not in a valid format.'"
          :showError="vEmail && !isEmailValid"
        />
      </fieldset>
      <!-- Address Fieldset -->
      <fieldset class="row gx-1 pt-2">
        <legend>Address</legend>
        <!-- Street Address Input Field -->
        <InputGroup
          id="fStreetAddress"
          label="Street Address"
          v-model="vStreetAddress"
          :errorMessage="'Street address must be less than 40 characters.'"
          :showError="!isStreetAddressValid"
        />
        <!-- Suburb Input Field -->
        <InputGroup
          id="fSuburb"
          label="Suburb"
          v-model="vSuburb"
          :errorMessage="'Suburb must be less than 20 characters.'"
          :showError="!isSuburbValid"
        />
        <!-- Postcode Input Field -->
        <InputGroup
          id="fPostcode"
          label="Postcode"
          v-model="vPostcode"
          :errorMessage="'Postcode must be 4 digits long.'"
          :showError="vPostcode && !isPostcodeValid"
        />
        <!-- Mobile Number Input Field -->
        <InputGroup
          id="fMobile"
          label="Mobile Number"
          type="tel"
          v-model="vMobile"
          :errorMessage="'Phone number must be in the format 04XXXXXXXX.'"
          :showError="vMobile && !isMobileValid"
        />
      </fieldset>
      <!-- A Dropdown for choosing job category  -->
      <fieldset class="row gx-1 pt-2">
        <legend>Job Category</legend>
        <select class="form-select" aria-label="Selection" v-model="vJobCategory" required :class="{'is-invalid': vJobCategory && !isJobCategoryValid}">
          <option selected value="null" disabled>Choose a job category</option>
          <option value="AI">Artifical Intelligence</option>
          <option value="DATA">Data Science</option>
          <option value="WEB">Web Development</option>
          <option value="MOBILE">Mobile Development</option>
        </select>
      </fieldset>
      <!-- Terms and Conditions -->
      <div v-if="showTerms" class="alert alert-info mt-4">
        <h5>Terms and Conditions</h5>
        <p>By registering for this job application, you agree to the following terms:</p>
        <ul>
          <li>All information provided is accurate and true to the best of your knowledge.</li>
          <li>You consent to background checks and reference verification.</li>
          <li>You understand that false information may result in rejection of your application.</li>
          <li>Your personal data will be processed in accordance with privacy laws.</li>
        </ul>
      </div>
      <!-- Submit and Terms Buttons -->
      <div class="d-flex gap-2 pt-2">
        <button type="submit"
            class="btn btn-primary"
            :disabled="!isEverythingValid"
            @click="handleRegistration">
            Register
        </button>
        <button type="button"
            class="btn btn-secondary"
            @click="toggleTerms">
            {{ showTerms ? 'Hide' : 'Show' }} Terms & Conditions
        </button>
      </div>
    </form>
  </div>
</template>

<style></style>
