var app = {
    init: function () {
        app.llegirJson();
    },
    llegirJson: function () {

        var json = JSON.parse('{ "professors":[ {"nom": "Marc", "classe": "DAM1"}, {"nom": "Marti", "classe": "DAM2"} ],"classes": [ {"nom": "DAM1"}, {"nom": "DAM2"} ],"alumnes": [ {"nom": "Antoni", "classe": "DAM1"}, {"nom": "Antoni", "classe": "DAM1"}, {"nom": "Antoni", "classe": "DAM1"}, {"nom": "Maria", "classe": "DAM2"}, {"nom": "Maria", "classe": "DAM2"}, {"nom": "Maria", "classe": "DAM2"} ] }');
        app.introduirProfessors(json);

    },
    introduirProfessors: function (json) {
        var professors = json.professors;
        var classes = json.classes;
        professors.forEach(element => {
            $("#professor").append("<option value="+element.classe+" > "+element.nom+" </option>");
        });

        $("#professor").change(function(){
            classes.forEach(element => {
                if(element.nom == $(this).val()){
                    $("#classe").html("<option value="+element.nom+" > "+element.nom+" </option>");
                }
            });
        });
    }
}

document.addEventListener("deviceready", app.init());