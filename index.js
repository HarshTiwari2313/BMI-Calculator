const form = document.querySelector('form')
form.addEventListener('submit',function(e){
         e.preventDefault()// ab ye krne se form ka default property jo ki server pe data bhejna tha ab ruk jayega
         const height = parseInt(document.querySelector('#height').value)
         const weight = parseInt(document.getElementById('weight').value)
         const heightInMeter = height*0.01;
         const ans = Math.round((weight/(heightInMeter*heightInMeter))*100)/100
         
         const result = document.querySelector('#result');
         result.innerHTML=`Your BMI is  :   ${ans}`




        })