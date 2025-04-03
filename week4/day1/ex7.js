(function(userName) {
    const userInfoDiv = document.getElementById("user-info");

    
    const profilePic = document.createElement("img");
    profilePic.src = "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"; 
    profilePic.alt = "Profile Picture";

   
    const userNameSpan = document.createElement("span");
    userNameSpan.textContent = userName;

   
    userInfoDiv.appendChild(profilePic);
    userInfoDiv.appendChild(userNameSpan);
})("John");
