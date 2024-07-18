
import { useState } from 'react'

import { SocialIcon } from 'react-social-icons';

import { onValue, push, ref, set } from 'firebase/database'; 
import { collection,addDoc, where, getDocs, query, updateDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database";
import { useEffect } from 'react'
import { useRef } from 'react';

function Testimonials() {
  var [users,setusers]=useState([])
  var [prenom,setPrenom]=useState("")
  var [message,setMessage]=useState("")


  const firebaseConfig = {
  apiKey: "AIzaSyCiUt1ILE3JU-bly4aFFc4cGi7-KZh7uP4",
  authDomain: "portfolio2-85da6.firebaseapp.com",
  databaseURL: "https://portfolio2-85da6-default-rtdb.firebaseio.com",
  projectId: "portfolio2-85da6",
  storageBucket: "portfolio2-85da6.appspot.com",
  messagingSenderId: "805286329616",
  appId: "1:805286329616:web:b7880d35f8d06cc0793995"
  };
  

  const app = initializeApp(firebaseConfig);
 const db = getDatabase(app);
  const addData = async () => { 
     
    const newItemRef = push(ref(db, 'users'));
    if(prenom.length>2 && message.length>5 && message.length<45){
    set(newItemRef, {prenom:prenom,message:message})
    setPrenom('');
    setMessage('');
    }
  };


  const getdata=async()=>{
    const query = ref(db, `users`);
    return await onValue(query, (snapshot) => {
       const data = snapshot.val();
      setusers(Object.values(data))

    })


  }

useEffect(()=>{getdata()},[])

const aboutRef = useRef(null);
    const totalStars = 6;
    var rating=3;

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        },
        {
          threshold: 0.1,
        }
      );
  
      if (aboutRef.current) {
        observer.observe(aboutRef.current);
      }
  
      return () => {
        if (aboutRef.current) {
          observer.unobserve(aboutRef.current);
        }
      };
    }, []);

  return (
    <div id='Testimonials' ref={aboutRef} className='mt-5  md:mt-20 border-b-2  border-gray-200 p-4 pb-11 md:px-20 md:pb-64'>
   <style>
      {`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-in-out;
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-in-out;
        }
      `}
    </style>
    <h1 className=' text-center font-medium text-xl md:text-3xl text-blue-600'>Testimonials</h1>
    

    <div className='flex justify-center mt-14'>
      <input placeholder="Your name" value={prenom} onChange={(e)=>{setPrenom(e.target.value)}} className="text-lg w-4/5 md:w-2/5 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
      </div>

    
    <div className='flex justify-center flex-wrap mt-3 '>
      
<textarea id="message" value={message} onChange={(e)=>{setMessage(e.target.value)}}  rows={4} className="block bg-white leading-tight   p-2.5 w-4/5 md:w-2/5 text-lg text-gray-900 bg-gray-50 rounded-lg border" placeholder="Write your thoughts here..."></textarea>

</div>
<div className='flex justify-center flex-wrap mt-3 '>
<button onClick={()=>{addData()}} className="bg-transparent w-4/5 md:w-2/5  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  SEND
</button>
</div>




    <div className=" mt-9 md:mt-16 flex justify-around flex-wrap px-10  md:px-52"> 
   
           
              
            {users.length>0 && users.map((x)=>{
              return( <div className="w-3/4 rounded-3xl md:w-1/4 ml-5 p-5 rounded flex-grow-0 flex-shrink-0 flex flex-col justify-around  overflow-hidden shadow-lg  mt-5">
                 <div className="px-6 py-4 ">
                   <div className="font-bold md:text-xl text-md mb-2">{x.prenom}</div>
                        <p className="text-gray-700 text-lg">
                         {x.message}
                        </p>
                    </div></div>
)})}     
              
             
             </div>
  


         
    


    </div>
  )
}

export default Testimonials
