let getuser = document.querySelector("#getuser");
let git_profile = document.querySelector(".git_profile");


// fetch api using javascript promise and arrow funtion 
// fetch() is a function which are return a promise


let fetch_api = (e) => {
    git_username = document.getElementById("username").value;
    //console.log(git_username);
    if (!git_username) {
        //clear profile
        //console.log("Please insert a Username");
        var alert_msg = document.querySelector(".alert");
        alert_msg.textContent = "Please insert a Username";
        alert_msg.classList.remove("git_alert");
        let output = "<div>";
        output += "";
        output += "<div>";
        document.getElementById("git_profile").innerHTML = output;
    } else {

        fetch(`https://api.github.com/users/${git_username}`)

            //using array function 
            //.then((response) =>{console.log(response)}) // this will give whole result from this site 
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data);
                if (data.message == 'Not Found') {
                    //show alert
                    showAlert();
                    //console.log("User not Found")              
                } else {
                    //show profile
                    showProfile(data);
                }
            })
    }
    e.preventDefault();
}

document.getElementById("getuser").addEventListener("click", fetch_api);

// this will show  alert 
showAlert = () => {
    //alert show
    var alert_msg = document.querySelector(".alert");
    alert_msg.textContent = "User Not Found";
    alert_msg.classList.remove("git_alert");
    let output = "<div>";
    output += "";
    output += "<div>";
    document.getElementById("git_profile").innerHTML = output;
}

// this will show all info 
showProfile = (git_user) => {

    //alert remove
    var alert_msg = document.querySelector(".alert");
    alert_msg.classList.add("git_alert");
    //add user info
    let output = "<div>";
    output += `
    <div class="row justify-content-center">
        <div class="col-lg-3 order-lg-2">
            <div class="card-profile-image">
                <a href="#" class="user_img">
                    <img src="${git_user.avatar_url}" class="rounded-circle img-fluid"></img>
                </a>
            </div>
        </div>
    </div>
    <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
        <div class="d-flex justify-content-between">
            <a href="${git_user.html_url}" target="_blank" class="btn btn-sm btn-info mr-4">Github Profile</a>
            <a href="${git_user.blog}" target="_blank" class="btn btn-sm btn-default float-right">Website</a>
        </div>
    </div>

    <div class="card-body pt-0 pt-md-4">
        <div class="row">
            <div class="col">
                <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                        <span class="heading">${git_user.public_repos}</span>
                        <span class="description">Public Repository</span>
                    </div>
                    <div>
                        <span class="heading">${git_user.public_gists}</span>
                        <span class="description">Public Gists</span>
                    </div>
                    <div>
                        <span class="heading">${git_user.followers}</span>
                        <span class="description">Followers</span>
                    </div>
                    <div>
                        <span class="heading">${git_user.following}</span>
                        <span class="description">Following</span>
                    </div>
               
                </div>
            </div>
        </div>
        <div class="text-center">
            <h3 class="user_name">
                ${git_user.name}
            </h3>
        <div class="h5 font-weight-300 user_location">
            ${git_user.location}
        </div>
        <div class="h5 mt-4 card-profile-stats d-flex justify-content-center">
            <div>
                <span class="heading">${git_user.created_at}</span>
                <span class="description">Created Account</span>
            </div>
            <div>
                <span class="heading">${git_user.twitter_username}</span>
                <span class="description">Twitter Username</span>
            </div>
        </div>
            
        <hr class="my-4">
        <p>
            ${git_user.bio}
        </p>
        </div>
    </div>
`
    //document.querySelector(".user_name").innerHTML = git_user.name;
    //document.querySelector(".user_location").innerHTML = git_user.location;
    output += "<div>";
    document.getElementById("git_profile").innerHTML = output;
}