$(function(){
    $('#sub').on('click',function(){
        let data=$('form').serialize();
        $.ajax({
            type:'post',
            url:'http://127.0.0.1:8080/addNewHero',
            data,
            success:function(res){
                if(res.code===200){
                    alert(res.msg);
                    location.href='/index'
                }
            }
        })
    })
})