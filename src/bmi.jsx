import { React ,useState } from "react";
import Photo from '../img.jpg'
import "./App.css"
import {FaFacebook,FaTwitter,FaInstagram,FaLinkedin} from 'react-icons/fa'
function Bmi(){
    const [w ,setWeight] = useState(null)
    const [h ,setHeight] = useState(null)
    const [bmi, setBmi] = useState('')
    const [msg , setMsg] = useState('')
    const [warn , setwarn] = useState('')
    let calbmi = (event) => {
        event.preventDefault()
        if (w === null || h === null){
            setwarn("⚠️Enter weight and height");
        }
        else{

            let hmts = h / 100 
            let bmi= (w / (hmts * hmts))
            setBmi(bmi.toFixed(2))
            if(bmi < 18.5){
                setMsg("You are in Underweight")
            }
            else if(bmi >= 18.5 && bmi < 26){
                setMsg("You are in Normal weight")
            }
            else if(bmi >= 26 && bmi <= 30){
                setMsg("You are in Overweight")

            }
            else{
                setMsg("You are in Obese")
            }
            }
        }
    let reset = () => {window.location.reload()}
    return(
        <div> 
             <nav>
                <div className=" w-full bg-blue-500 text-white top-1">
                    <div className=" flex justify-center w-full font-semibold p-2">
                        Bmi Calculator
                    </div>
                    <div  className="flex justify-end w-full font-semibold space-x-5 p-4">
                        <div>About us</div>
                        <div>Contact us</div>
                    </div>
                </div>
            </nav>
          <div>
          <div className="w-[100%] h-screen items-center flex rounded-3xl justify-end xl:justify-end lg:justify-end">
             <img src={Photo} className="h-full w-full" alt="" />
            <div className="flex justify-end bg-transparent rounded-3xl  shadow-2xl shadow-gray-900 p-20 absolute xl:-translate-x-20 lg:-translate-x-20">
                <div className="w-full">
                <h2 className="text-2xl  font-bold text-center mt-3"> CALCULATE HERE</h2>
                <div className="font-sans "><p className="text-start mt-2 mb-2">{warn}</p></div>
                <form onSubmit={calbmi} className="z-10 mt-3">
                    <table>
                    <div>
                       <label className=" font-semibold">WEIGHT(in kgs)</label><br />
                       <input className="bg-transparent font-mono rounded-md border-2 border-blue-500" value={w} type="number" placeholder="Enter your weight" onChange={(event) => setWeight(event.target.value)}></input>
                    </div>
                    <div>
                       <label className="font-semibold">HEIGHT(in cm)</label><br />
                       <input className="bg-transparent font-mono rounded-md border-2 border-blue-500" value={h} type="number" placeholder="Enter your height" onChange={(event) => setHeight(event.target.value)}></input>
                    </div>
                    <div className="w-full border-2 border-blue-500 bg-white text-black hover:bg-blue-500 hover:text-white flex justify-center mt-3 rounded-xl font-semibold font-sans duration-500">
                      <tr>
                        <td> <button  type="submit" className="font-semibold" onSubmit={calbmi}>Submit</button></td>
                      </tr>
                    </div>
                    <div className="w-full border-2 border-blue-500 bg-white text-black hover:bg-blue-500 hover:text-white flex justify-center mt-3 rounded-xl font-semibold font-sans duration-500">
                      <tr>
                        <td> <button  type="reset" className="font-semibold"  onClick={reset}>Reset</button> </td>
                      </tr>
                    </div>
                    </table>
                </form>
                <div className="rounded-xl mt-2">
                    <h3 className=" mt-4 text-center font-semibold space-x-2 " >Your BMI is : {bmi}</h3>
                    <div className="mt-3 text-center font-semibold"> <p className=" mt-2 text-center">{msg}</p></div>
                   
            </div>
        </div>
        </div>
     </div>
     </div>
     <div className="w-full bg-blue-500 p-4 text-white">
        <div className="flex justify-center w-full font-semibold">
            Copyright©️ 2024        
        </div>
        <div className=" mt-2 flex justify-center w-full font-semibold space-x-5">    
                <FaFacebook/>
                <FaInstagram/>
                <FaLinkedin/>
                <FaTwitter/>
        </div>
     </div>
     </div>
)
}
export default Bmi 