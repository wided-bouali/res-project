
    var favorite=[];
    var price={
        espresso:2.5,
        cappuccino:3.5,
        latte:3.5,
        coka:3.8,
        fanta:3.8,
        schweeeps:4,
        strawberry:5.5,
        wood:5.8,
        banane:5,
        caesar:18,
        pulp:26,
        green:13,
        salmon:28,
        cheese:25,
        sea:35,
        tuna:8,
        veget:7.5,
        pcheese:12,
        bveg:12,
        bcheese:15,
        meat:18,
        nutella1:7.5,
        caramel1:6,
        japanese:6,
        nuttella2:7.5,
        ferero:9,
        caramel2:7,
        fruitsalad:13
    }
    $(document).ready(function() {
       $("#price").click(function(){
            $.each($("input[type='checkbox']:checked"), function(){
                favorite.push($(this).val());
            });
            console.log(favorite)
          
        });
       $("#but").click(function(e){
        if (favorite.length>0){
          alert("you choose: "+favorite.join(,));
      }
      else{
      alert("you didn't choose anything");}
          e.preventDefault();
      });
       // $('#another').on('click',function(){
       //  return reset()
       // });
    });
    // function reset(){
    //     favorite=[];
    //     return result()
    // }
    function result(){
        var total=0;
        for(var i=0;i<favorite.length;i++){
            total=total+price[favorite[i]];
        }
        return total;
    }

  

