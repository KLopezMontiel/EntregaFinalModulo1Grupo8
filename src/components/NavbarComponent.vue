<template>
<div>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/Ho_Ko.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        KONGHONG</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page" >Inicio</router-link>
            
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Hoteles
            </a>
            <ul class="dropdown-menu">
              <router-link to="/ver" class="nav-link active" aria-current="page" >Ver Hoteles</router-link>
              <router-link to="/crear" class="nav-link active" aria-current="page" >Crear Hoteles</router-link>
              
              
            </ul>
          </li>
          <li class="nav-item">
            
            <router-link to="/tipo" class="nav-link active" aria-current="page" href="#" >Tipo de Habitaciones</router-link>
            
          </li>
          <li class="nav-item">
            <router-link to="/acomd" class="nav-link active" aria-current="page" >Acomodaciones</router-link>
            
          </li>
        </ul>
      </div>
    </div>
  </nav>  
</div>
</template>