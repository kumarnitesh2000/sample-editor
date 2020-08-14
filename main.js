


//using the Autocomlete js 
//auto = new Autocomplete("nitesh");



//change color .complete function .
function changeColor(id,data){
//change the color
}

//function regex 
function regexExp(){
//algo for splitting .

}

//Helper function .
function helperFun(input){
//console.log(input.id+" "+input.data);

//now first regex expression is implemented .
//regexExp();
}

//clear the code 
function cleartheCode(){
    var tot = document.getElementsByClassName('margin')[0].childElementCount;
    

    for(var i=1;i<=tot;i++){
            document.getElementById(i.toString()).value = "";

            if(document.getElementById('check')=="0"){
                document.getElementById(i.toString()).style['background-color'] = 'white';
                document.getElementById(i.toString()).style['color'] = 'black';
                }
                else{
                document.getElementById(i.toString()).style['background-color'] = 'black';
                document.getElementById(i.toString()).style['color'] = 'white';}


    }

}

//class for each line.
function Input(id,data){
    this.id = id ;
    this.data = data;

    return this.data;
}

//var declaration
var li_n = document.getElementsByClassName('margin')[0].childNodes.length;  
var arr_element = [];
var data ="";

//data fetching from ide.
//result
for(var j=0;j<Math.floor(li_n/2);j++){
helperFun(arr_element[j])
}

function enterClicked(key){
    if(key.keyCode=='13'){
        //if(curr_active==document.getElementById('msg')){console.log('submit msg');}
        var curr_active = document.activeElement;
        var curr_id =  curr_active.id;
        if(curr_id=='msg'){
            
            var content = document.getElementById('msg').value;
               
        showMessage(content);
        document.getElementById('msg').value = '';
        
        }
        else{

            
        
        
        if(curr_id!='query'){
            curr_id = parseInt(curr_id);        
            console.log("current id is "+curr_id);

                    curr_id+=1;
                    console.log("going to id "+curr_id);
                    try{
                    document.getElementById(curr_id.toString()).focus();
                    }
                    catch(err){

                        //creating the input .
                        var new_li_child = document.createElement('li');
                        var new_input = document.createElement('input');
                        var ol_dom = document.getElementsByClassName('margin')[0];
                        new_li_child.appendChild(new_input);
                        new_input.setAttribute('class','complete');
                        new_input.setAttribute('spellcheck','false');
                        new_input.setAttribute('value','');
                        new_input.setAttribute('tabindex','-1');
                        new_input.setAttribute('oninput','showInput()');
                        new_input.type="text";new_input.id = curr_id;
                        
                        ol_dom.appendChild(new_li_child);
                        if(parseInt(document.getElementById('check').innerHTML)){
                            //dark mode
                        document.getElementById(curr_id.toString()).focus();
                        document.getElementById(curr_id.toString()).style.color="white";
                        document.getElementById(curr_id.toString()).style['background-color'] = "black";
                        }
                        else{
                            //light mode
                            document.getElementById(curr_id.toString()).focus();
                        document.getElementById(curr_id.toString()).style.color="black";
                        document.getElementById(curr_id.toString()).style['background-color'] = "white";
                        }

                            }
                    }
        else{
            var query = document.getElementById('query');

            search(query.value);
        }            
    }
    //adding the backspace functionality .
    //console.log(document.getElementById(curr_id).value.slice(0, document.getElementById(curr_id).selectionStart).length);
    }
}

function changePos(){
    var curr_id = document.getElementById('id').innerHTML;
    var cursor_pos = document.getElementById(curr_id).value.length;
    var new_top = parseInt(curr_id)*26+130;
    new_top = new_top.toString();
    var new_left = (parseInt(cursor_pos)*9)-90;
    new_left = new_left.toString();
    //change the left 
    document.getElementsByClassName('Recomanded')[0].style.top=new_top+"px";
    if(parseInt(new_left)<638)
    document.getElementsByClassName('Recomanded')[0].style.left=new_left+"px";

    console.log(`changing the position info -> id[${curr_id}] and pos[${cursor_pos}]`);
}


function enterArrow(key){
    //get the current id .

    var curr_active = document.activeElement;
 
    var curr_id =  curr_active.id;
    curr_id = parseInt(curr_id);
    
    if(key.keyCode=='38'){
            //key up hence 
            console.log("currently at "+curr_id);
            curr_id=curr_id-1;
            try{
                document.getElementById(curr_id.toString()).focus();
                }
            catch(err){

            }        
            console.log("decreasing as key up to "+curr_id); 

    }
    else if(key.keyCode=='8'){
        var cursor = document.getElementById('cursor').innerHTML;
        if(cursor=="1" || cursor=="0"){
        //get current_id
        if(curr_id!=1){
        //alert(curr_id);
        curr_id=curr_id-1;
        document.getElementById(curr_id.toString()).focus();
        }
    }
    }
    else if(key.keyCode=='40'){
        console.log("currently at "+curr_id);
        curr_id=curr_id+1;
        try{
            document.getElementById(curr_id.toString()).focus();
            }
            catch(err){
    
                //creating the input .
                var new_li_child = document.createElement('li');
                var new_input = document.createElement('input');
                var ol_dom = document.getElementsByClassName('margin')[0];
                new_li_child.appendChild(new_input);
                new_input.setAttribute('class','complete');
                new_input.setAttribute('spellcheck','false');
                new_input.setAttribute('tabindex','-1');
                new_input.setAttribute('value','');
                new_input.setAttribute('oninput','showInput()');
                new_input.type="text";new_input.id = curr_id;
                
                ol_dom.appendChild(new_li_child);
                if(parseInt(document.getElementById('check').innerHTML)){
                    //dark mode
                document.getElementById(curr_id.toString()).focus();
                document.getElementById(curr_id.toString()).style.color="white";
                document.getElementById(curr_id.toString()).style['background-color'] = "black";
                }
                else{
                    //light mode
                    document.getElementById(curr_id.toString()).focus();
                document.getElementById(curr_id.toString()).style.color="black";
                document.getElementById(curr_id.toString()).style['background-color'] = "white";
                }
            }
        console.log("increasing as key down to "+curr_id);
    }
    //adding the backspace functionality
    try{
    var len = document.getElementById(curr_id).value.slice(0, document.getElementById(curr_id).selectionStart).length;
    console.log(len);
    //call every time you write on editor
    autocomlete();
    //change the Recomanded box on the editor
    changePos();
    
    document.getElementById('cursor').innerHTML = len ;

    }
    catch(err){

    }
}

//searching 
function search(query){

    var tot =  document.getElementsByClassName('margin')[0].childElementCount*2;
    var arr_element=[];
    var succ = 0;
    for(var i=1;i<=Math.floor(tot/2);i++){
        data = document.getElementById(i).value;
        arr_element.push(new Input(i,data));
        }
        
    for(var i=0;i<Math.floor(tot/2);i++){
       
    console.log(arr_element[i].data+' '+query);
    
    if(document.getElementById('check')=="0"){
        document.getElementById(arr_element[i].id.toString()).style['background-color'] = 'black';
        document.getElementById(arr_element[i].id.toString()).style['color'] = 'white';
        }
        else{
        document.getElementById(arr_element[i].id.toString()).style['background-color'] = 'white';
        document.getElementById(arr_element[i].id.toString()).style['color'] = 'black';} 
    
    if(query==''){




        if(document.getElementById('check')=="0"){
        document.getElementById(arr_element[i].id.toString()).style['background-color'] = 'black';
        document.getElementById(arr_element[i].id.toString()).style['color'] = 'white';
        }
        else{
        document.getElementById(arr_element[i].id.toString()).style['background-color'] = 'white';
        document.getElementById(arr_element[i].id.toString()).style['color'] = 'black';}
    }

    else if(arr_element[i].data.search(query)!=-1){
        document.getElementById(arr_element[i].id.toString()).style['background-color'] = 'white';
        document.getElementById(arr_element[i].id.toString()).style['background-color'] = '#f9c1a4';        
        succ+=1;
    }    
    /*
    else{
        if(document.getElementById('check')=="0")
        document.getElementById(arr_element[i].id.toString()).style['background-color'] = 'white';
        else
        document.getElementById(arr_element[i].id.toString()).style['background-color'] = 'black';


    }    
    */
    }
    document.getElementById('tot').innerHTML  = succ.toString();

    
}
//tabspacing event 
function tabScript(key){
 //console.log("tab clicked");
 var curr_active = document.activeElement;
 var curr_id =  curr_active.id;
 var space =8;
 var string = "\0";
 var fin_str = string.repeat(space);
 document.getElementById(curr_id).value+=fin_str;

}

//autocompete ui dev
function lis_auto(arr){

    if(arr[0]==undefined &&arr[1]==undefined && arr[2]==undefined){

        document.getElementsByClassName('Recomanded')[0].style.display = "none";
    }
    //first box
    else{
        document.getElementsByClassName('Recomanded')[0].style.display = "block";
    if(arr[0]!=undefined)
    document.getElementById("one").innerHTML = ob.getSelectedOne()[0];
    else
    document.getElementById("one").innerHTML = "";
    //second 
    if(arr[1]!=undefined)
    document.getElementById("two").innerHTML = arr[1];
    else
    document.getElementById("two").innerHTML = "";
    //third
    if(arr[2]!=undefined)
    document.getElementById("three").innerHTML = arr[2];
    else
    document.getElementById("three").innerHTML = "";

}
}
var xmlHttp = new XMLHttpRequest();
var url = "/words.json";
xmlHttp.open( "GET", url, false );
xmlHttp.send("null");
var array = [];
const data_o_c_tags = JSON.parse(xmlHttp.response).words;
for(var i=0;i<data_o_c_tags.length;i++){
    
    array.push(data_o_c_tags[i]);  
}
function autocomlete(){
    
    var search_for = "";
    var curr_id = document.activeElement.id;
    document.getElementById("id").innerHTML = curr_id;
    var data_at_id = document.getElementById(curr_id).value;

    var each_word =  data_at_id.match(/\w+/gi);
    //var each_word = data_at_id.split(' ');
    var add = data_at_id.match(/\w+/gi);
    search_for= each_word[each_word.length-1];
    search_for = search_for.toLowerCase();
    ob = new AutoComplete(array,search_for);
    console.log(ob.getSelectedOne());
    lis_auto(ob.getSelectedOne());    
}


