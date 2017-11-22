<template>
    <div class="footer-class">
        <span class="copy-right-txt">{{footer.copyRight}}</span>
    </div> 
</template>
<script>
export default {
    data(){
        return{
            footer:{
                copyRight:'橙色魔方版权所有 © Copyright Orange Magic Cube Co.ltd.All Rights Reserved. | 粤ICP备2553149号'
            }
        }
    }
}
</script>
<style>
.footer-class{
    background: #363D47;
    width:100%;
    margin-top:20px;
    color:#949495;
    
}
.footer-class .copy-right-txt{
    display: block;
    height:100%;
    width:100%;
    text-align:center;
    line-height:80px;
}
</style>
