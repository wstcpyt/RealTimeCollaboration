var app = document.querySelector('#appId');

serverRoute = "/staticinfomagnetic";

//Define routes
page(serverRoute, home);
page(serverRoute + '/draw/:sessionid', draw);

//Configure
page({ hashbang: true});

function home() {
    app.route = 0;
}
function draw(e) {
    app.sessionid = e.params.sessionid;
    app.route = 1;
}