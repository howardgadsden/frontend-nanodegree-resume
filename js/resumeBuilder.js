var bio = {
    "name": "Barbara Howard",
    "role": "Software Developer",
    "welcomeMessage": "Hello",
    "contacts": {
        "email": "barbarachasehoward@gmail.com",
        "url": "www.chasemeadows.com",
        "mobile": "203-947-0400",
        "github": "howardgadsden",
        "twitter": "chasemeadows",
        "location": "North Salem, NY, US"
    },
    "pictureURL": "https://chasemeadowsfarm.files.wordpress.com/2015/09/headshot.jpg",
    "skills": ["Programming", "Technology Management"]
};

var education = {
    "schools": [{
        "name": "University of Massachusetts",
        "location": "Amherst, MA, US",
        "major": [
            "BS Electrical Engineering"
        ],
        "graduationYear": "1978"
    }, {
        "name": "NYU-Polytechnic University",
        "location": "Brooklyn, NY, US",
        "major": [
            "MS Computer Science"
        ],
        "graduationYear": "1985"
    }]
};



var work = {
    "jobs": [{
        "title": "Executive Vice President",
        "employer": "R2K, Inc.",
        "dates": "1997 - Present",
        "location": "New York, NY, US",
        "description": "Senior management position with responsibility for a multi-national IT services company."
    }, {
        "title": "Director of Program Management",
        "employer": "Sigma Imaging Systems",
        "dates": "1990 - 1997",
        "location": "New York, NY, US",
        "description": "Managed software development and quality assurance in a software product development company."
    }, {
        "title": "Manager, Software Development",
        "employer": "Perkin-Elmer Corp.",
        "dates": "1980 - 1990",
        "location": "Norwalk, CT, US",
        "description": "Managed the development of software that controlled a gas chromatograph."
    }]
};

var projects = {

    "projects": [{
        "title": "About Me",
        "dates": "November 11 - 16",
        "description": "First Udacity project",
        "image": "images/Balloon380x265.jpg?w=135h=165"
    }, {
        "title": "Project 1",
        "dates": "November 16 - 18",
        "description": "Second Udacity project",
        "image": "images/honeycomb380x300.png"
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend([formattedRole]);
    $("#header").prepend([formattedName]);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#header").append(formattedLocation);
    $("#header").append(formattedMobile);
    $("#header").append(formattedEmail);
    $("#header").append(formattedGithub);
    $("#header").append(formattedTwitter);
    $("#header").append(formattedBioPic);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill in bio.skills) {
            if (bio.skills[skill].length > 0) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

work.display = function() {
    for (var job in work.jobs) {
        if (work.jobs[job].employer) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedOutput = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedOutput);
            formattedOutput = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedOutput);
            formattedOutput = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedOutput);
            formattedOutput = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedOutput);
        }
    }
};


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});


function inName(name) {
    var newName = [];
    newName = bio.name.trim().split(" ");
    newName[1] = newName[1].toUpperCase();
    newName[0] = newName[0].slice(0, 1).toUpperCase() +
        newName[0].slice(1).toLowerCase();
    return newName[0] + " " + newName[1];
}

$("#main").append(internationalizeButton);

projects.display = function() {
    for (var project in projects.projects) {
        if (projects.projects.length > 0) {
            $("#projects").append(HTMLprojectStart);
            var formattedOutput = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedOutput);
            formattedOutput = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedOutput);
            formattedOutput = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedOutput);

            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
            console.log(projects.projects[project].image);
            console.log(formattedImage);
            $(".project-entry:last").append(formattedImage);
        }
    }
};


bio.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);
