<template>
	<div class="login">
		<!-- <form class="row g-3">
			<div class="col-md-4">
				<label for="validationServer01" class="form-label">First name</label>
				<input
					type="text"
					class="form-control is-valid"
					id="validationServer01"
					:value="fname"
					required
				/>
				<div class="valid-feedback">
					Looks good!
				</div>
			</div>
			<div class="col-md-4">
				<label for="validationServer02" class="form-label">Last name</label>
				<input
					type="text"
					class="form-control is-valid"
					id="validationServer02"
					:value="lname"
					required
				/>
				<div class="valid-feedback">
					Looks good!
				</div>
			</div>
			<div class="col-md-4">
				<label for="validationServerUsername" class="form-label"
					>Username</label
				>
				<div class="input-group has-validation">
					<span class="input-group-text" id="inputGroupPrepend3">@</span>
					<input
						type="text"
						class="form-control is-valid"
						id="validationServerUsername"
						aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
						required
						:value="username"
					/>
					<div id="validationServerUsernameFeedback" class="valid-feedback">
						Please choose a username.
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<label for="validationServer03" class="form-label">City</label>
				<input
					:value="city"
					type="text"
					class="form-control is-valid"
					id="validationServer03"
					aria-describedby="validationServer03Feedback"
					required
				/>
				<div id="validationServer03Feedback" class="valid-feedback">
					Please provide a valid city.
				</div>
			</div>
			<div class="col-md-3">
				<label for="validationServer04" class="form-label">State</label>

				<input
					class="form-control is-valid"
					id="validationServer04"
					aria-describedby="validationServer04Feedback"
					required
					type="text"
					:value="state"
				/>

				<div id="validationServer04Feedback" class="valid-feedback">
					Please select a valid state.
				</div>
			</div>
			<div class="col-md-3">
				<label for="validationServer05" class="form-label">Zip</label>
				<input
					:value="zip"
					type="text"
					class="form-control is-valid"
					id="validationServer05"
					aria-describedby="validationServer05Feedback"
					required
				/>
				<div id="validationServer05Feedback" class="valid-feedback">
					Please provide a valid zip.
				</div>
			</div>
			<div class="col-12">
				<div class="form-check">
					<input
						class="form-check-input is-valid"
						type="checkbox"
						value=""
						id="validCheck3"
						aria-describedby="validCheck3Feedback"
						required
					/>
					<label class="form-check-label" for="validCheck3">
						Agree to terms and conditions
					</label>
					<div id="validCheck3Feedback" class="invalid-feedback">
						You must agree before submitting.
					</div>
				</div>
			</div>
			<div class="col-12">
				<button class="btn btn-primary" type="submit">Submit form</button>
			</div>
		</form> -->
    <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" :value="fname" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" :value="lname" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input :value="username" type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" :value="city" required>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">State</label>
 <input type="text" :value="state"  required />
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" :value="zip" required>
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
	</div>
	<router-view />
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import UserServices from "@/services/UserServices.js";
export default {
	props: ["fname", "lname", "username", "city", "state", "zip"],
	data() {
		return {
			user: {
				auth: false,
				id: uuidv4(),
				fname: "",
				lname: "",
				username: "",
				city: "",
				state: "",
				zip: "",
			},
		};
	},
	created() {
		UserServices.getUsers()
			// .get(
			//   'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3/events'
			// )
			.then((response) => {
				this.users = response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	},
};
</script>
