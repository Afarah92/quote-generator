const Quotes =[
  {
    name:'Stephen King',
    quote:'Get busy living or get busy dying'
  },
  {
    name:'Mark Caine',
    quote:'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.'
  } ,
  {
    name:'Helen Keller',
    quote:'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us'
  },
  
  {
    name:'Mark Twain',
    quote:'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do'
  
  },
 
  {
    name:'Eleanor Roosevelt',
    quote:'Great minds discuss ideas; average minds discuss events; small minds discuss people'
  },


  {
quote: 'Do what you can, with what you have, where you are.',

name: 'Theodore Roosevelt'

  },




  {
    name:'David Brinkley',
    quote:'A successful man is one who can lay a firm foundation with the bricks others have thrown at him.'
  },

  
  {
    quote: 'Be yourself; everyone else is already taken.',

    name: 'Oscar Wilde'

    



    
      },
      {
        quote: 'This above all: to thine own self be true..',
    
        name: 'William Shakespeare'
    
        
    
    
    
        
          },

          {
            quote: 'If you cannot do great things, do small things in a great way.',

            
        
            name: 'Napoleon Hill'
        
            
        
        
        
            
              },

              {
                quote: 'Strive not to be a success, but rather to be of value.',
    
                
            
                name: 'Albert Einstein'
          
                
                  },


                  {
                    quote: 'I haven’t failed. I’ve just found 10,000 ways that won’t work.',
        
                    
                
                    name: 'Albert Einstein'
                
                    
                
                
                
                    
                      },


      

  

];



const quoteBtn = document.getElementById("btn");



const QuoteAuthor = document.getElementById("quote-author");

const Quote = document.getElementById("quote");


document.getElementById("Qbtn").addEventListener("click", randomQuote);




  function randomQuote() {
  var rand =Math.floor(Math.random()*Quotes.length);
  Quote.innerHTML = Quotes[rand].quote;
    QuoteAuthor.innerHTML = Quotes[rand].name;
  

}




  
  

  

 