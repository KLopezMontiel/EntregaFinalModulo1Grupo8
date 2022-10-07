<template>
  <nav class="navbar navbar-expand-lg bg-success bg-opacity-50">
      <div class="container-md">
      <a class="navbar-brand" href="#">Hotel Unicor</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
          <li class="nav-item">
              <router-link to="/" class="nav-link" aria-current="page" href="#">Inicio</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/tipo" class="nav-link" aria-current="page" href="#">Hoteles</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/rooms" class="nav-link" aria-current="page" href="#">Tipo de Habitaciones</router-link>
          </li>
          </ul>
      </div>
      </div>
  </nav>
  </template>