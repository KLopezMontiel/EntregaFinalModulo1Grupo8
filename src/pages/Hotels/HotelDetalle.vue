<template>
    
    <div>
        <div class="row mb-3">
          <div class="col">
              <h4><i class="bi bi-activity"></i>Detalles Hotel</h4>
          </div>
          
        </div>
        <div>
           

            <div class="row  mt-3">
                
                <div class="col">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input v-model="hotel.name" type="text" class="form-control" id="nombre">
                    
                </div>            
                <div class="col">
                    <label for="nit" class="form-label">NIT</label>
                    <input v-model="hotel.nit" type="text" class="form-control" id="nit">                
                    <div v-if="errores.nit" style="color:red" role="alert">{{errores.nit[0]}}</div>
                </div>
            </div>
            <div class="row  mt-3">
                <div class="col">
                    <label for="direccion" class="form-label">Dirección</label>
                    <input v-show="hotel.address" type="text" class="form-control" id="direccion">
                </div> 
                <div class="col">
                    <label for="nro_habitaciones" class="form-label">Nro de habitaciones</label>
                    <input v-model="hotel.num_rooms" type="text" class="form-control" id="nro_habitaciones">
                </div>
            </div>
            <div class="row mt-3" >
                <div class="col">
                    <label for="ciudad" class="form-label">Ciudad</label>
                    <select class="form-select" id="ciudad" v-model="hotel.city_id" >
                        <option v-for="ciudad in cities" :value="ciudad.id" :key="ciudad.id">{{ ciudad.name }}</option>
                    </select>
                </div> 
                <div class="col">
                    
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <button @click="sendHotel" type="submit" class="btn btn-primary ">Enviar</button>
                </div> 
                <div class="col">
                    
                </div>
            </div>
    
            <div v-if="info" class="alert alert-primary mt-3" role="alert">
                {{info}}
            </div>
    
    
            
        
        
        
        </div>
    </div>
    </template>
    
    
    <script>
        import axios from 'axios'
        export default {
            beforeMount() {
                axios
                    .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+ this.$route.params.hotel_id )
                    .then( response => (this.hotels = response.data) )
            },
            data() {
                return {
                    errores: {
                        nit: null                    },
                    info: null,
                    hotels: [],
                    hotel: {
                        name: null ,
                        nit: null,
                        address: null,
                        num_rooms: null,
                        city_id: null
                    }
                }
            },
            methods: {
                viewHotel() {
                    axios({
                        method: 'get',
                        url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+ this.$route.params.hotel_id ,
                        data: this.hotel,
                        responseType: 'json',
                    }) 
                    .then(response => {  
                        this.info = response.data.message
                        
                        this.name = null
                        this.hotel_address = null
                        this.hotel_num_rooms = null
                        this.hotel_city_id = null
                        
                    })
                    .catch(error => {
                        this.errores = error.response.data.errors
                        
                    })            
                }
            },
        }
        </script>