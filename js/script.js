// Blurry loading page

// blurry index loader

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

$(document).ready(function() {
    var $projectsList = $('.projects-list');
    var $projects = $projectsList.find('.project');
    var $projectsTags = $('.projects-tags');
    var tagsObj = {};
    var fadeSpeed = 500;
    
    $projects.each(function() {
      var project = this;
      var $project = $(this);
      var $tagsList = $project.find('.tags');
      var tags = $project.data('tags').split(',');
      tags.forEach(function(tag) {
        var li = '<li class="tag">';
        li += tag;
        li += '</li>';
        $tagsList.append($(li));//same li or $(li)?
        
        if (!tagsObj.hasOwnProperty(tag))
          tagsObj[tag] = [];
        tagsObj[tag].push(project);
      });
    });
    
    //console.log(tagsObj);
    $.each(tagsObj, function(tag) {
      var $button = $('<button>' + tag + '</button>');
      $button.on('click',function() {
        if ($projects.is(':animated'))
          return false;
        $(this).addClass('active').siblings().removeClass('active');
        $projects.filter(':visible').fadeOut(fadeSpeed, function() {
          $projects.filter(tagsObj[tag]).fadeIn(fadeSpeed);
        });
      }).appendTo($projectsTags);
    });
    
    $('#all').on('click',function() {
      $(this).addClass('active').siblings().removeClass('active');
      $projects.filter(':visible').fadeOut(fadeSpeed, function() {
        $projects.fadeIn(fadeSpeed);
      });
    });
  });




  function readMore() {
    var expandInfo = document.getElementById("more-info-js");
    var mainHeadings = document.getElementById("main-headings-js");
    
    mainHeadings.style.transform = "scale(0.7)";
    expandInfo.style.height = "350px";
  } 