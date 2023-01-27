import React from 'react';
import './skew.css';
import dripple from './dripple.webp';
export default function Skew() {
  return (
    <div className='Skewbackround'>
        <div className='SkewContainer'>
            <div className='SkewLayer'>
             <div className='Container'>
               <LeftPanel/>
               <MiddlePanel/>
               <RightPanel/>
             </div>
            </div>
        </div>
        <Camera/>
        <ChargeSpeaker/>
    </div>
   
  )
}


function Camera(){
    return(
        <div className='Camera'>
            <div className='CameraLens'></div>
        </div>
    )
}

function ChargeSpeaker(){
    return(
        <div className='ChargeSpeaker'>
            <Speaker/>
            <Charger/>
            <Speaker/>
        </div>
    )
}

function Speaker(){
    return(
        <div className='Speaker'>
            <div className='Speakers'></div>
            <div className='Speakers'></div>
            <div className='Speakers'></div>
            <div className='Speakers'></div>
            <div className='Speakers'></div>
            <div className='Speakers'></div>
            <div className='Speakers'></div>
        </div>
    )
}

function Charger(){
    return(
        <div className='Charger'></div>
    )
}

function LeftPanel(){
    return(
        <div className='LeftPanel'>
          <p>ofsp_ce</p>
          <div className='SideNav SNtop'>
            <div className='sntChild HomeHover'><i class="fa-solid fa-house"></i> Home</div>
            <div className='sntChild'><i class="fa-solid fa-envelope"></i> Inbox</div>
            <div className='sntChild'><i class="fa-solid fa-calendar-days"></i> Shedule</div>
            <div className='sntChild'><i class="fa-solid fa-gear"></i> Settings</div>
          </div>
          <div className='SideNav SNbottom'>
            <div className='snbChild'><i class="fa-solid fa-circle-exclamation"></i> Help</div>
            <div className='snbChild'><i class="fa-solid fa-comment-dots"></i> Chat</div>
          </div>
        </div>
    )
}

function MiddlePanel(){
    return(
        <div className='MiddlePanel'>
            <div className='MiddleChild'>
           <div className='MiddleChildTop'>
            <div className='mctHeader'>
              <h4>Welcome Johnson <i class="fa-solid fa-thumbs-up"></i></h4>
              <h6>Here is your Fiteness summary</h6>
            </div>
            <div className='mctSearch'>
              <div className='Search'>Search here</div>
              <div className='SearchIcon'><i class="fa-solid fa-magnifying-glass"></i></div>
            </div>
           </div>
           <div className='MiddleChildMiddle'>
            <div className='mcmChild'>
                <div className='mcmIcon'><i class="fa-solid fa-weight-hanging"></i></div>
                <h6>Weight Training</h6>
                <p>5 sets 10 Reps</p>
            </div>
            <div className='mcmChild'>
            <div className='mcmIcon'><i class="fa-solid fa-dumbbell"></i></div>
                <h6>Dumbble workout</h6>
                <p>6 sets 10 Reps</p>
            </div>
            <div className='mcmChild'>
            <div className='mcmIcon'><i class="fa-solid fa-mitten"></i></div>
                <h6>Heavy bag hit</h6>
                <p>30 minutes</p>
            </div>
            <div className='mcmChild'>
            <div className='mcmIcon'><i class="fa-solid fa-carrot"></i></div>
                <h6>1780 kcal</h6>
                <p>6 meal's day</p>
            </div>
           </div>
           <div className='MiddleChildBottom'>
             <img src={dripple} alt="dripple" />
           </div>
           <div className='MiddleChildFooter'>
            <p className='schedText'>Schedule</p>
            <div className='Schedule'>
             <div className='sHead'>
                 <div className='SheadingB'>WORKOUT</div>
                 <div className='SIcon'><i class="fa-solid fa-ellipsis"></i></div>
             </div>
             <h6>Body workout</h6>
             <p>7 July</p>
            </div>
            <div className='Schedule'>
            <div className='sHead'>
                 <div className='SheadingR'>CARDIO</div>
                 <div className='SIcon'><i class="fa-solid fa-ellipsis"></i></div>
             </div>
             <h6>Running Challenge</h6>
             <p>100 Days</p>
            </div>
            <div className='Schedule'>
            <div className='sHead'>
                 <div className='SheadingG'>FOOD</div>
                 <div className='SIcon'><i class="fa-solid fa-ellipsis"></i></div>
             </div>
             <h6>High Protein diet</h6>
             <p>120 cal</p>
            </div>
           </div>
        </div>
        </div>
    )
}

function RightPanel(){
    return(
        <div className='RightPanel'>
         <div className='RPtop'>
            <div className='RPtopchild'>
                <div className='rptChild1'><i class="fa-brands fa-youtube"></i></div>
                <div className='rptChild2'>
                    <h4>Jonathan jones</h4>
                    <p>Fiteness model</p>
                </div>
            </div>
            <p className='Webinar'>Webinar</p>
            <h2 className='h2'>Stay Healthy <br></br> and fit,Gain more <br></br> Confidence</h2>
         </div>
         <div className='RPmiddle'>
            <div className='rpmTop'>
                <div className='rpmt1'>Participants</div>
                <div className='rpmt2'><i class="fa-solid fa-toggle-on"></i></div>
            </div>
            <div className='rpmMiddle'>
              <div className='rpmmChild RC1'><i class="fa-solid fa-circle-user"></i></div>
              <div className='rpmmChild RC2'><i class="fa-solid fa-circle-user"></i></div>
              <div className='rpmmChild RC3'><i class="fa-solid fa-circle-user"></i></div>
              <div className='rpmmChild RC4'>10+</div>
            </div>
            <div className='rpmBottom'>
                <h6>2 hours  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  17 April 2022</h6>
                <h6 className='h6'>Duration  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  2.00-3.00 Pm</h6>
                <div className='rpmbChild'>Join Now</div>
            </div>
         </div>
         <div className='RPbottom'>
            <div className='rpbChild'>
                <h4 className='h4'>Subscribe</h4>
                <h6 className='h6'>to our premium plan</h6>
                <p className='p'> Subscribe to premium <br></br>for more facilities</p>
                <div className='StartBtn'>Start Now</div>
                <div className='SnowMan'><i class="fa-solid fa-snowman"></i></div>
            </div>
         </div>
        </div>
    )
}













