function skillsMember() {
    var skills = {
        "HTML": "80%",
        "CSS": "70%",
        "JavaScript": "60%",
        "PHP": "50%",
        "SQL": "40%"
    };
    for (var skill in skills) {
        console.log(skill + " => " + skills[skill]);
    }
}