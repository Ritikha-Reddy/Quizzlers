class Security {

    constructor(){

        this.access1 = createInput("Answer here!!")
        this.access1.position(80,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(230,90);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Answer here!!")
        this.access2.position(80,160);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(230,160);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Answer here!!")
        this.access3.position(80,230);
        this.access3.style('background', 'white');  

         this.button3 = createButton('Check');
         this.button3.position(230,230);
         this.button3.style('background', 'lightgrey');
        
       
         this.access4 = createInput("Answer here!!")
         this.access4.position(80,300);
         this.access4.style('background', 'white');  
 
         this.button4 = createButton('Check');
         this.button4.position(230,300);
         this.button4.style('background', 'lightgrey');    
 
         this.access5 = createInput("Answer here!!")
         this.access5.position(80,370);
         this.access5.style('background', 'white');  
 
         this.button5 = createButton('Check');
         this.button5.position(230,370);
         this.button5.style('background', 'lightgrey');
 
         this.access6 = createInput("Answer here!!")
         this.access6.position(700,90);
         this.access6.style('background', 'white');  
 
          this.button6 = createButton('Check');
          this.button6.position(850,90);
          this.button6.style('background', 'lightgrey');
         
          this.access7 = createInput("Answer here!!")
          this.access7.position(700,165);
          this.access7.style('background', 'white');  
  
          this.button7 = createButton('Check');
          this.button7.position(850,165);
          this.button7.style('background', 'lightgrey');    
  
          this.access8 = createInput("Answer here!!")
          this.access8.position(700,240);
          this.access8.style('background', 'white');  
  
          this.button8 = createButton('Check');
          this.button8.position(850,240);
          this.button8.style('background', 'lightgrey');
  
          this.access9 = createInput("Answer here!!")
          this.access9.position(700,310);
          this.access9.style('background', 'white');  
  
           this.button9 = createButton('Check');
           this.button9.position(850,310);
           this.button9.style('background', 'lightgrey');
          
           this.access10 = createInput("Answer here!!")
           this.access10.position(700,380);
           this.access10.style('background', 'white');  
   
           this.button10 = createButton('Check');
           this.button10.position(850,380);
           this.button10.style('background', 'lightgrey');
           


    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score = score + 10;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score = score+10;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                 this.button3.hide();
                 this.access3.hide();
                score = score+10;
            }
        });
    
        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score = score + 10;
            }
        });

        this.button5.mousePressed(() => {
            if(system.authenticate(accessCode5,this.access5.value())){
                this.button5.hide();
                this.access5.hide();
                score = score+10;
            }
        });

        this.button6.mousePressed(() => {
            if(system.authenticate(accessCode6,this.access6.value())){
                 this.button6.hide();
                 this.access6.hide();
                score = score+10;
            }
        });
        this.button7.mousePressed(() => {
            if(system.authenticate(accessCode7,this.access7.value())){
                this.button7.hide();
                this.access7.hide();
                score = score + 10;
            }
        });

        this.button8.mousePressed(() => {
            if(system.authenticate(accessCode8,this.access8.value())){
                this.button8.hide();
                this.access8.hide();
                score = score+10;
            }
        });

        this.button9.mousePressed(() => {
            if(system.authenticate(accessCode9,this.access9.value())){
                 this.button9.hide();
                 this.access9.hide();
                score = score+10;
            }
        });
        this.button10.mousePressed(() => {
            pressed = true
            if(system.authenticate(accessCode10,this.access10.value())){
                 this.button10.hide();
                 this.access10.hide();
                score = score+10;
                 
            }
        });
    
    }
}