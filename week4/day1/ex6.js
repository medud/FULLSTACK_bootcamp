(function (numChildren, partnerName, location, jobTitle) {
    const message = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    
    // Display in the DOM
    const div = document.createElement('div');
    div.textContent = message;
    document.body.appendChild(div);
    
    // Also log in the console
    console.log(message);
})(2, "Emma", "New York", "Software Engineer");