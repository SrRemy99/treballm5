var app = {
    init: function () {
        app.llegirJson();
    },
    llegirJson: function () {

        var json = JSON.parse('{ "professors": [ { "nom": "Marc", "classe": "DAM1" }, { "nom": "Marti", "classe": "DAM2" } ], "classes": [ { "nom": "DAM1" }, { "nom": "DAM2" } ], "alumnes": [ { "nom": "Antoni Martines", "classe": "DAM1" }, { "nom": "Manuel Gonsales", "classe": "DAM1" }, { "nom": "Antoni Manel", "classe": "DAM1" }, { "nom": "Maria Jose", "classe": "DAM2" }, { "nom": "Nuria Martines", "classe": "DAM2" }, { "nom": "Susana Oria", "classe": "DAM2" }, { "nom": "Aitor Menta", "classe": "DAM1" }, { "nom": "Matilda Flores", "classe": "DAM1" }, { "nom": "Andrián Droide", "classe": "DAM1" }, { "nom": "Alba Sura", "classe": "DAM2" }, { "nom": "Alan Brito", "classe": "DAM2" }, { "nom": "Alen Gualarga", "classe": "DAM2" }, { "nom": "Alex Plosivo", "classe": "DAM1" }, { "nom": "Dolores Delano", "classe": "DAM1" }, { "nom": "Elver Galarga", "classe": "DAM1" }, { "nom": "Lola Mento", "classe": "DAM2" }, { "nom": "Ana Tomía", "classe": "DAM2" }, { "nom": "Tomás Turbante", "classe": "DAM2" }, { "nom": "Matilda Flores", "classe": "DAM1" }, { "nom": "Joel Bascuñana", "classe": "DAM1" }, { "nom": "Artur Boladeres", "classe": "DAM2" }, { "nom": "Annass Bouchha", "classe": "DAM2" }, { "nom": "Pedro Sanchez", "classe": "DAM2" } ] }');
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
                    if(localStorage.getItem(element.nom) == "true"){
                        $("#alumnes").append('<div class="alumne"><label class="container"><p>' + element.nom + '</p><input type="checkbox" checked="checked"> <span class="checkmark"></span> </label></div>');
                    } else {
                        $("#alumnes").append('<div class="alumne"><label class="container"><p>' + element.nom + '</p><input type="checkbox"> <span class="checkmark"></span> </label></div>');
                    }                    
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