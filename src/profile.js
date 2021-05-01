import { Link } from "react-router-dom";

import React from 'react'

export default function profile() {
    return (
        <div>
            <h1>Employee Profile</h1>
            <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                              <td>Haley Kennedy</td>
                                             <td>Senior Marketing Designer</td>
                                            <td>London</td>
                                            <td>43</td>
                                            <td>$313,500</td>
                                            <td  > <Link to="/profileedit/1"> edit profile</Link></td>
                                        </tr>
                                        <tr>
                                             <td>Tatyana Fitzpatrick</td>
                                            <td>Regional Director</td>
                                            <td>London</td>
                                            <td>19</td>
                                            <td>$385,750</td>
                                            <td  > <Link to="/profileedit/2"> edit profile</Link> </td>
                                        </tr>
                                        <tr>
                                             <td>Michael Silva</td>
                                            <td>Marketing Designer</td>
                                            <td>London</td>
                                            <td>66</td>
                                            <td>$198,500</td>
                                            <td  > <Link to="/profileedit/3"> edit profile </Link> </td>
                                        </tr>
                                        <tr>
                                            <td>Paul Byrd</td>
                                            <td>Chief Financial Officer (CFO)</td>
                                            <td>New York</td>
                                            <td>64</td>
                                            <td>$162,700</td>
                                           <td  > <Link to="/profileedit/4"> edit profile</Link> </td>
                                        </tr>
                                        <tr>
                                            <td>Airi Satou</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>33</td>
                                            <td>$162,700</td>
                                            <td  > <Link to="/profileedit/5"> edit profile </Link> </td>
                                        </tr>
                                        <tr>
                                          <td>Gloria Little</td>
                                            <td>Systems Administrator</td>
                                            <td>New York</td>
                                            <td>59</td>
                                            <td>$237,500</td>
                                            <td  > <Link to="/profileedit/6"> edit profile </Link> </td>
                                        </tr><tr>
                                            <td>Airi Satou</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>33</td>
                                            <td>$162,700</td>
                                            <td  > <Link to="/profileedit/7"> edit profile</Link> </td>
                                        </tr>
                                        <tr>
                                            <td>Brielle Williamson</td>
                                            <td>Integration Specialist</td>
                                            <td>New York</td>
                                            <td>61</td>
                                            <td>$372,000</td>      
                                            <td  > <Link to="/profileedit/8"> edit profile</Link></td>
                                        </tr>                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
        </div>
    )
}
