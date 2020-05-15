
var onSignIn = (googleUser) => {
  // Useful data for your client-side scripts:
  let profile = googleUser.getBasicProfile();
  
  document.getElementById("Profile").innerHTML = 
  `<p> OnSingnIn:</p>` + 
  `<p>WindowOrign: ${window.location.origin}</p>` +
  `<p>ID: ${profile.getId()}</p>` +
  `<p>FullName: ${profile.getName()}</p>` +
  `<p>Given Name: ${profile.getGivenName()}</p>` +
  `<p>Family Name: ${profile.getFamilyName()}</p>` +
  `<p>Image URL: ${profile.getImageUrl()}</p>` +
  `<p>Email: ${profile.getEmail()}</p>` +
  `<p>ID Token: ${googleUser.getAuthResponse().id_token}</p>`;
}

var onSignInFailure = () => {
  document.getElementById("Profile").innerHTML = 
  `<p> onSignInFailure:</p>` + 
  `<p>WindowOrign: ${window.location.origin}</p>`;
}

document.getElementById("Profile").innerHTML = `<p>WindowOrign: ${window.location.origin}</p>`;