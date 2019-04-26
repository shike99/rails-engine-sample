<template>
  <div class="about">
    <h1>This is an user list page</h1>
    <ul>
      <li><router-link to="/users">User list</router-link></li>
      <li><router-link to="/articles">Article list</router-link></li>
    </ul>
    <router-view />
  </div>
</template>
