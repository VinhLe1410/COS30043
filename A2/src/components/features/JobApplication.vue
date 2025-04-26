<script lang="ts" setup></script>

<template>
  <div class="container-fluid">
    <h2>Job Application</h2>
    <!-- Personal Information Fieldset -->
    <fieldset class="row gx-1 pt-2">
      <legend>Personal Information</legend>
      <!-- First Name Input Field -->
      <div class="row gx-1 px-2 py-1 col-lg-4 col-md-6 col-sm-12">
        <label for="fFirstName" class="form-label">First Name:</label>
        <input type="text" class="form-control" id="fFirstName" />
      </div>
      <!-- Last Name Input Field -->
      <div class="row gx-1 px-2 py-1 col-lg-4 col-md-6 col-sm-12">
        <label for="fLastName" class="form-label">Last Name:</label>
        <input type="text" class="form-control" id="fLastName" />
      </div>
      <!-- Date of Birth Input Field -->
      <div class="row gx-1 px-2 py-1 col-lg-4 col-md-6 col-sm-12">
        <label for="fBirthDate" class="form-label">Date of Birth:</label>
        <input type="date" id="fBirthDate" class="form-control" />
      </div>
    </fieldset>
    <!-- Account Details Fieldset -->
    <fieldset class="row gx-1 pt-5">
      <legend>Account Details</legend>
      <!-- Username Input Field -->
      <div class="row gx-1 px-2 py-1 col-lg-4 col-md-6 col-sm-12">
        <label for="fUsername" class="form-label">Username:</label>
        <input type="text" class="form-control" id="fUsername" />
      </div>
      <!-- Password Input Field -->
      <div class="row gx-1 px-2 py-1 col-lg-4 col-md-6 col-sm-12">
        <label for="fPassword" class="form-label">Password:</label>
        <input type="text" class="form-control" id="fPassword" />
      </div>
      <!-- Password Confirmation Input Field -->
      <div class="row gx-1 px-2 py-1 col-lg-4 col-md-6 col-sm-12">
        <label for="fPwConfirm" class="form-label">Confirm Password:</label>
        <input type="text" class="form-control" id="fPwConfirm" />
      </div>
      <!-- Email Input Field -->
      <div class="row gx-1 px-2 py-1 col-lg-4 col-md-6 col-sm-12">
        <label for="fEmail" class="form-label">Email:</label>
        <input type="text" class="form-control" id="fEmail" />
      </div>
    </fieldset>
    <!-- Address Fieldset -->
    <fieldset class="row gx-1 pt-5">
      <legend>Address</legend>
      <!-- Street Address Input Field -->
      <div class="row gx-1 px-2 py-1 col-lg-4 col-md-6 col-sm-12">
        <label for="fStreetAddress" class="form-label">Street Address:</label>
        <input type="text" class="form-control" id="fStreetAddress" />
      </div>
      <!-- Suburb Input Field -->
      <div class="row gx-1 px-2 py-1 col-lg-4 col-md-6 col-sm-12">
        <label for="fSuburb" class="form-label">Suburb:</label>
        <input type="text" class="form-control" id="fSuburb" />
      </div>
      <!-- Postcode Input Field -->
      <div class="row gx-1 px-2 py-1 col-lg-4 col-md-6 col-sm-12">
        <label for="fPostcode" class="form-label">Postcode:</label>
        <input type="text" class="form-control" id="fPostcode" />
      </div>
      <!-- Mobile Number Input Field -->
      <div class="row gx-1 px-2 py-1 col-lg-4 col-md-6 col-sm-12">
        <label for="fMobile" class="form-label">Mobile Number:</label>
        <input type="tel" class="form-control" id="fMobile" />
      </div>
    </fieldset>
  </div>
</template>

<style></style>
