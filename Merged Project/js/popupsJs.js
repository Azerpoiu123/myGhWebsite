              //(this code is in need of rewriting...)
            function switchingOn(i){
                $(".popBody:eq("+i+")").fadeIn(500);
            }
            function switchingOff(i){
                $(".popBody:eq("+i+")").fadeOut(0);
            }
            var ch = "\n";
            function show(){
                for (var i = 0; i < 2; i++) {
                ch +=  $(".popInput:eq("+i+")").val()+" ";
                }
                if ($('.RGB li:eq(0)').hasClass("rbActive"))
                {
                    ch += "public ";
                }else ch += "private ";

                ch += "\n";
                alert(ch);
                //location.reload();
            }
            function CheckIt(){
                    if ($('.RGB li:eq(0)').hasClass("rbActive"))
                    {
                        $('.RGB li:eq(0)').addClass("rb").removeClass("rbActive");
                        $('.RGB li:eq(1)').addClass("rbActive").removeClass("rb");
                       // alert("true");
                    }else{
                         $('.RGB li:eq(0)').addClass("rbActive").removeClass("rb");
                         $('.RGB li:eq(1)').addClass("rb").removeClass("rbActive");
                        // alert("false");
                    } 
                    //$('.RGB li').removeClass("rb").addClass("rbActive");
            }
            //this is the overlay js of the popups:::                                      (this code is in need of rewriting...)

            function on() {//display the overlay than the popups
                document.getElementById("overlay").style.display = "block";
            }

            function off() {//hidd the overlay div that contains the popups
                document.getElementById("overlay").style.display = "none";
            }

            function startPopin(){//start the popups process by displaying the popups body and than the overlay that contains the popups
                $('.popBody').toggle();
                switchingOn(0);
                $('.RGB li').mousedown(function(e){ e.preventDefault(); });//preventing the text selection on the radio box input
                //$('body').click(function(){
                //});
                $('.RGB li').click(function(){//selection a default value for the radio box
                    CheckIt();
                });
                on();

            }
            function stopPopin(){//stop the popups display process by hidding the popups(instantly) than their container
                switchingOff(0);//hidding popup 1
                switchingOff(1);//hidding popup 2
                switchingOff(2);//hidding popup 3
                $('.popBody').toggle();//hidding the popups body
                off();//hidding the overlay
            }