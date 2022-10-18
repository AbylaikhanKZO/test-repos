let arr= [   
     {  
     name: "Folder 1",
     folders: [
          {name: "Subfolder 1"},
          {name: "Subfolder 2"},
          {name: "Subfolder 3"},
     ]
},
{
     name: "folder 3",
     folders: [
     {name: "Subfolder 7"},
     {name: "Subfolder 8"},
     {name: "Subfolder 9"},
          ]
     },
]

     function showParentFolderName(SubfolderName) {
      for(let folder of arr) {
          for(let Subfolder of folder.folders){
               if(Subfolder.name === SubfolderName){
                    console.log(folder.name)
               break}
          }
          }    s
     }
         
showParentFolderName("Subfolder 2")