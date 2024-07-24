import React from 'react'
import { HiAtSymbol } from "react-icons/hi2";
import tree from "./tree.jpg"
import { GoLink } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";

export default function Resume() {
    return (
        <div style={{ margin: 20 }}>
            <header>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1>Khan Shaban</h1>
                        <h3 className='color'>GA, Adwords & Hubspot Certified Marketing Manager</h3>
                        <div style={{ display: 'flex', gap: 10 }}>
                            <p><HiAtSymbol />bmoralez210@gmail.com</p>
                            <p><GoLink />linkdin.com/-bmorale-</p>
                            <p><CiLocationOn />Melbourne,Australia</p>
                        </div>
                    </div>
                    <img src={tree} alt="tree" height="100px" width="100px" style={{ borderRadius: "50px" }} />
                </div>

                <br />
                <br />
            </header>

            <div style={{ display: 'flex', gap: "40px" }}>
                <div style={{ width: '60%' }}>
                    <p>EXPERIENCE</p>
                    <hr />
                    <p><b>Senior Digital Marketing Manager</b></p>
                    <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span className='color'>Streich</span>
                        <span style={{ display: 'flex', gap: 10 }}>
                            <p><FaCalendarAlt />2015-Ongoing</p>
                            <p><CiLocationOn /> Melbourne,Australia</p>
                        </span>
                    </p>
                    <ul>
                        <li>
                            Formed and led an SEO and Enk-buildind term to grow organic website traffic from 0 to 30k in 6 mponths
                        </li>
                        <li>
                            Created a new partnership program with local advertising agencies to improve ROI an advertising agencies to improve ROI  on advertising for all company's Clients by 82% on Average
                        </li>
                        <li>
                            Led data-driven outreach campaign to scale advertising up the number of customers to 50top-level media,resulting in over 100 local  and natoinal media mentions and publications inForbes and other
                        </li>
                    </ul>

                    <h3>Marketing Manager</h3>
                    <p><span className='color'>Bernier</span>  <span style={{ "margin": "300px" }}><FaCalendarAlt />2013-2015 <CiLocationOn />Melbourne,Australia</span></p>
                    <p>
                        Bernier consits of a decision support system for qualified health professional to quality and efficienty perform the pre-operative planning of anyboryhopedic procedure in 3 dimewnsions,using 2D image data from the patient.
                    </p>
                    <ul>
                        <li>
                            Reformed CMS to Boots content productios by 45% whiole reducing turn over from 25% to 0% in the first year.Reformed CMS to Boots content productios by 45% whiole reducing turn over from 25% to 0% in the first year.

                        </li>
                        <li>
                            Formed a BA and Data Science division within a Reformed CMS to Boots content productios by 45% whiole reducing turn over from 25% to 0% in the first year.
                        </li>
                    </ul>
                    <h3> Digital Marketing Streaingth</h3>
                    <p><span className='color'>Harvey</span>   <span style={{ "margin": "300px" }}><FaCalendarAlt />2013-2015 <CiLocationOn />Melbourne,Australia</span></p>
                    <p>
                        Harvey is  A cloud-based HR software business.
                    </p>
                    <ul>
                        <li>
                            REformed CMS to Boots content productios by 45% whiole reducing turn over from 25% to 0% in the first year.Reformed CMS to Boots content productios by 45% whiole reducing turn over from 25% to 0% in the first year.

                        </li>
                        <li>
                            Formed a BA and Data Science division within a Reformed CMS to Boots content productios by 45% whiole reducing turn over from 25% to 0% in the first year.
                        </li>
                    </ul>
                    <h3>Marketing Specialist</h3>
                    <p><span>Boyle Ltd. </span> <span style={{ "margin": "300px" }}><FaCalendarAlt />2013-2015 <CiLocationOn />Melbourne,Australia</span></p>

                    <ul>
                        <li>
                            REformed CMS to Boots content productios by 45% whiole reducing turn over from 25% to 0% in the first year.REformed CMS to Boots content productios by 45% whiole reducing turn over from 25% to 0% in the first year.
                        </li>
                        <li>
                            Created a new partnership program with local advertising agencies to improve ROI an advertising agencies to improve ROI  on advertising for all company's Clients by 82% on Average
                        </li>

                        <li>
                            Formed a BA and Data Science division within a Reformed CMS to Boots content productios by 45% whiole reducing turn over from 25% to 0% in the first year.
                        </li>
                    </ul>

                    <br />
                    <p style={{ "borderBottom": "1px solid black" }}>EDUCATION</p>
                    <p><b>Master of Arts,Digital Communication</b></p>
                    <p ><span className='color' >UNiversity of Melbourne</span>  <span style={{ "margin": "400px" }}> <FaCalendarAlt />2009-2010</span></p>

                    <p><b>BA in Marketing</b></p>
                    <p ><span className='color' >Monas University</span> <span style={{ "margin": "400px" }}><FaCalendarAlt />2009-2010</span></p>
                    <br />
                    <p style={{ "borderBottom": "1px solid black" }}>INDUSTRY EXPERTISE</p>
                    <div style={{ "display": "flex", "gap": "60px" }}>

                        <h3 className='color'>Agency</h3>
                        <h3 className='color'>
                            Healthcare
                        </h3>
                    </div>
                    <div style={{ "display": "flex", "gap": "60px" }}>
                        <h3 className='color'>
                            Traditional print india
                        </h3>
                        <h3 className='color'>
                            HR software
                        </h3>
                    </div>

                </div>

                <div style={{ width: '40%' }}>
                    <p>SUMMARY</p>
                    <hr />
                    <p>
                        Created a new partnership program with local advertising agencies to improve ROI an advertising agencies to improve ROI  on advertising for all company's Clients by 82% on Average
                        Created a new partnership program with local advertising agencies to improve ROI an advertising agencies to improve ROI  on advertising for all company's Clients by 82% on Average
                        Created a new partnership program with local advertising agencies to improve ROI an advertising agencies to improve ROI  on advertising for all company's Clients by 82% on Average
                        Created a new partnership program with local advertising agencies to improve ROI an advertising agencies to improve ROI  on advertising for all company's Clients by 82% on Average
                    </p>
                    <br />
                    <p style={{ "borderBottom": "1px solid black" }}>ACHIVEMENTS</p>
                    <div>
                        <div style={{ display: "flex" }}>
                            <p style={{ borderRadius: "100%", width: "50px", height: "50px", backgroundColor: "gray", padding: "10px", marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 256 256"><path fill="currentColor" d="M119.76 217.94A8 8 0 0 1 112 224a8.13 8.13 0 0 1-2-.24l-32-8a8 8 0 0 1-2.5-1.11l-24-16a8 8 0 1 1 8.88-13.31l22.84 15.23l30.66 7.67a8 8 0 0 1 5.88 9.7m132.69-96.46a15.89 15.89 0 0 1-8 9.25l-23.68 11.84l-55.08 55.09a8 8 0 0 1-7.6 2.1l-64-16a8.06 8.06 0 0 1-2.71-1.25l-55.52-39.64l-24.28-12.14a16 16 0 0 1-7.16-21.46l24.85-49.69a16 16 0 0 1 21.46-7.16l22.06 11l53-15.14a8 8 0 0 1 4.4 0l53 15.14l22.06-11a16 16 0 0 1 21.46 7.16l24.85 49.69a15.9 15.9 0 0 1 .89 12.21m-46.18 12.94L179.06 80h-31.82L104 122c12.66 8.09 32.51 10.32 50.32-7.63a8 8 0 0 1 10.68-.61l34.41 27.57Zm-187.54-18l17.69 8.85l24.85-49.69l-17.69-8.85ZM188 152.66l-27.71-22.19c-19.54 16-44.35 18.11-64.91 5a16 16 0 0 1-2.72-24.82a.6.6 0 0 1 .08-.08l44.86-43.51l-9.6-2.74l-50.42 14.41l-27.37 54.73l49.2 35.15l58.14 14.53Zm49.24-36.24l-24.82-49.69l-17.69 8.85l24.85 49.69Z" /></svg>
                            </p>
                            <div style={{ display: 'flex', padding: '5px' }}>
                                <p><h3>Negotation & Communication</h3>
                                    Formed a BA and Data Science division within a Reformed CMS to Boots content productios by 45% whiole reducing turn.</p>
                            </div>
                        </div>

                        <div style={{ display: "flex" }}>
                            <p style={{ borderRadius: "100%", width: "50px", height: "50px", backgroundColor: "gray", padding: "10px", marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-1.85 1.4q-.55-.275-1.125-.462t-1.225-.263l1.575-1.2l-.975-1.7l-2.475 1.05q-.55-.575-1.213-.962t-1.437-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.425.425.913.763t1.062.562q.025 1.425.588 2.675T12.1 22zm1.025-6.975q.15-.5.363-.963t.487-.887q-.275-.2-.425-.513T10.55 12q0-.625.437-1.062t1.063-.438q.35 0 .675.163t.525.437q.425-.275.875-.488t.95-.337q-.45-.8-1.25-1.288T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 .95.463 1.763t1.262 1.262M17 20l3-3l-3-3l-.7.7l1.8 1.8H14v1h4.075L16.3 19.3zm0 2q-2.075 0-3.537-1.463T12 17q0-2.075 1.463-3.537T17 12q2.075 0 3.538 1.463T22 17q0 2.075-1.463 3.538T17 22" /></svg>
                            </p>
                            <div style={{ display: 'flex', padding: '5px' }}>
                                <p><h3>Restructured a 20-person marking department</h3>
                                    Formed a BA and Data Science division within a Reformed CMS to Boots content productios by 45% whiole reducing turn.</p>
                            </div>
                        </div>

                        <div style={{ display: "flex" }}>
                            <p style={{ borderRadius: "100%", width: "50px", height: "50px", backgroundColor: "gray", padding: "10px", marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 36 36"><path fill="currentColor" d="M22 4V2.62a.6.6 0 0 0-.58-.62h-6.84a.6.6 0 0 0-.58.62V4h-4a1.09 1.09 0 0 0-1 1.07v28a1 1 0 0 0 1 .93h16a1 1 0 0 0 1-.94v-28A1.09 1.09 0 0 0 26 4Zm-1.74 21.44a1.2 1.2 0 0 1-2.15 1.07l-5.46-10.95l6 1l-2.29-4a1.2 1.2 0 1 1 2.08-1.2l4.83 8.37l-6.37-1.03Z" class="clr-i-solid clr-i-solid-path-1" /><path fill="none" d="M0 0h36v36H0z" /></svg>
                            </p>
                            <div style={{ display: 'flex', padding: '5px' }}>
                                <p><h3>40% Reduction of Churn Rate</h3>
                                    Formed a BA and Data Science division within a Reformed CMS to Boots content productios by 45% whiole reducing turn.</p>
                            </div>
                        </div >
                        <p style={{ "borderBottom": "1px solid black" }}>SKILLS</p>
                        <p style={{ "display": "flex", "gap": "15px" }}>
                            <p style={{ "borderBottom": "1px solid black", "display": "inline", "width": "" }}>Hubspot</p>
                            <p style={{ "borderBottom": "1px solid black", "display": "inline", "width": "" }}>Customer.io</p>
                            <p style={{ "borderBottom": "1px solid black", "display": "inline", "width": "" }}>Mailchimp</p>
                        </p>
                        <p style={{ "display": "flex", "gap": "15px" }}>
                            <p style={{ "borderBottom": "1px solid black", "display": "inline", "width": "" }}>Ahrefs</p>
                            <p style={{ "borderBottom": "1px solid black", "display": "inline", "width": "" }}>SEmrust</p>
                            <p style={{ "borderBottom": "1px solid black", "display": "inline", "width": "" }}>Google Adwords</p>
                        </p>
                        <p style={{ "display": "flex", "gap": "15px" }}>
                            <p style={{ "borderBottom": "1px solid black", "display": "inline", "width": "" }}>WordPress</p>
                            <p style={{ "borderBottom": "1px solid black", "display": "inline", "width": "" }}>Html</p>
                            <p style={{ "borderBottom": "1px solid black", "display": "inline", "width": "" }}>CSS</p>
                        </p>
                        <p style={{ "display": "flex", "gap": "15px" }}>
                            <p style={{ "borderBottom": "1px solid black", "display": "inline", "width": "" }}>SurferSEO</p>
                            <p style={{ "borderBottom": "1px solid black", "display": "inline", "width": "" }}>content briefs</p>
                        </p>
                        <p style={{ "display": "flex", "gap": "15px" }}>
                            <p style={{ "borderBottom": "1px solid black", "display": "inline", "width": "" }}>Ad campaign</p>
                        </p>
                        <p style={{ "borderBottom": "1px solid black" }}>LANGUAGES</p>
                        <div style={{ "display": "flex", "gap": "60px" }}> <h3>Portuguese</h3>
                            <h3>
                                Native
                            </h3>
                        </div>
                        <div style={{ "display": "flex", "gap": "60px" }}>
                            <h3>
                                English
                            </h3>
                            <h3>
                                Fully PRoficient
                            </h3>
                        </div>
                        <p style={{ "borderBottom": "1px solid black" }}>PASSIONS</p>
                        <div style={{ display: "flex" }}>
                            <p style={{ borderRadius: "100%", width: "50px", height: "50px", backgroundColor: "gray", padding: "10px", marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 64 64"><path fill="currentColor" d="M57.642 34.13a2.813 2.813 0 0 0-.343-.488c-4.105-7.481-7.799-8.649-10.767-9.585c-1.056-.333-2.054-.647-2.962-1.218c-4.398-2.768-6.365-6.5-7.947-9.5c-.213-.405-.419-.798-.625-1.174c-2.877-5.276-7.446-8.181-12.863-8.181c-1.108 0-2.252.122-3.405.36c-1.618-2.371-4.299-3.039-6.716-1.562c-2.419 1.477-3.188 4.179-2.023 6.87c-4.612 5.542-5.263 12.346-1.763 18.765c.206.377.424.766.65 1.167c1.664 2.952 3.735 6.626 3.799 12.055c.014 1.133-.229 2.211-.488 3.354c-.709 3.139-1.578 7.041 2.336 14.372c.056.293.151.57.294.83c.654 1.198 2.037 1.805 4.113 1.805c4.722 0 12.768-3.124 20.996-8.15c10.352-6.326 20.079-15.386 17.714-19.72M30.99 55.115c-.001.002-.006.002-.008.004h-.006c-3.653.694-7.167-1.343-8.69-4.729c1.816-1.891 8.241-6.897 13.161-9.475a8.648 8.648 0 0 1 2.045 4.294c.787 4.634-2.12 9.067-6.502 9.906m22.543-22.79c-4.725 0-12.771 3.124-21 8.15c-7.778 4.753-15.203 11.05-17.411 15.727c-2.299-5.204-1.674-8.038-1.054-10.781c.271-1.201.552-2.443.536-3.804c-.069-5.929-2.276-9.843-4.05-12.988a91.71 91.71 0 0 1-.639-1.142C6.68 21.552 7.368 15.5 11.853 10.446l.454-.51l-.328-.6c-.408-.751-1.544-3.324 1.036-4.899c.567-.347 1.126-.523 1.66-.523c1.058 0 2.06.727 2.75 1.994l.355.653l.72-.178a15.16 15.16 0 0 1 3.633-.462c4.749 0 8.613 2.481 11.174 7.176c.2.368.403.752.612 1.15c1.689 3.204 3.791 7.191 8.627 10.234c1.117.703 2.281 1.069 3.406 1.424c2.56.807 5.195 1.651 8.326 6.45a8.41 8.41 0 0 0-.745-.03" /></svg>
                            </p>
                            <div style={{ display: 'flex', padding: '5px' }}>
                                <p><h3>Data-driven Marketing</h3></p>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ borderRadius: "100%", width: "50px", height: "50px", backgroundColor: "gray", padding: "10px", marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M22.6 2.1c-.1-.3-.4-.6-.7-.7c-4.2-1.1-8.5.2-11.4 3.6L9.4 6.3l-2.7-.6C5.4 5.2 4 5.8 3.4 7l-2.2 3.9c-.2.3-.2.6 0 .9c.1.3.4.5.7.6l3.1.7c-.3.8-.4 1.6-.6 2.4c0 .3.1.6.3.8l3.1 3.1c.2.2.4.3.7.3h.1c.9-.1 1.7-.2 2.5-.5l.6 3c.1.3.3.6.6.7c.1.1.3.1.4.1c.2 0 .3 0 .5-.1l3.9-2.2c1.1-.6 1.7-2 1.4-3.3l-.7-2.8l1.2-1.1c3.3-2.8 4.7-7.3 3.6-11.4M7.3 8.8c-.6.8-1.2 1.6-1.6 2.4l-2.1-.5L5.1 8c.2-.4.6-.5 1.1-.4l1.7.4zM16 18.9l-2.7 1.5l-.4-2c.9-.4 1.7-1 2.4-1.6l.7-.7l.4 1.7c.2.5-.1 1-.4 1.1m.7-10.1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.6 1.5-1.5 1.5" /></svg>
                            </p>
                            <div style={{ display: 'flex', padding: '5px' }}>
                                <p><h3>Data-driven Marketing</h3></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div >
    )
}
