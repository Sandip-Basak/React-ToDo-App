import React,{useState} from "react";

function TodoList(){

    const [items, setItem] = useState([]);
    function addItem(){
        const t=document.getElementById("title");
        const d=document.getElementById("desc");
        const newItem = {
            Title: t.value,
            Description: d.value
        }
        setItem(i => [...i, newItem]);
        t.value="";
        d.value="";
    }

    function listRemove(index){
        setItem(items.filter((_,i) => i!==index))
    }
    function listUp(index){
        if(index>0){
            const newList = [...items];
            [newList[index], newList[index-1]] = [newList[index-1], newList[index]];
            setItem(newList);
        }
    }
    function listDown(index){
        if(index<items.length-1){
            const newList = [...items];
            [newList[index], newList[index+1]] = [newList[index+1], newList[index]];
            setItem(newList);
        }
    }

    return(
        <div className="container border border-2 border-dark rounded-1 my-3 p-2 text-center">
            <h2 className="my-2">TODO List</h2>
            <div className="row justify-content-around p-2">
                <div className="col-3 border border-2 border-dark p-2">Title</div>
                <div className="col-7 border border-2 border-dark p-2">Description</div>
                <div className="col-2 border border-2 border-dark p-2">Operations</div>
            </div>

            {items.map((i, index) => 
                <div className="row justify-content-around p-2" key={index}>
                    <div className="col-3 border border-2 border-dark">
                        <h4>{i.Title}</h4>
                    </div>
                    <div className="col-7 border border-2 border-dark">{i.Description}</div>
                    <div className="col-2 border border-2 border-dark">
                    <button className="btn btn-danger m-1" onClick={() => listRemove(index)}><i class="bi bi-trash"></i></button>
                    <button className="btn btn-success m-1" onClick={() => listUp(index)}><i class="bi bi-arrow-up"></i></button>
                    <button className="btn btn-warning m-1" onClick={() => listDown(index)}><i class="bi bi-arrow-down"></i></button>
                    </div>
                </div>
            )}

            <hr className="border border-2 border-dark rounded-2 my-2" />
            <div className="w-50 mx-auto border border-2 border-dark rounded-2 my-2 p-2">
            <input type="text" id="title" className="form-control my-2" placeholder="Enter Title" />
            <input type="text" id="desc" className="form-control my-2" placeholder="Enter Description" />
            <button onClick={addItem} className="btn btn-success my-2 border border-2 border-dark rounded-2">ADD TODO</button>
            </div>
        </div>
    );
}
export default TodoList;