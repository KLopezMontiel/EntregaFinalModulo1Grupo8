<template>
    <div>
      <div class="row mb-3">
          <div class="col">
              <h4><i class="bi bi-check2-square"></i>Nueva Habitación</h4>
          </div>
                </div>
                <div class="row g-3">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
                    </div>
                    </div>



    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        beforeMount() {
               axios
                .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms-types')
                .then( response => (this.acomodacion = response.data) )

                axios
                .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/accommodation-types')
                .then( response => (this.romms = response.data) )
    },
                data(){
                    return{
                        errores:{
                            nit: null,
                        },
                        info: null,
                        acomodacion: []
    
                    },
                },
            }

</script>