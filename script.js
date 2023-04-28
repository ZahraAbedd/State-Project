document.querySelector("nav").addEventListener("click",(e)=>{
    if(e.target.nodeName != "I") return
    let data;
    switch(e.target.getAttributeNode("item-id").value){
        case 'home':
            data = {title:"HOME",color:"red",itemId : "home"}
            update(data)
            history.pushState(data , "home" , "/home")
            break;
        case 'search':
            data={title : "Search" , color : "blue" , itemId : "search"}
            update(data)
            history.pushState(data,"search","/search")
            break;
        case 'likes':
            data={title: "LIKES" , color : "yellow" , itemId : "likes"}
            update(data)
            history.pushState(data,"likes","/likes")
            break;
        default:
            data = {title : "PROFILE" , color : "pink" , itemId : "profile"}
            update(data)
            history.pushState(data,"profile",'/profile')
    }
    })

    function update(data){
       let main =  document.querySelector("main");
       main.style.backgroundColor=data.color;
       document.querySelector("h1").innerText = data.title;
       document.querySelectorAll('i').forEach(element=>{
           element.style.color = "#666"
       })
       document.querySelector(`i[item-id=${data.itemId}]`).style.color = "black";

    }
    window.addEventListener("popstate",(e)=>{
        if(history.state){
            update(history.state)
        }else{
            update({title:"HOME",color:"red",itemId : "home"})
        }
    })