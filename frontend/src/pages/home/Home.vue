<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/sign_in">Sign In</router-link></li>
      <li><router-link to="/sign_up">Sign Up</router-link></li>
    </ul>
    <router-view />
  </div>
</template>
