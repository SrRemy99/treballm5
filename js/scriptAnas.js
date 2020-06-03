var app = {
    init: function () {
        app.llegirJson();



    },
    llegirJson: function () {

        var json = JSON.parse('{ "professors":[ {"nom": "Marc", "classe": "DAM1"}, {"nom": "Marti", "classe": "DAM2"} ],"classes": [ {"nom": "DAM1"}, {"nom": "DAM2"} ],"alumnes": [ {"nom": "Antoni Martines", "classe": "DAM1"}, {"nom": "Manuel Gonsales", "classe": "DAM1"}, {"nom": "Antoni Manel", "classe": "DAM1"}, {"nom": "Maria Jose", "classe": "DAM2"}, {"nom": "Nuria Martines", "classe": "DAM2"}, {"nom": "Susana Oria", "classe": "DAM2"} ] }');
        app.introduirProfessors(json);

    },
    introduirProfessors: function (json) {
        var professors = json.professors;
        var classes = json.classes;
        var alumnes = json.alumnes;
        professors.forEach(element => {
            $("#professor").append("<option value="+element.classe+" > "+element.nom+" </option>");
        });

        $("#professor").change(function(){
            $("#classe").html("<option value='kk'>Tria una classe</Option>");
            classes.forEach(element => {                
                if(element.nom == $(this).val()){                    
                    $("#classe").append("<option value="+element.nom+" > "+element.nom+" </option>");
                }
            });
        });

        $("#classe").change(function(){
            $("#alumnes").html("");
            alumnes.forEach(element => {
                if (element.classe == $(this).val()){
                    $("#alumnes").append('<div class="alumne" style="display: flex; flex-direction: row;"><p style="width: 50px; margin: 0;">' + element.nom + '</p> <input type="checkbox"></div>');
                }
            });
        });
    },

    guardarAlumnes: function (){
        $(".alumne").each(function(index, alumne){
            var nom = $( alumne ).find( "p" ).text();
            var valor = $( alumne ).find( "input" ).prop('checked');
            
            localStorage.setItem(nom, valor);

        });
    }

}

document.addEventListener("deviceready", app.init());