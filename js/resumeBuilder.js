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
    "biopic": "https://chasemeadowsfarm.files.wordpress.com/2015/09/headshot.jpg",
    "skills": ["Programming", "Technology Management"]
};

var education = {
    "schools": [{
        "name": "University of Massachusetts",
        "location": "Amherst, MA, US",
        "majors": [{
            "major": "Electrical Engineering"
        }],
        "degree": "BSEE",
        "dates": "1978",
        "url": "http://www.massachusetts.edu/"
    }, {
        "name": "NYU-Polytechnic University",
        "location": "Brooklyn, NY, US",
        "majors": [{
            "major": "Computer Science"
        }],
        "degree": "MSCS",
        "dates": "1985",
        "url": "http://engineering.nyu.edu/"
    }],
    "onlineCourses": [{
        "title": "JavaScript Basics Course",
        "school": "Udacity",
        "date": "Jan 2016",
        "url": "https://www.udacity.com/course/viewer#!/c-ud804-nd"
    }, {
        "title": "Intro to JQuery",
        "school": "Udacity",
        "date": "Jan 2016",
        "url": "https://www.udacity.com/course/ud245-nd"
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
        "images": [{
            "image": "images/Balloon380x265.jpg?w=135h=165"
        }]
    }, {
        "title": "Project 1",
        "dates": "November 16 - 18",
        "description": "Second Udacity project",
        "images": [{
            "image": "images/honeycomb380x300.png"
        }]
    }]
};



bio.display = function() {
    var data = "%data%";
    var $header = "#header";
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $($header).prepend([formattedRole]);
    $($header).prepend([formattedName]);

    var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);

    $($header).append(formattedLocation);
    $($header).append(formattedMobile);
    $($header).append(formattedEmail);
    $($header).append(formattedGithub);
    $($header).append(formattedTwitter);
    $($header).append(formattedBioPic);

    var len = bio.skills.length;
    if (len > 0) {
        $($header).append(HTMLskillsStart);
        for (var skill = 0; skill < len; skill++) {
            if (bio.skills[skill].length > 0) {
                var formattedSkill = HTMLskills.replace(data, bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
        }
    }
    $("#footerContacts").append(formattedLocation);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
};

work.display = function() {
    var data = "%data%";
    var len = work.jobs.length;
    if (len > 0) {
        $("#workExperience").append(HTMLworkStart);
    }
    for (var job = 0; job < work.jobs.length; job++) {
        if (work.jobs[job].employer) {
            var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
            var formattedOutput = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedOutput);
            formattedOutput = HTMLworkLocation.replace(data, work.jobs[job].location);
            $(".work-entry:last").append(formattedOutput);
            formattedOutput = HTMLworkDates.replace(data, work.jobs[job].dates);
            $(".work-entry:last").append(formattedOutput);
            formattedOutput = HTMLworkDescription.replace(data, work.jobs[job].description);
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
    var data = "%data%";
    var numProj = projects.projects.length;
    if (numProj > 0) {
        $("#projects").append(HTMLprojectStart);
    }
    for (var project = 0; project < numProj; project++) {
        var formattedOutput = HTMLprojectTitle.replace(data, projects.projects[project].title);
        $(".project-entry:last").append(formattedOutput);
        formattedOutput = HTMLprojectDates.replace(data, projects.projects[project].dates);
        $(".project-entry:last").append(formattedOutput);
        formattedOutput = HTMLprojectDescription.replace(data, projects.projects[project].description);
        $(".project-entry:last").append(formattedOutput);
        var len = projects.projects[project].images.length;
        if (len > 0) {
            for (var image = 0; image < len; image++) {
                var formattedImage = HTMLprojectImage.replace(data, projects.projects[project].images[image].image);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

education.display = function() {
    var data = "%data%";
    var len = education.schools.length;
    if (len > 0) {
        $("#education").append(HTMLschoolStart);
    }
    var formattedOutput;
    for (var school = 0; school < len; school++) {
        formattedOutput = HTMLschoolName.replace(data, education.schools[school].name);
        $(".education-entry:last").append(formattedOutput);
        formattedOutput = HTMLschoolDates.replace(data, education.schools[school].dates);
        $(".education-entry:last").append(formattedOutput);
        formattedOutput = HTMLschoolDegree.replace(data, education.schools[school].degree);
        $(".education-entry:last").append(formattedOutput);
        formattedOutput = HTMLschoolLocation.replace(data, education.schools[school].location);
        $(".education-entry:last").append(formattedOutput);
        for (var major = 0; major < education.schools[school].majors.length; major++) {
            formattedOutput = HTMLschoolMajor.replace(data, education.schools[school].majors[major].major);
            $(".education-entry:last").append(formattedOutput);
        }
    }
    len = education.onlineCourses.length;
    if (len > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);
    }
    for (var course = 0; course < len; course++) {
        formattedOutput = HTMLonlineTitle.replace(data, education.onlineCourses[course].title);
        $(".education-entry:last").append(formattedOutput);
        formattedOutput = HTMLonlineDates.replace(data, education.onlineCourses[course].date);
        $(".education-entry:last").append(formattedOutput);
        formattedOutput = HTMLonlineSchool.replace(data, education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedOutput);
        formattedOutput = HTMLonlineURL.replace(data, education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOutput);
    }
};


bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

