<template>
  <div>
    <Header />
    <div class="profile-container">
      <div class="form-group">
        <div class="profile-fields">
          <label for="username">Username:</label>
          <div class="input-container">
            <span>{{ user.loggedInUser ? displayUsername : 'Loading...' }}</span>
          </div>

          <label for="oldPassword">Old Password:</label>
          <div class="password-container">
            <input :type="showoldPassword ? 'text' : 'password'" v-model="user.oldPassword" required id="oldPassword" placeholder="Old password" />
            <i class="eye-toggle" @click="toggleOldPasswordVisibility('oldPassword')" :class="eyeIconClassoldPassword">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
            </i>
          </div>

          <label for="newPassword">New Password:</label>
          <div class="password-container">
            <input :type="shownewPassword ? 'text' : 'password'" v-model="user.newPassword" required id="newPassword" placeholder="New password" />
            <span class="eye-toggle" @click="toggleNewPasswordVisibility('newPassword')">
              <i :class="eyeIconClassnewPassword"></i>
            </span>
          </div>

          <label for="confirmPassword">Confirm Password:</label>
          <div class="password-container">
            <input :type="showconfirmPassword ? 'text' : 'password'" v-model="user.confirmPassword" required id="confirmPassword" placeholder="Confirm password" />
            <span class="eye-toggle" @click="toggleConfirmPasswordVisibility('confirmPassword')">
              <i :class="eyeIconClassconfirmPassword"></i>
            </span>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
          </div>

          <button @click="updatePassword">Update Password</button>
          <div v-if="passwordMismatchAlert" class="alert" :class="{ 'success-message': passwordUpdated }">
            {{ passwordMismatchAlertMessage }}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "", // Placeholder for the actual username
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      showoldPassword: false,
      shownewPassword: false,
      showconfirmPassword: false,
      passwordMismatchAlert: false,
      passwordMismatchAlertMessage: "",
      passwordUpdated: false,
    };
  },

  computed: {
    eyeIconClassoldPassword() {
      return this.showoldPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
    },
    eyeIconClassnewPassword() {
      return this.shownewPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
    },
    eyeIconClassconfirmPassword() {
      return this.showconfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
    },

    displayUsername() {
      return this.user.loggedInUser.name || "Loading...";
    },
  },

  mounted() {
    // Retrieve user details from session storage
    const storedUser = sessionStorage.getItem('loggedInUser', '$oid');
    if (storedUser) {
      const sourceData = JSON.parse(JSON.parse(storedUser).source);

      this.user.loggedInUser = {
        name: sourceData.username,
      };
    }
  },

  methods: {
    async updatePassword() {

      if (!this.user.oldPassword || !this.user.newPassword || !this.user.confirmPassword) {
    this.passwordMismatchAlert = true;
    this.passwordMismatchAlertMessage = 'Please fill in all fields.';
    return;
  }

      // Check if new password and confirm password match
      if (this.user.newPassword !== this.user.confirmPassword) {
        // Show an alert message for mismatched passwords
        this.passwordMismatchAlert = true;
        this.passwordMismatchAlertMessage = 'New password and Confirm password must match.';
        return;
      }

      if (this.user.oldPassword === this.user.newPassword) {
    this.passwordMismatchAlert = true;
    this.passwordMismatchAlertMessage = ' Old and New passwords should not match.';
    return;
  }

      // Call the API to reset password
      const apiEndpoint = "http://localhost:8080/mannit/resetpwd";
      const requestBody = {
        username: this.user.loggedInUser.name,
        password: this.user.oldPassword, // Assuming oldPassword is the current password
        new_password: this.user.newPassword,
      };

      try {
        const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });

        const responseData = await response.json();

        console.log('Response:', responseData);

        
        if (response.ok) {
          this.passwordUpdated = true;
          this.passwordMismatchAlertMessage = 'Password updated successfully';
    
          // Reset password fields after updating
          this.user.oldPassword = "";
          this.user.newPassword = "";
          this.user.confirmPassword = "";
          // Reset the password mismatch alert
          // this.passwordMismatchAlert = false;
        } else {
          if (response.status === 401) {
            // Handle incorrect old password
            this.passwordMismatchAlert = true;
            this.passwordMismatchAlertMessage = 'Incorrect old password. Please try again.';
          } else if (responseData.errorCode === '105') {
            // Handle specific error code for password criteria not met
            console.error('Password does not meet the criteria');
            this.passwordMismatchAlert = true;
            this.passwordMismatchAlertMessage =('PLEASE FILL ALL THE FIELDS..');
          } else {
            console.error('Failed to update password:', response.statusText);
            this.passwordMismatchAlert = true;
            this.passwordMismatchAlertMessage = 'INCORRECT OLD PASSWORD';
          }
        }
      } catch (error) {
        console.error('Error updating password:', error);
        this.passwordMismatchAlert = true;
        this.passwordMismatchAlertMessage = 'An error occurred. Please try again later.';
      }
    },

    toggleOldPasswordVisibility() {
      this.showoldPassword = !this.showoldPassword;
    },
    toggleNewPasswordVisibility() {
      this.shownewPassword = !this.shownewPassword;
    },
    toggleConfirmPasswordVisibility() {
      this.showconfirmPassword = !this.showconfirmPassword;
    },
  },
};
</script>

<style scoped>
@import '@/styles/profile.css';
</style>
