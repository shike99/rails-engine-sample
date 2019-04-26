<template>
  <div id="app">
    <vs-row>
      <vs-col vs-style="flex" vs-justify="center" vs-align="center" vs-w="4">
        <ul>
          <!-- <li><router-link to="/">User list</router-link></li>
          <li><router-link to="/articles">Article list</router-link></li> -->
        </ul>
      </vs-col>
      <vs-col vs-style="flex" vs-justify="center" vs-align="center" vs-w="8">
        <router-view />
      </vs-col>
    </vs-row>
  </div>
</template>
