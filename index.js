// // alert('hey')
// var h = document.createElement('h1')
// var myvalue=document.createTextNode('hey hello guys')
// //now if we want to put this text inside the
// //var h that is h1 tag we can used
// //appendchild technique
// h.appendChild(myvalue)
// document.querySelector('h1').appendChild(h)

// let val=5
// while(val >=0-1){
//     console.log(val)
//     val--
// }
var ul = document.getElementById('list')
var li;
var addbutton = document.getElementById('add');
addbutton.addEventListener('click', additem);
var removebutton = document.getElementById('remove');
removebutton.addEventListener('click', removeitem)

var removeallbutton = document.getElementById('removeall');
removeallbutton.addEventListener('click',()=>{
    ul.remove()
});

var ul = document.getElementById('list')
var li;

function additem() {
   var input=document.querySelector('input')
    var items=input.value
    ul=document.getElementById('list')
    var textnode=document.createTextNode(items)

    if(items== ''){
        alert('you not enter anything')
    }
    else{
        //crete li
        li = document.createElement('li')
        //create checkbox
        var checkbox=document.createElement('input')
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check')
        //this are like key value pair

        //create label
        var label=document.createElement('label')
        label.setAttribute('for','items')

        ul.appendChild(label);
        li.appendChild(checkbox)
        li.appendChild(label)
        label.appendChild(textnode)
        ul.insertBefore(li,ul.childNodes[0])

        setTimeout(() => {
            li.className='visual';
        },2);

        input.value=''


    }

}
function removeitem() {
    li = ul.children
    //we have to find the children means
    //in short in this array which we will 
    //get in console panel
    //we have to find where is CHECKED option is come
    //so we have to find and remove the option which
    //are already chcked
    //so if on console panel we have to find 
    //checked = true items so we are using
    //this children here

    // console.log(li)

    for (let index = 0; index < li.length; index++) {
        // const element = li[index];
        // console.log(element)
        while(li[index]&&li[index].children[0].checked)
        {
            ul.removeChild(li[index])
            //that while loops first condition
            //says that
            //if you are on same index and then
            //want to remove that index 
        }

    }
    

    
}