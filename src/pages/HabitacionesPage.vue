<template>
  <div>
      <div class="row mb-3">
          <div class="col">
              <h4><i class="bi bi-door-open"></i>Tipo de Habitaciones</h4>
          </div>
          
      </div>
  
      <table class="table table-striped table-bordered table-sm">
      <thead>
      <tr>
          <th scope="col">ID</th>
          <th scope="col">NOMBRE</th>
                 
      </tr>
      </thead>
      <tbody>
      <tr v-for="romms in room" :key="romms.id">
          <td> {{romms.id}} </td>
          <td> {{romms.name}} </td>
      </tr>
      </tbody>
  </table>
  </div>
  </template>
   <script>
    import axios from 'axios'
    export default {
        beforeMount() {
            axios
                .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/room-types')
                .then( response => (this.room = response.data) )
        },
        data() {
            return {
                room: []
            }
        },
        
    }
    </script>
 