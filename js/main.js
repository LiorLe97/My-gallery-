console.log('Starting up');

$(document).ready(init)

function init(){
    createProjects();
    renderProjects();
}


function renderProjects(){
var strHTML = gProjects.map(function(project){
    return `<div data-id=${project['id']} onclick="showModal(this)" class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="${project['img']}" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${project['name']}</h4>
      <p class="text-muted">${project['title']}</p>
    </div>
  </div>`
})
$('.projects-row').html(strHTML);
}

function showModal(elProj){
    console.log(elProj.dataset.id)
    console.log(getProjectById(elProj.dataset.id))
    var project = getProjectById(elProj.dataset.id)
    console.log(project)
    renderModal(project)
  }



function renderModal(project){
    var strHTML = `<div class="col-lg-8 mx-auto">
    <div class="modal-body">
      <h2>${project['name']}</h2>
      <p class="item-intro text-muted">${project['title']}</p>
      <img class="img-fluid d-block mx-auto" src="${project['img']}" alt="">
      <p>${project['desc']}</p>
      <ul class="list-inline">
        <li>Date: July 2021</li>
        <li>Client: I'm the client</li>
        <li>Category: Game</li>
      </ul>
      <button class="btn btn-primay" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>
    </div>
  </div>`;
  $('.for-modal').html(strHTML);
}