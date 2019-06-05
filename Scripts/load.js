(function(){

    localStorage.getItem('todo').split(',')
        .forEach(val => loader('todoLists',val,'remove-item'));
    localStorage.getItem('active').split(',')
        .forEach(val => loader('progressLists',val,'up'));
    localStorage.getItem('done').split(',')
        .forEach(val => loader('doneList',val,'up'));

    function loader(ulClass,val,itemClass){
      if(val){
        let ul = document.getElementById(ulClass);
        let li = document.createElement('li');
        let rem = document.createElement('span');
        let edit = document.createElement('span');

        li.className = 'list-item hover';
        li.appendChild(document.createTextNode(val));

        rem.className = 'hover '+itemClass;

        edit.className = 'hover edit-item';

        li.appendChild(rem);
        li.appendChild(edit);
        ul.appendChild(li);
      }
    }

})()