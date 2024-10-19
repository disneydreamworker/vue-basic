<template>
  <div>
    {{ count }}
  </div>
</template>

<script>
export default {


  data () {
    return {
      count : 0,

    }
  },


}
</script>

<style lang="scss" scoped>

</style>



routes : [
  {
    path:'/user/john,
    name:'userJohn',
    component: UserView
  },
  {
    path:'/user/jane,
    name:'userJane',
    component: UserView
  },
  {
    path:'/user/:id,
    name:'user',
    component: UserView
  },
]