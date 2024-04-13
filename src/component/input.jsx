 function Input(){
    return (
        <>
        <div class="container text-center">
  <div class="row">
    <div class="col-6 "><input type="text"
    placeholder="Enter your task" className="input"/></div>
    <div class="col-4"><input type="date" /></div>
    <div class="col-2"><button type="button" class="btn btn-success" id="btn">Add</button></div>
  </div>

  
  <div class="row">
    <div class="col-6"><p>College</p></div>
    <div class="col-4"><p>05/07/2024</p></div>
    <div class="col-2"><button type="button" class="btn btn-danger" id="btn">Delete</button></div>
  </div>
  
  <div class="row">
    <div class="col-6"><p>Sleep</p></div>
    <div class="col-4"><p>09/04/2024</p></div>
    <div class="col-2"><button type="button" class="btn btn-danger" id="btn">Delete</button></div>
  </div>
  
  <div class="row">
    <div class="col-6"><p>Gym</p></div>
    <div class="col-4"><p>04/05/2024</p></div>
    <div class="col-2"><button type="button" class="btn btn-danger" >Delete</button></div>
  </div>
 
</div>
        </>
    )
 } 

  export default Input