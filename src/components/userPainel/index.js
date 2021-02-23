
function UserPainel() {


 return (
  <>
   <div class="modal-header">
    <h5 class="modal-title">Configure daily time</h5>
    <button type="button" class="close" >
     <span aria-hidden="true">&times;</span>
    </button>
   </div>
   <form >
    <div class="modal-body">
     <p>Here is our default configuration time for watch video per day. Configure on your own way or just click
                        "Save". (minutes)</p>

     <div class="form-group mb-2">
      <span for="sunday">Sunday</span>
      <input type="text" class="form-control" v-model="watchTime.sunday" />
     </div>

     <div class="form-group mb-2">
      <span for="monday">Monday</span>
      <input type="text" class="form-control" v-model="watchTime.monday" />
     </div>

     <div class="form-group mb-2">
      <span for="tuesday">Tuesday</span>
      <input type="text" class="form-control" v-model="watchTime.tuesday" />
     </div>

     <div class="form-group mb-2">
      <span for="wednesday">Wednesday</span>
      <input type="text" class="form-control" v-model="watchTime.wednesday" />
     </div>

     <div class="form-group mb-2">
      <span for="thursday">Thursday</span>
      <input type="text" class="form-control" v-model="watchTime.thursday" />
     </div>

     <div class="form-group mb-2">
      <span for="friday">Friday</span>
      <input type="text" class="form-control" v-model="watchTime.friday" />
     </div>

     <div class="form-group mb-2">
      <span for="saturday">Saturday</span>
      <input type="text" class="form-control" v-model="watchTime.saturday" />
     </div>

    </div>
    <div class="modal-footer">
     <button type="submit" class="btn btn-success">Save</button>
    </div>
   </form>

  </>
 );
}

export default UserPainel;
