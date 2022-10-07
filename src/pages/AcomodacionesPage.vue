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
        <tr v-for="habtipo in tipohab" :key="habtipo.id">
            <td> {{habtipo.id}} </td>
            <td> {{habtipo.name}} </td>
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
                  .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/accommodation-types')
                  .then( response => (this.tipohab = response.data) )
          },
          data() {
              return {
                  tipohab: []
              }
          },
          
      }
      </script>
   