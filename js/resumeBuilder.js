// My Bio Object 
var bio = {
    "name": "Maximiliano Rochas",
    "role": "JS student",
    "contacts": {
        "mobile": "2026420358",
        "email": "mrochas@gmail.com",
        "github": "iiifilo",
        "twitter": "@idonttweet",
        "location": "Atlanta, GA"
    },
    "welcomeMessage": "welcome to my bio",
    "skills": [
        "quiet",
        " slow",
        " average",
        " student "
    ],
    "biopic": "images/fry.jpg"
};
//My Education Object
var education = {
    "schools": [{
        "name": "BAEHS",
        "location": "Atlanta, GA",
        "degree": "Translator",
        "majors": [
            "Italian",
            "Spanish",
            "English"           
        ],
        "dates": 1990,
        "url": "http://www.baehs.com.ar"
    }, {
        "name": "UBA",
        "location": "Atlanta, GA",
        "degree": "Ing.",
        "majors": [
            "Agriculture",
            "Potato Cleaner",          
            "Wine Taster"
        ],
        "dates": 1996,
        "url": "http://www.UBA.com.ar"
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer Nanodegree",
        "school": "Udacity",
        "date": 2014,
        "url": "http://udacity.com"
    }]
};
//My Work Experience Object
var work = {
    "jobs": [{
        "employer": "iiifilomena software llc",
        "title": "Supervisor",
        "location": "Atlanta, GA",
        "dates": "2013-Present",
        "description": "Assign new contacts to salesmen "
    }, {
        "employer": "RFI",
        "title": "Server",
        "location": "Middleburg, VA",
        "dates": "2011-2013",
        "description": "Customer Care"
    }]
};
//My Project Object
var projects = {
    "projects": [{
        "title": "iiifilo website",
        "dates": 2013,
        "description": "main web site for the company",
        "images": ["images/img1.jpg", "images/img2.jpg"]
    }, {
        "title": "The Cardo Charm",
        "dates": "2013",
        "description": "main web site for the company",
        "images": ["images/img2.jpg"]
    }, {
        "title": "Asesoria para SOFOMES",
        "dates": "2013",
        "description": "branch web site for the company",
        "images": ["images/img3.jpg"]
    }]
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName + formattedRole);
    var contacts = bio.contacts;
    var formattedMobile = HTMLmobile.replace("%data%", contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", contacts.email);
    var formattedLocation = HTMLlocation.replace("%data%", contacts.location);
    var formattedtwitter = HTMLtwitter.replace("%data%", contacts.twitter);
    var formattedgithub = HTMLgithub.replace("%data%", contacts.github);
    var cont = formattedMobile + formattedEmail + formattedLocation + formattedtwitter + formattedgithub;
    $(cont).appendTo("#topContacts, #footerContacts");
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedImage + formattedMessage);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }
    }
};
bio.display();
// Bio code Finished
// Work code Start
work.displayWork = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.displayWork();
//Finished work experience
//Project Code
projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();
//End of Projects
//Education Code
education.displayEdu = function() {
    for (var edu in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
        $(".education-entry:last").append(formattedSchoolName);
        formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        $(".education-entry:last").append(formattedDates);
        formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        $(".education-entry:last").append(formattedDegree);
        formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        $(".education-entry:last").append(formattedLocation);
        formattedUrl = HTMLonlineURL.replace("%data%", education.schools[edu].url);
        $(".education-entry:last").append(formattedUrl);             
         for (major in education.schools[edu].majors) {
            var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[major]);
            $(".education-entry:last").append(formattedMajors);
        };       
    }   
};
education.displayEdu();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
//Add clics cordenates*************************
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
//Internationalize code**************************
function inName(name) {
    var name = $('#name')[0].innerText;
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
};