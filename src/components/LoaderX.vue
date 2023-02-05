<template>
    <div class="canvas" >
        <div class="punto"></div>
        <div class="punto"></div>
        <div class="punto"></div>      
    </div>
</template>

<style scoped>

.canvas{
  position: relative;
  padding-top: 30px;
}

.punto{
  height: 20px;
  width: 20px;
  border: solid 3px rgb(0, 0, 0);
  border-radius: 50%;
  display: inline-block;
  
}
.punto:nth-of-type(1){
  animation: ani 1s ease-in-out infinite;
}
.punto:nth-of-type(2){
  animation: ani 1s ease-in-out infinite;
  animation-delay: .3s;
}
.punto:nth-of-type(3){
  animation: ani 1s ease-in-out infinite;
  animation-delay: .6s;
}
@keyframes ani { 
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(-20px);
  }
  to{
    transform: translateY(0);
  }
}
</style>