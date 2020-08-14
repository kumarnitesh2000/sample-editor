
//html.json fetching for opening and closing tag


//usually trie ds.
//each node
class Node{

    constructor(){

        this.children = {};
        this.is_last_chr = false;
        this.repeat_char = -1;
    }
}

//complete tree like structure this is called one time complete trie
class Structure{
    constructor(){
        this.root = new Node();
        //word list to be returned for the suggestion tasks :
        this.word_list = [];
    }
    //form the trie ds
    formStructure = (all_keys) =>{

        for(var i=0;i<all_keys.length;i++){
            this.insert(all_keys[i]);
        }
    }
    //insert in the structure if it not already presents .param is option

    insert = (k) =>{

            var node = this.root;
            for(var i=0;i<k.length;i++){

                if(!node.children[k[i]]){
                        node.children[k[i]]= new Node();
                }
                node = node.children[k[i]];
            }

            node.is_last_chr = true;
            
    }
    //this function compete the traversal
    create_Lis = (node,key) =>{
        if(node.is_last_chr){
                this.word_list.push(key);
        }
        
        
        var arr = Object.keys(node.children);
        for(var i=0;i<arr.length;i++){

            this.create_Lis(node.children[arr[i]],key+arr[i])
        }
        
    }

    

    //tell if the current enetered element an have possibility of any match
    suggest = (key) =>{

        var node = this.root;
        var is_Found = true;
        var temp_w = ''; 
        for(var i=0;i<key.length;i++){

            if(!node.children[key[i]]){
                is_Found = false;
                break;
            }
            temp_w += key[i];
            node = node.children[key[i]];
            


        }

        //if not found means no option is left hence 
        if(is_Found==false)
        return 0 ;
        //if the node is pointing towards the last char but should be the leaf node so no more traversing
        else if(node.is_last_chr && !node.children)
        return -1

        //creating a list 
        this.create_Lis(node,temp_w);
        return 1
    }
    
    //full match of the key return true on success
    search = (key) =>{
            var node = this.root;
            var found = true;
            for(var i=0;i<key.length;i++){
                if(!node.children[key[i]])
                {
                    found=false;
                    break;
                }
                node = node.children[key[i]]

        }

        return node && node.is_last_chr && found

    }

}

class AutoComplete{
    constructor(dataset,find){
        //dataset is the options array and find is the word related to
        this.dataset = dataset;
        this.find = find;
    }

    getSelectedOne = () =>{
            //creating a structure
            var structure = new Structure();
            structure.formStructure(this.dataset);
            structure.suggest(this.find);
            var arr_lis = [];
            if(this.find==""){
                return [];
            }
            else if(structure.word_list.length>=3){
            for(var i=0;i<3;i++){
                arr_lis.push(structure.word_list[i]);
            }
            return arr_lis
        }
            else{
                    return structure.word_list; 
            }    
             
    }
}


//testing 







