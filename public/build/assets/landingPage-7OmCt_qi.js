import{q as N,r,j as e,F as y}from"./app-CmMHBtRm.js";import w from"./car-DNQoWPj8.js";import k from"./Navbar-riBAp0WR.js";import{h as D,E as S,w as E,F as C}from"./index-BFRJqtLk.js";const G=({auth:O})=>{const{props:o}=N(),[m,h]=r.useState(!0),x=r.useRef(null),c=r.useRef(null),[l,g]=r.useState(null);function u(s){s.classList.contains("paused")?s.classList.remove("paused"):s.classList.add("paused")}const p=s=>{try{return c.current=atob(s),JSON.parse(c.current)}catch(a){return console.error("Decryption failed:",a),null}};r.useEffect(()=>{g(p(o.tending))},[]);const j=[D,S,E,C],[i,v]=r.useState({});return r.useEffect(()=>(l&&(()=>{const a={};Object.entries(l).forEach(([t,d])=>{if(i[t])a[t]=d.length;else{let n=0;const b=setInterval(()=>{n+=2,n>=d.length+400&&(clearInterval(b),n=d.length),a[t]=n,v(f=>({...f,...a}))},20)}})})(),()=>{Object.values(i).forEach(a=>clearInterval(a))}),[l]),e.jsxs(e.Fragment,{children:[e.jsx(k,{}),m&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"fixed  h-56 w-56 left-32 top-32 ",children:e.jsx("img",{className:"w-auto h-auto",src:"loader2.gif",alt:"loading"})})}),e.jsx("div",{className:"canvas",id:"top",children:e.jsx(w,{SetLoading:h})}),e.jsxs("div",{className:"container mt-4 text-left ml-4 z-40",children:[e.jsxs("div",{className:"mt-6 z-10",children:[e.jsx("span",{className:"relative flex mt-12 text-white",children:"Available For"}),e.jsxs("div",{className:"relative flex mt-5",children:[e.jsx("img",{src:"https://minimals.cc/assets/icons/platforms/ic_js.svg",alt:"",className:"ml-4"}),e.jsx("img",{src:"https://minimals.cc/assets/icons/platforms/ic_vite.svg",alt:"",className:"ml-4"}),e.jsx("img",{src:"unity-69.svg",alt:"",className:"ml-4 w-6"}),e.jsx("img",{src:"laravel-2.svg",alt:"",className:"ml-4 w-6"})]}),e.jsxs("div",{className:"preview-media mt-12 flex flex-col",children:[e.jsx("button",{className:"text-white hover:bg-white hover:text-gray-500 px-2 mt-2 hover:border-2  hover:border-orange-500  rounded-full",children:"01"}),e.jsx("button",{className:"text-white hover:bg-white hover:text-gray-500 px-2 mt-2 hover:border-2  hover:border-orange-500 rounded-full",children:"02"}),e.jsx("button",{className:"text-white hover:bg-white hover:text-gray-500 px-2 mt-2 hover:border-2  hover:border-orange-500 rounded-full",children:"03"}),e.jsx("button",{className:"text-white hover:bg-white hover:text-gray-500 px-2 mt-2 hover:border-2  hover:border-orange-500 rounded-full",children:"04"})]}),e.jsxs("div",{className:"absolute grid grid-cols-3 gap-4",id:"element00",children:[e.jsx("div",{className:"someGlass",children:e.jsx("div",{className:"absolute -ml-5 mt-5 w-20 h-10 rounded bg-red-600 py-2",children:e.jsx("p",{className:"mx-auto",children:"New"})})}),e.jsx("div",{className:"someGlass",children:e.jsx("div",{className:"absolute -ml-5 mt-5 w-20 h-10 rounded bg-red-700 py-2",children:e.jsx("p",{className:"mx-auto",children:"New"})})}),e.jsx("div",{className:"someGlass",children:e.jsx("div",{className:"absolute -ml-5 mt-5 w-20 h-10 rounded bg-orange-600 py-2",children:e.jsx("p",{className:"mx-auto",children:"New"})})})]}),e.jsxs("h1",{className:"text-6xl text-white font-bold md:font-sans-serif lg:text-46 z-10 relative mt-56 py-32 bottom-0",children:["Revamp Your Ride with ",e.jsx("br",{})," Car Maintain"]})]}),e.jsx("style",{children:`.centdiv{
    background-color:#e2e6ee;
}`})]}),e.jsxs("div",{className:"tending h-screen w-full dark:text-white",children:[e.jsx("div",{className:"serviceDetails",children:e.jsx("div",{className:"grid md:grid-cols-2  grid-cols-1 gap-0 w-full h-full",children:e.jsx("div",{className:"dark:bg-gray-900 relative h-full col-span-2",children:e.jsx("div",{className:"mt-32 p-10",children:e.jsxs("center",{children:[e.jsx("p",{className:"text-4xl text-gray-900 dark:text-gray-300 mt-10 font-bold",children:"Why Us!"}),e.jsxs("p",{className:"text-2xl dark:text-gray-300 indent-8 mt-2",children:["we offer an ",e.jsx("b",{className:"underline decoration-sky-500",children:"Open Source Dynamic"})," project that seamlessly integrates ",e.jsx("b",{className:"underline decoration-sky-500",children:"Game Development"})," and ",e.jsx("b",{className:"underline decoration-sky-500",children:"Web Development"})," expertise. Our solution synchronizes resources,",e.jsx("br",{})," processes user-provided information, and securely stores data in both a local and Cloud ",e.jsx("b",{className:"underline decoration-sky-500",children:"database"}),". Leveraging our team's ",e.jsx("b",{className:"underline decoration-sky-500",children:"Academic Knowledge"})," and experience,",e.jsx("br",{})," we've developed an innovative web application powered by ",e.jsx("b",{className:"underline decoration-sky-500",children:"Nodejs"}),".",e.jsx("br",{}),"This application analyzes user data in ",e.jsx("b",{className:"underline decoration-red-500",children:"Real-time"}),", providing dynamic responses tailored to the user's interactions.",e.jsx("br",{}),"Additionally, we developed ",e.jsx("b",{className:"underline decoration-sky-500",children:"3D game"}),", environment provides immersive visualization of resources, requires authentication.",e.jsx("br",{}),"With our comprehensive solution, clients benefit from efficient resource management,",e.jsx("br",{})," secure data handling, and seamless integration between web and gaming environments."]})]})})})})}),e.jsx("div",{className:"serviceDetails",children:e.jsxs("div",{className:"grid md:grid-cols-2  grid-cols-1 gap-0 w-full h-full",children:[e.jsx("div",{className:"dark:bg-gray-900 relative h-full col-span-2",children:e.jsx("center",{className:"mt-32 p-4",children:e.jsx("p",{className:"text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold",children:"Our Team"})})}),e.jsx("div",{className:"dark:bg-gray-900 relative h-full",children:e.jsxs("center",{className:"mt-8 p-4",children:[e.jsx("div",{className:"initials-circle",children:"HM"}),e.jsx("p",{className:"text-xl text-gray-800 dark:text-gray-300 font-semibold",children:"Hafedh Mellasi"}),e.jsx("p",{className:"text-md text-gray-600 dark:text-gray-400",children:"Position: Developer"})]})}),e.jsx("div",{className:"dark:bg-gray-900 relative h-full",children:e.jsxs("center",{className:"mt-8 p-4",children:[e.jsx("div",{className:"initials-circle",children:"BS"}),e.jsx("p",{className:"text-xl text-gray-800 dark:text-gray-300 font-semibold",children:"Bachar Skrafi"}),e.jsx("p",{className:"text-md text-gray-600 dark:text-gray-400",children:"Position: Designer"})]})}),e.jsx("div",{className:"dark:bg-gray-900 relative h-full col-span-2",children:e.jsxs("center",{className:"mt-8 p-4",children:[e.jsx("div",{className:"initials-circle",children:"GH"}),e.jsx("p",{className:"text-xl text-gray-800 dark:text-gray-300 font-semibold",children:"Garrach Hazem"}),e.jsx("p",{className:"text-md text-gray-600 dark:text-gray-400",children:"Position: Project Manager"})]})})]})}),e.jsx("ul",{className:"grid md:grid-cols-4 grid-cols-1 py-4 px-32 bg-gray-300 dark:bg-gray-800",children:l&&Object.entries(l).map(([s,a],t)=>e.jsxs("li",{className:"text-3xl p-4 flex justify-center",children:[e.jsx(y,{icon:j[t]}),e.jsxs("span",{className:"ml-2",children:[" ",`${a.length>100?a.length:i[s]?i[s]:0} 
 ${s}`]})]},t))}),e.jsx("div",{className:"serviceDetails",children:e.jsxs("div",{className:"grid md:grid-cols-2  grid-cols-1 gap-0 w-full h-full",children:[e.jsx("div",{className:"dark:bg-gray-900 relative h-full ",children:e.jsxs("center",{className:"mt-32 p-4",children:[e.jsx("p",{className:"text-3xl text-gray-900 dark:text-gray-300  font-bold",children:"Database Backup"}),e.jsxs("p",{className:"text-xl dark:text-gray-300 indent-8 mt-2",children:["Your information is securely stored in our ",e.jsx("b",{className:"underline decoration-sky-500",children:"MongoDB"})," database, ensuring reliability and scalability. Experience seamless data storage and retrieval with MongoDB Compass, our intuitive database management tool."]}),e.jsx("p",{className:"text-3xl text-gray-900 dark:text-gray-300  font-bold",children:"Synchronisation Throught Cloud"}),e.jsxs("p",{className:"text-xl dark:text-gray-300 indent-8 mt-2",children:["Experience the power of cloud synchronization with ",e.jsx("b",{className:"underline decoration-sky-500",children:"MongoDB Atlas"}),". Your data is seamlessly synced between your local database and the cloud, providing redundancy and availability for uninterrupted access."]})]})}),e.jsxs("div",{className:"dark:bg-gray-900 relative h-full",children:[e.jsx("img",{src:"why-us.png",alt:"",className:"relative mx-auto w-auto h-56 md:h-80 mx-auto"}),e.jsx("div",{className:"absolute dark:bg-gray-900 dotsCon w-56 h-20 bottom-10 -left-20",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"dots",width:"5",height:"20",patternUnits:"userSpaceOnUse",children:e.jsx("circle",{cx:"5",cy:"5",r:"2",fill:"#808080"})})}),e.jsx("rect",{x:"0",y:"0",width:"100",height:"100",fill:"url(#dots)"})]})})]})]})}),e.jsx("div",{className:"serviceDetails",children:e.jsxs("div",{className:"grid md:grid-cols-2  grid-cols-1 gap-0 w-full h-full",children:[e.jsx("div",{className:"dark:bg-gray-900 relative h-full",children:e.jsx("img",{src:"equipe-de-developpeur-web.png.webp",alt:"",className:"relative w-auto h-56 md:h-80 mx-auto"})}),e.jsx("div",{className:"dark:bg-gray-900 relative h-full ",children:e.jsxs("center",{className:"mt-32 p-4",children:[e.jsx("p",{className:"text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold",children:"Web Application and Server Communication"}),e.jsxs("p",{className:"text-xl dark:text-gray-300 indent-8 mt-2",children:["Experience real-time communication between our web application and backend server. With ",e.jsx("b",{className:"underline decoration-sky-500",children:"HTTP"})," requests or ",e.jsx("b",{className:"underline decoration-sky-500",children:"WebSocket"})," connections, data flows seamlessly to ensure instant updates and responsiveness."]})]})})]})}),e.jsx("div",{className:"serviceDetails",children:e.jsxs("div",{className:"grid md:grid-cols-2  grid-cols-1 gap-0 w-full h-full",children:[e.jsx("div",{className:"dark:bg-gray-900 relative h-full ",children:e.jsxs("center",{className:"mt-32 p-4",children:[e.jsx("p",{className:"text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold",children:"Game Engine"}),e.jsxs("p",{className:"text-xl dark:text-gray-300 indent-8 mt-2",children:[" Immerse yourself in captivating ",e.jsx("b",{className:"underline decoration-sky-500",children:"3D worlds"})," created with industry-leading game engines like ",e.jsx("b",{className:"underline decoration-sky-500",children:"Unity"})," Discover stunning graphics, immersive environments, and thrilling ",e.jsx("b",{className:"underline decoration-sky-500",children:"Gameplay"})," that push the boundaries of interactive entertainment."]})]})}),e.jsx("div",{className:"dark:bg-gray-900 relative h-full",children:e.jsx("img",{src:"game.png",alt:"",className:"relative mx-auto w-auto h-56 md:h-80"})})]})}),e.jsx("div",{className:"serviceDetails",children:e.jsxs("div",{className:"grid md:grid-cols-2  grid-cols-1 gap-0 w-full h-full",children:[e.jsx("div",{className:"dark:bg-gray-900 relative h-full",children:e.jsx("img",{src:"e-commerce.png.webp",alt:"",className:"relative mx-auto w-auto h-56 md:h-80"})}),e.jsxs("div",{className:"dark:bg-gray-900 relative h-full ",children:[e.jsxs("center",{className:"mt-32 p-4",children:[e.jsx("p",{className:"text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold",children:"Coins and Experience Earning Service"}),e.jsxs("p",{className:"text-xl dark:text-gray-300 indent-8 mt-2",children:[e.jsx("b",{children:"Coins and Experience Rewards:"})," Earn ",e.jsx("b",{className:"underline decoration-sky-500",children:"coins"})," and ",e.jsx("b",{className:"underline decoration-sky-500",children:"experience points"})," as you engage with our platform's features and complete ",e.jsx("b",{children:"tasks"}),". From developing applications to playing and testing games, every action contributes to your progress and unlocks exciting rewards.",e.jsx("b",{children:"Gamified Development Environment:"})," Immerse yourself in a ",e.jsx("b",{children:"gamified"})," development environment where progress is rewarded and achievements are celebrated. Level up your ",e.jsx("b",{children:"skills"}),", unlock ",e.jsx("b",{children:"badges"}),", and compete with friends and colleagues on ",e.jsx("b",{className:"underline decoration-sky-500",children:"leaderboards"})," for ultimate bragging rights."]})]}),e.jsx("div",{className:"absolute dark:bg-gray-900 dotsCon w-56 h-20 top-10 -left-20",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"dots",width:"5",height:"20",patternUnits:"userSpaceOnUse",children:e.jsx("circle",{cx:"5",cy:"5",r:"2",fill:"#808080"})})}),e.jsx("rect",{x:"0",y:"0",width:"100",height:"100",fill:"url(#dots)"})]})})]})]})}),e.jsx("div",{className:"serviceDetails",children:e.jsxs("div",{className:"grid md:grid-cols-2  grid-cols-1 gap-0 w-full h-full",children:[e.jsx("div",{className:"dark:bg-gray-900 relative h-full ",children:e.jsxs("center",{className:"mt-32 p-4",children:[e.jsx("p",{className:"text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold",children:"Future Update: Enhanced SaaS Platform for Web and Game Development"}),e.jsxs("p",{className:"text-xl dark:text-gray-300 indent-8 mt-2",children:[" Coming soon, our Enhanced ",e.jsx("b",{className:"underline decoration-sky-500",children:"SaaS"}),"  Platform will revolutionize the way developers create web applications and games. Building upon our existing infrastructure, this update will introduce new features and improvements aimed at further streamlining the ",e.jsx("b",{className:"underline decoration-sky-500",children:"development process"})," and ",e.jsx("b",{className:"underline decoration-sky-500",children:"enhancing"}),"  user experiences."]})]})}),e.jsx("div",{className:"dark:bg-gray-900 relative h-full",children:e.jsx("img",{src:"skills02.png",alt:"",className:"relative mx-auto w-auto h-56 md:h-80"})})]})}),e.jsx("div",{className:"serviceDetails",children:e.jsxs("div",{className:"grid md:md:grid-cols-2  grid-cols-1 gap-0 w-full h-full",children:[e.jsx("div",{className:"dark:bg-gray-900 relative h-full",children:e.jsx("img",{src:"application-sur-mesure.png.webp",alt:"",className:"relative mx-auto w-auto h-56 md:h-80 "})}),e.jsx("div",{className:"dark:bg-gray-900 relative h-full ",children:e.jsxs("center",{className:"mt-32 p-4",children:[e.jsx("p",{className:"text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold ",children:"Authentification"}),e.jsxs("p",{className:"text-xl dark:text-gray-300 indent-8 mt-2",children:["Secure your journey with robust ",e.jsx("b",{children:"authentication"})," methods like JSON Web Tokens ",e.jsx("b",{className:"underline decoration-sky-500",children:"(JWT) or OAuth"}),". Rest assured knowing your data is ",e.jsx("b",{children:"protected"})," as you engage with our platform using ",e.jsx("b",{children:"industry-standard"})," authentication protocols."]})]})})]})}),e.jsx("div",{className:"serviceDetails",children:e.jsxs("div",{className:"grid md:md:grid-cols-2  grid-cols-1 gap-0 w-full h-full",children:[e.jsx("div",{className:"dark:bg-gray-900 relative h-full ",children:e.jsxs("center",{className:"mt-32 p-4",children:[e.jsx("p",{className:"text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold",children:"Backend (Serveur Express.js)"}),e.jsxs("p",{className:"text-xl dark:text-gray-300 indent-8 mt-2",children:["Our robust backend, powered by ",e.jsx("b",{className:"underline decoration-sky-500",children:"Express.js"}),", ensures smooth communication between the client and server, providing reliable data processing and response handling for a ",e.jsx("b",{children:"seamless"})," user experience."]})]})}),e.jsx("div",{className:"dark:bg-gray-900 relative h-full",children:e.jsx("img",{src:"node.png",alt:"",className:"relative mx-auto w-auto h-56 md:h-80"})})]})}),e.jsx("div",{className:"serviceDetails",children:e.jsxs("div",{className:"grid md:md:grid-cols-2  grid-cols-1 gap-0 w-full h-full",children:[e.jsx("div",{className:"dark:bg-gray-900 relative h-full ",children:e.jsxs("center",{className:"mt-32 p-4",children:[e.jsx("p",{className:"text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold",children:"Backend (Laravel Vite)"}),e.jsxs("p",{className:"text-xl dark:text-gray-300 indent-8 mt-2",children:["Our powerful backend, built with ",e.jsx("b",{className:"underline decoration-sky-500",children:"Laravel"})," and ",e.jsx("b",{className:"underline decoration-sky-500",children:"Vite"}),", ensures smooth communication between the client and server, providing reliable data processing and response handling for a ",e.jsx("b",{children:"seamless"})," user experience."]})]})}),e.jsx("div",{className:"dark:bg-gray-900 relative h-full",children:e.jsx("img",{src:"laravel-banner.webp",alt:"",className:"relative mx-auto w-auto h-56 md:h-80"})})]})}),e.jsx("div",{className:"serviceDetails",children:e.jsxs("div",{className:"grid md:md:grid-cols-2  grid-cols-1 gap-0 w-full h-full",children:[e.jsx("div",{className:"dark:bg-gray-900 relative h-full",children:e.jsx("img",{src:"application-sur-mesure.png.webp",alt:"",className:"relative mx-auto w-auto h-56 md:h-80"})}),e.jsx("div",{className:"dark:bg-gray-900 relative h-full ",children:e.jsxs("center",{className:"mt-32 p-4",children:[e.jsx("p",{className:"text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold",children:"Frontend (Web Application)"}),e.jsxs("p",{className:"text-xl dark:text-gray-300 indent-8 mt-2",children:["Explore our dynamic web application built with cutting-edge technologies: ",e.jsx("b",{className:"underline decoration-sky-500",children:" React.js "}),",",e.jsx("b",{className:"underline decoration-sky-500",children:" Taillwind.css "}),", ",e.jsx("b",{className:"underline decoration-sky-500",children:"Inertia.js"}),", ",e.jsx("b",{className:"underline decoration-sky-500",children:"Bootstrap"}),". Engage with intuitive user interfaces and ",e.jsx("b",{children:"seamless"})," interactions designed to enhance your experience."]})]})})]})}),e.jsx("footer",{className:"",children:e.jsx("div",{className:"grid md:md:grid-cols-2 grid-cols-1 gap-0 w-full h-auto ",children:e.jsxs("div",{className:"dark:bg-gray-800 relative h-full flex justify-center items-end p-4 col-span-2",children:[e.jsx("p",{className:"text-center text-gray-500",children:"© 2024 ISIMS. All rights reserved."}),e.jsx("p",{className:"text-center text-gray-500",children:"Designed with ❤️ by Us"})]})})}),e.jsxs("div",{ref:x,className:"fixed flex items-center justify-center bottom-4 right-4 bg-blue-500 w-20 h-20 rounded-full",children:[e.jsx("div",{className:"backTop absolute",onMouseEnter:s=>u(s.target)}),e.jsx("a",{href:"#top",children:"TOP"})]})]}),e.jsx("style",{children:`
            .initials-circle {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                background-color: #4a5568;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.2rem;
                font-weight: bold;
            }
            
            .backTop{
                width: 100px;
                height: 100px;
                background-color: #3490dc;
                border-radius: 50%;
                opacity: 0.4;
                z-index:-1;
                animation: waveScale 1s infinite alternate;
            }
            .paused {
                animation-play-state: paused;
              }
            .callout{
                position:fixed;
                width:5rem;
                height:5rem;
                color: #ffffff;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                max-width: 400px;
                text-align: center;
                background-image: url('home_mouse_icon.png');
                background-size: cover;
            }
            .scrollter{
                width:10rem;
                height:10rem;
                padding:3rem;
                left: calc(50% - 5rem);
                top: 75%;
            }
                .absolute.top-200{
                    top: 170%;
                    width: 30rem;
                }
                .preview-media{
                    width: fit-content;
                }
                .preview-media button{
                    width:3rem;
                    height:3rem;
                }
            .container{
                position: absolute;
                width:fit-content;
                top:0;
            }
            .absolute.grid{
                top:20rem;
                display:none;
                width:auto;
            }
            .someGlass{
                width: 15rem;
                height: 20rem;
                position: relative;
                background:rgb(255 255 255 / 17%);
                border-radius: 16px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(9.7px);
                -webkit-backdrop-filter: blur(3.7px);
                border: 1px solid rgba(91, 91, 91, 0.4);
                margin-left:8rem;
                margin-top:0;
                animation:slide-up 2s ease 1s 1 forwards;
            }
            .someGlass:hover{
                cursor:pointer;
            }
            .someGlass:nth-child(1){
                margin-top:-5rem;
            }
            .someGlass:nth-child(2){
                margin-top:-10rem;
            }
            .someGlass:nth-child(3){
                margin-top:-15rem;
            }
            @keyframes waveScale {
                0% {
                  transform: scale(1);
                }
                100% {
                  transform: scale(1.1);
                }
              }
    @keyframes slide-up{
form{
    margin-top:-5rem;
    width: 20rem;
    height: 30rem;
    margin-left:10rem;
}
to{
    margin-top:-1rem;
    width: 15rem;
    height: 20rem;
    margin-left:5rem;
}
    }
    .serviceDetails {
        display: block;
  position: relative;
  height: 60%;
  background: white;
    }
            `})]})},R=G;export{R as default};
