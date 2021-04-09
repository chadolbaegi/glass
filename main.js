var links = [{
  'one': {
    'link one': '',
    'link two': '',
    'link three': '',
    'link four': ''
  },
  'two': {
    'link one': '',
    'link two': '',
    'link three': '',
    'link four': ''
  },
  'three': {
    'link one': '',
    'link two': '',
    'link three': '',
    'link four': ''
  },
  'four': {
    'link one': '',
    'link two': '',
    'link three': '',
    'link four': ''
  }
}];

$.each(links, function(k, v) {
  $.each(v, function(l, w) {
    var link = $('#template').clone().removeAttr('id');
    link.attr('id', l);
    link.find('.label').text(l);
    $.each(w, function(m, x) {
      var url = $('#link-template').clone().removeAttr('id');
      url.attr('href', x);
      url.find('li').text(m);
      url.appendTo(link);
    });
    link.find('.label').css('color', 'var(--' + w + ')');
    link.appendTo($('#inner'));
  });
});

String.prototype.replaceChars = function(character, replacement) {
  var str = this;
  var a;
  var b;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == character) {
      a = str.substr(0, i) + replacement;
      b = str.substr(i + 1);
      str = a + b;
    }
  }
  return str;
}

function search(query) {
  switch (query.substr(0, 2)) {
    case "-y":
      query = query.substr(3);
      window.location =
        "https://www.youtube.com/results?search_query=" +
        query.replace(" ", "+");
      break;
    case "-i":
      query = query.substr(3);
      window.location =
        "https://www.google.com/search?tbm=isch&q=" +
        query.replace(" ", "+");
      break;

    case "-w":
      query = query.substr(3);
      window.location =
        "https://en.wikipedia.org/w/index.php?search=" +
        query.replace(" ", "%20");
      break;

    case "-e":
      query = query.substr(3);
      window.location =
        "https://exhentai.org/?f_doujinshi=1&f_manga=1&f_artistcg=1&f_gamecg=1&f_western=0&f_non-h=0&f_imageset=0&f_cosplay=0&f_asianporn=0&f_misc=0&f_search=" +
        query.concat("&f_apply=Apply+Filter");
      break;

    case "-d":
      query = query.substr(3);
      window.location =
        "http://danbooru.donmai.us/posts?utf8=%E2%9C%93&tags=" + query;
      break;

    case "-t":
      query = query.substr(3);
      window.location =
        "https://twitter.com/search?q=" + query;
      break;

    default:
      window.location = "https://www.google.com/search?q=" +
        query.replace(" ", "+");
  }
}

$(window).on('load', function() {
  $('#load').fadeOut(300);
  $('#search input').focus();
  var searchinput = $('#searchbox');
  searchinput.on('keydown', function(a) {
    var key = a.keyCode;
    if (key == 13) {
      var query = this.value;
      search(query);
    }
  });
});
