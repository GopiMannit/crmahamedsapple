<!-- version1 -->
<template>
  <div class="page-conatiner">
    <div class="form-container">
      <Header class="Header" />
      <div class="full">
        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
        <div class="top">
          <label for="formInput">Mobile Number</label>
          <div class="search-container">

            <input type="telephone" id="phonenumber" name="search" placeholder="Search..." v-model="data.phonenumber"
              class="custom-input" pattern="[0-9]*" required @keydown.tab="searchIconClicked" />

            <div class="search-icon" @click="searchIconClicked">
              <svg width="15" height="15" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path
                  d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9Z"
                  stroke="#BAACAC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

                <path d="M10.0002 9.99995L7.8252 7.82495" stroke="#BAACAC" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div v-if="searchError" class="error-message">{{ searchError }}</div>
        </div>
        <div class="additional-info">
          <div class="single-line">
            <label for="name">Name</label>
            <div class="input-name">
              <input type="text" id="name" class="custom-input" v-model="data.name" />
            </div>

            <label for="age">Age</label>
            <div class="input-age">
              <select id="age" class="custom-input" v-model="data.age">
                <option value="">Age</option>
                <option v-for="i in 100" :key="i" :value="i">{{ i }}</option>
              </select>
            </div>
            <div class="gender-label" id="gender">
              <label for="gender">Gender</label>
            </div>
            <div class="radio-options">
              <input type="radio" id="male" name="gender" value="Male" v-model="data.gender">
              <label for="male">Male</label>

              <input type="radio" id="female" name="gender" value="Female" v-model="data.gender">
              <label for="female">Female</label>
            </div>
          </div>
          <div class="spacer"></div>

          <div class="location">
            <div class="single-line-1">
              <label for="location">Location</label>
              <input type="text" id="location" class="location-input" v-model="data.location" />

              <label for="Compliant">Compliant</label>
              <select id="Compliant" v-model="data.paintype" class="complaint-input">
                <option disabled value="">Please Select One</option>
                <option v-for="painType in painTypes" :key="painType" :value="painType">{{ painType }}</option>
              </select>
            </div>
          </div>
          <div class="spacer"></div>

          <div class="remarks">
            <label for="remarks">Remarks</label>
            <textarea id="remarks" rows="4" class="custom-input" v-model="data.remarks"></textarea>
          </div>
        </div>

        <div v-if="showAdditionalInfo" class="additional-info">
          <div class="single-line">
            <label for="name">Name</label>
            <div class="input-name">
              <input type="text" id="name" class="custom-input" v-model="data.name_0" />
            </div>

            <label for="age">Age</label>
            <div class="input-age">
              <select id="age" class="custom-input" v-model="data.age_0">
                <option value="">Age</option>
                <option v-for="i in 100" :key="i" :value="i">{{ i }}</option>
              </select>
            </div>
            <div class="gender-label" id="gender">
              <label for="gender">Gender</label>
            </div>
            <div class="radio-options">
              <input type="radio" id="male" name="gender_0" value="Male" v-model="data.gender_0">
              <label for="male">Male</label>

              <input type="radio" id="female" name="gender_0" value="Female" v-model="data.gender_0">
              <label for="female">Female</label>
            </div>
          </div>
          <div class="spacer"></div>

          <div class="location">
            <div class="single-line-1">
              <label for="location">Location</label>
              <input type="text" id="location" class="location-input" v-model="data.location_0" />

              <label for="Compliant">Compliant</label>
              <select id="Compliant" v-model="data.paintype_0" class="complaint-input">
                <option disabled value="">Please select one</option>
                <option v-for="painType in painTypes" :key="painType" :value="painType">{{ painType }}</option>
              </select>
            </div>
          </div>
          <div class="spacer"></div>

          <div class="remarks">
            <label for="remarks">Remarks</label>
            <textarea id="remarks" rows="4" class="custom-input" v-model="data.remarks_0"></textarea>
          </div>
        </div>

        <div @click="increaseCount" class="add-button-container">
          <div class="add-icon" @click="toggleAdditionalInfo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2 11H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>

        <div class="turnup-scale">
          <label for="turnupscale">Turn Up scale</label>
          <select id="turnupscale" class="custom-input" v-model="data.turnupscale">
            <option value="">scale</option>
            <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
          </select>
        </div>
        <div class="spacer"></div>

        <div class="patient">

          <div class="doctor-selection">
            <label for="doctorSelection">Doctor Selection</label>
            <div class="radio-options">
              <input type="radio" id="dutyDoctor" name="doctorSelection" value="Duty Doctor"
                v-model="data.doctorSelection">
              <label for="dutyDoctor">DutyDoctor</label>

              <input type="radio" id="chiefDoctor" name="doctorSelection" value="Chief Doctor"
                v-model="data.doctorSelection">
              <label for="chiefDoctor">ChiefDoctor</label>
            </div>
          </div>
          <div class="spacer"></div>

          <div class="query">
            <label for="query">Query</label>
            <!-- Container for Finance, Distance, Treatment, and Remarks -->
            <div class="finance-distance-treatment-remarks">
              <div class="finance">
                <label for="financeOption">Finance</label>
                <input type="checkbox" id="financeCheckbox" name="financeCheckbox" v-model="data.financeCheckbox"
                  @change="updateFinance">
                <select id="financeOption" class="custom-input" v-model="data.finance" :disabled="!data.financeCheckbox">
                  <option value="">scale</option>
                  <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
                </select>
              </div>

              <div class="distance">
                <label for="distanceOption">Distance</label>
                <input type="checkbox" id="distanceCheckbox" name="distanceCheckbox" v-model="data.distanceCheckbox"
                  @change="updateDistance">
                <select id="distanceOption" class="custom-input" v-model="data.distance"
                  :disabled="!data.distanceCheckbox">
                  <option value="">scale</option>
                  <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
                </select>
              </div>

              <div class="treatment">
                <label for="treatmentOption">Treatment</label>
                <input type="checkbox" id="treatmentCheckbox" name="treatmentCheckbox" v-model="data.treatmentCheckbox"
                  @change="updateTreatment">
                <select id="treatmentOption" class="custom-input" v-model="data.treatment"
                  :disabled="!data.treatmentCheckbox">
                  <option value="">scale</option>
                  <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="spacer"></div>

          <div class="remarks-1">
            <label for="remarks">Remarks</label>
            <textarea id="remarks" rows="4" class="custom-input" v-model="data.remarksDoc"></textarea>
          </div>


          <div class="spacer"></div>
          <div class="dates">
            <div class="expected-date">
              <label for="expectedDate">Expected Date</label>
              <input type="date" id="expectedDate" v-model="data.expectedDate" @input="validateDate('expectedDate')"
                class="custom-input" :min="getMinDate()" />
              <div v-if="dateWarnings.expectedDate" class="warning-message">{{ dateWarnings.expectedDate }}</div>
            </div>
            <div class="expected-date">
              <label for="followUpDate">Follow-up Date</label>
              <input type="date" id="followUpDate" v-model="data.followUpDate" @input="validateDate('followUpDate')"
                class="custom-input" :min="getMinDate()" />
              <div v-if="dateWarnings.followUpDate" class="warning-message">{{ dateWarnings.followUpDate }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="submit-container">
      <button type="button" @click="performAction">{{ buttonText }}</button>
    </div>
    <!-- <Footer/> -->
  </div>
</template>


<script>
import '~/components/Header.vue'
import formData from '@/properties/formData.js';
import { data } from '@/properties/data.js';
// import { data_loop } from '@/properties/data.js';
import { fetchDataByPhoneNumber, saveFormData, updateFormData } from '@/api/api.js';
import { DateTime } from 'luxon';
export default {
  data() {
    return {
      buttonText: 'Submit',
      searchQuery: '',
      showscales: false,
      financeCheckbox: false,
      distanceCheckbox: false,
      treatmentCheckbox: false,
      ...formData,
      count: 0,
      data: { ...data },
      // data_loop: { ...data_loop },
      searchError: '',
      searchMessage: '',
      showAdditionalInfo: false,
      user: {
        name: "",
        objectId: '',
        loggedInUser: {},
      },
      dateWarnings: {
        expectedDate: '',
        followUpDate: '',
      }
    };
  },
  computed: {
    submitButtonText() {
      // Check if formData is not empty
      if (this.formData && Object.keys(this.formData).length > 0) {
        return 'Update';
      } else {
        return 'Submit';
      }
    },
  },
  mounted() {
    // Check if the loggedInUser key is present in session storage
    const storedUser = sessionStorage.getItem("loggedInUser");

    if (storedUser) {
      // Parse the source JSON string
      const sourceData = JSON.parse(JSON.parse(storedUser).source);

      // Access the 'username' property and set it in the component data
      this.user.loggedInUser = {
        name: sourceData.username,
        objectId: sourceData._id.$oid,
      };

      console.log("Logged-in user data:", this.user.loggedInUser);
    } else {
      console.log("No user data found in session storage.");
    }
  },
  methods: {
    increaseCount() {
      this.count++;
    },
    hasValuesInAdditionalInfoFields() {
      return (
        this.data.name_0 ||
        this.data.age_0 ||
        this.data.gender_0 ||
        this.data.location_0 ||
        this.data.paintype_0 ||
        this.data.remarks_0
      );
    },
    validateDate(datatype) {
      const currentDate = new Date().toISOString().split('T')[0];
      const selectedDate = this.data[datatype];

      if (selectedDate && selectedDate < currentDate) {
        this.dateWarnings[datatype] = 'Please select a date in the future.';
      } else {
        this.dateWarnings[datatype] = '';
      }
    },
    updateFinance() {
      if (this.data.financeCheckbox) {

      } else {

      }
    },
    updateDistance() {
      if (this.data.distanceCheckbox) {

      } else {

      }
    },
    updateTreatment() {
      if (this.data.treatmentCheckbox) {

      } else {

      }
    },
    toggleAdditionalInfo() {
      this.showAdditionalInfo = !this.showAdditionalInfo;
      if (this.showAdditionalInfo) {
        this.data_loop.name_0 = '';
      }
    },
    getMinDate() {
      return new Date().toISOString().split('T')[0];
    },
    async searchIconClicked() {
      if (!/^\d+$/.test(this.data.phonenumber)) {
        this.searchError = 'Please enter the phonenumber for search.';
        return;
      }
      // Show a success message to the user
      //  this.showMessageToUser('Successfully Searched');
      //  this.successMessage("Succesfully Searched");

      try {
        const objectId = this.user.loggedInUser.objectId;
        const phoneNumber = parseInt(this.data.phonenumber);
        const response = await fetchDataByPhoneNumber(objectId, phoneNumber);

        if (response && response.source && response.source.length > 0) {
          // Existing data is found
          const dataFromSource = response.source[0];
          this.formData = typeof dataFromSource === 'string' ? JSON.parse(dataFromSource) : dataFromSource;

          // Store the ObjectId and resourceId in sessionStorage
          sessionStorage.setItem('objectId', this.formData.userId?.$oid || '');
          sessionStorage.setItem('resourceId', this.formData._id?.$oid || '');

          // Update the form fields with the fetched data
          this.data = {
            ...this.data,
            phonenumber: this.formData.phonenumber || '',
            name: this.formData.name || '',
            age: this.formData.age || '',
            gender: this.formData.gender || '',
            location: this.formData.location || '',
            paintype: this.formData.paintype || '',
            remarks: this.formData.remarks || '',
            turnupscale: this.formData.turnupscale || '',
            doctorSelection: this.formData.doctorSelection || '',
            finance: this.formData.finance || '',
            distance: this.formData.distance || '',
            treatment: this.formData.treatment || '',
            remarksDoc: this.formData.remarksDoc || '',
            expectedDate: this.formData.expectedDate || '',
            followUpDate: this.formData.followUpDate || '',
            name_0: this.formData.name_0 || '',
            age_0: this.formData.age_0 || '',
            gender_0: this.formData.gender_0 || '',
            location_0: this.formData.location_0 || '',
            paintype_0: this.formData.paintype_0 || '',
            remarks_0: this.formData.remarks_0 || '',
          };

          this.data.financeCheckbox = true;
          this.data.distanceCheckbox = true;
          this.data.treatmentCheckbox = true;

          // Reset searchError
          this.searchError = '';

          // Update the button text and placeholder dynamically
          this.updateButtonAndPlaceholder();

          // Check if additional info box should be shown
          this.showAdditionalInfo = this.hasValuesInAdditionalInfoFields();
        } else {
          // No data found, reset form fields
          this.data = { ...initialFormData }; // assuming initialFormData is your initial form data
          this.formData = {};

          // Update the button text and placeholder dynamically
          this.updateButtonAndPlaceholder();

          // Hide additional info box when no data is found
          this.showAdditionalInfo = false;

          // Set the searchError with a custom message
          this.searchError = `No data available for the provided phone number: ${phoneNumber}`;
        }
      } catch (error) {
        // Log the error for debugging purposes
        console.error('Error fetching data:', error);
        // Set the searchError with a custom message
        this.searchError = 'No Data Found ';
        setTimeout(() => {
          this.searchError = "";
        }, 2000);
      }
    },
    updateButtonAndPlaceholder() {
      // If data is fetched, update the button text and placeholder
      if (this.formData && Object.keys(this.formData).length > 0) {
        this.buttonText = 'Update';
        // Assuming you have a placeholder element
        const phoneNumberInput = this.$refs.phoneNumberInput;

        if (phoneNumberInput) {
          phoneNumberInput.placeholder = this.formData.phonenumber || 'Search...';
        }
      } else {
        // If no data is fetched, reset the button text and placeholder
        this.buttonText = 'Submit';
        // Assuming you have a placeholder element
        const phoneNumberInput = this.$refs.phoneNumberInput;

        if (phoneNumberInput) {
          phoneNumberInput.placeholder = 'Search...';
        }
      }
    },
    // Helper function to show a message to the user
    showMessageToUser(message) {
      // Implement your logic to display the message to the user
      console.log(message);
      // For example, you might set a property in your component to show a notification or update the UI
      // this.showMessage = message;
    },
    async submitForm() {
      try {

        // this.successMessage = '';

        if (!this.data.phonenumber) {
          this.searchError = "Please Enter the Mobile Number";
          setTimeout(() => {
            this.searchError = "";
          }, 4000);
          return;
        }
        const objectId = this.user.loggedInUser.objectId;
        // Set the current date before sending the form data
        this.data.createDated = {
          "$date": DateTime.utc().toISO(),
        };

        console.log('Data before sending:', this.data); // Log the data before sending

        // Save new data
        const saveResponse = await saveFormData(this.data, objectId); // Replace with your actual save method
        this.successMessage = 'Form Submitted Successfully..!';

        console.log('Data saved:', saveResponse);
        setTimeout(() => {
          this.successMessage = "";
        }, 2000);


        // Reset formData to its initial state
        this.data = { ...data };
        console.log('Reset data:', this.data);
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle errors as needed
      }
    },
    async updateForm() {
      try {
        // Retrieve ObjectId and resourceId from sessionStorage
        const objectId = sessionStorage.getItem('objectId');
        const resourceId = sessionStorage.getItem('resourceId');

        // Check if the retrieved ObjectId and resourceId are valid
        if (!objectId || !resourceId) {
          console.error('Cannot update without valid ObjectId or resourceId.');
          return;
        }

        if (this.formData._id) {
          // Set the current date before sending the form data
          this.data.createDated = {
            "$date": DateTime.utc().toISO(),
          };

          console.log('Data before updating:', this.data);

          // Update existing data only if there is an _id
          const updateResponse = await updateFormData(this.data, objectId, resourceId);

          // Check if the update was successful before resetting the data
          if (updateResponse && updateResponse.success) {

            this.successMessage = 'Form updated successfully'
            // Reset formData to its initial state
            this.data = { ...data };
            console.log('Data updated and reset:', this.data);

            this.showAdditionalInfo = false;
            //           setTimeout(() => {
            //   this.searchError = "";
            // }, 4000);
          } else {
            // Handle update failure, show an error message, etc.
            console.error('Error updating form:', updateResponse);
          }
        } else {
          // If _id is not present, log an error or handle it appropriately
          console.error('Cannot update without a valid _id.');
        }
        setTimeout(() => {
          this.successMessage = "";
        }, 4000);
      } catch (error) {
        console.error('Error updating form:', error);
        // Handle errors as needed
      }
    },
    performAction() {
      // Check if data has been fetched
      if (this.buttonText === 'Update') {
        // Data fetched, perform update
        this.updateForm();
      } else {
        // Data not fetched, perform submit
        this.submitForm();
      }
    },
  },
};
</script>

<style scoped>
@import '@/styles/patientEnquiry.css';
</style>