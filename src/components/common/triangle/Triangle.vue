<template>
                <div class="arr">
                        <div class="arrUp"></div>
                       <div class="arrDown"></div>
            </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
      .arr {
        width: 10px;
    }
 
    .arrUp {
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-bottom-color: #ccc;
      cursor: pointer;
    }
 
    .arrDown {
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-top-color: #ccc;
      /* 两三角的距离 */
      margin-top: 5px;
      cursor: pointer;
    }

</style>