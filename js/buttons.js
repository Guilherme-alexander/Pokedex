       
       //home
        $('.menu').on('click',function(){
            alert('API Info-> https://pokeapi.co/api/v2/pokemon/id=pokemon')
            alert('API Imagens-> https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/id=pokemon.png')
        })
        
        //buttom reset
        $('.reset').on('click',function(){
            $('.card').css('display','block')
            $('.card').css('background','white')
            $('.card-title').css('color','black')
            $('.card-subtitle').css('color','black')
        })

        //fire
        $('#btn1').on('click',function(){
            $('.card.fire').css('background','#fd7d24')
            $('.card-title.fire').css('color','white')
            $('.card-subtitle.fire').css('color','white')
            $('.card').css('display','none')
            $('.card.fire').css('display','block') 
        })
        //water
        $('#btn2').on('click',function(){
            $('.card.water').css('background','#1E90FF')
            $('.card-title.water').css('color','white')
            $('.card-subtitle.water').css('color','white')
            $('.card').css('display','none')
            $('.card.water').css('display','block') 
        })
        //grass
        $('#btn3').on('click',function(){
            $('.card.grass').css('background','#9bcc50')
            $('.card-title.grass').css('color','white')
            $('.card-subtitle.grass').css('color','white')
            $('.card').css('display','none')
            $('.card.grass').css('display','block') 
        })
        //bug
        $('#btn4').on('click',function(){
            $('.card.bug').css('background','#526a36')
            $('.card-title.bug').css('color','white')
            $('.card-subtitle.bug').css('color','white')
            $('.card').css('display','none')
            $('.card.bug').css('display','block') 
        })
        //flying
        $('#btn5').on('click',function(){
            $('[tipos2="flying"]').css('background','#ccc')
            $('.card').css('display','none')
            $('[tipos2="flying"]').css('display','block')
            $('[tipos2="flying"]').css('color','#000') 
        })
        //poison
        $('#btn6').on('click',function(){
            $('.card.poison').css('background','#b97fc9')
            $('.card-title.poison').css('color','white')
            $('.card-subtitle.poison').css('color','white')
            $('.card').css('display','none')
            $('.card.poison').css('display','block') 
        })
        //electric
        $('#btn7').on('click',function(){
            $('.card.electric').css('background','#ffbd00')
            $('.card-title.electric').css('color','white')
            $('.card-subtitle.electric').css('color','white')
            $('.card').css('display','none')
            $('.card.electric').css('display','block')
        }) 
        //ground
        $('#btn8').on('click',function(){
            $('.card.ground').css('background','#db5')
            $('.card-title.ground').css('color','white')
            $('.card-subtitle.ground').css('color','white')
            $('.card').css('display','none')
            $('.card.ground').css('display','block') 
        })
        //fairy
        $('#btn9').on('click',function(){
            $('.card.fairy').css('background','#e27a9d')
            $('.card-title.fairy').css('color','white')
            $('.card-subtitle.fairy').css('color','white')
            $('.card').css('display','none')
            $('.card.fairy').css('display','block') 
        })
        //psychic
        $('#btn10').on('click',function(){
            $('.card.psychic').css('background','#dc439d')
            $('.card-title.psychic').css('color','white')
            $('.card-subtitle.psychic').css('color','white')
            $('.card').css('display','none')
            $('.card.psychic').css('display','block') 
        })
        //fighting
        $('#btn11').on('click',function(){
            $('.card.fighting').css('background','#ea3b3b')
            $('.card-title.fighting').css('color','white')
            $('.card-subtitle.fighting').css('color','white')
            $('.card').css('display','none')
            $('.card.fighting').css('display','block') 
        })
        //rock
        $('#btn12').on('click',function(){
            $('.card.rock').css('background','#a38c21')
            $('.card-title.rock').css('color','white')
            $('.card-subtitle.rock').css('color','white')
            $('.card').css('display','none')
            $('.card.rock').css('display','block') 
        })
        //ghost
        $('#btn13').on('click',function(){
            $('.card.ghost').css('background','#7b62a3')
            $('.card-title.ghost').css('color','white')
            $('.card-subtitle.ghost').css('color','white')
            $('.card').css('display','none')
            $('.card.ghost').css('display','block') 
        })
        //ice
        $('#btn14').on('click',function(){
            $('.card.ice').css('background','#51c4e7')
            $('.card-title.ice').css('color','white')
            $('.card-subtitle.ice').css('color','white')
            $('.card').css('display','none')
            $('.card.ice').css('display','block') 
        })
        //dragon
        $('#btn15').on('click',function(){
            $('.card.dragon').css('background','#76e')
            $('.card-title.dragon').css('color','white')
            $('.card-subtitle.dragon').css('color','white')
            $('.card').css('display','none')
            $('.card.dragon').css('display','block') 
        })
        //dark
        $('#btn16').on('click',function(){
            $('.card.dark').css('background','#111111')
            $('.card-title.dark').css('color','white')
            $('.card-subtitle.dark').css('color','white')
            $('.card').css('display','none')
            $('.card.dark').css('display','block')
        })
        //steel
        $('#btn17').on('click',function(){
            $('.card.steel').css('background','#6a6a6a')
            $('.card-title.steel').css('color','white')
            $('.card-subtitle.steel').css('color','white')
            $('.card').css('display','none')
            $('.card.steel').css('display','block')
        })
        //normal
        $('#btn18').on('click',function(){
            $('.card.normal').css('background','#344345')
            $('.card-title.normal').css('color','white')
            $('.card-subtitle.normal').css('color','white')
            $('.card').css('display','none')
            $('.card.normal').css('display','block')
        })