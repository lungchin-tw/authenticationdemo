
var onSignIn = (googleUser) => {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  
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

  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:9999/api/auth/google');
  xhr.setRequestHeader('X-AUTH-USER', '6');
  xhr.setRequestHeader('X-AUTH-TOKEN', '6ce3a74ba23d4facb6b250a995e8a7d2');
  xhr.onload = () => {
    console.log(`XMLHttpRequest::onload, ${xhr.responseText}`);
  }

  let formdata = new FormData();
  formdata.append('idtoken', googleUser.getAuthResponse().id_token);

  xhr.send(formdata);
}

var onSignInFailure = () => {
  document.getElementById("Profile").innerHTML = 
  `<p> onSignInFailure:</p>` + 
  `<p>WindowOrign: ${window.location.origin}</p>`;
}

document.getElementById("Profile").innerHTML = `<p>WindowOrign: ${window.location.origin}</p>`;