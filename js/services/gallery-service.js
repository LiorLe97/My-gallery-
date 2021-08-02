var gProjects;

function createProjects() {
    gProjects = [
        {
            id: "MineSweeeper-1",
            "name": "Mine-Sweeper",
            "title": "A game about mines",
            "desc": "Try to navigate the mine field without exploding",
            "url": "projs/mine-sweeper-main/index.html",
            "img":"img/mine-sweeper.PNG",
            "publishedAt": 1448693940000,
            "labels": ["Matrixes", "keyboard events"],
        },
        {
            "id": "Pacman-1",
            "name": "Pac-Man",
            "title": "A game about navigating",
            "desc": "Try to eat all the food and don't get caught by ghosts",
            "url": "projs/pacman-inClass/index.html",
            "publishedAt": 1448693940000,
            "img":"img/mine-sweeper.PNG",
            "labels": ["Matrixes", "keyboard events"],
        }

    ]
}


function getProjectById(id){
    return gProjects.find(function(proj){
        return proj.id===id;
    })
}