import React from 'react'

export default  function Useredit(props) {
    console.log(props)
    return (
        <div>

            <h1> User Edit  {props.match.params.id} </h1>
            <div class="container rounded bg-white mt-5 mb-5">
            
        <div class="col-md-12 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">User Panel</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value="" /></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Position</label><input type="text" class="form-control" placeholder="enter phone number" value=""/></div>
                    <div class="col-md-12"><label class="labels">Office</label><input type="text" class="form-control" placeholder="enter office name" value=""/></div>
                    <div class="col-md-12"><label class="labels">Age</label><input type="text" class="form-control" placeholder="enter age" value="" /></div>
                    <div class="col-md-12"><label class="labels">Salery</label><input type="text" class="form-control" placeholder="enter salery" value="" /></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="" /></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state" /></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Update User</button></div>
            </div>
        </div>
      
</div>

        </div>
    )
}


