
function load_main(){
  /*var _getAllFilesFromFolder = function(dir) {
      var filesystem = require("fs");
      var results = [];
      filesystem.readdirSync(dir).forEach(function(file) {
          file = dir+'/'+file;
          var stat = filesystem.statSync(file);
          if (stat && stat.isDirectory()) {
              results = results.concat(_getAllFilesFromFolder(file))
          } else results.push(file);
      });
      return results;
    };
    var files = _getAllFilesFromFolder("../posts");
    for (i=0; i<files.length; i++){
      prev=preview_instance(files[i]);
      document.getElementById('content-container').append(prev);
    } */
}

function preview_instance(txt_file){
  post_container=document.createElement('div');
  post_container.onclick='expand_preview('+txt_file+')';
  title_dict=get_title(txt_file);
  title_dict['date'];
  title_dict['category'];
  title_dict['title'];
  return post_container;
}
function expand_preview(txt_file){
  var input = txt_file.target;
  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    console.log('preview: ' + reader.result.substring(0, 200) + '...');
  };
  reader.readAsText(input.files[0]);
}

function get_title(filename){
  var months = {1:'January', 2:'February', 3:'March', 4:'April', 5:'May', 6:'June', 7:'July', 8:'August', 9:'September', 10:'October', 11:'November', 12:'December'};
  var output={};
  var split_file=filename.split('-');

  output['date']=months[split_file[1]] + ' ' +split_file[2] + ', 20' + split_file[0];
  output['category']=split_file[4].substring(0, split_file[4].indexof('.'));

  var split_title = split_file[3].split('_');
  for (i = 0; i < split_title.length; i++) {
    output['title'].append(' ' + split_title[i]);
  }
  return output;
}
