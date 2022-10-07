<template>
  <div>
      <div class="row mb-3">
          <div class="col">
              <h4><i class="bi bi-check2-square"></i>Hoteles</h4>
          </div>
          <div class="col">
              <div class="float-end">
                  <button @click="viewFormHotelCreate" class="btn btn-success btn-sm">Nuevo Hotel </button>
              </div>
          </div>
      </div>
  
      <table class="table table-striped table-bordered table-sm">
      <thead>
      <tr>
          <th scope="col">ID</th>
          
          <th scope="col">Nombre</th>
          <th scope="col">Dirección</th>
          <th scope="col">Ciudad</th>
          <th scope="col">Capacidad Hab</th>
          <th scope="col">&nbsp;</th>
          <th scope="col">&nbsp;</th>
          <th scope="col">&nbsp;</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="hotel in hotels" :key="hotel.id">
          <td> {{hotel.id}} </td>
          
          <td> {{hotel.name}} </td>
          <td> {{hotel.address}} </td>
          <td> {{hotel.city.name}} </td>
          <td> {{hotel.num_rooms}} </td>
          <td><button @click="viewFormHotelDetalle(hotel.id)" class="btn btn-warning btn-sm">Detalle </button></td>
          <td><button @click="viewHabitacionesHotel(hotel.id)" class="btn btn-success  btn-sm">Habitaciones </button></td>
          <td><button @click="viewFormHotelDelete(hotel.id)" class="btn btn-danger btn-sm">Eliminar </button></td>
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
                .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels')
                .then( response => (this.hotels = response.data.data) )
        },
        data() {
            return {
                hotels: []
            }
        },
        methods: {
            viewFormHotelDelete(id) {
                if (confirm('Esta seguro de eliminar el presente hotel? Solo se pueden eliminar Hoteles sin Habitaciones Creadas')) {
                    axios({
                        method: 'delete',
                        url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+id,
                        responseType: 'json', 
                    }) 
                    .then(response => {  
                        this.info = response.data.message
                        this.hotel = []
                        this.ocultar = 'hidden'
                        confirm(this.info+id)

                    })
                    .catch(error => {
                        this.errores = error.response.data.errors
                        this.info = null
                        confirm(' No se pudo eliminar el Hotel, tiene habitaciones creadas'+id)
                    })

                     }
                     
                    },
                    

                    
            viewFormHotelDetalle(hotel_id) {
                this.$router.push({
                    name: "HotelDetalle",
                    params:{
                        id: hotel_id,
                    }
                });
                
            },
            viewHabitacionesHotel(hotel_id) {
                this.$router.push({
                    name: "ListHabit",
                    params:{
                        id: hotel_id,
                    }
                });
                
            },
            viewFormHotelCreate() {
                this.$router.push({ name: 'CrearPage'})
            },
            viewHotel(id){
                alert(id)
            }
        },
    }
    
    
    </script>
 