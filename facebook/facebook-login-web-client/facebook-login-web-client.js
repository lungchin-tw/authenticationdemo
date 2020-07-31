
var onLogin = () => {
    console.log('onLogin');
    if ( getLoginStatus() == 'connected' ) {
        FB.api('/me', function(response) {
            console.log(`[FB.api/me], Response=`, response);
            document.getElementById("Profile").innerHTML = 
                `<p>name: ${response.name}</p>` +
                `<p>id: ${response.id}</p>`;
        });
    }
}

var logout = () => {
    console.log('logout');

    FB.logout(
        function (response) {
            console.log('[FB.logout], Response=', response);
            printStatusResponse(response);
        }
    );
}

var fbAsyncInit = () => {
    console.log('fbAsyncInit');

    FB.init({
        appId   : '545824362782331',
        cookie  : false,
        xfbml   : true,
        version : 'v7.0'
    });
        
    FB.AppEvents.logPageView();
    getLoginStatus();
}

var getLoginStatus = () => {
    let log_cat = 'getLoginStatus';
    console.log(log_cat);
    let status;

    FB.getLoginStatus( function( response ) {
        console.log(`[FB.getLoginStatus.response], Response=`, response);

        status = response.status;
        printStatusResponse(response);
    });
    
    return status;
}

var printStatusResponse = (response) => {
    if (response.authResponse == null) {
        document.getElementById("Status").innerHTML = 
            `<p>Status: ${response.status}</p>` + 
            `<p>WindowOrigin: ${window.location.origin}</p>`;
    } else {
        var auth = response.authResponse
        document.getElementById("Status").innerHTML =
            `<p> dealwithLoginStatusResponse:</p>` + 
            `<p>Status: ${response.status}</p>` +
            `<p>WindowOrign: ${window.location.origin}</p>` +
            `<p>accessToken: ${auth.accessToken}</p>`+
            `<p>expiresIn: ${auth.expiresIn}</p>`+
            `<p>reauthorize_required_in: ${auth.reauthorize_required_in}</p>` +
            `<p>signedRequest: ${auth.signedRequest}</p>` +
            `<p>userID: ${auth.userID}</p>`;
    }
}