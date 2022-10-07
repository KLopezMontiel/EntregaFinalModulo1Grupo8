<template>
    
      <div class="row mb-3">
          <div class="col">
              <h4><i class="bi bi-check2-square"></i> Habitaciones</h4>
          </div>
          <div class="col">
              <div class="float-end">
                  <button @click="viewFormHabitCreate" class="btn btn-success btn-sm">Nueva Habitación </button>
              </div>
          </div>
      </div>
  
      <table class="table table-striped table-bordered table-sm">
        <thead>
            <tr>
                <th scope="col">Tipo</th>
                
                <th scope="col">Cantidad</th>
                <th scope="col">Acomodación</th>
                <th scope="col">&nbsp;</th>
                <th scope="col">&nbsp;</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="hotel in hotels2" :key="hotel.hotel_id">
                
                <td>{{hotel.room_type_id}}</td>
                <td>{{hotel.quantity}}</td>
                <td>{{hotel.accommodation.name}}</td>
                <td><button @click="viewlistedit(hotel.id)" class="btn btn-success  btn-sm">Editar </button></td>
                <td><button @click="viewlistHabitaDelete(hotel.id)" class="btn btn-danger btn-sm">Eliminar </button></td>

            </tr>
        </tbody>
      </table>
</template>

<script>
import axios from 'axios'
export default {
    beforeMount() {
           axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/' + this.$route.params.id)
            .then( response => (this.hotels2 = response.data.data) )
},
            data(){
                return{
                    
                    hotels2: []

                }
            },

            methods: {                
                enviar2(){
                    axios({
                        method: 'post',
                        url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms',
                        data: this.hotel,
                        responseType: 'json',
                    })
                    .then(response => {
                        this.info = response.data.message
                        this.hotel.name = null
                        this.hotel.nit = null
                        this.hotel.address = null
                        this.hotel.num_rooms = null
                        this.hotel.city_id = null
                    })
                    .catch(error => {
                                this.errores = error.response.data.errors
                                
                            })    
                },
                viewlistHabitaDelete(id) {
                if (confirm('Esta seguro de eliminar Esta habitación?')) {
                    axios({
                        method: 'delete',
                        url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+id,
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
                    viewFormHabitCreate() {
                        this.$router.push({ name: 'crearHabit'})
                        },






            }
        }
</script>